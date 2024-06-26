import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.findAll();

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(message: string) {
    const messages = await this.findAll();
    const randomId = Math.floor(Math.random() * 999);

    messages[randomId] = { id: randomId, content: message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
