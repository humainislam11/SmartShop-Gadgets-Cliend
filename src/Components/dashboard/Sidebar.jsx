import { NavLink, useNavigate } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaHome, FaRegHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import useUserData from "../../hooks/useUserData";
import { MdInventory } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import useAuth from "../../hooks/useAuth";

const sellerRouter = [
  {
    id: 1,
    route: "/dashboard/myProduct",
    title: "My Product",
    icon: <MdInventory />,
  },
  {
    id: 2,
    route: "/dashboard/addProduct",
    title: "Add Product",
    icon: <IoMdAddCircle />,
  },

];
const buyerRoute = [
  {id:1,
   route: "/dashboard/myWishlist",
   title: "My WishList",
   icon: <FaRegHeart />

  }
]

const Sidebar = () => {
    const navigate = useNavigate()
    const {LogOut} = useAuth()
  const userData = useUserData();
  console.log(userData)

  const handleLogout = () => {
    LogOut();
    navigate('/')
  };

  return (
    <div className="bg-gray-200 border-r-2 border-black h-screen px-8 py-12">
      <h1 className="text-2xl font-bold mb-7">Our Travel</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md font-semibold">
          <NavLink
            to="/dashboard/overview"
            className="flex items-center gap-2"
            activeClassName="text-blue-500"
          >
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>
        {userData?.role === "seller" &&
          sellerRouter.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md font-semibold">
              <NavLink
                to={route.route}
                className="flex items-center gap-2"
                activeClassName="text-blue-500"
              >
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        {userData?.role === "buyer" &&
          buyerRoute.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md font-semibold">
              <NavLink
                to={route.route}
                className="flex items-center gap-2"
                activeClassName="text-blue-500"
              >
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
        <li className="p-2 border border-black rounded-md font-semibold">
          <NavLink
            to="/"
            className="flex items-center gap-2"
            activeClassName="text-blue-500"
          >
            <FaHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md font-semibold flex items-center gap-2">
          <CiLogout />
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
