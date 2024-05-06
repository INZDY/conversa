import getProfiles from "@/api/actions/getProfiles";
import Sidebar from "@/components/sidebar/Sidebar";
import ProfileSelect from "./components/ProfileSelect";

export default async function ProfileselLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profiles = await getProfiles();
  return (
    <Sidebar>
      <div className="h-full">
        
        {children}
        <ProfileSelect items = {profiles}/>
        </div>
    </Sidebar>
  );
}