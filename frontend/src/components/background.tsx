import { useEffect } from "react";

function Background() {
  useEffect(() => {
    const dotElements = document.getElementsByClassName(
      "dot"
    ) as HTMLCollectionOf<HTMLDivElement>;

    let addAnimation = true;

    setInterval(() => {
      let delayTiming = 0;
      if (addAnimation) {
        for (let i = 0; i < 5; i++) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        for (let i = 4; i <= 40 * 4 + 4; i = i + 40) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        for (let i = 164; i >= 160; i--) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        for (let i = 160; i >=40; i = i - 40) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
      } else {
        for (let i = 0; i < 5; i++) {
          const dot = dotElements[i];
          dot.style.animation = "none";
        }
        for (let i = 4; i <= 40 * 4 + 4; i = i + 40) {
          const dot = dotElements[i];
          dot.style.animation = "none";
        }
        for (let i = 164; i >= 160; i--) {
          const dot = dotElements[i];
          dot.style.animation = "none";
        }
        for (let i = 160; i >=40; i = i - 40) {
          const dot = dotElements[i];
          dot.style.animation = "none";
        }
      }

      addAnimation = !addAnimation;
    }, 10000);
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
