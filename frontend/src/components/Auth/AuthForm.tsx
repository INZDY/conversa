"use client";

import React, { useCallback } from "react";
import { useState } from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Input from "@/components/ui/inputs/Input";
import AuthSocialButton from "./AuthSocialButton";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook, FaLock } from "react-icons/fa";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import Button from "../ui/inputs/Button";

type Variant = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      naame: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios register
    }
    if (variant === "LOGIN") {
      //NextAuth Signin
    }
  };

  const socialAction = (action: string) => {
    console.log("disabled!");
    setIsLoading(true);
    //NextAuth Social SignIn
  };

  return (
    <div className="px-16 py-12 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg bg-white">
      <h1 className="text-center text-3xl font-bold">
        {variant === "LOGIN" ? "Log In" : "Sign Up"}
      </h1>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              icon={IoMdPerson}
              id="username"
              label="Username"
              type="username"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            icon={IoMdMail}
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            icon={FaLock}
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          {variant === "REGISTER" && (
            <Input
              icon={FaLock}
              id="confirm-password"
              label="Confirm password"
              type="confirm-password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
        </form>

        <div className="mt-6">
          <Button
            disabled={isLoading}
            fullwidth
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {variant === "LOGIN" ? "LOG IN" : "SIGN UP"}
          </Button>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2 justify-center">
          <AuthSocialButton
            icon={AiFillGoogleCircle}
            onClick={() => socialAction("google")}
          />
          <AuthSocialButton
            icon={FaFacebook}
            onClick={() => socialAction("facebook")}
          />
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          {variant === "LOGIN" ? "New to Conversa? " : "Have and Account? "}
          <span className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "LOGIN" ? "Sign Up" : "Log In"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
