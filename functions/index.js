const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const express = require("express");
const cors = require("cors");

const router = express();

router.use(cors({ origin: true }));

router.get("/course/:id", async (req, res) => {
  const toy = await admin
    .firestore()
    .collection("courses")
    .doc(req.params.id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return { id: doc.id, data: doc.data() };
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(toy);
});

/* router.get("/courses", (req, res) => {
  const lista = [];
  const db = admin.firestore();
  db.collection("courses")
    .get()
    .then((querySnapshot) => {
      let promises = [];
      for (let course of querySnapshot.docs) {
        lista.push({ id: course.id, data: course.data(), examples: [] });
        promises.push(course.ref.collection("examples").get());
      }
      return Promise.all(promises);
    })
    .then((data) => {
      lista.forEach((course, index) => {
        let dataSource = data[index];
        dataSource.forEach((example) => {
          course.examples.push({ id: example.id, data: example.data() });
        });
      });
      res.send(lista);
    });
}); */

router.get("/courses", async (req, res) => {
  const courses = await admin
    .firestore()
    .collection("courses")
    .get();
  var lista = [];

  courses.docs.forEach((doc) => {
    lista.push({ id: doc.id, data: doc.data(), examples: [] });
  });
  res.send(lista);
});

router.post("/course", async (req, res) => {
  const toy = await admin
    .firestore()
    .collection("courses")
    .add(req.body)
    .then((docRef) => {
      return docRef.id;
    });
  res.send(toy);
});

router.put("/course/:id", async (req, res) => {
  const toy = await admin
    .firestore()
    .collection("courses")
    .doc(req.params.id)
    .update(req.body)
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(toy);
});

router.delete("/course/:id", async (req, res) => {
  const toy = await admin
    .firestore()
    .collection("courses")
    .doc(req.params.id)
    .delete();
  res.send(toy);
});

exports.courses = functions.https.onRequest(router);
