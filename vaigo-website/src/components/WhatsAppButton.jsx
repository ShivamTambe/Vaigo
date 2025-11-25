// components/WhatsAppWidget.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const phone = "91"; // ⚠ Replace with your correct number
  const message = "Hello! I want to know more about your services.";

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">

      {/* CHAT BOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-72 p-4 rounded-xl shadow-xl border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="font-semibold text-gray-800">Chat with us</span>
              </div>

              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-600 hover:text-black transition" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Hi! 👋 Need help? Chat with us on WhatsApp.
            </p>

            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg transition font-medium"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-green-700 transition"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
      )}
    </div>
  );
}
