import { createSupabaseBrowserClient } from "@/backend/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function useSession() {
  const [currentSession, setCurrentSession] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    supabase.auth.getUser().then((session) => {
      setCurrentSession(session.data.user)
    })
  }, []);

  return currentSession;
}
