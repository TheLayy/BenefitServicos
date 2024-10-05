import { ref, push, update, remove, onValue, set } from "firebase/database";
import database from "../firebase";

const dbRef = ref(database, "/client");

class ClientDataService {
    getAll(callback, errorCallback) {
        onValue(dbRef, (snapshot) => {
            const clients = [];
            snapshot.forEach((childSnapshot) => {
                const client = {
                    key: childSnapshot.key,
                    ...childSnapshot.val(),
                };
                clients.push(client);
            });
            callback(clients);
        }, (error) => {
            errorCallback(error);
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
