import { FaUser } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users',
          );
            return res.data;
            
        }
        
    });





    const handleAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
         console.log(res.data)
         if(res.data.modifiedCount > 0){
           refetch()
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${user.name} is an Admin Now!`,
             showConfirmButton: false,
             timer: 1500
           });
         }
        })
     };



    const handleDeleteUser = user =>{
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
    
            axiosSecure.delete(`users/${user._id}`)
            .then(res => {
                
                if(res.data.deletedCount > 0){
                  refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                      });
                }
            })
           
            console.log('delete confirm')
            
            }
          });
        }
    return (
       <div>

        <h1 className="text-center text-3xl font-bold">All User</h1>
         <div className=" mt-2 bg-slate-300 p-9">

<div className="  my-3 font-semibold">
 
   <h1 className="text-3xl">Total User:{users.length}</h1>
</div>
<div>
<div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead className="bg-lime-500">
<tr>
<th>Name</th>
<th>Email</th>
<th className="">Role</th>
<th className="">Action</th>
</tr>
</thead>
<tbody>
{/* row 1 */}
{
users.map(user => <tr key={user._id}>

<td>{user?.name}</td>
<td>{user?.email}</td>
<tb className=''>
{ user.role === 'admin' ? "Admin" : <button onClick={()=> handleAdmin(user)}  className=" btn mt-2 mb-2 btn-lg bg-orange-500"><FaUser  className="text-white"/></button>
}
</tb>
<td className="">
<button onClick={ ()=> handleDeleteUser(user)}   className="text-red-600 btn text-[20px]"><MdOutlineDelete /></button>
</td>

</tr>


)
}


</tbody>
{/* foot */}


</table>
</div>
</div>
</div>
       </div>
    );
};

export default AllUser;