type ConvertButtonProps = {
  inputLanguage?: string;
  convertedLanguage?: string;
  inputCodes?: string;
  setConvertedCodes: React.Dispatch<React.SetStateAction<undefined | string>>;
};

function ConvertButton(props: ConvertButtonProps) {
  const { inputLanguage, convertedLanguage, inputCodes, setConvertedCodes } =
    props;

  function convertToMultiline(inputString: string) {
    let multilineString = inputString.replace(/\\r|\r/g, "");
    multilineString = multilineString.replace(/\\n/g, "\n");
    return multilineString;
  }
  const convert = () => {
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
      });
  };

  return (
    <>
      <div onClick={() => convert()} className="bg-danger">
        Convert
      </div>
    </>
  );
}

export default ConvertButton;
