import firebase from "../firebase/firebase";

const db = firebase.ref("/loads");

class FirebaseDataService{ 
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }

}

export default new FirebaseDataService();