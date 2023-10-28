import Editor from "@monaco-editor/react";

type CodeContainerProps = {
  isDisabled?: boolean;
  languageType?: string;
  codes?: string;
  setCodes: React.Dispatch<React.SetStateAction<undefined | string>>;
};

function CodeContainer(props: CodeContainerProps) {
  const { isDisabled, languageType, codes, setCodes } = props;

  return (
    <>
      <div className="code-container">
        <div className="position-relative">
          <Editor
            height={"400px"}
            width={"450px"}
            theme="vs-dark"
            language={languageType}
            value={codes}
            onChange={(value?: string) => {
              setCodes(value);
            }}
          />
          {isDisabled ? <div className="disabled-editor"></div> : null}
        </div>
      </div>
    </>
  );
}

export default CodeContainer;
