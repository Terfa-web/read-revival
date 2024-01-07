"use client";

import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";

import { login } from "@/lib/actions";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />

      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link className={styles.register} href="/register">
        {" Don't have an  account?"}
        <b className={styles.registerLink}>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
