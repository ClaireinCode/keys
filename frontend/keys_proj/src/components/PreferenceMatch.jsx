import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import DetailButtons from './DetailButtons';
import { api } from '../utilities';

function PreferenceMatch({cardData, house, preferences}) {

    const [fireplaceCheck, set_fireplace_check] = useState("hidden");
    const [coolingCheck, set_cooling_check] = useState("hidden");
    const [heatingCheck, set_heating_check] = useState("hidden");
    const [poolCheck, set_pool_check] = useState("hidden");
    const [laundryCheck, set_laundry_check] = useState("whitesmoke");

    const [bedroomsColor, setBedroomsColor] = useState("whitesmoke")
    const [bathroomsColor, setBathroomsColor] = useState("whitesmoke")
    const [neighborhoodColor, setNeighborhoodColor] = useState("whitesmoke")
    const [laundryColor, setLaundryColor] = useState("whitesmoke")
    const [coolingColor, setCoolingColor] = useState("whitesmoke")
    const [heatingColor, setHeatingColor] = useState("whitesmoke")
    const [dishwasherColor, setDishwasherColor] = useState("whitesmoke")
    const [parkingColor, setParkingColor] = useState("whitesmoke")
    const [poolColor, setPoolColor] = useState("")
    const [fireplaceColor, setFireplaceColor] = useState("")

    const [interiorFeatures, setInteriorFeatures] = useState([])
    const [exteriorFeatures, setExteriorFeatures] = useState([])
    const [hide, setHide] = useState('')
    
 
    // const getPreferences = async() => {
    //     try {
    //         let preferenceResponse = await api.get(`user_preferences/`)
    //         setPreferences(preferenceResponse.data)
    //         console.log("Preferences gathered", preferences)
    //         bedroomsMatch()
    //         bathroomsMatch()
    //         neighborhoodMatch()
    //         dishwasherMatch()
    //         parkingMatch()
    //         fireplace_exists()
    //         pool_exists()
    //         laundry_exists()
    //         cooling_exists()
    //         heating_exists()
    //         extraFeaturesParsing()
    //     } catch (error) {
    //         console.log("Error gathering preferences: ", error)
    //     }
    // }

    const bedroomsMatch = () => {
        if (preferences[0].bedrooms) {
        console.log(preferences[0].bedrooms)
            if (preferences[0].bedrooms === house.bedrooms){
                setBedroomsColor("green")
            }
            else {
                setBedroomsColor("salmon")
            }
        }
    }

    const bathroomsMatch = () => {
        if (preferences[0].bathrooms) {
            if (preferences[0].bathrooms === house.bathsFull){
                setBathroomsColor("lightgreen")
            }
            else {
                setBathroomsColor("salmon")
            }
        }
    }

    const neighborhoodMatch = () => {
        if (preferences[0].neighborhood) {
            if (preferences[0].neighborhood === house.neighborhood){
                setNeighborhoodColor("mint")
            }
        }
    }

    const parkingMatch = () => {
        if (preferences[0].parking) {
            if (preferences[0].heating === house.property.parking){
                setParkingColor("palegreen")
            }
            else if (house.property.parking === 'None' || house.property.parking === null || house.property.parking === 'none') {
                setParkingColor("salmon")
            }
            else {
                setParkingColor("gold")
            }
        }
    }

    const dishwasherMatch = () => {
        if (preferences[0].dishwasher) {
            if (preferences[0].dishwasher === house.property.dishwasher){
                setDishwasherColor("palegreen")
            }
            else if (house.property.dishwasher === 'None' || house.property.dishwasher === null || house.property.dishwasher === 'none') {
                setDishwasherColor("salmon")
            }
        }
    }

        //refactor possibly by placing all elements in a list and mapping/filtering through them for existence and preference. Possibly group lists by similar traits to make it easier to populate.
    const fireplace_exists = () => {
            if (house.property.fireplace === null){
                set_fireplace_check("none")
            }
            else {
                set_fireplace_check("")
                setFireplaceColor("gold")
            };
        }
    };
    
    const pool_exists = () => {
        if (house.property.pool === null){
            set_pool_check("none")
        }
        else {
            set_pool_check("")
            setPoolColor("gold")
        };
    };

    const laundry_exists = () => {
        if (preferences[0].laundry) {
            if (house.property.laundry === 'None' || house.property.laundry === null || house.property.laundry === 'none'){
                set_laundry_check({
                    border: '2px #011164',
                    color:'whitesmoke',
                    backgroundColor:'salmon'
                })
        }
        else {
            if (preferences[0].laundry === house.property.laundry){
                setLaundryColor("palegreen")
            }
            else {
                setLaundryColor("white")
            }
        };
    };
    const heating_exists = () => {
        if (house.property.heating === 'None' || house.property.heating === null || house.property.heating === 'none'){
            set_heating_check("none")
            setHeatingColor("salmon")
        }
        else {
            set_heating_check("")
            if (preferences[0].heating === house.property.heating){
                setHeatingColor("palegreen")
            }
            else {
                setHeatingColor("white")
            }
        };
    };
    const cooling_exists = () => {
        if (house.property.cooling === null){
            set_cooling_check("none")
        }
        else {
            set_cooling_check("")
            if (preferences[0].cooling === house.property.cooling){
                setCoolingColor("palegreen")
            }
            else {
                setCoolingColor("white")
            }
        };
    };

    const extraFeaturesParsing = () => {
        if (interiorFeatures !== null){
        setInteriorFeatures(house.property.interiorFeatures.split(','));
          if (exteriorFeatures !== null) {
          setExteriorFeatures(house.property.exteriorFeatures.split(','));
        }
        // console.log("check int and ext", interiorFeatures, exteriorFeatures)
        }
        else {
          setHide('hidden')
        }
      }

    useEffect (() => {
        getPreferences()
    }, [house])
      

  return (
   <>
    <div id="details_div">
      {house ? (
        <>
        <div id='button_div' >
            cjhsjlahf
          <button className='buttons' style={{backgroundColor:bedroomsColor}}>
             {house.property.bedrooms} Bedrooms
          </button>
          <button className='buttons' style={{backgroundColor:bathroomsColor}}>
             {house.property.bathsFull} Bathrooms
          </button>
          <button className='buttons'>
             {house.property.style}
          </button >
          <button className='buttons' style={{display:coolingCheck, backgroundColor:coolingColor}}>
             {house.property.cooling}
          </button>
          <button className='buttons' style={{display:heatingCheck, backgroundColor:heatingColor}}>
             {house.property.heating}
          </button>
          <button className='buttons'>
             {house.property.area}sqft
          </button>
          <button className='buttons'>
             {house.property.view} View
          </button >
          <button className='buttons' style={{display:fireplaceCheck, backgroundColor:fireplaceColor}}>
          Fireplace
          </button>
          {interiorFeatures.map((feature, index) => (
            <button key={index} className='buttons' style={{backgroundColor:'gold', display:hide}}>{feature}</button>
          ))}
          {exteriorFeatures.map((feature, index) => (
            <button key={index} className='buttons' style={{backgroundColor:'gold', display:hide}}>{feature}</button>
          ))}
          <button className='buttons' style={{display:laundryCheck, backgroundColor:laundryColor}}>
            Laundry
          </button>
          <button className='buttons' style={{display:poolCheck, backgroundColor:poolColor}}>
           Pool
          </button>
       </div>
      </>
    ) : (
      <div> No details available! </div>
      )}
    </div>
   </>
  );
}

export default PreferenceMatch;

{/* <DetailButtons
house={house}
bedroomsColor={bedroomsColor}
bathroomsColor={bathroomsColor}
laundryColor={laundryColor}
coolingColor={coolingColor}
heatingColor={heatingColor}
fireplaceColor={fireplaceColor}
poolColor={poolColor}
neighborhoodColor={neighborhoodColor}
dishwasherColor={dishwasherColor}
parkingColor={parkingColor}
fireplaceCheck={fireplaceCheck}
coolingCheck={coolingCheck}
poolCheck={poolCheck}
heatingCheck={heatingCheck}
laundryCheck={laundryCheck}/> */}