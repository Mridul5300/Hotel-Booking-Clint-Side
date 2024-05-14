import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";



const Room = () => {
     const allRoom = useLoaderData()
     console.log(allRoom);
     return (
          <div>
                 <Helmet>
               <title>Room Card</title>
                </Helmet>
               <h2 className="text-3xl text-center mt-9">This is Room Section:{allRoom.length}</h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:p-4"> 
                    {
                         allRoom.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                    }
               </div>
          </div>
     );
};

export default Room;