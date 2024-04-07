import React from "react";
import { logout } from "../api/auth/actions";

export default function SignOut() {
  return (
    <form action={logout}>
      <button>SignOut</button>
    </form>
  );
}
