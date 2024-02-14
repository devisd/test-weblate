import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <div>
        <button
        onClick={() => {
          changeLanguage("en");
        }}
      >
        Change Locale to English
      </button>
      <button
        onClick={() => {
          changeLanguage("pl");
        }}
      >
        Change Locale to Polish
      </button>
      <button
        onClick={() => {
          changeLanguage("ru");
        }}
      >
        Change Locale to Russian
      </button>
      <button
        onClick={() => {
          changeLanguage("uk");
        }}
      >
        Change Locale to Ukrainian
      </button>
      </div>
    </div>
  );
}

export default App;
