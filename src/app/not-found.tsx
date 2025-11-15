"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, Search, Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden mb-8"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-sm font-mono">
                terminal — bash — 80×24
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 text-green-400"
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-400">visitor@portfolio:~$</span>
                <span>find ./page</span>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded"
              />

              <div className="text-red-400">
                ❌ Error: Page not found in directory structure
              </div>

              <div className="text-yellow-400">
                ⚠️ HTTP 404 - Route does not exist
              </div>

              <div className="text-gray-400 text-sm mt-4">
                <div>Possible reasons:</div>
                <div>• URL typo in address bar</div>
                <div>• Outdated bookmark link</div>
                <div>• Page has been moved or deleted</div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-blue-400">visitor@portfolio:~$</span>
                <span className="text-gray-300 blink">_</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          {/* Animated 404 Number */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-8xl md:text-9xl font-black bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              404
            </motion.div>

            {/* Floating Code Elements */}
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
              className="absolute -top-4 -left-4 text-2xl"
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
              className="absolute -bottom-4 -right-4 text-2xl"
            >
              {"{}"}
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Page Not Compiled
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              The component you&apos;re looking for couldn&apos;t be rendered.
              Maybe it&apos;s still in development?
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <Home className="w-4 h-4" />
                Return Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/projects">
                <Search className="w-4 h-4" />
                Browse Projects
              </Link>
            </Button>
          </motion.div>

          {/* Debug Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
              <Terminal className="w-4 h-4" />
              <span>
                Status: 404 | Route: Not Found | Environment: Production
              </span>
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
