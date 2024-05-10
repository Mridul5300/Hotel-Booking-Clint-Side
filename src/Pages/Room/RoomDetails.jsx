import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {
     const roomDetail = useLoaderData()
     console.log(roomDetail);
     // const{ cuntryname, spotname, averagecost, season, photo,traveltime,totaVisitors,location,description}=viewDetail;
     return (
          <div>
               <h2 className="text-3xl">This is Home Section</h2>
          </div>
     );
};

export default RoomDetails;
