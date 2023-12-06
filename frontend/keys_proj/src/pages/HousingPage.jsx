import axios from 'axios';
import { useEffect, useState } from 'react';
import Base_Card from '../components/Base_Card.jsx'
import { useOutletContext } from 'react-router'

const HousingPage = () => {
    const [houses, setHouses] = useState([]);
    const {likes, setLikes, setDislikes, dislikes} = useOutletContext();
   
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
            <div id='housing_page'>
            <div className='my-card'>
                {houses.map((house, idx) => (
                        <Base_Card
                        key={idx} 
                        agent_remarks={house.privateRemarks} 
                        style={house.property.style}
                        cooling={house.property.cooling}
                        heating={house.property.heating}
                        fireplaces={house.property.fireplaces}
                        sqft={house.property.area}
                        baths_full={house.property.bathsFull}
                        baths_half={house.property.bathsHalf}
                        stories={house.property.stories}
                        flooring={house.property.flooring}
                        laundry_features={house.property.laundryFeatures}
                        lot_description={house.property.lotDescription}
                        pool={house.property.pool}
                        bedrooms={house.property.bedrooms}
                        interior_features={house.property.interiorFeatures}
                        lot_size={house.property.lotSize}
                        additional_rooms={house.property.additionalRooms}
                        exterior_features={house.property.exteriorFeatures}
                        water={house.property.water}
                        view={house.property.view}
                        subdivision={house.property.subdivision}
                        parking={house.property.parking.spaces}
                        baths_three_quarter={house.property.bathsThreeQuarter}
                        acres={house.property.acres}
                        year_built={house.property.yearBuilt}
                        mls_id={house.mlsId}
                        terms={house.terms}
                        special_conditions={house.specialListingConditions}
                        list_price={house.originalListPrice}
                        fullAddress={house.address.full}
                        zipcode={house.address.postalCode}
                        street_name={house.address.streetName}
                        street_number={house.address.streetNumber}
                        list_date={house.listDate}
                        office_id={house.agent.officeMlsId}
                        agent_last_name={house.agent.lastName}
                        agent_email={house.agent.contact.email}
                        agent_office={house.agent.contact.office}
                        agent_cell={house.agent.contact.cell}
                        agent_first_name={house.agent.contact.firstName}
                        middle_school={house.school.middleSchool}
                        high_school={house.school.highSchool}
                        elementary={house.school.elementarySchool}
                        photos={house.photos}
                        setDislikes={setDislikes}
                        dislikes={dislikes}
                        setLikes={setLikes}
                        likes={likes}/>
                ))}
            </div>
            </div>
            </>
        )
    }
export default HousingPage