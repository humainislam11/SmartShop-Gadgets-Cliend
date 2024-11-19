/* eslint-disable react/prop-types */

const SortByPrice = ({setSort}) => {
    return (
        <select className="p-[10px] max-w-md w-40 border-2 border-black rounded-md" onChange={(e)=> setSort(e.target.value)}>
        <option value='asc'>Low to High</option>
        <option value='desc'>High to Low</option>
        
      </select>
    );
};

export default SortByPrice;