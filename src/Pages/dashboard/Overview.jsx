import useAuth from "../../hooks/useAuth";

const Overview = () => {

    const {user} = useAuth()
    return (
        <div>
            <h1 className="text-xl font-bold text-center">{user.email}</h1>
            
        </div>
    );
};

export default Overview;