/* eslint-disable react/prop-types */
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({handleSearch}) => {
    return (
        <form className="flex items-center gap-[2px]" onSubmit={handleSearch}>
            <input className="max-w-md p-[10px] border-2 border-black rounded-l-md" type="text" name="search" placeholder="Search Products"/>
           <button className="btn rounded-none rounded-r-md border-2 bg-gray-300 btn-outline">
           <IoMdSearch  size={20}/>
           </button>

        </form>
    );
};

export default SearchBar;