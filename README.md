# Perudo Game

A modern web implementation of the classic dice game Perudo (also known as Liar's Dice), built with React and TypeScript.

![Perudo Game](public/game-preview.png)

## 🎲 About the Game

Perudo is a game of deception and probability where players try to outsmart their opponents through strategic betting and bluffing. Each player starts with 5 dice, and the goal is to be the last player with dice remaining.

### Core Features

- 🎯 Single player vs AI opponents
- 🎲 Realistic dice rolling mechanics
- 💰 Points and banking system
- 🤖 AI opponents with different personalities
- 📱 Responsive design for all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/perudo.git
   cd perudo
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎮 How to Play

1. **Setup**

   - Start with 1000 points
   - Choose number of AI opponents (2-3)
   - Each player gets 5 dice

2. **Gameplay**

   - Roll your dice (hidden from other players)
   - Make bets about the total number of dice showing a particular value
   - Each bet must be higher than the previous one
   - Call "dudo" (challenge) if you think the previous bet is wrong
   - Lose a die if your challenge is wrong

3. **Special Rules**
   - 1s are wild (count as any number)
   - Can't bet lower than previous bet
   - Must either raise or challenge

## 💰 Points & Banking System

- Starting points: 1000
- Betting range: 50-500 points
- Bank loans available:
  - Loan tiers: 500, 1000, 2000
  - 0% interest
  - 5-round repayment
  - One loan at a time

## 🤖 AI Personalities

- **Conservative**: Takes fewer risks, challenges more often
- **Aggressive**: Takes more risks, makes higher bets
- **Balanced**: Adapts to situation, medium risk level

## 🛠️ Tech Stack

- React
- TypeScript
- Material-UI
- Vite
- Framer Motion (animations)
- Howler.js (sound effects)

## 📝 Development

### Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── context/       # React context
├── hooks/         # Custom hooks
├── utils/         # Utility functions
├── types/         # TypeScript types
└── assets/        # Static assets
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Perudo game design
- React and Vite communities
- All contributors and testers
