import { useState, useEffect } from 'react';

function Buttons({house, preferences}) {
    // const [preferences, setPreferences] = useState([])

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
    const [hide, setHide] = useState("")

     //////////////////////////////////////////////GET PREFERENCES///////////////////////////////////////////////////////

    // const getPreferences = async() => {
    //     try {
    //         let preferenceResponse = await api.get(`user_preferences/`)
    //         setPreferences(preferenceResponse.data)
    //         console.log("Preferences gathered", preferences)
    //     } catch (error) {
    //         console.log("Error gathering preferences: ", error)
    //     }
    // }

    // useEffect(() => {
    //     getPreferences()
    // }, [])


    //////////////////////////////////////////////MATCHING MECHANICS///////////////////////////////////////////////////////
    
    const bedroomsMatch = () => {
        if (preferences) {
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
        if (preferences) {
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
        if (preferences) {
            if (preferences[0].parking === house.property.parking.description){
                setParkingColor("#c9d4a9")
            }
            else if (house.property.parking === 'None' || house.property.parking === null || house.property.parking === 'none' || house.property.parking.description === 0) {
                setParkingColor("#f2a594")
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
        if (preferences) {
            if (house.property.laundry === 'None' || house.property.laundry === null || house.property.laundry === 'none'){
                setLaundryCheck("none")
            }
        else {
            if (preferences[0].laundry === house.property.laundry){
                setLaundryColor("#c9d4a9")
            }
            else {
                setLaundryColor("whitesmoke")
            }
        }
        }   
    };

    const heatingExists = () => {
        if (house.property.heating === 'None' || house.property.heating === null || house.property.heating === 'none'){
            setHeatingCheck("none")
            setHeatingColor("#f2a594")
        }
        else {
            setHeatingCheck("inline")
            if (preferences[0].heating === house.property.heating){
                setHeatingColor("#c9d4a9")
            }
            else {
                setHeatingColor("whitesmoke")
            }
        };
    };

    const coolingExists = () => {
        if (house.property.cooling === null){
            setCoolingCheck("none")
        }
        else {
            setCoolingCheck("inline")
            if (preferences[0].cooling === house.property.cooling){
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
        console.log('Details re-rendered'); // Log when the component re-renders
    }, []);


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
        {house ? (
        <>
            <div id='details_button_div' >
            <button className='interests_buttons' style={{backgroundColor:bedroomsColor}}>
                {house.property.bedrooms} Bedrooms
            </button>
            <button className='interests_buttons' style={{backgroundColor:bathroomsColor}}>
                {house.property.bathsFull} Bathrooms
            </button>
            <button className='interests_buttons'>
                {house.property.style}
            </button >
            <button className='interests_buttons' style={{display:coolingCheck, backgroundColor:coolingColor}}>
                {house.property.cooling}
            </button>
            <button className='interests_buttons' style={{display:heatingCheck, backgroundColor:heatingColor}}>
                {house.property.heating}
            </button>
            <button className='interests_buttons'>
                {house.property.area}sqft
            </button>
            <button className='interests_buttons'>
                {house.property.view} View
            </button >
            <button className='interests_buttons' style={{display:fireplaceCheck, backgroundColor:fireplaceColor}}>
            Fireplace
            </button>
            {interiorFeatures.map((feature, index) => (
                <button key={index} className='interests_buttons' style={{backgroundColor:'#f5daaa', display:hide}}>{feature}</button>
            ))}
            <button className="interests_buttons" style={{backgroundColor:dishwasherColor}}>Dishwasher</button>
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
  );
}

export default Buttons;