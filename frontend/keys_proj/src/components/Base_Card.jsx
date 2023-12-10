import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Carousel from 'react-bootstrap/Carousel';


function Base_Card({mlsId, style, cooling, heating, fireplaces, sqft, baths_full, photos, laundry_features, lot_description, pool, bedrooms, interior_features, exterior_features, parking, water, view, year_built, acres, list_price, cardData, onSwipeLeft, onSwipeRight, likes, dislikes, fullAddress, handleDoubleClick}) {
    const [fireplace_check, set_fireplace_check] = useState("");
    const [cooling_check, set_cooling_check] = useState("");
    const [heating_check, set_heating_check] = useState("");
    const [pool_check, set_pool_check] = useState("");
    const [laundry_check, set_laundry_check] = useState("red");

        //refactor possibly by placing all elements in a list and mapping/filtering through them for existence and preference. Possibly group lists by similar traits to make it easier to populate.
    const fireplace_exists = () => {
        if (fireplaces === null){
            set_fireplace_check("none")
        }
        else {
            set_fireplace_check("")
        };
    };
    const pool_exists = () => {
        if (pool === null){
            set_pool_check("none")
        }
        else {
            set_pool_check("")
        };
    };
    const laundry_exists = () => {
        if (laundry_features === null){
            set_laundry_check({
                border: '2px #011164',
                color:'whitesmoke',
                backgroundColor:'red'
            })
        }
        else {
            set_laundry_check({
                border: '2px #011164',
                color:'whitesmoke',
                backgroundColor:'green'
            })
        };
    };
    const heating_exists = () => {
        if (heating === null){
            set_heating_check("none")
        }
        else {
            set_heating_check("")
        };
    };
    const cooling_exists = () => {
        if (cooling === null){
            set_cooling_check("none")
        }
        else {
            set_cooling_check("")
        };
    };

    useEffect (() => {
        fireplace_exists()
        pool_exists()
        laundry_exists()
        cooling_exists()
        heating_exists()
    }, [])

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
        console.log('Liked_Card re-rendered'); // Log when the component re-renders
    }, [likes, dislikes]);

    const onImageClick = (event) => {
        event.preventDefault();
        console.log("image clicked")
    }

    /////////////////////////////////////////////////////////////////////////////////

    return (
        <TinderCard
        onSwipe={onSwipe} 
        onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
        preventSwipe={['up', 'down']}
        swipeRequirementType="position"
        swipeThreshold={100}
        >
            <Card style={{ width: '25rem' }} onDoubleClick={handleDoubleClick}>
            <Carousel>
                {photos.map((photo, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={photo} alt={`Slide ${index}`} draggable={false}/>
                </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Title>{fullAddress} | {year_built}</Card.Title>
                <div>
                <div id='button_div' >
                    <button className='buttons'>
                        {baths_full} Bathrooms
                    </button>
                    <button className='buttons'>
                        {bedrooms} Bedrooms
                    </button>
                    <button className='buttons'>
                        {style}
                    </button >
                    <button className='buttons' style={{display:cooling_check}}>
                        {cooling}
                    </button>
                    <button className='buttons' style={{display:heating_check}}>
                        {heating}
                    </button>
                    <button className='buttons'>
                        {sqft}sqft
                    </button>
                    <button className='buttons'>
                        {view} View
                    </button >
                    <button className='buttons' style={{display:fireplace_check, backgroundColor:'whitesmoke'}}>
                        Fireplace
                    </button>
                    {/* <button className='buttons' style={{visibility:'hidden'}}>
                        {interior_features}
                    </button className='buttons'> */}
                    {/* <button className='buttons' style={{visibility:'hidden'}}>
                        {exterior_features}
                    </button className='buttons'> */}
                    <button className='buttons' >
                        Laundry
                    </button>
                    <button className='buttons' style={{display:pool_check, backgroundColor:'whitesmoke'}}>
                        Pool
                    </button>
                </div>
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