import { type Message, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<Message | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, Message>;
  currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<Message | undefined> {
    return this.messages.get(id);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();