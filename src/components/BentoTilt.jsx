import React, { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) {
      return;
    }

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = (e) => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
