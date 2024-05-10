import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {
     const {_id, description,images } = room;

     return (
          <div>
               <div className="card card-compact  bg-base-200 shadow-xl">
                    <Link to={`/roomdetails/${_id}`}><img className="h-[300px] w-full" src={images} alt="Shoes" /></Link>
                    <div className="card-body">
                         <h2 className="card-title">Review</h2>
                         
                         <div className="card-actions">
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default RoomCard;