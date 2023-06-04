"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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

  const handleCreateAccount = async (values: FormProps) => {
    const { email, password, name } = values;
    try {
      setLoading(true);

      const user = await signUp({
        email,
        password,
        name,
      });

      console.log(user);

      setLoading(false);
      // setMessage({ type: 'success', text: response.data.message });

      await signIn("sanity-login", {
        email,
        password,
        redirect: false,
      });
      // setTimeout(() => {
      //   router.push("/");
      // }, 2000);
    } catch (error: any) {
      setLoading(false);
      console.log(error);

      // setMessage({ type: 'error', text: error.response.data.message });
    }
  };

  return (
    <section className="secondary__container py-16 lg:grid lg:items-center lg:h-screen">
      <div className="lg:w-[800px] m-auto">
        {loading && <span>Loading...</span>}
        <div className="grid gap-4">
          <h1 className="uppercase">Create Account</h1>
          <p>Please provide the details below.</p>
          {message.text && <p className="my-4">{message.text}</p>}
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
                    className="bg-ablack text-white w-full py-4 px-6 rounded-full lg:p-6"
                    disabled={loading}
                  >
                    Create Account
                  </button>
                </Form>
              </>
            )}
          </Formik>
          <p className="mt-4">
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
