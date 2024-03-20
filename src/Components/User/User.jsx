const User = ({user}) => {
    const {id, name, email, phone} =user
    return (
        <div className="border-2 border-yellow-300 p-10 rounded-lg text-center">
            <h2><b>User Name:</b> {name}</h2>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
        </div>
    );
};

export default User;