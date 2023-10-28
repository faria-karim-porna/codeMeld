import Header from "./components/header";
import CodeContainer from "./components/codeContainer";
import Background from "./components/background";
import Selections from "./components/selections";
import { useMemo, useState } from "react";
import { languageTypes } from "./types/languageTypes";
import ConvertButton from "./components/convertButton";
import { Utility } from "./utils/utility";
import { useDeviceOrientation } from "./hooks/useDeviceOrientation";

function App() {
  const [inputLanguage, setInputLanguage] = useState<
    undefined | languageTypes
  >();
  const [convertedLanguage, setConvertedLanguage] = useState<
    undefined | languageTypes
  >();

  const [inputCodes, setInputCodes] = useState<undefined | string>(``);
  const [convertedCodes, setConvertedCodes] = useState<undefined | string>(``);

  const isDesktop = useMemo(
    () =>
      Utility.BrowserWindowUtil.DeviceRenderCategory.Desktop.some(
        Utility.BrowserWindowUtil.IsCurrentRenderDevice
      ),
    []
  );

  const isTablet = useMemo(
    () =>
      Utility.BrowserWindowUtil.DeviceRenderCategory.Tablet.some(
        Utility.BrowserWindowUtil.IsCurrentRenderDevice
      ),
    []
  );

  const { orientationText } = useDeviceOrientation();

  return (
    <>
      <Background>
        <>
          <Header />
          {isDesktop || orientationText === "Landscape" ? (
            <>
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
          ) : (
            <div className="d-flex flex-column w-100 align-items-center">
              <Selections
                text={"Input Language"}
                selectedLanguage={inputLanguage}
                setSelectedLanguage={setInputLanguage}
              />
              <div className="editor-area">
                <CodeContainer
                  codes={inputCodes}
                  setCodes={setInputCodes}
                  languageType={inputLanguage?.language}
                />
              </div>
              <div className={isTablet ? "my-4" : "my-2"}>
                <ConvertButton
                  inputLanguage={inputLanguage?.displayName}
                  convertedLanguage={convertedLanguage?.displayName}
                  inputCodes={inputCodes}
                  setConvertedCodes={setConvertedCodes}
                />
              </div>
              <Selections
                text={"Converted Language"}
                selectedLanguage={convertedLanguage}
                setSelectedLanguage={setConvertedLanguage}
              />
              <div className="editor-area">
                <CodeContainer
                  codes={convertedCodes}
                  setCodes={setConvertedCodes}
                  isDisabled={true}
                  languageType={convertedLanguage?.language}
                />
              </div>
            </div>
          )}
        </>
      </Background>
    </>
  );
}

export default App;
