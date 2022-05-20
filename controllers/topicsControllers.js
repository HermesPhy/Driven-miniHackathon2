import db from "../db.js";

async function getTopics(req, res) {
    try {
        const topics = await db.collection("topicos").find({}).toArray();
        res.send(topics);
    } catch (e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar os tópicos.", e);
    }
}


export { getTopics };