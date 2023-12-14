import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';


function DetailButtons({cardData, preferences, setPreferences, house, bedroomsColor, bathroomsColor, laundryColor, coolingColor, heatingColor, fireplaceColor, poolColor, neighborhoodColor, dishwasherColor, parkingColor, fireplaceCheck, coolingCheck, heatingCheck, laundryCheck, poolCheck}) {

  const [interiorFeatures, setInteriorFeatures] = useState([])
  const [exteriorFeatures, setExteriorFeatures] = useState([])
  const [hide, setHide] = useState('')

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

  useEffect(() => {
    extraFeaturesParsing()
  },[])

  return (
    <div id="details_div">
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
  )
};

export default DetailButtons;