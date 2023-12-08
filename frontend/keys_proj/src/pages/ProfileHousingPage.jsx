import React, { useState, useEffect } from 'react';
import Liked_Card from '../components/Liked_Cards';
import axios from 'axios';
import { useOutletContext } from 'react-router';

const ProfileHousingPage = () => {
    const [houses, setHouses] = useState([]);
    const {likes, setLikes, setDislikes, dislikes} = useOutletContext()

    const apiKey = 'simplyrets';
    const apiSecret = 'simplyrets'
    const credentials = btoa(`${apiKey}:${apiSecret}`)

    const getHouses = async() => {
        let response = await axios.get(`https://api.simplyrets.com/properties`, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
        setHouses(response.data)
      }
    
        //switch to onClick function for like/dislike buttons
        useEffect (() => {
            getHouses()
        }, [])

    return (
        <>
        LIKES
        <div className='my-card'>
          {likes.length > 0 ? (
            likes.map((photo, index) => (
              <Liked_Card
                key={index} // Add a unique key for each item in the list
                cardData={houses[0]} // Make sure to pass the correct data for each Liked_Card
                setDislikes={setDislikes}
                dislikes={dislikes}
                setLikes={setLikes}
                likes={likes}
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