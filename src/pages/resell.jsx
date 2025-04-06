import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resell = () => {
   const cartItems = useSelector((state) => state.cart.cart);
   const [timer, setTimer] = useState(12);
   const [resellFailed, setResellFailed] = useState(false);
   const [location, setLocation] = useState("Fetching location...");
   const [loadingLocation, setLoadingLocation] = useState(true);

   const API_KEY = "cee91c469ae643ae99849f965453023b";

   useEffect(() => {
      const interval = timer > 0 && setInterval(() => setTimer((prev) => prev - 1), 1000);
      if (timer === 0) setResellFailed(true);
      return () => clearInterval(interval);
   }, [timer]);

   useEffect(() => {
      getLocation();
   }, []);

   const getLocation = () => {
      setLoadingLocation(true);
      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition(
            async (position) => {
               const { latitude, longitude } = position.coords;
               console.log("Lat:", latitude, "Lng:", longitude); // 👈 Log to confirm

               try {
                  const res = await fetch(
                     `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
                  );
                  const data = await res.json();
                  console.log("OpenCage result:", data); // 👈 Inspect full location

                  const result = data.results[0];
                  const components = result.components;

                  const road = components.road || "";
                  const suburb = components.suburb || "";
                  const city = components.city || components.town || components.village || "";
                  const state = components.state || "";
                  const postcode = components.postcode || "";

                  const fullAddress = [road, suburb, city, state, postcode]
                     .filter(Boolean)
                     .join(", ");

                  setLocation(fullAddress || "Unable to fetch location");
               } catch (error) {
                  console.error("Error fetching location:", error);
                  setLocation("Unable to fetch location");
               } finally {
                  setLoadingLocation(false);
               }
            },
            (error) => {
               console.error("Location access denied or failed:", error);
               setLocation("Location permission denied");
               setLoadingLocation(false);
            },
            { enableHighAccuracy: true, timeout: 10000 }
         );
      } else {
         setLocation("Geolocation not supported by your browser");
         setLoadingLocation(false);
      }
   };

   const discountedItems = cartItems.map((item) => ({
      ...item,
      discountedPrice: (item.price * 0.8).toFixed(2),
   }));

   return (
      <>
         <Navbar />
         <div className="max-w-3xl mx-auto mt-10 p-4 space-y-6">
            <h2 className="text-3xl font-bold text-center">Resell Your Order</h2>

            {!resellFailed && (
               <>
                  <p className="text-center text-sm text-gray-600">
                     Your food will be resold at a 20% discount.
                  </p>
                  <p className="text-center text-sm font-semibold text-gray-700">
                     Looking for nearby buyers in{" "}
                     <span className="text-purple-600">{location}</span> ({timer}s)
                  </p>

                  {!loadingLocation && (
                     <div className="text-center">
                        <button
                           onClick={getLocation}
                           className="text-blue-600 text-sm underline mt-1"
                        >
                           Retry Location
                        </button>
                     </div>
                  )}
               </>
            )}

            {resellFailed ? (
               <div className="text-center mt-6 space-y-2">
                  <p className="text-xl font-bold text-red-500">
                     Sorry, your item is not sold.
                  </p>
                  <p className="text-gray-700 font-medium">
                     Now you have to take this full order.
                  </p>
               </div>
            ) : discountedItems.length > 0 ? (
               <div className="space-y-4">
                  {discountedItems.map((item) => (
                     <div
                        key={item.id}
                        className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
                     >
                        <div className="flex items-center space-x-4">
                           <img
                              src={item.img}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                           />
                           <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-gray-500 line-through">₹{item.price}</p>
                           <p className="font-bold text-red-500">₹{item.discountedPrice}</p>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <p className="text-center text-lg font-semibold">No items to resell.</p>
            )}
         </div>
         <Footer />
      </>
   );
};

export default Resell;
