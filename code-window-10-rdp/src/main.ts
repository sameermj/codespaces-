// src/main.ts

import { createServer } from 'http';
import { Server } from 'socket.io';
import { RDPConfig } from './types';

const PORT = process.env.PORT || 3000;

const rdpConfig: RDPConfig = {
    host: 'localhost',
    port: 3389,
    username: 'user',
    password: 'password',
};

const server = createServer();
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('rdp-connect', () => {
        // Logic to handle RDP connection using rdpConfig
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});