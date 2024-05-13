import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";



const Room = () => {
     // const [r,setRoomDetail] = useState([]);

     // useEffect(() => {
     //      fetch('http://localhost:5000/user')
     //      .then(res => res.json())
     //      .then(data => {
     //           console.log(data);
     //      })
     // }, [])
     const allRoom = useLoaderData()
     console.log(allRoom);
     return (
          <div>
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