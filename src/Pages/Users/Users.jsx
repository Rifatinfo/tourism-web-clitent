import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();  // This will have the loaded data
    return (
        <div>
            {users && users.length > 0 ? (
                users.map(user => <p key={user._id}>{user.email}</p>)  // Make sure to use _id instead of id if that's how it's stored in MongoDB
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default Users;