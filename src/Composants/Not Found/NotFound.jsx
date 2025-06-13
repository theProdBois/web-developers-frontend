import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-orange-100 via-white to-red-100 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        <h1 className="text-8xl font-extrabold text-orange-600 mb-4 animate-pulse">
          404
        </h1>
        <p className="text-2xl font-semibold text-red-600 mb-6">
          Oups! La page que vous cherchez n'existe pas.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          Vérifiez l'URL ou revenez à la page d'accueil.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
        >
          Retour à l'accueil
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-16"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-400"
        >
          <circle cx="32" cy="32" r="30" stroke="#F97316" strokeWidth="4" />
          <line x1="20" y1="20" x2="44" y2="44" stroke="#EF4444" strokeWidth="4" />
          <line x1="44" y1="20" x2="20" y2="44" stroke="#EF4444" strokeWidth="4" />
        </svg>
      </motion.div>
    </div>
  );
}
