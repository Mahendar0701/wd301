/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useCommentsState } from "../../context/comment/context";

import { useMembersState } from "../../context/members/context";

import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";
import { useTranslation } from "react-i18next";

const locales = {
  en: enUS,
  es: es,
  // Add more locales as needed
};

const formatDate1 = (date, locale) => {
  return format(date, "dd/MM/yyyy", { locale: locales[locale] });
};
const formatDate2 = (date, locale) => {
  return format(date, "MM/dd/yyyy", { locale: locales[locale] });
};

const CommentList = () => {
  const { t } = useTranslation();
  const [use24HrFormat, setUse24HrFormat] = useState(true);
  const commentState = useCommentsState();
  const memberState = useMembersState();

  const { comments, isLoading, isError, errorMessage } = commentState;
  console.log(comments);
  const getUserName = (userid: number) => {
    const username = memberState?.Members?.filter(
      (member) => member.id === userid
    )?.[0];
    return username?.name;
  };

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const toggleTimeFormat = () => {
    setUse24HrFormat(!use24HrFormat);
  };

  const Date_formater = (isoDate: string, use24HrFormat: boolean) => {
    const dateObj = new Date(isoDate);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    let hours = String(dateObj.getHours()).padStart(2, "0");
    let minutes = String(dateObj.getMinutes()).padStart(2, "0");
    let period = "";

    if (!use24HrFormat) {
      period = hours >= 12 ? "PM" : "AM";
      hours = String(parseInt(hours, 10) % 12 || 12);
      minutes = String(minutes);
    }

    return `${day}-${month}-${year} ${hours}:${minutes} ${period}`;
  };

  return (
    <>
      <h1 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
        {t("Comments")}:
      </h1>
      {/* Toggle button */}
      <label
        htmlFor="timeFormatToggle"
        className="cursor-pointer relative flex items-center"
      >
        <input
          type="checkbox"
          id="timeFormatToggle"
          checked={use24HrFormat}
          onChange={toggleTimeFormat}
          className="sr-only"
        />
        <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner flex items-center">
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
              use24HrFormat ? "translate-x-0" : "translate-x-6"
            } transition-transform duration-200 ease-in-out`}
          />
        </div>
        <span className="ml-2 text-gray-600 font-medium">
          {use24HrFormat ? "24 hr" : "12 hr"}
        </span>
      </label>

      {/* comments */}
      {comments.map((comment) => (
        <div key={comment.createdAt} className="comment flex justify-between">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {getUserName(comment.owner)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {Date_formater(comment.createdAt, use24HrFormat)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {comment.description}
          </h5>
        </div>
      ))}
    </>
  );
};

export default CommentList;
