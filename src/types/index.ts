import { Conversation, Message, Profile } from "@prisma/client";

export type FullMessageType = Message & {
  sender: Profile;
  seen: Profile[];
};

export type FullConversationType = Conversation & {
  people: Profile[];
  messages: FullMessageType[];
};
