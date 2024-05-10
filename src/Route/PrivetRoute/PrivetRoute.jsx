import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import {FallingLines } from "react-loader-spinner";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContex)
     const location = useLocation()
     console.log(location.pathname);
     console.log("ddddd", loading);
     if (loading) {
          return <div className="flex justify-center items-center h-screen">

               <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
               />
          </div>
     }
     if (user) {
          return children
     }
     return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

PrivetRoute.propTypes = {
     children: PropTypes.object
   };

export default PrivetRoute;

// [
//      {
//        "id": 1,
//        "description": "Cozy single room with a comfortable bed and workspace.",
//        "price_per_night": 50,
//        "size": "Single",
//        "availability": true,
//        "images": ["room1_image1.jpg", "room1_image2.jpg"],
//        "special_offers": "10% off for bookings of 3 nights or more",
//        "rating": 4.2
//      },
//      {
//        "id": 2,
//        "description": "Spacious double room with a queen-sized bed and balcony.",
//        "price_per_night": 80,
//        "size": "Double",
//        "availability": true,
//        "images": ["room2_image1.jpg", "room2_image2.jpg"],
//        "special_offers": "Free breakfast included",
//        "rating": 4.7
//      },
//      {
//        "id": 3,
//        "description": "Luxurious suite with a king-sized bed, living area, and jacuzzi.",
//        "price_per_night": 150,
//        "size": "Suite",
//        "availability": false,
//        "images": ["room3_image1.jpg", "room3_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.9
//      },
//      {
//        "id": 4,
//        "description": "Modern studio apartment with a fully equipped kitchenette.",
//        "price_per_night": 120,
//        "size": "Studio",
//        "availability": true,
//        "images": ["room4_image1.jpg", "room4_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.5
//      },
//      {
//        "id": 5,
//        "description": "Charming cottage with a private garden and fireplace.",
//        "price_per_night": 100,
//        "size": "Cottage",
//        "availability": true,
//        "images": ["room5_image1.jpg", "room5_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.3
//      },
//      {
//        "id": 6,
//        "description": "Family-friendly apartment with two bedrooms and a balcony.",
//        "price_per_night": 180,
//        "size": "Apartment",
//        "availability": true,
//        "images": ["room6_image1.jpg", "room6_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.6
//      },
//      {
//        "id": 7,
//        "description": "Rustic cabin nestled in the woods, perfect for a weekend getaway.",
//        "price_per_night": 90,
//        "size": "Cabin",
//        "availability": true,
//        "images": ["room7_image1.jpg", "room7_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.1
//      },
//      {
//        "id": 8,
//        "description": "Traditional Japanese tatami room with a serene garden view.",
//        "price_per_night": 120,
//        "size": "Tatami",
//        "availability": true,
//        "images": ["room8_image1.jpg", "room8_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.8
//      },
//      {
//        "id": 9,
//        "description": "Elegant penthouse suite with panoramic city skyline views.",
//        "price_per_night": 250,
//        "size": "Penthouse",
//        "availability": true,
//        "images": ["room9_image1.jpg", "room9_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.9
//      },
//      {
//        "id": 10,
//        "description": "Historic villa with antique furnishings and lush gardens.",
//        "price_per_night": 200,
//        "size": "Villa",
//        "availability": true,
//        "images": ["room10_image1.jpg", "room10_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.7
//      },
//      {
//        "id": 11,
//        "description": "Quaint guesthouse with cozy rooms and a communal kitchen.",
//        "price_per_night": 60,
//        "size": "Guesthouse",
//        "availability": true,
//        "images": ["room11_image1.jpg", "room11_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.2
//      },
//      {
//        "id": 12,
//        "description": "Eco-friendly yurt with a private outdoor shower and composting toilet.",
//        "price_per_night": 70,
//        "size": "Yurt",
//        "availability": true,
//        "images": ["room12_image1.jpg", "room12_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.4
//      },
//      {
//        "id": 13,
//        "description": "Quirky treehouse retreat with a suspended bridge and hammock.",
//        "price_per_night": 80,
//        "size": "Treehouse",
//        "availability": true,
//        "images": ["room13_image1.jpg", "room13_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.6
//      },
//      {
//        "id": 14,
//        "description": "Sleek loft apartment with industrial-chic decor and city views.",
//        "price_per_night": 150,
//        "size": "Loft",
//        "availability": true,
//        "images": ["room14_image1.jpg", "room14_image2.jpg"],
//        "special_offers": "",
//        "rating": 4.8
//      },
//      {
//        "id": 15,
//        "description": "Bohemian-style caravan with colorful interiors and outdoor seating.",
//        "price_per_night": 50,
//        "size": "Caravan",
//        "availability": true,
//        "images": ["room15_image1.jpg", "room15_image2.jpg"],
//        "special_offers": "Pet-friendly accommodation",
//        "rating": 4.3
//      }
//    ]
