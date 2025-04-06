import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiFullPizza, GiFrenchFries, GiHotMeal, GiSodaCan, GiDonut } from "react-icons/gi";
import { FaHamburger, FaIceCream } from "react-icons/fa";

const Join = () => {
   return (
      <div className="relative flex items-center justify-center w-full h-[40vw] bg-gradient-to-r from-green-400 via-green-500 to-green-600 overflow-hidden">
         {/* Floating Food Animations */}
         <motion.div 
            className="absolute top-10 left-10 text-white text-7xl"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
         >
            <GiFullPizza />
         </motion.div>

         <motion.div 
            className="absolute top-20 right-20 text-yellow-300 text-6xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
         >
            <FaHamburger />
         </motion.div>

         <motion.div 
            className="absolute bottom-10 left-32 text-red-400 text-7xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
         >
            <GiFrenchFries />
         </motion.div>

         <motion.div 
            className="absolute bottom-20 right-40 text-orange-400 text-6xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
         >
            <GiHotMeal />
         </motion.div>

         <motion.div 
            className="absolute top-32 left-1/4 text-blue-300 text-6xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
         >
            <GiSodaCan />
         </motion.div>

         <motion.div 
            className="absolute bottom-28 right-1/4 text-pink-400 text-7xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
         >
            <GiDonut />
         </motion.div>

         {/* Main Section */}
         <section className="relative z-10 text-center px-6">
            <motion.h2 
               className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
               animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
               Become a {" "}
               <span className="text-black bg-white px-3 py-1 rounded-lg shadow-md">
                  Fooder
               </span>{" "}
               Today!
            </motion.h2>
            <motion.p 
               className="max-w-xl mx-auto mt-4 text-lg text-white md:mt-6 md:text-xl"
               animate={{ y: [0, -5, 0], opacity: [1, 0.9, 1] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
               🍕 Indulge in a world of flavors. 🍔 Join us at {" "}
               <span className="font-semibold text-black bg-white px-2 py-1 rounded-lg">
                  Food Zone
               </span>{" "}
               and savor the beauty of delicious moments. 🍟 Culinary joy
               awaits – sign up today!
            </motion.p>

            <Link to={"/signIn"}>
               <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-8 px-6 py-3 text-lg font-semibold text-black bg-white rounded-lg shadow-lg transition-all duration-300 hover:bg-black hover:text-white"
               >
                  Join Now
               </motion.button>
            </Link>
         </section>
      </div>
   );
};

export default Join;