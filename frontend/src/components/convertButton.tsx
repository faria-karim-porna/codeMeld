import { useState } from "react";
type ConvertButtonProps = {
  inputLanguage?: string;
  convertedLanguage?: string;
  inputCodes?: string;
  setConvertedCodes: React.Dispatch<React.SetStateAction<undefined | string>>;
};

function ConvertButton(props: ConvertButtonProps) {
  const { inputLanguage, convertedLanguage, inputCodes, setConvertedCodes } =
    props;

  const [isBusy, setIsBusy] = useState(false);

  function convertToMultiline(inputString: string) {
    let multilineString = inputString.replace(/\\r|\r/g, "");
    multilineString = multilineString.replace(/\\n/g, "\n");
    return multilineString;
  }
  const convertCode = () => {
    setIsBusy(true);
    const request = {
      codes: inputCodes,
      inputLanguage: inputLanguage,
      outputLanguage: convertedLanguage,
    };
    fetch("https://code-meld.onrender.com/codeConverter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((data) => {
        const output = convertToMultiline(data[0]);
        setConvertedCodes(output);
        setIsBusy(false);
      });
  };

  return (
    <>
      {isBusy ? (
        <div className="converting">
          <div className="converting-loader">
            <div></div>
          </div>
          <div className="converting-text">Converting...</div>
        </div>
      ) : (
        <div
          onClick={() => {
            if (inputLanguage && convertedLanguage && inputCodes) {
              convertCode();
            }
          }}
          className={
            inputLanguage && convertedLanguage && inputCodes
              ? "convert-button"
              : "disabled-convert-button"
          }
        >
          Convert
        </div>
      )}
    </>
  );
}

export default ConvertButton;
