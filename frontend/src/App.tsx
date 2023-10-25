function App() {
  const clickHandler = () => {
    const request = {
      codes: `// Function to compute the product of p1 and p2
      function myFunction(p1, p2) {
        return p1 * p2;
      }`,
      inputLanguage: `javascript`,
      outputLanguage: `python`,
    };
    fetch("http://127.0.0.1:5000/codeConverter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div className="border border-danger w-50" onClick={() => clickHandler()}>
        Hello From CodeMeld
      </div>
    </>
  );
}

export default App;
