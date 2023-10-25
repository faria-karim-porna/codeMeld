import Editor from "@monaco-editor/react";
import { useState } from "react";
import Header from "./components/header";
import CodeContainer from "./components/codeContainer";

function App() {
  return (
    <>
      <Header />
      <CodeContainer />
    </>
  );
}

export default App;
