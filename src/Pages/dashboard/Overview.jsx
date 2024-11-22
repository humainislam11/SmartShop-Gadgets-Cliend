import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const { user } = useAuth();
    console.log(user)

    return (
        <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
               
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt="User Profile"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                />
                
                <h2 className="text-2xl font-semibold">{user?.displayName || "User Photo not found"}</h2>
               
                <p className="text-gray-600">{user?.email || "Email not available"}</p>
            </div>
        </div>
    );
};

export default Overview;
