import { useEffect, useState } from "react";

export default function TextSwitcher() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % 4);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setKey((prevkey) => prevkey + 1);
  }, [index]);

  const switchContent = () => {
    switch (index) {
      case 0:
        return (
          <>
            <span className="text-content">p</span>
            <span className="text-content">r</span>
            <span className="text-content">o</span>
            <span className="text-content">g</span>
            <span className="text-content">r</span>
            <span className="text-content">a</span>
            <span className="text-content">m</span>
            <span className="text-content">m</span>
            <span className="text-content">e</span>
            <span className="text-content">r</span>
          </>
        );
      case 1:
        return (
          <>
            <span className="text-content">d</span>
            <span className="text-content">e</span>
            <span className="text-content">v</span>
            <span className="text-content">e</span>
            <span className="text-content">l</span>
            <span className="text-content">o</span>
            <span className="text-content">p</span>
            <span className="text-content">e</span>
            <span className="text-content">r</span>
          </>
        );
      case 2:
        return (
          <>
            <span className="text-content">c</span>
            <span className="text-content">r</span>
            <span className="text-content">e</span>
            <span className="text-content">a</span>
            <span className="text-content">t</span>
            <span className="text-content">i</span>
            <span className="text-content">v</span>
            <span className="text-content">e</span>
          </>
        );
      case 3:
        return (
          <>
            <span className="text-content">d</span>
            <span className="text-content">e</span>
            <span className="text-content">s</span>
            <span className="text-content">i</span>
            <span className="text-content">g</span>
            <span className="text-content">n</span>
            <span className="text-content">e</span>
            <span className="text-content">r</span>
          </>
        );
      // case 4:
      //   return (
      //     <>
      //       <span className="text-content">f</span>
      //       <span className="text-content">u</span>
      //       <span className="text-content">m</span>
      //       <span className="text-content">e</span>
      //       <span className="text-content">r</span>
      //     </>
      //   );
    }
  };

  return (
    <div key={key} className="switcher-container text-7xl">
      {switchContent()}
    </div>
  );
}
