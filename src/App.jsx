
import './App.css'

function App() {


  return (
    <>
    
      <h1 className='text-3xl'>Vite + React</h1>
      {/* [
  {
        "rating": 5,
    "comment": "Absolutely fantastic experience! Highly recommended.",
    "timestamp": "2024-05-11T10:30:00Z"
  },
  {
        "rating": 4,
    "comment": "The room was clean and comfortable. Had a great stay.",
    "timestamp": "2024-05-10T12:45:00Z"
  },
  {
        "rating": 3,
    "comment": "Decent room, but the amenities could be improved.",
    "timestamp": "2024-05-09T14:20:00Z"
  },
  {
        "rating": 5,
    "comment": "Excellent service! Will definitely come back again.",
    "timestamp": "2024-05-08T09:15:00Z"
  },
  {
        "rating": 2,
    "comment": "Disappointing experience. Room was not as advertised.",
    "timestamp": "2024-05-07T17:00:00Z"
  },
  {
        "rating": 4,
    "comment": "Overall, a good stay. Would have been better with faster Wi-Fi.",
    "timestamp": "2024-05-06T20:30:00Z"
  },
  {
        "rating": 5,
    "comment": "Fantastic room with a beautiful view! Loved every moment of my stay.",
    "timestamp": "2024-05-05T11:00:00Z"
  },
  {
        "rating": 3,
    "comment": "Average experience. Room was okay, but nothing special.",
    "timestamp": "2024-05-04T15:45:00Z"
  },
  {
        "rating": 4,
    "comment": "Enjoyed my stay. Room was clean and staff was friendly.",
    "timestamp": "2024-05-03T08:20:00Z"
  },
  {
      "rating": 5,
    "comment": "Outstanding service and accommodations. Would highly recommend!",
    "timestamp": "2024-05-02T16:10:00Z"
  }
] */}
{/* [
  {
   
    "description": "Luxury Suite with Ocean View",
    "price_per_night": 350,
    "room_size": "600 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/dD49VsJ/reisetopia-n-RS3-Cl-Hb-NGQ-unsplash.jpg",
    "special_offers": "Complimentary breakfast included.",
        "reviews": [
      {
        "rating": 5,
        "comment": "Absolutely stunning suite with breathtaking views. Worth every penny!",
        "timestamp": "2024-05-10T12:30:45Z"
      }
    ]
  },
	
  {
   
    "description": "Deluxe Double Room",
    "price_per_night": 150,
    "room_size": "400 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/bPYYNk2/small-hotel-room-interior-with-double-bed-bathroom.jpg",
    "special_offers": "10% off on stays longer than 3 nights.",
       "reviews": [
      {
        "rating": 4,
        "comment": "Great room, spacious and comfortable. The breakfast was a nice touch.",
        "timestamp": "2024-05-09T14:20:30Z"
      }
    ]
  },
  {
 
    "description": "Standard Single Room",
    "price_per_night": 100,
    "room_size": "250 sqft",
    "availability": false,
    "room_images": "https://i.ibb.co/2S8fZby/spacious-hotel-room-with-rug.jpg",
    "special_offers": null,
     "reviews": [
      {
        "rating": 3,
        "comment": "Basic room, nothing fancy. Good for a short stay.",
        "timestamp": "2024-05-08T10:15:20Z"
      }
    ]
  },
  {
  
    "description": "Executive Suite",
    "price_per_night": 500,
    "room_size": "800 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/KWcNh3k/unfocused-view-tidy-bedroom.jpg",
    "special_offers": "Complimentary spa treatment included.",
     "reviews": [
      {
        "rating": 5,
        "comment": "Incredible suite with top-notch amenities. The spa treatment was a cherry on top!",
        "timestamp": "2024-05-07T16:45:55Z"
      }
    ]
  },
  {

    "description": "Family Suite",
    "price_per_night": 400,
    "room_size": "700 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/YNgVxBG/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg",
    "special_offers": "Kids stay free.",
     "reviews": [
      {
        "rating": 4,
        "comment": "Perfect suite for a family getaway. Kids loved it!",
        "timestamp": "2024-05-06T09:10:25Z"
      }
    ]
  },
  {
    
    "description": "Penthouse Suite",
    "price_per_night": 800,
    "room_size": "1200 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/Dfv1Xxp/luxury-bedroom-hotel.jpg",
    "special_offers": "Private rooftop terrace included.",
    "reviews": [
      {
        "rating": 5,
        "comment": "Exquisite suite with breathtaking views. The private terrace was an absolute delight!",
        "timestamp": "2024-05-05T11:55:40Z"
      }
    ]
  },
  {
   
    "description": "Standard Twin Room",
    "price_per_night": 120,
    "room_size": "300 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/Vm1SNVJ/ardi-evans-8r-J-x-vp9k4-unsplash.jpg",
    "special_offers": null
  },
  {
    "room_id": "008",
    "description": "Junior Suite",
    "price_per_night": 250,
    "room_size": "500 sqft",
    "availability": false,
    "room_images": "https://i.ibb.co/nzZnsLX/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int.jpg",
    "special_offers": null,
       "reviews": [
      {
        "rating": 4,
        "comment": "Comfortable room with all necessary amenities. Good value for money.",
        "timestamp": "2024-05-04T13:20:35Z"
      }
    ]
  },
  {
    
    "description": "Economy Room",
    "price_per_night": 80,
    "room_size": "200 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/7KqHtTf/bedroom-with-large-wall-mural-that-says-green-it.jpg",
    "special_offers": null,
       "reviews": [
      {
        "rating": 3.5,
        "comment": "Decent suite, but a bit overpriced for what it offers.",
        "timestamp": "2024-05-03T08:40:30Z"
      }
    ]
   
  },
  {

    "description": "Deluxe Oceanfront Room",
    "price_per_night": 300,
    "room_size": "550 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/nQNBPcP/luxury-classic-modern-bedroom-suite-hotel.jpg",
    "special_offers": "Free Wi-Fi included.",
      "reviews": [
      {
        "rating": 4.5,
        "comment": "Loved the ocean view from the room. Wi-Fi was a great addition!",
        "timestamp": "2024-05-01T14:25:45Z"
      }
    ]
  },
  {
   
    "description": "Premium King Room",
    "price_per_night": 200,
    "room_size": "450 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/09ZpvTn/pillow-bed.jpg",
    "special_offers": null,
     "reviews": [
      {
        "rating": 4,
        "comment": "Spacious and comfortable room. Enjoyed my stay!",
        "timestamp": "2024-04-30T10:20:30Z"
      }
    ]
  },
  {

    "description": "Lake View Suite",
    "price_per_night": 400,
    "room_size": "700 sqft",
    "availability": false,
    "room_images": "https://i.ibb.co/Qd5YyCn/comfortable-pillow-bed.jpg",
    "special_offers": "Complimentary wine tasting included.",
     "reviews": [
      {
        "rating": 4.5,
        "comment": "Beautiful suite with amazing lake views. Wine tasting was a nice touch!",
        "timestamp": "2024-04-29T16:45:55Z"
      }
    ]
  },
  {

    "description": "Classic Double Room",
    "price_per_night": 130,
    "room_size": "350 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/bLDG8xB/dad-hotel-P6-B7y6-Gnyzw-unsplash.jpg",
    "special_offers": "10% off for returning guests.",
    "reviews": [
      {
        "rating": 3.5,
        "comment": "Decent room, but could use some updating. Overall, a satisfactory experience.",
        "timestamp": "2024-04-28T09:10:25Z"
      }
    ]
  },
   {
 
    "description": "Suite with Garden View",
    "price_per_night": 380,
    "room_size": "650 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/Snhf95B/decoration-bedroom.jpg",
    "special_offers": "Free airport shuttle service.",
    "reviews": [
      {
        "rating": 4,
        "comment": "Lovely suite overlooking the garden. Shuttle service was convenient!",
        "timestamp": "2024-04-27T11:55:40Z"
      }
    ]
  },
  {
  
    "description": "Cozy Cabin",
    "price_per_night": 180,
    "room_size": "300 sqft",
    "availability": true,
    "room_images": "https://i.ibb.co/CHXwrMK/elegant-hotel-room-with-big-bed.jpg",
    "special_offers": "Campfire nights every weekend.",
    "reviews": [
      {
        "rating": 4.5,
        "comment": "Perfect getaway spot for a quiet weekend. Loved the campfire nights!",
        "timestamp": "2024-04-26T13:20:35Z"
      }
    ]
  }
] */}


    </>
  )
}

export default App
