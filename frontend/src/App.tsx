import Header from "./components/header";
import CodeContainer from "./components/codeContainer";
import Background from "./components/background";

function App() {
  return (
    <>
      <Background>
        <>
          <Header />
          <CodeContainer />
        </>
      </Background>
    </>
  );
}

export default App;
