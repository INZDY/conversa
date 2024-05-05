"use client";

import React, { Provider, useCallback } from "react";
import { useState } from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Input from "@/components/Input";
import AuthSocialButton from "./AuthSocialButton";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub, FaLock } from "react-icons/fa";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import Button from "../../../../components/Button";
import { login, signup } from "../../../../backend/auth/actions";
import OAuthLogin from "../../../../backend/auth/OAuth";
import toast from "react-hot-toast";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
    reset();
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    control,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    setIsLoading(true);

    if (variant === "REGISTER") {
      // console.log("Trying to Signup");
      toast.loading("Signing up...");

      //signup & parse response
      const result = await signup(data);
      const { error } = JSON.parse(result);

      toast.dismiss();

      //show message
      if (error?.message) {
        toast.error(error.message);
      } else {
        toast.success("Check your inbox to confirm registration");
        toggleVariant();
      }
    }
    if (variant === "LOGIN") {
      // console.log("Trying to Login");
      toast.loading("Logging in...");

      //login & parse response
      const result = await login(data);
      const { error } = JSON.parse(result);

      toast.dismiss();

      //show message
      if (error?.message) {
        toast.error(error.message);
      } else {
        toast.success("Login successful");
      }
    }

    setIsLoading(false);
  };

  const socialAction = async (oauthProvider: string) => {
    setIsLoading(true);

    //OAuth Social SignIn
    toast.loading("Signing in...");
    const result = await OAuthLogin(oauthProvider);

    //parse response
    const { error } = JSON.parse(result);

    //show message
    if (error?.message) {
      toast.error(error.message);
    } else {
      toast.success("Succesful");
    }
    setIsLoading(false);
  };

  return (
    <div className="px-16 py-12 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg bg-white">
      <h1 className="text-center text-3xl font-bold">
        {variant === "LOGIN" ? "Log In" : "Sign Up"}
      </h1>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <div>
              <Input
                icon={IoMdPerson}
                id="username"
                label="Username"
                type="username"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            </div>
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
              id="confirmPassword"
              label="Confirm password"
              type="password"
              register={register}
              errors={errors}
              disabled={isLoading}
              password={getValues("password")}
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
            icon={FaGithub}
            onClick={() => socialAction("github")}
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
