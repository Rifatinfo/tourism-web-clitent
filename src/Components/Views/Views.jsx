
import { useLoaderData } from "react-router-dom";

const Views = () => {
    const users = useLoaderData();  // This will contain the user details fetched by the loader
   console.log(users);
    return (
        <div className="mt-28 text-center">
            <h1 className="text-3xl font-bold mb-4">User Details</h1>
            {users ? (
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-2">{users.name}</h2>
                    <p className="text-lg mb-2">Email: {users.email}</p>
                    <img src={users.photo} alt={users.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <p className="text-md">Other details here...</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Views;

