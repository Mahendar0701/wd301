import React from "react";
// Just import the file
import SigninForm from "./SigninForm";
import { useTranslation } from "react-i18next";

const Signin: React.FC = () => {
  // And use it after the h1 tag
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t("Signin")}
        </h1>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
