import React, { useState, useEffect } from 'react';
import ClientDataService from "../services/client.service";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, CircularProgress, TablePagination, TableSortLabel, Toolbar, Typography, Checkbox, IconButton, Tooltip, FormControlLabel, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Swal from 'sweetalert2';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const headCells = [
    { id: 'timestamp', numeric: false, disablePadding: true, label: 'Criado em' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Nome' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'phone', numeric: false, disablePadding: false, label: 'Telefone' },
    { id: 'insurances', numeric: false, disablePadding: false, label: 'Seguros Selecionados' },
    { id: 'actions', numeric: false, disablePadding: false, label: 'Ações' },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected, onDeleteSelected, onFilterClick } = props;

    return (
        <Toolbar
            sx={[
                {
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                },
                numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                },
            ]}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selecionados
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Lista de Clientes
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Deletar">
                    <IconButton onClick={onDeleteSelected}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filtrar lista">
                    <IconButton onClick={onFilterClick}>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onDeleteSelected: PropTypes.func.isRequired,
    onFilterClick: PropTypes.func.isRequired,
};

const ClientTable = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('timestamp');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selected, setSelected] = useState([]);
    const [filterOpen, setFilterOpen] = useState(false);

    const [filterCriteria, setFilterCriteria] = useState({
        name: '',
        email: '',
        startDate: '',
        endDate: '',
        selectedInsurances: [],
    });

    const insuranceOptions = [
        'Seguro de Transporte de Cargas',
        'Seguro Empresarial',
        'Seguro de Lucros Cessantes',
        'Seguro Garantia',
        'Seguro de Risco de Engenharia',
        'Seguro de Risco Rural',
        'Seguro de Autos',
        'Seguro Residencial',
    ];

    const handleInsuranceChange = (event) => {
        const { name, checked } = event.target;
        setFilterCriteria((prevCriteria) => {
            const newSelectedInsurances = checked
                ? [...prevCriteria.selectedInsurances, name]
                : prevCriteria.selectedInsurances.filter((insurance) => insurance !== name);
            return { ...prevCriteria, selectedInsurances: newSelectedInsurances };
        });
    };


    const fetchClients = () => {
        setLoading(true);
        setError(null);
        ClientDataService.getAll((data) => {
            setClients(data);
            setLoading(false);
        }, (error) => {
            setLoading(false);
            if (error.code === 'PERMISSION_DENIED') {
                setError("Não foi possível obter os dados: Permissão negada.");
            } else {
                setError("Não foi possível obter os dados devido a uma falha do servidor.");
            }
        });
    };


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Deletar registro?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Deletar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                ClientDataService.delete(id)
                    .then(() => {
                        Swal.fire({
                            title: 'Deletado!',
                            text: 'O cliente foi deletado com sucesso.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        fetchClients();
                        setSelected([]);
                    })
                    .catch((e) => {
                        Swal.fire({
                            title: 'Erro!',
                            text: 'Ocorreu um erro ao deletar o cliente.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
            }
        });
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = visibleRows.map((client) => client.key);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleDeleteSelected = () => {
        Swal.fire({
            title: 'Deletar registros selecionados?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Deletar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                selected.forEach((id) => {
                    ClientDataService.delete(id).catch((e) => {
                        Swal.fire({
                            title: 'Erro!',
                            text: 'Ocorreu um erro ao deletar o cliente:' + id,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
                });
                Swal.fire('Deletado!', 'Os registros selecionados foram deletados.', 'success');
                fetchClients();
                setSelected([]);
            }
        });
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleFilterClick = () => {
        setFilterOpen(true);
    };

    const handleCloseFilter = () => {
        setFilterOpen(false);
    };

    const handleClearFilter = () => {
        setFilterCriteria({
            name: '',
            email: '',
            startDate: '',
            endDate: '',
            selectedInsurances: [],
        });

        fetchClients();

        setFilterOpen(false);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const handleApplyFilter = () => {
        setFilterOpen(false);

        const filteredClients = clients.filter(client => {
            const matchesName = client.name.toLowerCase().includes(filterCriteria.name.toLowerCase());
            const matchesEmail = client.email.toLowerCase().includes(filterCriteria.email.toLowerCase());

            const matchesStartDate = filterCriteria.startDate ? new Date(client.timestamp) >= new Date(filterCriteria.startDate) : true;
            const matchesEndDate = filterCriteria.endDate ? new Date(client.timestamp) <= new Date(filterCriteria.endDate) : true;

            const matchesInsurance = filterCriteria.selectedInsurances.length
                ? filterCriteria.selectedInsurances.some(insurance => client.insurances.includes(insurance))
                : true;

            return matchesName && matchesEmail && matchesStartDate && matchesEndDate && matchesInsurance;
        });

        setClients(filteredClients);
    };


    const visibleRows = clients
        .filter(client =>
            client.name.toLowerCase().includes(filterCriteria.name.toLowerCase()) &&
            client.email.toLowerCase().includes(filterCriteria.email.toLowerCase())
        )
        .sort((a, b) => (order === 'desc' ? (a[orderBy] < b[orderBy] ? 1 : -1) : (a[orderBy] > b[orderBy] ? 1 : -1)))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    onDeleteSelected={handleDeleteSelected} // Passa a função de deletar selecionados
                    onFilterClick={handleFilterClick} // Passa a função de filtrar
                />
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                        <Typography color="error">{error}</Typography> {/* Mensagem de erro */}
                    </Box>
                ) : (
                    <TableContainer>
                        <Table aria-labelledby="tableTitle" size="medium">
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                numSelected={selected.length}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={clients.length}
                            />
                            <TableBody>
                                {visibleRows.map((client) => {
                                    const isSelected = selected.indexOf(client.key) !== -1; // Verifica se a linha está selecionada
                                    return (
                                        <TableRow
                                            key={client.key}
                                            selected={isSelected} // Adiciona a propriedade 'selected' à linha
                                            onClick={(event) => handleClick(event, client.key)} // Permite selecionar a linha ao clicar
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isSelected}
                                                    onChange={(event) => handleClick(event, client.key)} // Lida com a seleção do checkbox
                                                    inputProps={{
                                                        'aria-labelledby': client.key, // ID para acessibilidade
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" scope="row" padding="none">
                                                {`${new Date(client.timestamp).toLocaleDateString('pt-BR', {
                                                    year: 'numeric',
                                                    month: '2-digit',
                                                    day: '2-digit'
                                                })} ${new Date(client.timestamp).toLocaleTimeString('pt-BR', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit',
                                                    hour12: false
                                                })}`}
                                            </TableCell>
                                            <TableCell>
                                                {client.name.trim()}
                                            </TableCell>
                                            <TableCell>{client.email.trim()}</TableCell>
                                            <TableCell>{client.phone.trim()}</TableCell>
                                            <TableCell>{client.insurances.join(", ")}</TableCell>
                                            <TableCell>
                                                <IconButton color="secondary" onClick={() => handleDelete(client.key)}>
                                                    <DeleteOutlinedIcon color='action' />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={clients.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => {
                        setRowsPerPage(parseInt(event.target.value, 10));
                        setPage(0);
                    }}
                />
            </Paper>

            <Dialog open={filterOpen} onClose={handleCloseFilter}>
                <DialogTitle>Filtrar Clientes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Insira os critérios de filtragem abaixo:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Nome"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={filterCriteria.name}
                        onChange={handleFilterChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={filterCriteria.email}
                        onChange={handleFilterChange}
                    />
                    <TextField
                        margin="dense"
                        name="startDate"
                        label="Data de Início"
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={filterCriteria.startDate}
                        onChange={handleFilterChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        margin="dense"
                        name="endDate"
                        label="Data de Fim"
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={filterCriteria.endDate}
                        onChange={handleFilterChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <DialogContentText>
                        Seguros:
                    </DialogContentText>
                    <List>
                        {insuranceOptions.map((insuranceOption) => (
                            <ListItem key={insuranceOption}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={filterCriteria.selectedInsurances.includes(insuranceOption)}
                                            onChange={handleInsuranceChange}
                                            name={insuranceOption}
                                            color="primary"
                                        />
                                    }
                                    label={insuranceOption}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <DialogActions>
                        <Button onClick={handleCloseFilter} color="action">
                            Cancelar
                        </Button>
                        <Button onClick={handleClearFilter} color="action">
                            Limpar
                        </Button>
                        <Button onClick={handleApplyFilter} color="primary">
                            Aplicar
                        </Button>
                    </DialogActions>
                </DialogContent>

            </Dialog>
        </Box>
    );
};

export default ClientTable;
