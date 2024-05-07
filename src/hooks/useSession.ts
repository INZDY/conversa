import { createSupabaseBrowserClient } from "@/backend/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function useSession() {
  const [currentSession, setCurrentSession] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const getSession = async () => {
      const session = await supabase.auth.getUser();
      setCurrentSession(session.data.user);
    };

    getSession();
  }, []);

  return currentSession;
}
