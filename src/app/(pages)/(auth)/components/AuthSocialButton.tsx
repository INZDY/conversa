import { IconType } from "react-icons";
import React from "react";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className=""
    >
      <Icon className="size-8"/>
    </button>
  );
};

export default AuthSocialButton;
