import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Carousel from 'react-bootstrap/Carousel';
import PreferenceMatch from '../components/PreferenceMatch';


function Base_Card({house, onSwipeLeft, onSwipeRight, likes, dislikes, handleDoubleClick, preferences}) {
    const [fireplaceCheck, set_fireplace_check] = useState("none");
    const [coolingCheck, set_cooling_check] = useState("none");
    const [heatingCheck, set_heating_check] = useState("none");
    const [poolCheck, set_pool_check] = useState("none");
    const [laundryCheck, set_laundry_check] = useState("none");

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

    //////////////////////////////////////////////MATCHING MECHANICS///////////////////////////////////////////////////////
    
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
    const fireplaceExists = () => {
            if (house.property.fireplaces === null){
                set_fireplace_check("none")
            }
            else {
                set_fireplace_check("")
                setFireplaceColor("gold")
            };
        
    };
    
    const poolExists = () => {
        if (house.property.pool === null){
            set_pool_check("none")
        }
        else {
            set_pool_check("")
            setPoolColor("gold")
        };
    };

    const laundryExists = () => {
        if (preferences[0].laundry) {
            if (house.property.laundry === 'None' || house.property.laundry === null || house.property.laundry === 'none'){
                set_laundry_check("none")
        }
        else {
            if (preferences[0].laundry === house.property.laundry){
                setLaundryColor("palegreen")
            }
            else {
                setLaundryColor("white")
            }
        }
        }   
    };

    const heatingExists = () => {
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

    const coolingExists = () => {
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
        if (interiorFeatures){
        setInteriorFeatures(house.property.interiorFeatures.split(','));
          if (exteriorFeatures) {
          setExteriorFeatures(house.property.exteriorFeatures.split(','));
        }
        // console.log("check int and ext", interiorFeatures, exteriorFeatures)
        }
        else {
          setHide('hidden')
        }
      }
    
    //////////////////////////////////////////////SWIPING MECHANIC///////////////////////////////////////////////////////
    
    const onSwipe = (direction) => {
        console.log("you swiped:", direction)
        direction === 'left' ? onSwipeLeft() : onSwipeRight();
        console.log("check", direction)
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier, 'left the screen')
    };

    useEffect(() => {
        bedroomsMatch()
        bathroomsMatch()
        neighborhoodMatch()
        parkingMatch()
        dishwasherMatch()
        fireplaceExists()
        poolExists()
        laundryExists()
        heatingExists()
        coolingExists()
        extraFeaturesParsing()
        console.log('Card re-rendered'); // Log when the component re-renders
    }, [likes, dislikes]);

    const onImageClick = (event) => {
        event.preventDefault();
        console.log("image clicked")
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <TinderCard
        onSwipe={onSwipe} 
        onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
        preventSwipe={['up', 'down']}
        swipeRequirementType="position"
        swipeThreshold={100}
        >
            <Card style={{ width: '25rem' }} onDoubleClick={handleDoubleClick} className='base_card'>
            <Carousel className='carousel_base_card'>
                {house.photos.map((photo, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={photo} alt={`Slide ${index}`} draggable={false}/>
                </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
            <Card.Title>${house.listPrice} - {house.neighborhood} - {house.property.yearBuilt}</Card.Title>
                <div id="base_card_details_div">
                {house ? (
                <>
                    <div id='button_div' >
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
                <Card.Text>
                    {/* thoughts go here */}
                </Card.Text>
            </Card.Body>
            </Card>
        </TinderCard>
  );
}

export default Base_Card;