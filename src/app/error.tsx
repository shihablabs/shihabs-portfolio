"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bug, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl border border-red-500/50 overflow-hidden mb-8"
        >
          {/* Console Header */}
          <div className="bg-red-900/50 px-4 py-3 flex items-center gap-2 border-b border-red-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-red-300 text-sm font-mono">
                error-console — runtime — 80×24
              </span>
            </div>
          </div>

          {/* Console Content */}
          <div className="p-6 font-mono text-left">
            <div className="space-y-3 text-red-300">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">system@portfolio:~$</span>
                <span>npm run dev</span>
              </div>

              <div className="text-green-400">
                ✔ Development server started successfully
              </div>

              <div className="flex items-center gap-2">
                <span className="text-purple-400">system@portfolio:~$</span>
                <span>render ./current-page</span>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded"
              />

              <div className="text-red-400 font-bold">
                ⚡ RUNTIME EXCEPTION THROWN
              </div>

              <div className="text-orange-400 border-l-4 border-orange-500 pl-4 ml-2">
                <div>Error: {error.message || "Unknown application error"}</div>
                {error.digest && (
                  <div className="text-sm text-gray-400">
                    Digest: {error.digest}
                  </div>
                )}
              </div>

              <div className="text-yellow-400 text-sm">
                🐛 Stack trace available in browser console
              </div>

              <div className="text-gray-400 text-sm mt-4">
                <div>Debug suggestions:</div>
                <div>• Check browser console for details</div>
                <div>• Refresh the application state</div>
                <div>• Clear browser cache and cookies</div>
                <div>• Contact developer if issue persists</div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-purple-400">system@portfolio:~$</span>
                <span className="text-gray-300 blink">_</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Animated Error Icon */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-8xl md:text-9xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            >
              💥
            </motion.div>

            {/* Floating Bug Icons */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 -left-4 text-3xl"
            >
              🐛
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-2 -right-4 text-3xl"
            >
              ⚡
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Runtime Exception
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Something went wrong in the application. Don&apos;t worry, even
              the best code has bugs sometimes!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button
              onClick={reset}
              size="lg"
              className="gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
          </motion.div>

          {/* Debug Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              <Bug className="w-4 h-4" />
              <span>Error Boundary Triggered | React Runtime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .blink {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
