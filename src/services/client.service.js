// client.service.js
import { ref, push, update, remove, onValue, set } from "firebase/database";
import database from "../firebase";

const dbRef = ref(database, "/client");

class ClientDataService {
    getAll(callback) {
        onValue(dbRef, (snapshot) => {
            const clients = [];
            snapshot.forEach((childSnapshot) => {
                const client = {
                    key: childSnapshot.key, // Obtém a chave do cliente
                    ...childSnapshot.val(), // Obtém os dados do cliente
                };
                clients.push(client);
            });
            callback(clients);
        }, (error) => {
            console.error("Error fetching clients:", error);
        });
    }

    create(client) {
        return push(dbRef, client);
    }

    update(key, value) {
        const clientRef = ref(database, `/client/${key}`);
        return update(clientRef, value);
    }

    delete(key) {
        const clientRef = ref(database, `/client/${key}`);
        return remove(clientRef);
    }

    deleteAll() {
        return remove(dbRef);
    }
}

export default new ClientDataService();
