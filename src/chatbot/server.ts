import { webClient } from './utils/web-client';
import express from 'express';
import { createEventAdapter } from '@slack/events-api';
import { scheduleMessage, sendMessage } from './utils/messages';
import { addChannel, inviteUserToChannel } from './utils/channel';
import SlackEventAdapter from '@slack/events-api/dist/adapter';
import {executor} from './reader';

export interface ServerContext {
  secret: string;
  token: string;
  port: string;
}

export class Server {
  private context: ServerContext;
  private slackEvents: SlackEventAdapter;
  private server: express.Express;
  private botId : string;

  constructor(context: ServerContext) {
    this.context = context;
    this.init();
  }

  init() {

    this.server = express();
    this.slackEvents = createEventAdapter(this.context.secret);

    this.server.use(this.slackEvents.expressMiddleware());
    this.server.use(express.json());
    
    this.registerHooks();

  }

  registerHooks() {

    this.slackEvents.on('message', async (event) => {
      this.parse(event);
      });
    
    this.slackEvents.on('app_mention', async (event) => {
      this.parse(event);
  });
  }
parse(event: any){
  const result = executor.evaluate(event.text);
  if(result instanceof Error){
    console.log(result.message);
    
  }else{
    result.eval();
  }
}


  async start() {
    const data = await webClient.auth.test({
      token: process.env.BOT_TOKEN
    });
    if (!data.ok) {
      throw new Error('OAuth token of the bot is not valid');
    }
    this.botId = data?.user_id as string;
    this.server.listen(this.context.port, () => {
      console.log(`just started bot with id ${this.botId}`)
      console.log(`Listens on port ${this.context.port}`);
    })
  }
}
