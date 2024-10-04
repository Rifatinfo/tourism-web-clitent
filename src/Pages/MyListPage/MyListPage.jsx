import { Link, useLoaderData } from "react-router-dom";

const MyListPage = () => {
  const users = useLoaderData(); // This will have the loaded data
  console.log(users);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-28 max-w-6xl mx-auto">
      {users.map((user) => (
        <div key={user._id}>
          <Link>
            <div className="flex items-center justify-center mt-4">
              <div
                className="card relative transform transition-transform duration-500 hover:scale-105 focus-within:scale-105 bg-cover bg-center bg-no-repeat text-white p-10 pt-0 rounded-lg overflow-hidden max-w-xs"
                style={{
                  backgroundImage: `url(${user.photo})`,
                  height: "496px",
                  width: "320px",
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
                {/* Dark opacity overlay */}
                <div className="card-content relative z-10 p-6 transition-transform duration-500 transform translate-y-2/3 hover:translate-y-0 focus-within:translate-y-0">
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400"> Email:</span>
                    <span>{user?.email}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400"> User Name :</span>
                    <span>{user?.name}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400"> Average Cost :</span>
                    <span>{user?.average_cost}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400"> Location :</span>
                    <span>{user?.location}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400">Seasonality :</span>{" "}
                    <span>{user?.seasonality}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400">Comment :</span>{" "}
                    <span>{user?.short_description}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400"> Total Visitor :</span>
                    <span>{user?.totalVisitors}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400">Sport Name :</span>{" "}
                    <span>{user?.tourists_spot_name}</span>
                  </h2>
                  <h2 className="card-title text-sm font-semibold relative">
                    <span className="text-purple-400">Tavel Day :</span>
                    <span>{user?.travel_time}</span>
                  </h2>
                  <div className="flex justify-center">
                    <button className="md:px-6 md:bg-purple-600 md:py-3 md:rounded-lg lg:rounded-xl text-white mt-5">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyListPage;
