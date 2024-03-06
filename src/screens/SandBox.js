import { useEffect, useRef, useState } from "react";
import * as SC from "../styles/styles";
import { motion } from "framer-motion";

const _DEGREE = 5;
const WIDTH = 675;
const HEIGHT = 970;

const SandBox = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;

      const newRotateY = ((-_DEGREE * 2) / WIDTH) * x + _DEGREE;
      const newRotateX = ((_DEGREE * 2) / HEIGHT) * y - _DEGREE;

      setRotateX(newRotateX);
      setRotateY(newRotateY);
    };

    const handleMouseLeave = (e) => {
      console.log("leave");
      setRotateX(0);
      setRotateY(0);
    };

    const container = frameRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <SC.Section>
      <SC.Container>
        <SC.ImageFrame ref={frameRef}>
          <motion.img
            src="arts/greece.jpeg"
            id="frame"
            style={{
              transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `,
            }}
          />
        </SC.ImageFrame>
      </SC.Container>
    </SC.Section>
  );
};

export default SandBox;
