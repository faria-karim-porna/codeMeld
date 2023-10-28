import Header from "./components/header";
import CodeContainer from "./components/codeContainer";
import Background from "./components/background";
import Selections from "./components/selections";

function App() {
  return (
    <>
      <Background>
        <>
          <Header />
          <div className="d-flex w-100 justify-content-between">
            <Selections />
            <Selections />
          </div>
          <CodeContainer />
        </>
      </Background>
    </>
  );
}

export default App;
