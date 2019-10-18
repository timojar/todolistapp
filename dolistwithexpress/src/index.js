const express = require('express')
const cors = require('cors')
const app = express()
const port = 8888

const generator = (base, len) => {
    return [...Array(len)]
        .map(i => base[Math.random() * base.length | 0])
        .join('');
};

const todolist = [{ taskname: "tee backend", id: Math.random().toString(36) },
{ taskname: "tee frontend", id: Math.random().toString(36) },
{ taskname: "tee git-repo", id: Math.random().toString(36) }]
app.use(cors())
app.get('/todo', (req, res) => {
    res.json({ todolist })
});
app.listen(8888, () =>
    console.log('Example app listening on port 8888! jeee'),
);


