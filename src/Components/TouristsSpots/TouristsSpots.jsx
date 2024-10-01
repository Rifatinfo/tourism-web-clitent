
const TouristsSpots = () => {
    return (
        <div className="flex items-center justify-center mt-52">
            <div className=" card relative transform transition-transform duration-500 hover:scale-105 focus-within:scale-105 bg-cover bg-center bg-no-repeat text-white p-10 pt-0 rounded-lg overflow-hidden max-w-xs"
            style={{
                backgroundImage: "url(https://andit.co/projects/html/and-tour/demo/assets/img/holiday-img/holiday-3.png)"
            }}
        >
            <div className="card-content p-6 bg-gradient-to-t from-transparent via-black/30 to-black transition-transform duration-500 transform translate-y-2/3 hover:translate-y-0 focus-within:translate-y-0">
                <h2 className="card-title text-2xl font-semibold relative">
                    Something Awesome
                    <span className="absolute left-0 bottom-0 h-1 bg-green-500 w-full transform origin-left scale-x-0 transition-transform duration-500 hover:scale-x-100 focus-within:scale-x-100"></span>
                </h2>
                <p className="card-body opacity-0 transition-opacity duration-500 delay-500 hover:opacity-85 focus-within:opacity-85">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                </p>
                <a href="#" className="button inline-block mt-4 bg-green-500 text-black py-2 px-5 rounded-md transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">
                    Learn More
                </a>
            </div>
        </div>
        </div>
    );
};

export default TouristsSpots;