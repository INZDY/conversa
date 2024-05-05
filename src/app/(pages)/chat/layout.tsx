import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/backend/actions/getConversations";
import getSession from "@/backend/actions/getSession";
import { redirect } from "next/navigation";
import getContacts from "@/backend/actions/getContacts";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await getSession();
  if (!sessionData) {
    return redirect("/");
  }

  const conversations = await getConversations();
  const users = await getContacts();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList 
        users={users}
        initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
