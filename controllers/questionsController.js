import db from '../db.js';

export async function getQuestions(req, res) {
    const {id} = req.params;

    try {
        const questoes = db.collection('questoes').find({id}).toArray();
        res.send(questoes);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}