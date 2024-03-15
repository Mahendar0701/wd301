import React from "react";
import { useTranslation } from "react-i18next";

const NotfoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>404</h1>
      <h1>{t("PageNotFound")}</h1>
      <button
        id="backToHomeButton"
        className="px-3 py-1 my-3 bg-gray-200 hover:bg-gray-300 rounded"
      >
        <a href="/home">Back to home</a>
      </button>
    </div>
  );
};

export default NotfoundPage;
