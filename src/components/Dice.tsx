import React from "react";
import { motion } from "framer-motion";

// Import dice images
import dice1 from "../assets/dice_pic/Dice_1.svg";
import dice2 from "../assets/dice_pic/Dice_2.svg";
import dice3 from "../assets/dice_pic/Dice_3.svg";
import dice4 from "../assets/dice_pic/Dice_4.svg";
import dice5 from "../assets/dice_pic/Dice_5.svg";
import dice6 from "../assets/dice_pic/Dice_6.svg";

interface DiceProps {
  value: number;
  isRolling?: boolean;
  size?: number;
  color?: string;
}

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const Dice: React.FC<DiceProps> = ({
  value,
  isRolling = false,
  size = 60,
  color,
}) => {
  return (
    <motion.div
      animate={
        isRolling
          ? {
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }
          : {}
      }
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={diceImages[value as keyof typeof diceImages]}
        alt={`Dice showing ${value}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: color
            ? `drop-shadow(0 0 0.5rem ${color}) saturate(2)`
            : undefined,
          border: color ? `2px solid ${color}` : undefined,
          borderRadius: 12,
        }}
      />
    </motion.div>
  );
};

export default Dice;
