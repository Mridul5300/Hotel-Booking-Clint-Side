import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {
     const { _id, room_images, price_per_night, availability } = room;

     return (
          <div>
               
               <div className="relative">
                    <div className="card card-compact b shadow-xl overflow-hidden transition-transform duration-300 transform hover:scale-105">
                         <Link to={`/roomdetails/${_id}`}>
                              <img className="h-[300px] w-full" src={room_images} alt="Shoes" />
                         </Link>
                         <span className="absolute top-0 right-0 px-3 py-1 bg-red-400 text-ellipsis text-white rounded-bl-lg">Price Per Night_${price_per_night}</span>
                         <div className="card-body">
                              <h2 className="text-3xl">{availability}</h2>
                              <h2 className="card-title">Review</h2>
                         </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex justify-center items-center">
                         <div className="text-white text-center">
                              <h2 className="text-3xl mb-4">{availability}</h2>
                              <Link to={`/roomdetails/${_id}`} className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-block transition-colors duration-300">
                                   View Details
                              </Link>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default RoomCard;