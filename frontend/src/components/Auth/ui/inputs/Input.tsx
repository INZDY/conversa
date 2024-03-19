"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import React from "react";

interface InputProps {
  icon: IconType;
  label: string;
  id: string;
  type: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

type InputType = "username" | "email" | "password";
const validationRules: Record<InputType, object> = {
  username: { required: { value: true, message: "Username is required" } },
  email: {
    required: { value: true, message: "Email is required" },
    pattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  password: {
    required: { value: true, message: "Password is required" },
    minLength: 8,
    maxLength: 20,
  },
};

function getValidation(type: InputType): object {
  return validationRules[type] || {};
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  console.log(errors.root?.message);
  return (
    <div className="flex items-center h-12  bg-gray-100 sm:rounded-lg border">
      <div className="px-4 opacity-50">
        <Icon className="size-4" />
      </div>
      <div>
        <input
          id={id}
          placeholder={label}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required: true })}
          // {...register(id, getValidation("username"))}
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
      </div>
      <p>{errors.root?.message || "None"}</p>
    </div>
  );
};

export default Input;
