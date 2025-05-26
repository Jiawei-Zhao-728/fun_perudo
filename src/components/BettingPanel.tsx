import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

interface BettingPanelProps {
  onBet?: (quantity: number, value: number) => void;
  canBet?: boolean;
}

const BettingPanel: React.FC<BettingPanelProps> = ({
  onBet,
  canBet = true,
}) => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(1);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
  };

  const handleValueChange = (delta: number) => {
    const newValue = Math.max(1, Math.min(6, value + delta));
    setValue(newValue);
  };

  const handleBet = () => {
    onBet?.(quantity, value);
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
        {/* Bet Controls */}
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Quantity Controls */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Quantity
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                onClick={() => handleQuantityChange(-1)}
                disabled={!canBet || quantity <= 1}
                size="small"
                sx={{ color: theme.palette.primary.main }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6" sx={{ minWidth: 40 }}>
                {quantity}
              </Typography>
              <IconButton
                onClick={() => handleQuantityChange(1)}
                disabled={!canBet}
                size="small"
                sx={{ color: theme.palette.primary.main }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Value Controls */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Face Value
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                onClick={() => handleValueChange(-1)}
                disabled={!canBet || value <= 1}
                size="small"
                sx={{ color: theme.palette.primary.main }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6" sx={{ minWidth: 40 }}>
                {value}
              </Typography>
              <IconButton
                onClick={() => handleValueChange(1)}
                disabled={!canBet || value >= 6}
                size="small"
                sx={{ color: theme.palette.primary.main }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        {/* Action Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleBet}
          disabled={!canBet}
          sx={{
            borderRadius: 999,
            px: 3,
            py: 1,
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Place Bet
        </Button>
      </Stack>
    </Paper>
  );
};

export default BettingPanel;
