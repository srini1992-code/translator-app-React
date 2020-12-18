import React, { useState } from "react";
import "./styles.css";
import Field from "./components/field";
import Languages from "./components/language";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <h2 class="title">Translator App</h2>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
