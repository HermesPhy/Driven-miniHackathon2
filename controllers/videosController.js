import db from '../db.js';

export async function getVideos(req, res) {
    const {id} = req.params;

    try {
        const videos = db.collection('videos').find({id}).toArray();
        res.send(videos);
    } catch(e) {
        console.log(e);
        res.status(500).send('Ocorreu um erro');
    }
}