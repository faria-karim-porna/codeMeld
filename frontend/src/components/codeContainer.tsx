import Editor from "@monaco-editor/react";
import { useState } from "react";

function CodeContainer() {
  const [codes, setCodes] = useState(``);
  const [outputCodes, setOutputCodes] = useState(``);
  function convertToMultiline(inputString: string) {
    let multilineString = inputString.replace(/\\r|\r/g, "");
    multilineString = multilineString.replace(/\\n/g, "\n");
    return multilineString;
  }
  const convert = () => {
    const request = {
      codes: codes,
      inputLanguage: `javascript`,
      outputLanguage: `python`,
    };
    fetch("https://code-meld.onrender.com/codeConverter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((data) => {
        const output = convertToMultiline(data[0]);
        setOutputCodes(output);
      });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-4">
        <div className="editor-area">
          <Editor
            height={"400px"}
            width={"450px"}
            theme="vs-dark"
            language="javascript"
            onChange={(value) => {
              setCodes(value);
            }}
          />
        </div>
        <div onClick={() => convert()} className="bg-danger">
          Convert
        </div>
        <div className="editor-area">
          <div className="position-relative">
            <Editor
              height={"400px"}
              width={"450px"}
              theme="vs-dark"
              language="python"
              value={outputCodes}
            />
            <div className="disabled-editor"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeContainer;
