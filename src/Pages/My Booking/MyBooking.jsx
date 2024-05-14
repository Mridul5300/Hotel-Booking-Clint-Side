import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Table from "./Table";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MyBooking = () => {

     const {user} = useContext(AuthContex);
     const [bookings, setBookings] = useState([]);
     const url = `http://localhost:5000/bookings?email=${user?.email}`;
     useEffect( () => {
          fetch(url)
          .then(res => res.json())
          .then(data => setBookings(data))
     }, []);

     const handleCancel = id => {
          console.log(id);
          Swal.fire({
               title: "Are you sure?",
               text: "You want to Cancel this Booking Item !",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
             }).then((result) => {
               if (result.isConfirmed) {
               fetch(`http://localhost:5000/bookings/${id}`, {
                    method:'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                     Swal.fire({
                   title: "Cancel!",
                   text: "Your Bookig Cancel.",
                   icon: "success"
                 });

                 const remaining = bookings.filter(booking => booking._id !== id);
                 setBookings(remaining)
                    }
               });
               }
             });

     };
     
     // const handleupdate = id => {
     //      fetch(`http://localhost:5000/bookings/${id}`,)
     //      .then(res=> res.json())
     //      .then(data => {
     //           console.log(data);
     //           if(data.modifiedCount > 0) {
     //                // updatestate
     //           }
     //      })
     // }

     return (
          <div>
                 <Helmet>
               <title>My Booking</title>
                </Helmet>
               <h2 className="text-3xl text-center mt-2">My Booking section :{bookings.length} </h2>
               <div className="overflow-x-auto">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th>
                                        
                                   </th>
                                   <th>Room Image</th>
                                   <th>Email</th>
                                   <th>Date</th>
                                   <th></th>
                              </tr>
                         </thead>
                         <tbody>
                         {
                              bookings.map( booking => <Table
                              key={booking._id}
                              booking={booking}
                              handleCancel={handleCancel}
                              ></Table>)
                         }
                              
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyBooking;