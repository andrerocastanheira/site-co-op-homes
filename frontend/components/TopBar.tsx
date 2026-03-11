"use client";

import { motion } from "framer-motion";

const messages = [
  "🔧 Marque a sua oficina online — sem esperas ao telefone",
  "🚗 Concessionário oficial Toyota, Volvo, Fiat, Jeep e Abarth",
  "📍 Funchal, Madeira — Estrada Monumental",
];

export default function TopBar() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: 36, background: "var(--color-dark)" }}
    >
      <motion.div
        className="flex items-center h-full whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="inline-flex items-center text-white text-xs px-10">
            {msg.includes("Marque") ? (
              <>
                🔧{" "}
                <a
                  href="/oficina"
                  className="ml-1"
                  style={{ color: "var(--color-cyan)" }}
                >
                  Marque a sua oficina online
                </a>
                {" "}— sem esperas ao telefone
              </>
            ) : msg.includes("Funchal") ? (
              <>
                📍{" "}
                <a
                  href="/contactos"
                  className="ml-1"
                  style={{ color: "var(--color-cyan)" }}
                >
                  Funchal, Madeira — Estrada Monumental
                </a>
              </>
            ) : (
              msg
            )}
            <span className="mx-8 opacity-30">|</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
