import axios from "axios";

const Review = () => {

     const handleReview = ( (event) => {
          event.preventDefault()

          const usereview = event.target.value;
          console.log(usereview);
          axios
          .patch(`http://localhost:5000/roomreview/reviews/${_id}`)
               
     })
     return (
          <div>
               <div className="ml-8 mt-3 py-5 bg-gray-400 p-3 w-[350px] h-[290px] mb-5">
               <form>
               <div>
               <textarea className="textarea textarea-success w-full" name="review" placeholder="Comments"></textarea>
               </div>
               <button className="btn w-full mt-2">Review</button>
               </form>
               </div>
          </div>
     );
};

export default Review;