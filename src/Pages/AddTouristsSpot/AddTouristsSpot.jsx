import bookingImage from "../../assets/booking.jpg";
const AddTouristsSpot = () => {
    const handleAddTouristSport = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitors = form.totalVisitors.value;
        const name = form.name.value;
        const email = form.email.value;
        const info = {photo, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitors, name, email}
        console.log(info);
    };

    return (
        <div>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={bookingImage} alt="Login" />
            </div>

            <div className="lg:w-[936px] bg-[#f3f6fd] mx-auto mt-14">
                <div className="space-y-3 p-5">
                    <p className="lg:text-2xl text-gray-400 md:text-xl text-xl text-center">Booking your Adventure</p>
                    <h1 className="lg:text-3xl md:text-3xl text-2xl text-center md:font-bold lg:font-bold font-semibold">
                        Book and Stay In Touch with Us
                    </h1>
                </div>

                <form onSubmit={handleAddTouristSport}>
                    <div className="p-8 space-y-5">
                        <input type="text" name="photo" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Image URL" />
                        <input type="text" name="tourists_spot_name" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Tourists Spot Name" />
                        <input type="text" name="country_Name" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Country Name" />
                        <input type="text" name="location" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Location" />
                        <input type="text" name="short_description" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Short Description" />
                        <input type="number" name="average_cost" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Average Cost" />
                        <select type="text" name="seasonality" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-3 mx-auto">
                            <option value="" disabled selected>Select Season</option>
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                        </select>
                        <input type="number" name="travel_time" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Travel Days" />
                        <input type="number" name="totalVisitors" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Total Visitors" />
                        <input type="text" name="name" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Your Name" />
                        <input type="email" name="email" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter Your Email" />
                        <div className="form-control mt-14">
                            <input type="submit" className="bg-purple-500 w-full h-14 border-[#dddddd75] px-4 mx-auto text-white font-bold" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;
