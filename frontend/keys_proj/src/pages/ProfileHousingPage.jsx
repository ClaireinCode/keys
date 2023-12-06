import React, { useState, useEffect } from 'react';
import Liked_Card from '../components/Liked_Cards';
import axios from 'axios';
import { useOutletContext } from 'react-router'

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

    const handleSwipeLeft = () => {
        if (houses.length > 0){
            setDislikes([...dislikes, houses[0].mlsId]);
            setHouses(houses.slice(1));
        };
    };

    const handleSwipeRight = () => {
        if (houses.length > 0){
            setLikes([...likes, houses[0].mlsId]);
            setHouses(houses.slice(1));
        };
    };

    return (
        <>
        LIKES
            <div className='my-card'>
                {houses.length > 0 ? (
                <Liked_Card
                cardData={houses[0]}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
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
                list_price={houses[0].originalListPrice}
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
                likes={likes}/>
                ) : (
                    <div> No more cards! </div>
                )}
            </div>

        </>
    )
}
export default ProfileHousingPage