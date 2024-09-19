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

  // Responsive parallax effect with adjustments for mobile
  const parallaxStyle = {
    position: "relative",
    backgroundPositionY: scrollY * 0.5,
    height: "calc(100vh - 64px)",
    backgroundSize: "cover", // Adjusting for desktop views
    backgroundPosition: "center", // Better for mobile views
    backgroundRepeat: "no-repeat",
  };

  // Specific styles for mobile view
  const mobileParallaxStyle = {
    backgroundSize: "contain", // Ensure full image is shown on mobile
    height: "20vh",
  };

  return (
    <div>
      {/* Parallax Section */}
      <section
        className="bg-fixed bg-center bg-no-repeat"
        style={{
          ...parallaxStyle,
          ...(window.innerWidth < 640 ? mobileParallaxStyle : {}),
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="h-full flex flex-col items-center justify-center text-lightgray font-bold font-aprilla p-4 sm:p-8">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            ZAHU GEMS
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-3">
            The Real Art of Gems
          </p>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
