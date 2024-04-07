"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import React from "react";
import { Span } from "next/dist/trace";

interface InputProps {
  icon: IconType;
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  password?: string;
}

type InputType = "username" | "email" | "password" | "confirmPassword";
const validationRules: Record<InputType, object> = {
  username: {
    required: { value: true, message: "Username is required" },
    minLength: {
      value: 5,
      message: "Username must be between 5-15 characters",
    },
    maxLength: {
      value: 15,
      message: "Password must be between 5-15 characters",
    },
  },
  email: {
    required: { value: true, message: "Email is required" },
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Email format is incorrect",
    },
  },
  password: {
    required: { value: true, message: "Password is required" },
    minLength: {
      value: 8,
      message: "Password must be between 8-20 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be between 8-20 characters",
    },
  },
  confirmPassword: {},
};

function getValidation(type: InputType): object {
  return validationRules[type] || {};
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  label,
  id,
  type,
  register,
  errors,
  disabled,
  password,
}) => {
  return (
    <div>
      <div className="flex items-center h-12  bg-gray-100 sm:rounded-lg border">
        <div className="px-4 opacity-50">
          <Icon className="size-4" />
        </div>
        <div>
          {id === "confirmPassword" ? (
            <input
              id={id}
              placeholder={label}
              type={type}
              autoComplete={id}
              disabled={disabled}
              {...register(id, {
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
                validate: (value) =>
                  value === password || "Passwords must match",
              })}
              className={clsx(
                `bg-transparent
            form-input
            w-full
            border-0
            focus:ring-0`,
                errors[id] && "focus:ring-rose-500",
                disabled && "opacity-50 cursor-default"
              )}
            />
          ) : (
            <input
              id={id}
              placeholder={label}
              type={type}
              autoComplete={id}
              disabled={disabled}
              {...register(id, getValidation(id as InputType))}
              className={clsx(
                `bg-transparent
            form-input
            w-full
            border-0
            focus:ring-0`,
                errors[id] && "focus:ring-rose-500",
                disabled && "opacity-50 cursor-default"
              )}
            />
          )}
        </div>
      </div>
      <div>
        {errors[id] && (
          <span className="text-red-500 text-sm">
            {errors[id]?.message as string}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
