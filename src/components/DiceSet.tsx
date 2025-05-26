import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Stack,
  Fade,
  useTheme,
  Chip,
} from "@mui/material";
import { Casino as CasinoIcon } from "@mui/icons-material";
import Dice from "./Dice";

interface DiceSetProps {
  initialDiceCount?: number;
  onDiceChange?: (diceValues: number[]) => void;
  canRoll?: boolean;
  className?: string;
}

const DiceSet: React.FC<DiceSetProps> = ({
  initialDiceCount = 5,
  onDiceChange,
  canRoll = true,
  className = "",
}) => {
  const theme = useTheme();
  const [diceValues, setDiceValues] = useState<number[]>(
    Array(initialDiceCount).fill(1)
  );
  const [isRolling, setIsRolling] = useState(false);
  const [diceCounts, setDiceCounts] = useState<{ [key: number]: number }>({});

  // Calculate counts of each dice value
  useEffect(() => {
    const counts: { [key: number]: number } = {};
    diceValues.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
    setDiceCounts(counts);
  }, [diceValues]);

  // Notify parent component of dice changes
  useEffect(() => {
    onDiceChange?.(diceValues);
  }, [diceValues, onDiceChange]);

  const rollDice = () => {
    if (!canRoll || isRolling) return;

    setIsRolling(true);
    // Simulate rolling animation
    setTimeout(() => {
      const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newValues);
      setIsRolling(false);
    }, 500);
  };

  // Format dice counts into Perudo style
  const formatDiceCounts = () => {
    const counts = Object.entries(diceCounts)
      .filter(([_, count]) => count > 0)
      .map(([value, count]) => `${count} ${value}${count > 1 ? "s" : ""}`)
      .join(", ");
    return counts || "No dice";
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.background.paper,
      }}
    >
      <Stack spacing={3} alignItems="center">
        {/* Dice Display */}
        <Fade in={!isRolling}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {diceValues.map((value, index) => (
              <Dice
                key={index}
                value={value}
                isRolling={isRolling}
                size={80}
                color={value === 1 ? "red" : undefined}
              />
            ))}
          </Box>
        </Fade>

        {/* Dice Counts Display */}
        <Box sx={{ textAlign: "center" }}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 1 }}
          >
            {[1, 2, 3, 4, 5, 6].map((value) =>
              diceCounts[value] ? (
                <Chip
                  key={value}
                  label={`${diceCounts[value]} × ${value}`}
                  color={value === 1 ? "error" : "default"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    px: 1.5,
                    bgcolor: value === 1 ? "error.light" : "grey.100",
                    color: value === 1 ? "error.contrastText" : "text.primary",
                    borderRadius: 2,
                  }}
                />
              ) : null
            )}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Total Dice: {diceValues.length}
          </Typography>
        </Box>

        {/* Roll Button */}
        {canRoll && (
          <Button
            variant="contained"
            color="secondary"
            onClick={rollDice}
            disabled={isRolling}
            startIcon={<CasinoIcon />}
            sx={{
              minWidth: 150,
              borderRadius: 999,
              boxShadow: 3,
              py: 1.2,
              fontWeight: 600,
              fontSize: "1.1rem",
              textTransform: "none",
              transition: "all 0.2s",
              "&:hover": {
                transform: "scale(1.07)",
                boxShadow: 6,
                background: (theme) => theme.palette.secondary.light,
              },
            }}
          >
            {isRolling ? "Rolling..." : "Roll Dice"}
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default DiceSet;
