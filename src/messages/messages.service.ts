import { MessagesRepository } from './messages.repository';

export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  async findAll() {
    return this.messagesRepository.findAll();
  }

  async create(message: string) {
    return this.messagesRepository.findOne(message);
  }
}
