import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function Base_Card({style, cooling, heating, fireplaces, sqft, baths_full, photos, laundry_features, lot_description, pool, bedrooms, interior_features, exterior_features, parking, water, view, year_built, acres, list_price}) {
    const [fireplace_check, set_fireplace_check] = useState("")
    const [pool_check, set_pool_check] = useState("")
    const [laundry_check, set_laundry_check] = useState("red")
    const fireplace_exists = () => {
        if (fireplaces === null){
            set_fireplace_check("hidden")
        }
        else {
            set_fireplace_check("visible")
        };
    };
    const pool_exists = () => {
        if (pool === null){
            set_pool_check("hidden")
        }
        else {
            set_pool_check("visible")
        };
    };
    const laundry_exists = () => {
        if (laundry_features === null){
            set_laundry_check("red")
        }
        else {
            set_laundry_check("green")
        };
    };

    useEffect (() => {
        fireplace_exists()
        pool_exists()
        laundry_exists()
    }, [])

    return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={`src/assets/chicago5.jpeg`}/>
      <Card.Body>
        <Card.Title>{list_price}</Card.Title>
        <div>
        <div>
            <Button>
                {baths_full} Bathrooms
            </Button>
            <Button>
                {bedrooms} Bedrooms
            </Button>
            <Button>
                {style}
            </Button>
            <Button>
                {cooling}
            </Button>
            <Button>
                {heating}
            </Button>
            <Button>
                {sqft}sqft
            </Button>
            <Button>
                {view} View
            </Button>
            <Button style={{visibility:fireplace_check, backgroundColor:'gold', color:'whitesmoke'}}>
                Fireplace
            </Button>
            <Button style={{visibility:'hidden'}}>
                {interior_features}
            </Button>
            <Button style={{visibility:'hidden'}}>
                {exterior_features}
            </Button>
            <Button>
                {year_built}
            </Button>
            <Button style={{ backgroundColor:laundry_check, color:'whitesmoke'}}>
                Laundry
            </Button>
            <Button style={{visibility:pool_check, backgroundColor:'gold', color:'whitesmoke'}}>
                Pool
            </Button>
        </div>
        </div>
        <Card.Text>
            {/* thoughts go here */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Base_Card;