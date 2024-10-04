import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const handleUpdate = (e) => {
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
    const user = {
      photo,
      tourists_spot_name,
      country_Name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitors,
      name,
      email,
    };
    console.log(user);
    fetch(`http://localhost:5000/users/${loadedUsers._id}` , {
        method : "PUT",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0 || data.upsertedCount > 0) {
            alert('User Update Successfully');
        } else {
            alert('No changes made to the user.');
        }
    })
  };
  return (
    <div  className="lg:w-[936px] bg-[#f3f6fd] mx-auto mt-32">
      <form onSubmit={handleUpdate}>
        <div className="p-8 space-y-5">
          <input
            defaultValue={loadedUsers?.photo}
            type="text"
            name="photo"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Image URL"
          />
          <input
            defaultValue={loadedUsers?.tourists_spot_name}
            type="text"
            name="tourists_spot_name"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Tourists Spot Name"
          />
          <input
            defaultValue={loadedUsers?.country_Name}
            type="text"
            name="country_Name"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Country Name"
          />
          <input
            defaultValue={loadedUsers?.location}
            type="text"
            name="location"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Location"
          />
          <input
            defaultValue={loadedUsers?.short_description}
            type="text"
            name="short_description"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Short Description"
          />
          <input
            defaultValue={loadedUsers?.average_cost}
            type="number"
            name="average_cost"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Average Cost"
          />
          <select required
            type="text"
            name="seasonality"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-3 mx-auto"
          >
            <option value="" disabled selected>
              Select Season
            </option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
          <input
            defaultValue={loadedUsers?.travel_time}
            type="number"
            name="travel_time"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Travel Days"
          />
          <input
            defaultValue={loadedUsers?.totalVisitors}
            type="number"
            name="totalVisitors"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Total Visitors"
          />
          <input
            defaultValue={loadedUsers?.name}
            type="text"
            name="name"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Your Name"
          />
          <input
            defaultValue={loadedUsers?.email}
            type="email"
            name="email"
            className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto"
            placeholder="Enter Your Email"
          />
          <div className="form-control mt-14">
            <input
              type="submit"
              className="bg-purple-500 w-full h-14 border-[#dddddd75] px-4 mx-auto text-white font-bold"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
