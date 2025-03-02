import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const conStr = "mongodb+srv://bhanudova03:k9rKbUp7kmBEZ4Bz@ecommerce-ui.zonik.mongodb.net/";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
    res.send(`
    <div>
        <h2>Welcome To Ecommerce Database</h2>
        <a href="http://127.0.0.1:5000/products">Products API<a/>
    </div>
    `)
});

app.get("/products", async (req, res) => {
    try {
        const client = await MongoClient.connect(conStr);
        const database = client.db("landing-page");
        const documents = await database.collection("products").find({}).toArray();
        res.send(documents);
    } catch (error) {
        res.status(500).send({ error: "Database connection failed" });
    }
});

app.listen(5000, () => {
    console.log(`Server Started: http://127.0.0.1:5000`);
});
