import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const TouristsSpots = ({ tourCart }) => {

    const { img, country_name, price , _id} = tourCart;
    return (
        <Link to={`bookings/${_id}`}>
            <div className="flex items-center justify-center mt-4">
                <div className=" card relative transform transition-transform duration-500 hover:scale-105 focus-within:scale-105 bg-cover bg-center bg-no-repeat text-white p-10 pt-0 rounded-lg overflow-hidden max-w-xs"
                    style={{
                        backgroundImage: `url(${img})`,
                        height: "496px",
                        width: "320px"
                    }}
                >
                    <div className="card-content p-6 bg-gradient-to-t from-transparent via-black/30 to-black transition-transform duration-500 transform translate-y-2/3 hover:translate-y-0 focus-within:translate-y-0">
                        <h2 className="card-title text-3xl font-semibold relative">
                            {country_name}
                            <span className="absolute left-0 bottom-0 h-1 bg-green-500 w-full transform origin-left scale-x-0 transition-transform duration-500 hover:scale-x-100 focus-within:scale-x-100"></span>
                        </h2>
                        <p className='mt-2 font-semibold text-xl'>$ {price}</p>
                        {/* <p className="card-body opacity-0 transition-opacity duration-100 font-bold hover:opacity-85 focus-within:opacity-85">
                        {overview}
                    </p> */}
                        <a href="#" className="button inline-block mt-4 bg-purple-500 text-white py-2 px-5 rounded-md transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    );



};

TouristsSpots.propTypes = {
    tourCart: PropTypes.shape({
        img: PropTypes.string.isRequired,           // Assuming it's a required string
        country_name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,      // Assuming it's a required string
        // overview: PropTypes.string.isRequired,  
        _id : PropTypes.number.isRequired,    // Assuming overview is a required string
    }).isRequired,
};
export default TouristsSpots;