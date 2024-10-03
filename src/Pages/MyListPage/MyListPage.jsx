import { Link, useLoaderData } from "react-router-dom";

const MyListPage = () => {
    const users = useLoaderData();  // This will have the loaded data
    console.log(users);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-28">
            {
                users.map(user => (
                    <div key={user._id}>
                        <Link>
                            <div className="flex items-center justify-center mt-4">
                                <div
                                    className="card relative transform transition-transform duration-500 hover:scale-105 focus-within:scale-105 bg-cover bg-center bg-no-repeat text-white p-10 pt-0 rounded-lg overflow-hidden max-w-xs"
                                    style={{
                                        backgroundImage: `url(${user.photo})`,
                                        height: "496px",
                                        width: "320px"
                                    }}
                                >
                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark opacity overlay */}

                                    <div className="card-content relative z-10 p-6 transition-transform duration-500 transform translate-y-2/3 hover:translate-y-0 focus-within:translate-y-0">
                                        <h2 className="card-title text-sm font-semibold relative">
                                            {user?.email}
                                        </h2>
                                        <h2 className="card-title text-sm font-semibold relative">
                                            {user?.name}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>

    );
};

export default MyListPage;




























