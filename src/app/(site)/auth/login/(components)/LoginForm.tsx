"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signUp } from "next-auth-sanity/client";
import { signIn } from "next-auth/react";
import { Formik, Form } from "formik";
import { InputField } from "@/components";
import Link from "next/link";
import { loginValidation } from "@/validation";

interface FormProps {
  email: string;
  password: string;
}

const initalValues = {
  email: "",
  password: "",
};

export const LoginForm = ({ csrfToken }: { csrfToken: string | undefined }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showForm, setShowForm] = useState(false);

  const handleLogin = async (values: FormProps) => {
    const { email, password } = values;
    try {
      setLoading(true);
      const response = await signIn("sanity-login", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        setLoading(false);
        setMessage({ type: "error", text: response.error });
      } else {
        router.push("/");
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      setMessage({ type: "error", text: error.error });
    }
  };

  useEffect(() => {
    if (!showForm) {
      setShowForm(true);
    }
  }, [showForm]);

  if (!showForm) return null;

  return (
    <section className="secondary__container py-8 lg:grid lg:items-center  lg:py-0 lg:min-h-screen">
      <div className="lg:w-[600px] m-auto">
        <div className="grid gap-4">
          <div className="grid gap-2 text-center">
            <h1 className="uppercase">Login</h1>
            <p>Please provide the details below.</p>
            {message.text && <p>{message.text}</p>}
          </div>
          <Formik
            initialValues={initalValues}
            validationSchema={loginValidation}
            onSubmit={(values) => {
              handleLogin({
                email: values.email,
                password: values.password,
              });
            }}
          >
            {({ values, errors, touched, handleChange, resetForm }) => (
              <>
                <Form method="post" action="/api/auth/callback/sanity-login">
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                  />
                  <div className="grid gap-1 mb-4">
                    <InputField
                      label="email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    {errors.email && touched.email ? (
                      <span className="text-red-400 text-xs">
                        {errors.email}
                      </span>
                    ) : null}
                  </div>
                  <div className="grid gap-1 mb-4">
                    <InputField
                      label="password"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      error={errors.password}
                    />
                    {errors.password && touched.password ? (
                      <span className="">{errors.password}</span>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    className="bg-ablack text-white w-full py-4 px-6 rounded-full disabled:opacity-50 disabled:pointer-events-none"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </Form>
              </>
            )}
          </Formik>
          <p className="mt-4 text-center">
            Don’t have an Account?{" "}
            <Link
              href="/auth/create-account"
              className="pb-1 border-b border-ablack"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
