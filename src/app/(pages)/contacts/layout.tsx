import getProfiles from "@/api/actions/getProfiles";
import Sidebar from "@/components/sidebar/Sidebar";
import ContactList from "@/components/contacts/ContactList";
import getContacts from "@/api/actions/getContacts";



export default async function ContactLayout({
    children
}:{
    children: React.ReactNode;
}) {
    const contacts = await getContacts();
    return(
        <Sidebar>
            <div className="h-full">
                <ContactList items = {contacts}/>
                {children}
            </div>
        </Sidebar>
    )
    
};