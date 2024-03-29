"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signUp } from "next-auth-sanity/client";
import { signIn } from "next-auth/react";
import { Formik, Form } from "formik";
import { InputField } from "@/components";
import Link from "next/link";
import { createAccountValidation } from "@/validation";

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const initalValues = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const CreateAccountForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showForm, setShowForm] = useState(false);

  const handleCreateAccount = async (values: FormProps) => {
    const { email, password, name } = values;
    try {
      setLoading(true);
      const user = await signUp({
        email,
        password,
        name,
      });
      setLoading(false);

      //@ts-ignore
      if (user?.error) {
        setLoading(false);
        //@ts-ignore
        setMessage({ type: "error", text: user?.error });
      } else {
        setMessage({
          type: "success",
          text: "account created. Logging in....",
        });
        await signIn("sanity-login", {
          email,
          password,
          redirect: false,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
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
    <section className="secondary__container py-8 lg:grid lg:items-center lg:py-0 lg:min-h-screen">
      <div className="lg:w-[600px] m-auto">
        <div className="grid gap-4">
          <div className="grid gap-2 text-center">
            <h1 className="uppercase">Create Account</h1>
            <p>Please provide the details below.</p>
            {message.text && <p>{message.text}</p>}
          </div>
          <Formik
            initialValues={initalValues}
            validationSchema={createAccountValidation}
            onSubmit={(values) => {
              handleCreateAccount({
                name: values.name,
                email: values.email,
                password: values.password,
              });
            }}
          >
            {({ values, errors, touched, handleChange, resetForm }) => (
              <>
                <Form>
                  <div className="grid gap-1 mb-4">
                    <InputField
                      label="name"
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={values.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    {errors.name && touched.name ? (
                      <span className="text-red-400 text-xs">
                        {errors.name}
                      </span>
                    ) : null}
                  </div>
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
                  <div className="grid gap-1 mb-4">
                    <InputField
                      label="password2"
                      type="password"
                      id="password2"
                      name="password2"
                      placeholder="Confirm Password"
                      value={values.password2}
                      onChange={handleChange}
                      error={errors.password2}
                    />
                    {errors.password2 && touched.password2 ? (
                      <span className="text-red-400 text-xs">
                        {errors.password2}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="bg-ablack text-white w-full py-4 px-6 rounded-full disabled:opacity-50 disabled:pointer-events-none"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>
                </Form>
              </>
            )}
          </Formik>
          <p className="mt-4 text-center">
            Already have an Account?{" "}
            <Link href="/auth/login" className="pb-1 border-b border-ablack">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
