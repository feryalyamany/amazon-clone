const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const app = express();



app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
 
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);


//http://127.0.0.1:5001/clone-b52ab/us-central1/api