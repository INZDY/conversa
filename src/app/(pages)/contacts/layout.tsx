import Sidebar from "@/components/sidebar/Sidebar";
import ContactList from "@/app/(pages)/contacts/components/ContactList";
import getContacts from "@/backend/actions/getContacts";

export default async function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contacts = await getContacts();
  return (
    <Sidebar>
      <div className="h-full">
        <ContactList items={contacts} />
        {children}
      </div>
    </Sidebar>
  );
}
