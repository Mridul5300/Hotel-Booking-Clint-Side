import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Map from "../Map/Map";

const Home = () => {
     return (
          <div>
                 <Helmet>
               <title>Home</title>
                </Helmet>
               <Banner></Banner>
               <div className="text-center">
               <h2  className="text-3xl">Fetured Hotel</h2>
               </div>
               <div>
                    <Map></Map>
               </div>
          </div>
     );
};

export default Home;