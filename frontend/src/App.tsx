import Header from "./components/header";
import CodeContainer from "./components/codeContainer";
import Background from "./components/background";
import Selections from "./components/selections";
import { useState } from "react";
import { languageTypes } from "./types/languageTypes";

function App() {
  const [inputLanguage, setInputLanguage] = useState<
    undefined | languageTypes
  >();
  const [convertedLanguage, setConvertedLanguage] = useState<
    undefined | languageTypes
  >();
  return (
    <>
      <Background>
        <>
          <Header />
          <div className="d-flex w-100 justify-content-between">
            <Selections
              text={"Input Language"}
              selectedLanguage={inputLanguage}
              setSelectedLanguage={setInputLanguage}
            />
            <Selections
              text={"Converted Language"}
              selectedLanguage={convertedLanguage}
              setSelectedLanguage={setConvertedLanguage}
            />
          </div>
          <CodeContainer />
        </>
      </Background>
    </>
  );
}

export default App;
