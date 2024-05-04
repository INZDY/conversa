import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/backend/actions/getConversations";
import getSession from "@/backend/actions/getSession";
import { redirect } from "next/navigation";

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

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
