import React, { useState, useEffect } from "react";
import background from "../assets/background.png";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    position: "relative",
    backgroundPositionY: scrollY * 0.5, // Adjusts speed of background movement
    height: "calc(100vh - 64px)",
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      {/* Parallax Section */}
      <section
        className="bg-fixed bg-center bg-no-repeat"
        style={{
          ...parallaxStyle,
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="h-full flex flex-col items-center justify-center text-lightgray font-bold font-aprilla">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            ZAHU GEMS
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3">
            The Real Art of Gems
          </p>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
