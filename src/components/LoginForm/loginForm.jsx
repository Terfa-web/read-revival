"use client";

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { login } from "@/lib/actions";

const loginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);

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

export default loginForm;
