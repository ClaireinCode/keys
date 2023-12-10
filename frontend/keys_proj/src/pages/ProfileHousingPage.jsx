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
    console.log(likes)
    // const getHouses = async() => {
    //     let response = await axios.get(`https://api.simplyrets.com/properties`, {
    //         headers: {
    //             'Authorization': `Basic ${credentials}`
    //         }
    //     })
    //     setHouses(response.data)
    //   }
    
        //switch to onClick function for like/dislike buttons
        // useEffect (() => {
        //     getHouses()
        // }, [])

    // const addLike = async () => {
    //   userThought.preventDefault()
    //   let data = {
    //       "thought":thought,
    //       "house_id":house_id
    //   }
    //   try {
    //       let response = await api
    //           .post("thoughts/", data)
    //           .catch((err) => {
    //               alert("Thought failed to post")
    //               console.error(err)
    //           })
    //       if (response.status === 201){
    //           window.location.reload()
    //       }
    //   }catch (error) {
    //       console.log('Error posting thoughts: ', error)
    //   }
    // }

    return (
        <>
        LIKES
        <div className='my-card'>
          {likes.length > 0 ? (
            likes.map((house, index) => (
              <Liked_Card
                key={index} // Add a unique key for each item in the list
                cardData={house} // Make sure to pass the correct data for each Liked_Card
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