import { useEffect, useState } from "react";
import Tour from "../Tour/Tour";

const AllTouristSport = () => {
    
    const [tourCart, setTourCart] = useState([]);
    console.log(tourCart);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setTourCart(data))
    })

    return (
        <div>
             <div className="mt-12 max-w-6xl mx-auto">
            <div className="space-y-8">
                <p className="text-3xl text-gray-500 text-center">Choose your destinations</p>
                <p className="border-2 border-purple-500"></p>
            </div>
            {/* grid cart */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-28">
                {
                    tourCart.map(tourCart => <Tour key={tourCart.id}
                        tourCart={tourCart}
                    ></Tour>)
                }
            </div>


        </div>
        </div>
    );
};

export default AllTouristSport;











