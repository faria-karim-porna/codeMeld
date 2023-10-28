import React, { useEffect } from "react";
function Background(props: React.PropsWithChildren) {
  useEffect(() => {
    const dotElements = document.getElementsByClassName(
      "dot"
    ) as HTMLCollectionOf<HTMLDivElement>;

    let addAnimation = true;
    let group = 1;
    setInterval(() => {
      let delayTiming = 0;
      if (addAnimation) {
        let topLineStart = 85;
        if (group == 1) {
          topLineStart = 83;
        } else if (group == 2) {
          topLineStart = 775;
        } else if (group == 3) {
          topLineStart = 190;
        } else if (group == 4) {
          topLineStart = 213;
        } else if (group == 5) {
          topLineStart = 400;
        } else if (group == 6) {
          topLineStart = 785;
        }
        const topLineEnd = topLineStart + 4;
        const rightLineStart = topLineEnd;
        const rightLineEnd = 40 * 4 + topLineEnd;
        const bottomLineStart = rightLineEnd;
        const bottomLineEnd = rightLineEnd - 4;
        const leftLineStart = bottomLineEnd;
        const leftLineEnd = bottomLineEnd - 40 * 3;
        for (let i = topLineStart; i <= topLineEnd; i++) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        for (let i = rightLineStart; i <= rightLineEnd; i = i + 40) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        for (let i = bottomLineStart; i >= bottomLineEnd; i--) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        for (let i = leftLineStart; i >= leftLineEnd; i = i - 40) {
          const dot = dotElements[i];
          dot.style.animation = "animateDot 2s linear";
          dot.style.animationDelay = `${delayTiming * 0.1}s`;
          delayTiming = delayTiming + 1;
        }
        if (group == 6) {
          group = 1;
        } else {
          group = group + 1;
        }
      } else {
        for (let i = 0; i < 1000; i++) {
          const dot = dotElements[i];
          dot.style.animation = "none";
        }
      }

      addAnimation = !addAnimation;
    }, 3000);
  }, []);
  const dots = Array(40).fill(null);
  const loader = Array(25).fill(null);
  return (
    <>
      <div className="background-container">
        <div className="dot-background">
          {loader.map((_, index) => (
            <div key={index} className="loader">
              {dots.map((_, index) => (
                <div key={index} className="dot"></div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div className="content">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default Background;
