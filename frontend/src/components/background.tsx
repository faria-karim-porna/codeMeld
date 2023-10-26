import Editor from "@monaco-editor/react";
import { useEffect } from "react";

function Background() {
  useEffect(() => {
    const dotElements = document.getElementsByClassName(
      "dot"
    ) as HTMLCollectionOf<HTMLDivElement>;

    for (let i = 0; i < 10; i++) {
      const dot = dotElements[i];
      dot.style.animation = "animateDot 2s linear infinite";
      dot.style.animationDelay = `${i * 0.1}s`;
    }
  }, []);
  const dots = Array(40).fill(null);
  const loader = Array(25).fill(null);
  return (
    <>
      <section>
        {loader.map((_, index) => (
          <div key={index} className="loader">
            {dots.map((_, index) => (
              <div key={index} className="dot"></div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default Background;
