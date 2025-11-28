import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function FirstVisitPopup(){
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited_dotflick");

    if (!hasVisited) {
      setTimeout(() => setShow(true), 700); 
      localStorage.setItem("visited_dotflick", "true");
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup container */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-[9999] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 relative">

              {/* Close button */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-7 text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  🌱 Welcome to Dotflick Ventures
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Pioneering Drone & AI Technologies for the Future of Agriculture.
                  Experience precision and intelligence across our Agro-AI ecosystem.
                </p>

                <div className="flex justify-center gap-4 mt-4">
                  {/* <button
                    onClick={() => {
                      setShow(false);
                      navigate("/VaigoCenter");
                    }}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-green-700 transition"
                  >
                    Explore Vaigo Center
                  </button> */}

                  <Link to="/vaigo-center" onClick={() => setShow(false)}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium mt-2"
                    onClick={() => {
                      setShow(false);
                    }}
                    >
                      Explore Vaigo Center
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
