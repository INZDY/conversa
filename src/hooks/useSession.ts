import { createSupabaseBrowserClient } from "@/backend/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function useSession() {
  const [currentSession, setCurrentSession] = useState<User | null>(null);

  useEffect(() => {
    async function getSession() {
      try {
        const supabase = createSupabaseBrowserClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();

        return setCurrentSession(user);
      } catch (error: any) {
        console.log("Error retrieving current user", error);
      }
    }
    getSession();
  }, []);

  return currentSession;
}
