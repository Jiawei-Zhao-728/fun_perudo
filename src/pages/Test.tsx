import React, { useState } from "react";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import DiceSet from "../components/DiceSet";
import BettingPanel from "../components/BettingPanel";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

const Test: React.FC = () => {
  const handleBet = (quantity: number, value: number) => {
    console.log(`Bet placed: ${quantity} × ${value}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <DiceSet initialDiceCount={5} canRoll={true} />
            <BettingPanel onBet={handleBet} canBet={true} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Test;
