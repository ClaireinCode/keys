import axios from 'axios';
import { useEffect, useState } from 'react';
import Base_Card from '../components/Base_Card.jsx';
import { useOutletContext, useNavigate } from 'react-router';
import { api } from '../utilities.jsx';

const HousingPage = () => {
    const [houses, setHouses] = useState([]);
    const {likes, setLikes, setDislikes, dislikes, isLoggedIn} = useOutletContext();
   
    const apiKey = 'simplyrets';
    const apiSecret = 'simplyrets'
    const credentials = btoa(`${apiKey}:${apiSecret}`)
    
    const getHouses = async() => {
        let response = await axios.get(`https://api.simplyrets.com/properties`, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
        let likedHouseIds = likes.map(like => like.user_houses);
        let dislikedHouseIds = dislikes.map(dislike => dislike.user_houses);

        let filteredHouses = response.data.filter(house => !likedHouseIds.includes(house.mlsId) && !dislikedHouseIds.includes(house.mlsId))
        setHouses(filteredHouses)
      }

    
    
        //switch to onClick function for like/dislike buttons
    useEffect (() => {
        getHouses()
        getLikesAndDislikes()
    }, [])

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/")
        }
    })
    
    const getLikesAndDislikes = async() => {
        try {
            let likeResponse = await api.get(`user_likes/`)
            setLikes(likeResponse.data)
            console.log("Likes gathered")
            let dislikeResponse = await api.get(`user_dislikes/`)
            setDislikes(dislikeResponse.data)
            console.log("Dislikes gathered")
        } catch (error) {
            console.log("Error gathering likes: ", error)
        }
    }

    const handleSwipeLeft = () => {
        if (houses.length > 0){
            postDislikes();
            setHouses(houses.slice(1));
        };
    };

    const postDislikes = async() => {
        let data = {
            "user_houses":houses[0].mlsId
        }
        try {
            let response = await api
                .post("user_dislikes/", data)
                .catch((err) => {
                    alert("Dislike failed to post")
                    console.error(err)
                })
            if (response && response.status === 201){
                console.log("successful dislike!")
            }
        }catch(error) {
            console.log("Error posting dislikes: ", error)
        }
    }

    useEffect(() => {
        // Log the updated likes whenever it changes
        console.log("Updated likes in useEffect:", likes);
        console.log("and", houses)
    }, [likes]);

    const handleSwipeRight = () => {
        if (houses.length > 0){
            
            // Log the current state of likes before the update
            console.log("current likes before update", likes);
    
            postLikes()
    
            // Log the updated likes and houses state
            console.log("updated likes", likes);
            
            setHouses(houses.slice(1));
    
            console.log('remaining houses', houses);
            console.log('likes after update', likes);
        };
    };

    const postLikes = async() => {
        let data = {
            "user_houses":houses[0].mlsId
        }
        try {
            let response = await api
                .post("user_likes/", data)
                .catch((err) => {
                    alert("Like failed to post")
                    console.error(err)
                })
            if (response && response.status === 201){
                console.log("successful like!")
            }
        }catch(error) {
            console.log("Error posting likes: ", error)
        }
    }

    const handleDoubleClick = () => {
        navigate(`/house_details/${houses[0].mlsId}`)
    }


        return (
            <>
            <div id='housing_page'>
            <div>
                {houses.length > 0 ? (
                        <Base_Card
                        key={houses[0].mlsId}
                        cardData={houses[0]}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                        handleDoubleClick={handleDoubleClick}
                        agent_remarks={houses[0].privateRemarks} 
                        style={houses[0].property.style}
                        cooling={houses[0].property.cooling}
                        heating={houses[0].property.heating}
                        fireplaces={houses[0].property.fireplaces}
                        sqft={houses[0].property.area}
                        baths_full={houses[0].property.bathsFull}
                        baths_half={houses[0].property.bathsHalf}
                        stories={houses[0].property.stories}
                        flooring={houses[0].property.flooring}
                        laundry_features={houses[0].property.laundryFeatures}
                        lot_description={houses[0].property.lotDescription}
                        pool={houses[0].property.pool}
                        bedrooms={houses[0].property.bedrooms}
                        interior_features={houses[0].property.interiorFeatures}
                        lot_size={houses[0].property.lotSize}
                        additional_rooms={houses[0].property.additionalRooms}
                        exterior_features={houses[0].property.exteriorFeatures}
                        water={houses[0].property.water}
                        view={houses[0].property.view}
                        subdivision={houses[0].property.subdivision}
                        parking={houses[0].property.parking.spaces}
                        baths_three_quarter={houses[0].property.bathsThreeQuarter}
                        acres={houses[0].property.acres}
                        year_built={houses[0].property.yearBuilt}
                        mls_id={houses[0].mlsId}
                        terms={houses[0].terms}
                        special_conditions={houses[0].specialListingConditions}
                        list_price={houses[0].listPrice} 
                        fullAddress={houses[0].address.full}
                        zipcode={houses[0].address.postalCode}
                        street_name={houses[0].address.streetName}
                        street_number={houses[0].address.streetNumber}
                        list_date={houses[0].listDate}
                        office_id={houses[0].agent.officeMlsId}
                        agent_last_name={houses[0].agent.lastName}
                        agent_email={houses[0].agent.contact.email}
                        agent_office={houses[0].agent.contact.office}
                        agent_cell={houses[0].agent.contact.cell}
                        agent_first_name={houses[0].agent.contact.firstName}
                        middle_school={houses[0].school.middleSchool}
                        high_school={houses[0].school.highSchool}
                        elementary={houses[0].school.elementarySchool}
                        photos={houses[0].photos}
                        setDislikes={setDislikes}
                        dislikes={dislikes}
                        setLikes={setLikes}
                        likes={likes}
                        id='base_card'/>
                ) : (
                    <div> No more cards! </div>
                )}
            </div>
            </div>
            </>
        )
    }
export default HousingPage