import React, { useState, useEffect } from 'react';
import Liked_Card from '../components/Liked_Cards';
import axios from 'axios';
import { useOutletContext } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { api } from '../utilities';

const ProfileHiddenHousingPage = () => {
    const [houses, setHouses] = useState([]);
    const {likes, setLikes, setDislikes, dislikes} = useOutletContext()
  
    const navigate = useNavigate()
  
    const apiKey = 'simplyrets';
    const apiSecret = 'simplyrets'
    const credentials = btoa(`${apiKey}:${apiSecret}`)
    console.log(dislikes)
  
    const getDislikes = async() => {
      try {
          let dislikeResponse = await api.get(`user_dislikes/`)
          setDislikes(dislikeResponse.data)
          console.log("Dislikes gathered")
          getDislikedHouses()
      } catch (error) {
          console.log("Error gathering dislikes: ", error)
      }
    }
  
    const getDislikedHouses = async () => {
      try {
      
        const dislikedHouseIds = dislikes.map(dislike => dislike.user_houses);
    
        const housePromises = dislikedHouseIds.map(async houseId => {
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
        const dislikedHouses = await Promise.all(housePromises);
        setHouses(dislikedHouses)
        // Now houseDetails contains details for each liked house
        console.log("check, check", dislikedHouses);
      } catch (error) {
        console.error('Error fetching liked houses details:', error);
      }
    };
  
    useEffect(() => {
      getDislikes()
    },[])
        
    const handleDoubleClick = (houseId) => {
      console.log("mic check", houseId)
      //navigate(`/house_details/${houseId}`)
    }
    console.log("sldjfd", houses)
    return (
        <div id="liked_card_page">
        <div id='liked_card'>
          {houses.length > 0 ? (
            houses.map((house, index) => (
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
        </div>
    )
}
export default ProfileHiddenHousingPage
