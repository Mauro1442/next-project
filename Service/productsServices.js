import firebase from "../Config/firebase";

export async function getAllProducts() {

  const querySnapshot = await firebase.db
    .collection("products")
    .orderBy("name")
    .get();
  return querySnapshot.docs;
}
export async function getByIdProducts(id) {
  return await firebase.db.doc("products/" + id).get();
}
export async function update(id, data) {
  return await firebase.db.doc("products/" + id).set(data);
}
