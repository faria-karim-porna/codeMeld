import { useEffect, useState } from "react";

export function useDeviceOrientation() {
  const [orientation, setOrientation] = useState(getDeviceOrientation());

  function getDeviceOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return 0;
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      return 90;
    }
    return -1; // Default value for unknown orientation
  }

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getDeviceOrientation());
    };

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  const getOrientationText = () => {
    switch (orientation) {
      case 0:
        return "Portrait";
      case 90:
        return "Landscape";
      default:
        return "Unknown";
    }
  };

  return {
    orientation,
    orientationText: getOrientationText(),
  };
}
