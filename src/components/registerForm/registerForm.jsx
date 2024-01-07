"use client";

import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { register } from "@/lib/actions";

const registerForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default registerForm;
