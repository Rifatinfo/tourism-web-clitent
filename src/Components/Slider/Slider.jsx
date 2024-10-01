const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/banner-two-bg-1.png"
                    className="w-full" />
                <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-5">
                    <div className="space-y-5 ml-5">
                        <h1 className="font-bold text-6xl text-white">
                            Explore the World’s Best <br />
                            Tourist Destinations
                        </h1>
                        <p className="text-white">
                            Discover stunning places and unforgettable experiences<br /> across the globe.
                            Plan your next adventure today!
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="w-40 h-14  border-2 text-black bg-white font-bold rounded-lg">Discover</button>
                            <button className="w-40 h-14  border-2 text-white rounded-lg">know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4 ">
                    <a href="#slide3" className="btn btn-circle bg-purple-500 text-white">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle bg-purple-500 text-white">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/banner-two-bg-2.png"
                    className="w-full" />
                <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-5">
                    <div className="space-y-5 ml-5">
                        <h1 className="font-bold text-6xl text-white">
                            Discover Hidden Gems <br />
                            In Every Corner
                        </h1>
                        <p className="text-white">
                            From breathtaking landscapes to cultural treasures,<br /> find your perfect
                            getaway off the beaten path.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="w-40 h-14  border-2 text-black bg-white font-bold rounded-lg">Discover</button>
                            <button className="w-40 h-14  border-2 text-white rounded-lg">know More</button>x
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4 ">
                    <a href="#slide1" className="btn btn-circle bg-purple-500 text-white">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle bg-purple-500 text-white">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/banner-two-bg-3.png"
                    className="w-full" />
                <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-5">
                    <div className="space-y-5 ml-5">
                        <h1 className="font-bold text-6xl text-white">
                            Your Adventure <br />
                            Awaits
                        </h1>
                        <p className="text-white">
                            Start your journey today with our exclusive travel packages <br /> and offers.
                            Experience the world like never before.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="w-40 h-14  border-2 text-black bg-white font-bold rounded-lg">Discover</button>
                            <button className="w-40 h-14  border-2 text-white rounded-lg">know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4 ">
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
