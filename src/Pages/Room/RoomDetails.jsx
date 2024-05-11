import { useLoaderData } from "react-router-dom";
import Review from "./ReviewSection/Review";
import { useEffect, useState } from "react";
import axios from "axios";


const RoomDetails = () => {
     const roomDetail = useLoaderData()
     const [reviews, setReview] = useState([])
     console.log(roomDetail);
     const { _id, description, size, room_images, } = roomDetail;
     // useEffect(() => {


     //      const reviewData = async () => {
     //           const { data } = await axios.get(`http://localhost:5173/roomdetails/reviews/${_id}`)
     //           console.log(data);

     //           // for review
     //           setReview(data.reviews)
     //      }

     // }, [])
     useEffect(() => {
          const reviewData = async () => {
               try {
                    const { data } = await axios.get(`http://localhost:5173/roomdetails/reviews/${_id}`);
                    console.log(data);

                    // Set review data in state
                    setReview(data.reviews);
               } catch (error) {
                    console.error('Error fetching review data:', error);
               }
          };

          reviewData();
     }, [_id]);

     return (
          <div>
               <h2 className="text-3xl">This is Home Section</h2>
               <div className="card card-compact  bg-base-200 shadow-xl">
                    <figure><img className="" src={room_images} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Review</h2> <br />
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
                         {reviews && reviews.length > 0 ? (
                              reviews.map(review => (
                                   <p key={review._id}>
                                        Rating: {review.rating} <br />
                                        {review.comment}
                                   </p>
                              ))
                         ) : (
                              <p>No reviews for this room.</p>
                         )}

                         <div className="card-actions">
                              <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                   <div className="modal-box">
                                        <h3 className="font-bold text-lg">{size}</h3>
                                        <p className="py-4">{description}</p>
                                        <p></p>
                                        <div className="modal-action">
                                             <form method="dialog">
                                                  {/* if there is a button in form, it will close the modal */}
                                                  <button className="btn">OkHY</button>
                                             </form>
                                        </div>
                                   </div>
                              </dialog>
                         </div>
                    </div>
                    <div>
                         <Review></Review>
                    </div>
               </div>

          </div>
     );
};

export default RoomDetails;
