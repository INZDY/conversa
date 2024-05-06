import React from "react";
import { logout } from "../backend/auth/actions";

export default function SignOut() {
  return (
    <form action={logout}>
      <button>SignOut</button>
    </form>
  );
}
