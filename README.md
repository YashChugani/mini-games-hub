# 🎮 Mini Games Hub

Welcome to **Mini Games Hub** — a collection of fun, interactive games built with **React.js**! This project features a clean and responsive UI, multiple mini-games, and AI-powered opponents to keep you engaged. It's designed to be easily scalable and customizable, making it a great starting point for exploring React development and game design.

---

## 🚀 Live Demo  
👉 **[Mini Games Hub](https://YashChugani.github.io/mini-games-hub)**

---

## 🖥️ Features  
✅ **Landing Page** – A beautifully designed landing page that lists all available games with hover animations and game icons.  
✅ **Dark Theme** – Consistent dark theme with smooth UI transitions.  
✅ **Loading Animation** – Custom loading animation using Lottie for a polished user experience.  
✅ **Automated Opponents** – Games like Rock, Paper, Scissors feature automated/computer opponents with different strategies.  
✅ **Easy Navigation** – Back buttons and clear routing make switching between games seamless.  
✅ **Mobile Friendly** – Fully responsive design for a smooth experience on all devices.  
✅ **Multiple Games** – Includes Tic-Tac-Toe, Rock, Paper, Scissors, Memory Card Game, and Number Guessing Game.  

---

## 🎯 Games Included  
### 1. **Tic-Tac-Toe**  
- Classic game where the goal is to line up three X's or O's in a row.  
- Play against a friend in a 2-player environment.  

### 2. **Rock, Paper, Scissors**  
- The classic hand game.  
- AI opponent makes a random choice each time.  

### 3. **Memory Card Game** 
- Flip cards and match pairs.  
- Keep track of moves and time.  

### 4. **Number Guessing Game**
- Guess the number within a limited number of tries.  
- Feedback is provided to help you narrow down the range.  

---

## 🏗️ Tech Stack  
| Technology | Description |
|------------|-------------|
| **React.js** | Frontend framework for building UI components |
| **JavaScript (ES6+)** | Logic and interactivity |
| **CSS** | Styling and responsive design |
| **React Router** | Handles page navigation |
| **React Icons** | Adds icons to buttons and labels |
| **Lottie** | For smooth and customizable loading animations |
| **GitHub Pages** | For deployment |

---

## 🎨 UI/UX Details  
✔️ Clean dark theme for consistent look and feel.  
✔️ Hover effects and visual feedback for better interactivity.  
✔️ Centered layout for a balanced, modern design.  
✔️ Custom back buttons for easy navigation.  

---

## 📂 Project Structure  
```
mini-games-hub/
├── public/            # Static assets
├── src/
│   ├── assets/        # Animation files
│   │   ├── LoadingAnimation.json
│   ├── components/    # React components
│   │   ├── LandingPage.jsx
│   │   ├── TicTacToe.jsx
│   │   ├── RockPaperScissors.jsx
│   │   ├── NumberGuessingGame.jsx
│   │   ├── MemoryCardGame.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Footer.jsx         
│   ├── styles.css              # Global styles
│   ├── App.jsx                 # Main app component
│   ├── index.jsx               # React entry point
├── .gitignore                # Files to ignore in git
├── package.json              # Project metadata and scripts
├── README.md                 # Project documentation

```

---

## 🛠️ Installation  
### 1. **Clone the Repository**  
```
git clone https://github.com/YashChugani/mini-games-hub.git
```

### 2. **Navigate to the Project Directory**  
```
cd mini-games-hub
```

### 3. **Install Dependencies**  
```
npm install
```

---

## 🚀 Usage  
### Start the development server:  
```
npm start
```
- The project will be available at **http://localhost:3000**.

---

## 🚢 Deployment  
1. Add the following to your **package.json**:  
```json
"homepage": "https://YashChugani.github.io/mini-games-hub"
```

2. Add the following deployment scripts:  
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Deploy the project:  
```bash
npm run deploy
```

---

## 🌟 Future Improvements  
- ✅ Add scoring system for each game.  
- ✅ Add game state persistence using `localStorage`.  
- ✅ Add sound effects for better user experience.  
- ✅ Implement more AI strategies for Tic-Tac-Toe and Rock, Paper, Scissors.  

---

## 👨‍💻 Author  
**Yash Chugani** – [GitHub](https://github.com/YashChugani)  

---

## 📝 License  
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---

## 💖 Acknowledgments  
Special thanks to the React community for their awesome documentation and support!  

---
