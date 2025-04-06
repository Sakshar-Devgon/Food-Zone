import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Success = () => {
   const [loading, setLoading] = useState(true);
   const [countdown, setCountdown] = useState(12);
   const [cancelled, setCancelled] = useState(false);
   const [cancelWindowOver, setCancelWindowOver] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      let interval;
      if (!loading && countdown > 0 && !cancelled) {
         interval = setInterval(() => {
            setCountdown((prev) => {
               if (prev <= 1) {
                  setCancelWindowOver(true);
                  clearInterval(interval);
                  return 0;
               }
               return prev - 1;
            });
         }, 1000);
      }
      return () => clearInterval(interval);
   }, [loading, cancelled]);

   const handleCancel = () => {
      setCancelled(true);
   };

   return (
      <div className="flex items-center justify-center h-screen">
         {loading ? (
            <PropagateLoader color="#e74c3c" />
         ) : (
            <div className="text-center space-y-4">
               {!cancelled ? (
                  <>
                     <h1 className="text-xl font-semibold text-green-500">
                        Order Successful!
                     </h1>
                     <p className="text-sm lg:text-lg">
                        Your Order has been Successfully placed
                     </p>

                     {!cancelWindowOver && (
                        <>
                           <p className="text-sm text-gray-500">
                              You can cancel your order in:{" "}
                              <span className="font-bold text-black">
                                 {countdown}s
                              </span>
                           </p>
                           <button
                              onClick={handleCancel}
                              className="px-4 py-2 text-sm font-semibold text-black bg-red-500 rounded-md hover:bg-black hover:text-white"
                           >
                              Cancel Order
                           </button>
                        </>
                     )}

                     {cancelWindowOver && (
                        <button
                           onClick={() => navigate("/resell")}
                           className="px-4 py-2 text-sm font-semibold text-black bg-yellow rounded-md hover:bg-black hover:text-white"
                        >
                           Resell This Order
                        </button>
                     )}
                  </>
               ) : (
                  <>
                     <h1 className="text-xl font-semibold text-red-500">
                        Order Cancelled
                     </h1>
                     <p className="text-sm lg:text-lg">
                        Your money will be refunded in 3 to 7 business days.
                     </p>
                  </>
               )}
            </div>
         )}
      </div>
   );
};

export default Success;