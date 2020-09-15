import {Server} from './chatbot/server';
require('dotenv').config();


const server = new Server({
    secret:  process.env.SIGNING_SECRET,
    token:   process.env.BOT_TOKEN,
    port:    process.env.PORT
});

server.start();