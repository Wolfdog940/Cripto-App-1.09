import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import messages from "../index";

export const LanguageProvider = ({ children }) => {
  const local = useSelector((state) => state.language.language);

  const mesagge = messages[local];

  return (
    <IntlProvider locale={local} messages={mesagge}>
      {children}
    </IntlProvider>
  );
};
