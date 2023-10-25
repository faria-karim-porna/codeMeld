import Editor from "@monaco-editor/react";
import { useState } from "react";

function Background() {
  return (
    <>
      <section>
        <div className="loader">
          <div className="dot" style={{'--i': 0}}></div>
          <div className="dot" style={{'--i': 1}}></div>
          <div className="dot" style={{'--i': 2}}></div>
          <div className="dot" style={{'--i': 3}}></div>
          <div className="dot" style={{'--i': 4}}></div>
          <div className="dot" style={{'--i': 5}}></div>
          <div className="dot" style={{'--i': 6}}></div>
          <div className="dot" style={{'--i': 7}}></div>
          <div className="dot" style={{'--i': 8}}></div>
          <div className="dot" style={{'--i': 9}}></div>
        </div>
      </section>
    </>
  );
}

export default Background;
