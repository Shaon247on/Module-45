import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h2 className="mb-6">Our users: {users.length}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </ul>
        </div>
    );
};

export default Users;