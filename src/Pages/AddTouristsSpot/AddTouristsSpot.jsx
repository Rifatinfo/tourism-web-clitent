import bookingImage from "../../assets/booking.jpg";
const AddTouristsSpot = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={bookingImage} alt="Login" />
            </div>

            {/* login field */}
            <div className="lg:w-[936px]  bg-[#f3f6fd] mx-auto mt-14">
                <div className="space-y-3 p-5">
                    <p className="lg:text-2xl text-gray-400 md:text-xl text-xl text-center">Booking your Adventure</p>
                    <h1 className="lg:text-3xl  md:text-3xl text-2xl text-center md:font-bold  lg:font-bold font-semibold">Book and Stay In Touch with Us</h1>
                </div>
                {/* input field */}
                <form>
                    <div className="p-8 space-y-5">
                        <input type="photo" name="photo" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user Image URL" />
                        <input type="tourists_spot_name" name="tourists_spot_name" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user Tourists Spot Name" />
                        <input type="country_Name" name="country_Name" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user Country Name" />
                        <input type="location" name="location" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter User Location" />
                        <input type="short_description" name="short_description" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter User Short Description" />
                        <input type="number" name="average_cost" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter User Average Cost" />
                        <select name="seasonality" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-3 mx-auto">
                            <option value="" disabled selected>Select Season</option>
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                        </select>
                        <input type="number" name="travel_time" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter User Travel Day" />
                        <input type="number" name="totalVisitors" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter User Total Visitors" />
                        <input type="name" name="name" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user name" />
                        <input type="email" name="email" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user Email" />
                        <div className="form-control mt-14">
                            <input
                                type="submit"
                                className="bg-purple-500 w-full h-14  border-[#dddddd75] px-4 mx-auto text-white font-bold "
                                value="Submit"
                            />

                        </div>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default AddTouristsSpot;
