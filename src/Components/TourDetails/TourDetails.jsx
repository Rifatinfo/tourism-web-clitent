import { useLoaderData } from "react-router-dom";

const TourDetails = () => {
    const tourCart = useLoaderData();
    console.log(tourCart); // Should log the full tourCart object with all fields
    return (
        <div>
            <h1>Welcome to our Details page</h1>
            <p>{tourCart?.overview}</p>
            <p>Country: {tourCart?.country_name}</p>
            <p>Price: {tourCart?.price}</p>
        </div>
    );
};

export default TourDetails;
