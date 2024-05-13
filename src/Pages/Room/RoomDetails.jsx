import { useLoaderData } from "react-router-dom";
import Review from "./ReviewSection/Review";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RoomDetails = () => {
     const { user } = useContext(AuthContex)
     const roomDetail = useLoaderData()
     const [reviews, setReview] = useState([])
     console.log(roomDetail);
     const { _id, description, room_size, room_images,special_offers,price_per_night } = roomDetail;

          const handlebooking = event => {
               event.preventDefault();
               const form = event.target;
               const date = form.date.value;
               const email = user?.email;
               const booking ={
                    email,
                    date
               } 
               fetch('http://localhost:5000/bookings', {
                    method: 'POST',
                    headers:{
                         'content-type' : 'application/json'
                    },
                    body: JSON.stringify(booking)
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if(data.insertedId){
                         Swal.fire({
                              title: 'Success!',
                              text: 'User Added Succesfully',
                              icon: 'success',
                              confirmButtonText: 'OK'
                            })
                    }
               })
               console.log(booking);
          }
     
     useEffect(() => {
          const reviewData = async () => {
               const { data } = await axios.get(`http://localhost:5173/roomdetail/reviews/${_id}`)
               console.log(data);

               // for review
               setReview(data.reviews)
          }
          reviewData()

     }, [_id])
     
     return (
          <div>
          <section className="bg-gradient-to-r from-black to-indigo-400  text-white py-20">
          <div className="container mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                         <img className="w-full p-2 rounded-lg shadow-lg" src={room_images} alt="Room" />
                    </div>
                    <div>
                         <h2 className="text-4xl font-bold mb-4">{description}</h2>
                         <p className="text-lg mb-6">Size: {room_size}</p>
                         <p className="text-lg mb-6">{special_offers}</p>

                         <div className="mb-8">
                              <h3 className="text-2xl font-bold mb-4">Reviews</h3>
                              {reviews && reviews.length > 0 ? (
                                   reviews.map(review => (
                                        <div key={review._id} className="mb-4">
                                             <p className="text-lg">{review.comment}</p>
                                             <p className="text-gray-300">Rating: {review.rating}</p>
                                        </div>
                                   ))
                              ) : (
                                   <p>No reviews for this room yet.</p>
                              )}
                         </div>

                    <div>
                         <button className=" btn bg-yellow-400 text-white px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                              <div className="modal-box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                   <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Confirm Booking</h2>
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" onClick={() => document.getElementById('my_modal_5').close()}>
                                             <IoMdClose className="h-6 w-6" />
                                        </button>
                                   </div>
                                   <div>
                                        <h2 className="text-gray-500 text-xl"><span className="text-black font-semibold  text-xl">Description : </span>{description}</h2>
                                        <h2 className="text-gray-500 text-xl"><span className="text-black font-semibold  text-xl">Price Per Night : </span>${price_per_night}</h2>
                                        <h2 className="text-gray-500 text-xl"><span className="text-black font-semibold  text-xl">size : </span>${room_size}</h2>
                                   </div>
                                   <form onSubmit={handlebooking}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text text-gray-500">Email</span>
                                             </label>
                                             <input type="email" name="email"defaultValue={user?.email} className="input input-bordered text-gray-500" required />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text text-gray-500">Date</span>
                                             </label>
                                             <input type="date" name="date" className="input input-bordered text-gray-500" required />
                                        </div>
                                        </div>
                                   <div className="mt-6">
                                        <button type="submit" className="btn btn-primary w-full">Confirm Booking</button>
                                   </div>
                                   </form>
                              </div>
                         </dialog>

                    </div>
                    </div>
               </div>
          </div>
          </section>
          <div>
               <Review></Review>
          </div>
          </div>
     );
};

export default RoomDetails;

{/* {reviews.length > 0 ? (
                              reviews.map(review => {
                              return <p key={review._id}> Rating :{review.rating} <br /> {review. comment}</p>})
                              ):(<p>no review for this product</p>)} */}
{/* {reviews.length > 0 ? (
                              reviews.map(review => (
                                   <p key={review._id}>
                                        Rating: {review.rating} <br />
                                        {review.comment}
                                   </p>
                              ))
                         ) : (
                              <p>no review for this product</p>
                         )} */}
