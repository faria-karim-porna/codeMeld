import Editor from "@monaco-editor/react";
import { useMemo } from "react";
import { Utility } from "../utils/utility";
import { useDeviceOrientation } from "../hooks/useDeviceOrientation";

type CodeContainerProps = {
  isDisabled?: boolean;
  languageType?: string;
  codes?: string;
  setCodes: React.Dispatch<React.SetStateAction<undefined | string>>;
};

function CodeContainer(props: CodeContainerProps) {
  const { isDisabled, languageType, codes, setCodes } = props;
  const isDesktop = useMemo(
    () =>
      Utility.BrowserWindowUtil.DeviceRenderCategory.Desktop.some(
        Utility.BrowserWindowUtil.IsCurrentRenderDevice
      ),
    []
  );

  const { orientationText } = useDeviceOrientation();
  return (
    <>
      <div className="code-container">
        <div className="position-relative">
          <Editor
            height={
              isDesktop || orientationText === "Landscape" ? "50vh" : "30vh"
            }
            width={isDesktop || orientationText === "Landscape" ? "30vw" : "80vw"}
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
