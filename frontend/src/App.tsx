import Header from "./components/header";
import CodeContainer from "./components/codeContainer";
import Background from "./components/background";
import Selections from "./components/selections";
import { useState } from "react";
import { languageTypes } from "./types/languageTypes";
import ConvertButton from "./components/convertButton";

function App() {
  const [inputLanguage, setInputLanguage] = useState<
    undefined | languageTypes
  >();
  const [convertedLanguage, setConvertedLanguage] = useState<
    undefined | languageTypes
  >();

  const [inputCodes, setInputCodes] = useState<undefined | string>(``);
  const [convertedCodes, setConvertedCodes] = useState<undefined | string>(``);
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
          <div className="editor-area">
            <CodeContainer
              codes={inputCodes}
              setCodes={setInputCodes}
              languageType={inputLanguage?.language}
            />
            <ConvertButton
              inputLanguage={inputLanguage?.displayName}
              convertedLanguage={convertedLanguage?.displayName}
              inputCodes={inputCodes}
              setConvertedCodes={setConvertedCodes}
            />
            <CodeContainer
              codes={convertedCodes}
              setCodes={setConvertedCodes}
              isDisabled={true}
              languageType={convertedLanguage?.language}
            />
          </div>
        </>
      </Background>
    </>
  );
}

export default App;
