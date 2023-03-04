import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from 'i18next';

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: localStorage.getItem('i18nextLng') || 'en',
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      const language = action.payload;
      state.language = language;
      localStorage.setItem('i18nextLng', language);
      i18n.changeLanguage(language);
    },
    loadTranslations: (state, action) => {
      const { language, namespace, translations } = action.payload;
      localStorage.setItem(`${language}-${namespace}`, translations);
      i18n.reloadResources(language, namespace);
    },
  }
});

export const { setLanguage, loadTranslations } = languageSlice.actions;

export const selectLanguage = (state:any) => state.language.language;

export default languageSlice.reducer;