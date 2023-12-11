import React, { useState, useEffect } from 'react';
import Liked_Card from '../components/Liked_Cards';
import axios from 'axios';
import { useOutletContext } from 'react-router';
import { api } from '../utilities';

const ProfileHousingPage = () => {
  const [houses, setHouses] = useState([]);
  const {likes, setLikes, setDislikes, dislikes} = useOutletContext()

  const apiKey = 'simplyrets';
  const apiSecret = 'simplyrets'
  const credentials = btoa(`${apiKey}:${apiSecret}`)
  console.log(likes)

  const getLikes = async() => {
    try {
        let likeResponse = await api.get(`user_likes/`)
        setLikes(likeResponse.data)
        console.log("Likes gathered")
    } catch (error) {
        console.log("Error gathering likes: ", error)
    }
  }

  const getLikedHouses = async () => {
    try {
    
      const likedHouseIds = likes.map(like => like.user_houses);
  
      const housePromises = likedHouseIds.map(async houseId => {
        try {
          const response = await axios.get(`https://api.simplyrets.com/properties/${houseId}`, {
            headers: {
              'Authorization': `Basic ${credentials}`
            }
          });
          console.log(response.data.mlsId)
          return response.data;
        } catch (error) {
          console.error(`Error fetching details for house ID ${houseId}:`, error);
          return null; 
        }
      });
  
      // Use Promise.all to wait for all requests to complete
      const likedHouses = await Promise.all(housePromises);
  
      // Now houseDetails contains details for each liked house
      console.log("check, check");
    } catch (error) {
      console.error('Error fetching liked houses details:', error);
    }
  };

  useEffect(() => {
    getLikes()
    getLikedHouses()
  },[])
      
  const handleDoubleClick = () => {
    navigate(`/house_details/${houses[0].mlsId}`)
  }

  return (
      <>
      Liked Houses
      <div className='my-card'>
        {likes.length > 0 ? (
          likes.map((house, index) => (
            <Liked_Card
              key={index}
              cardData={house} 
              setDislikes={setDislikes}
              dislikes={dislikes}
              setLikes={setLikes}
              likes={likes}
              handleDoubleClick={handleDoubleClick}
            />
          ))
        ) : (
          <div> No more cards! </div>
        )}
      </div>
    </>
  );
};
export default ProfileHousingPage