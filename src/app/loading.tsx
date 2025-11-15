"use client";

import { motion } from "framer-motion";
import { Bug, Code, Coffee, Cpu, Terminal, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Pure functions outside component
const generateSystemStats = () => ({
  cpuUsage: Math.floor(Math.random() * 100),
  ramUsage: Math.floor(Math.random() * 16),
  totalRam: Math.floor(16 + Math.random() * 8),
  nodeVersion: `18.${Math.floor(Math.random() * 10)}.${Math.floor(
    Math.random() * 10
  )}`,
});

const generateParticles = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    symbol: ["</>", "{}", "[]", "();", "=>", "⚡", "🐛", "☕"][i % 8],
  }));

const loadingLines = [
  "Compiling TypeScript...",
  "Running ESLint... 🧹",
  "Optimizing images... 🖼️",
  "Checking dependencies... 📦",
  "Brewing coffee... ☕",
  "Warming up the CPU... 🔥",
  "Turning it off and on again... 🔄",
  "Asking ChatGPT for help... 🤖",
  "Reading Stack Overflow... 📚",
  "Debugging why this is taking so long... 🐛",
  "Almost there... (maybe) ⏳",
  "Loading awesome content... ✨",
];

const funnyMessages = [
  "This is taking longer than my last relationship...",
  "My code is compiling... and so is my life choices",
  "Loading... unlike my motivation on Mondays",
  "Please wait while I pretend to work",
  "If this were a movie, we'd be in the boring part",
  "Loading... because fast is too mainstream",
  "I swear it worked on my machine 🤷‍♂️",
  "This loader is more reliable than my sleep schedule",
  "Optimizing the optimization... wait what?",
  "Loading... and questioning my career choices",
];

function Loading() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showFunnyMessage, setShowFunnyMessage] = useState(false);
  const [currentFunnyMessageIndex, setCurrentFunnyMessageIndex] = useState(0);
  const [systemStats, setSystemStats] = useState(() => generateSystemStats());
  const [particles, setParticles] = useState(() => generateParticles());

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % loadingLines.length);
    }, 1500);

    const funnyInterval = setInterval(() => {
      setCurrentFunnyMessageIndex(
        Math.floor(Math.random() * funnyMessages.length)
      );
      setShowFunnyMessage(true);
      setTimeout(() => setShowFunnyMessage(false), 3000);
    }, 8000);

    // Regenerate stats and particles occasionally
    const statsInterval = setInterval(() => {
      setSystemStats(generateSystemStats());
      setParticles(generateParticles());
    }, 5000);

    return () => {
      clearInterval(lineInterval);
      clearInterval(funnyInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 font-mono relative">
      <div className="max-w-2xl w-full">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-sm">
                loading-terminal — npm run dev — 80×24
              </span>
            </div>
            <div className="flex gap-1">
              <Coffee className="w-4 h-4 text-yellow-500" />
              <Code className="w-4 h-4 text-blue-500" />
              <Bug className="w-4 h-4 text-green-500" />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-4">
            {/* Welcome Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400"
            >
              <span className="text-blue-400">visitor@portfolio:~$</span> npm
              start
            </motion.div>

            {/* Loading Animation */}
            <div className="space-y-3">
              {loadingLines.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-2 ${
                    index === currentLine ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  {index === currentLine ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4"
                      >
                        <Zap className="w-4 h-4" />
                      </motion.div>
                      <span>{line}</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="ml-1"
                      >
                        █
                      </motion.span>
                    </>
                  ) : (
                    <>
                      <div className="w-4 h-4 text-green-500">✔</div>
                      <span className="line-through opacity-50">{line}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "easeInOut" }}
              className="h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full mt-6"
            />

            {/* Funny Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: showFunnyMessage ? 1 : 0,
                y: showFunnyMessage ? 0 : 10,
              }}
              className="text-center pt-4"
            >
              <div className="text-orange-400 text-sm italic border border-orange-500/30 rounded-lg p-3 bg-orange-500/10">
                💡 {funnyMessages[currentFunnyMessageIndex]}
              </div>
            </motion.div>

            {/* System Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700 text-xs text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-3 h-3" />
                <span>CPU: {systemStats.cpuUsage}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>
                  RAM: {systemStats.ramUsage}GB/{systemStats.totalRam}GB
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                <span>Node: v{systemStats.nodeVersion}</span>
              </div>
            </motion.div>

            {/* Easter Egg */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
              className="text-center pt-4"
            >
              <div className="text-gray-600 text-xs">
                💻 Made with ❤️ and too much coffee
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 text-2xl opacity-20"
        >
          {"</>"}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 text-2xl opacity-20"
        >
          {"{}"}
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-10"
        >
          ⚡
        </motion.div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-gray-600 text-xl"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          >
            {particle.symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
