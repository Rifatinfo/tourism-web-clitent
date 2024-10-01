const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full object-cover h-screen min-h-screen">
                <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/banner-two-bg-1.png"
                    className="w-full h-full object-cover" alt="Tourist Destination" />
                <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-5 ml-4 sm:ml-6 md:ml-8">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                            Explore the World’s Best <br />
                            Tourist Destinations
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg">
                            Discover stunning places and unforgettable experiences<br />
                            across the globe. Plan your next adventure today!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-black bg-white font-bold rounded-lg">Discover</button>
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-white rounded-lg">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4">
                    <a href="#slide3" className="btn btn-circle bg-purple-500 text-white">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle bg-purple-500 text-white">
                        ❯
                    </a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full object-cover h-screen min-h-screen">
                <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/banner-two-bg-2.png"
                    className="w-full h-full object-cover" alt="Hidden Gems" />
                <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-5 ml-4 sm:ml-6 md:ml-8">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                            Discover Hidden Gems <br />
                            In Every Corner
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg">
                            From breathtaking landscapes to cultural treasures,<br />
                            find your perfect getaway off the beaten path.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-black bg-white font-bold rounded-lg">Discover</button>
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-white rounded-lg">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4">
                    <a href="#slide1" className="btn btn-circle bg-purple-500 text-white">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle bg-purple-500 text-white">
                        ❯
                    </a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full object-cover h-screen min-h-screen">
                <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/banner-two-bg-3.png"
                    className="w-full h-full object-cover" alt="Adventure Awaits" />
                <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-5 ml-4 sm:ml-6 md:ml-8">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                            Your Adventure <br />
                            Awaits
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg">
                            Start your journey today with our exclusive travel packages <br />
                            and offers. Experience the world like never before.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-black bg-white font-bold rounded-lg">Discover</button>
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-white rounded-lg">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4">
                    <a href="#slide2" className="btn btn-circle bg-purple-500 text-white">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle bg-purple-500 text-white">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
