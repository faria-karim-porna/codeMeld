import Editor from "@monaco-editor/react";
import { useEffect } from "react";

function Background() {
  useEffect(() => {
    (
      document.getElementsByClassName("dot")[0] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[1] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[2] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[3] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[4] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[5] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[6] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[7] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[8] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[9] as HTMLDivElement
    ).style.animation = "animateDot 2s linear infinite";
    (
      document.getElementsByClassName("dot")[0] as HTMLDivElement
    ).style.animationDelay = "0.0s";
    (
      document.getElementsByClassName("dot")[1] as HTMLDivElement
    ).style.animationDelay = "0.1s";
    (
      document.getElementsByClassName("dot")[2] as HTMLDivElement
    ).style.animationDelay = "0.2s";
    (
      document.getElementsByClassName("dot")[3] as HTMLDivElement
    ).style.animationDelay = "0.3s";
    (
      document.getElementsByClassName("dot")[4] as HTMLDivElement
    ).style.animationDelay = "0.4s";
    (
      document.getElementsByClassName("dot")[5] as HTMLDivElement
    ).style.animationDelay = "0.5s";
    (
      document.getElementsByClassName("dot")[6] as HTMLDivElement
    ).style.animationDelay = "0.6s";
    (
      document.getElementsByClassName("dot")[7] as HTMLDivElement
    ).style.animationDelay = "0.7s";
    (
      document.getElementsByClassName("dot")[8] as HTMLDivElement
    ).style.animationDelay = "0.8s";
    (
      document.getElementsByClassName("dot")[9] as HTMLDivElement
    ).style.animationDelay = "0.9s";
  }, []);
  return (
    <>
      <section>
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </section>
    </>
  );
}

export default Background;
