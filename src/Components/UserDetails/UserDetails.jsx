import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name,email, phone, website} = user

    return (
        <div className="border-2 border-yellow-300 p-10 rounded-lg text-center w-full text-5xl space-y-7">
            <h2><b>Details about:</b> {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: <a href={website} className="hover:text-blue-700">{website}</a></p>

        </div>
    );
};

export default UserDetails;