import { useMemo } from "react";
import { usePathname } from "next/navigation";
// import { HiChat } from "react-icons/hi";
// import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import useConversation from "./useConversation";
import { logout } from "@/api/auth/actions";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

export default function useRoutes() {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      //conversation route
      {
        label: "Chat",
        href: "/conversations",
        //icon: HiChat,
        active: pathname === "/conversaitons" || !!conversationId,
      },

      //User(default initial chat page) route
      //maybe change /chat later to /user (apply to all)
      {
        label: "Users",
        href: "/chat",
        //icon: HiUsers,
        active: pathname === "/chat",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => logout(),
        // icon: HiArrowLeftOnRectangle
      },
    ],
    [pathname, conversationId]
  );

  return routes;
}
