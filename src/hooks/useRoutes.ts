import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat,HiIdentification } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import useConversation from "./useConversation";
import { logout } from "@/backend/auth/actions";

export default function useRoutes() {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      //conversation route
      {
        label: "Chat",
        href: "/chat",
        icon: HiChat,
        active: pathname === "/chat" || !!conversationId,
      },

      //User(default initial chat page) route
      //maybe change /chat later to /user (apply to all)
      {
        label: "Users",
        href: "/contacts",
        icon: HiUsers,
        active: pathname === "/contacts",
      },
      {
        label: "Users",
        href: "/profilesel",
        icon: HiIdentification,
        active: pathname === "/profilesel",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => logout(),
        icon: HiArrowLeftOnRectangle,
      },
      
    ],
    [pathname, conversationId]
  );

  return routes;
}
