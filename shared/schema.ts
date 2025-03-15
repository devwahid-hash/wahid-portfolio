import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
});

export const insertMessageSchema = createInsertSchema(contactMessages);

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof contactMessages.$inferSelect;
