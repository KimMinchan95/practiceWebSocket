const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);

const WebSocket = require('ws');

const socket = new WebSocket.Server({
    port: 8081
});

socket.on('connection', (ws, req) => {
    ws.on('message', (msg) => {
        console.log('클라이언트가 말합니다 : ' + msg);
        ws.send('서버에서 메시지를 보냅니다')
    });
});
