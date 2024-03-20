import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} =user
    return (
        <div className="border-2 border-yellow-300 p-10 rounded-lg text-center space-y-6">
            <h2 className="text-3xl font-bold"><b>Name:</b> {name}</h2>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <Link to={`/user/${id}`}><button className="btn bg-slate-500 mt-6">Show Details</button></Link>
        </div>
    );
};

export default User;