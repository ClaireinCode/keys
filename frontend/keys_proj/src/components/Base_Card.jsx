import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Carousel from 'react-bootstrap/Carousel';



function Base_Card({house, onSwipeLeft, onSwipeRight, likes, dislikes, handleDoubleClick, preferences}) {
    const [fireplaceCheck, setFireplaceCheck] = useState("none");
    const [coolingCheck, setCoolingCheck] = useState("none");
    const [heatingCheck, setHeatingCheck] = useState("none");
    const [poolCheck, setPoolCheck] = useState("none");
    const [laundryCheck, setLaundryCheck] = useState("none");

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

    const [commaPrice, setCommaPrice] = useState()

    const numberWithCommas = () => {
        setCommaPrice(house.listPrice.toLocaleString('en-US'));
    };

    //////////////////////////////////////////////MATCHING MECHANICS///////////////////////////////////////////////////////
    
    const bedroomsMatch = () => {
        if (preferences && house && preferences[0]) {
        console.log(preferences[0].bedrooms)
            if (preferences[0].bedrooms <= house.bedrooms){
                setBedroomsColor("#c9d4a9")
            }
            else {
                setBedroomsColor("#f2a594")
            }
        }
    }

    const bathroomsMatch = () => {
        if (preferences && house && preferences[0]) {
            if (preferences[0].bathrooms <= house.property.bathsFull){
                setBathroomsColor("#c9d4a9")
            }
            else {
                setBathroomsColor("#f2a594")
            }
        }
    }

    // const neighborhoodMatch = () => {
    //     if (preferences[0].neighborhood) {
    //         if (preferences[0].neighborhood === house.neighborhood){
    //             setNeighborhoodColor("#7b904b")
    //         }
    //     }
    // }

    const parkingMatch = () => {
        if (preferences && house) {
            if (house.property.parking.description){
                setParkingColor("#c9d4a9")
            }
            else if (house.property.parking === 'None' || house.property.parking === null || house.property.parking === 'none') {
                setParkingColor("#d4593d")
            }
            else {
                setParkingColor("#f5daaa")
            }
        }
    }

    const dishwasherMatch = () => {
        if (preferences) {
            //console.log("this dishwasher", preferences[0].dishwasher, house.property.dishwasher)
            if (preferences[0].dishwasher === house.property.dishwasher){
                setDishwasherColor("#c9d4a9")
            }
            else if (house.property.dishwasher === 'None' || house.property.dishwasher === null || house.property.dishwasher === 'none' || house.property.dishwasher === undefined && preferences[0].dishwasher === true) {
                setDishwasherColor("#f2a594")
            }
        }
    }
       // refactor possibly by placing all elements in a list and mapping/filtering through them for existence and preference. Possibly group lists by similar traits to make it easier to populate.
    const fireplaceExists = () => {
            if (house.property.fireplaces === null){
                setFireplaceCheck("none")
            }
            else {
                setFireplaceCheck("inline")
                setFireplaceColor("#f5daaa")
            };
        
    };
    
    const poolExists = () => {
        if (house.property.pool === null){
            setPoolCheck("none")
        }
        else {
            setPoolCheck("inline")
            setPoolColor("#f5daaa")
        };
    };

    const laundryExists = () => {
        if (preferences && house) {
            if (house.property.laundry === 'None' || house.property.laundry === null || house.property.laundry === 'none'){
                setLaundryCheck("none")
            }
        else {
            if (house.property.laundry && preferences[0].laundry === house.property.laundry.toLowerCase()){
                setLaundryColor("#c9d4a9")
            }
            else {
                setLaundryColor("whitesmoke")
            }
        }
        }   
    };

    const heatingExists = () => {
        if (preferences && house && preferences[0]) {
            console.log("heating check", preferences[0].heating, house.property.heating)
            if (house.property.heating === 'None' || house.property.heating === null || house.property.heating === 'none'){
                setHeatingCheck("none")
                setHeatingColor("#d4593d")
            }
            else if (preferences[0].heating === 'radiant' && house.property.heating === 'Radiant Heat') {
                setHeatingColor("#c9d4a9")
            }
            else {
                setHeatingCheck("inline")
                if (preferences[0].heating === house.property.heating.toLowerCase()){
                    setHeatingColor("#c9d4a9")
                }
                else {
                    setHeatingColor("whitesmoke")
                }
            };
        }
    };

    const coolingExists = () => {
        if (house.property.cooling === null){
            setCoolingCheck("none")
        }
        else {
            setCoolingCheck("inline")
            if (preferences[0].cooling === house.property.cooling.toLowerCase()){
                setCoolingColor("#c9d4a9")
            }
            else {
                setCoolingColor("whitesmoke")
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
        // neighborhoodMatch()
        parkingMatch()
        dishwasherMatch()
        fireplaceExists()
        poolExists()
        laundryExists()
        heatingExists()
        coolingExists()
        extraFeaturesParsing()
        numberWithCommas()
        console.log('Base Card re-rendered'); // Log when the component re-renders
    }, [likes, dislikes]);


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
            <Card.Title>${commaPrice} - {house.address.full} - {house.property.yearBuilt}</Card.Title>
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
                        <button key={index} className='buttons' style={{backgroundColor:'#f5daaa', display:hide}}>{feature}</button>
                    ))}
                    <button className="buttons" style={{backgroundColor:dishwasherColor}}>Dishwasher</button>
                    {exteriorFeatures.map((feature, index) => (
                        <button key={index} className='buttons' style={{backgroundColor:'#f5daaa', display:hide}}>{feature}</button>
                    ))}
                    <button className='buttons' style={{backgroundColor:parkingColor}}>
                        {house.property.parking.description} 
                    </button >
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