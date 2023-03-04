import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@material-ui/core";

import { setLanguage, selectLanguage } from "../store/localization-slice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const { i18n } = useTranslation();

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    dispatch(setLanguage(event.target.value as string));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div>
      <Select
        value={i18n.language}
        className="font-['Montserrat']"
        onChange={handleChange}
      >
        <MenuItem className="font-['Montserrat']" value="en">
          En
        </MenuItem>
        <MenuItem className="font-['Montserrat']" value="ua">
          Ua
        </MenuItem>
      </Select>
    </div>
  );
};

export default LanguageSelector;
