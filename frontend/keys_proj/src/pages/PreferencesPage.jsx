import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../utilities.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PreferencesPage = () => {
    const [home_type, setHome_type] = useState()
    const [bedrooms, setBedrooms] = useState()
    const [bathrooms, setBathrooms] = useState()
    const [interests, setInterests] = useState()
    const [laundry, setLaundry] = useState()
    const [cooling, setCooling] = useState()
    const [heating, setHeating] = useState()
    const [price_min, setPrice_min] = useState()
    const [price_max, setPrice_max] = useState()
    const [hoa_min, setHoa_min] = useState()
    const [hoa_max, setHoa_max] = useState()
    const [dishwasher, setDishwasher] = useState()
    const [parking, setParking] = useState()

    const navigate = useNavigate()

    const postPreferences = async () => {
        let data = {
            "home_type":home_type,
            "bedrooms":bedrooms,
            "bathrooms":bathrooms,
            "interests":interests,
            "laundry":laundry,
            "cooling":cooling,
            "heating":heating,
            "price_min":price_min,
            "price_max":price_max,
            "hoa_min":hoa_min,
            "hoa_max":hoa_max,
            "dishwasher":dishwasher,
            "parking":parking
    }
        try {
            let response = await api
                .post("user_preferences/", data)
                .catch((err) => {
                    alert("Preference failed to post")
                    console.error(err)
                })
            if (response && response.status === 201){
                console.log("successful post!")
                navigate("/")
            }
        }catch (error) {
            console.log('Error posting preferences: ', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postPreferences();
    }

    const converter = (e) => {
        e.preventDefault();
        if (e === 'Yes'){
            setDishwasher(true)
        }
        else if (e === 'No'){
            setDishwasher(false)
        }
    }
    
    return (
    <>
    <div id='preferences_div'>
        <div id='pref_inner_div'>
        <Form id="pref_form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Home Type</Form.Label>
                <Form.Select 
                    id="home_type"
                    value={home_type}
                    onChange={(e) => setHome_type(e.target.value)}>
                <option></option>
                <option>House</option>
                <option>Condominium</option>
                <option>Multifamily</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Maximum Price</Form.Label>
                <Form.Control 
                    id="max_price" 
                    placeholder="Enter a number"
                    value={price_max}
                    onChange={(e) => setPrice_max(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Minimum Price</Form.Label>
                <Form.Control 
                id="min_price"
                placeholder="Enter a number"
                value={price_min}
                onChange={(e) => setPrice_min(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Maximum Homeowner's Dues</Form.Label>
                <Form.Control 
                id="bedrooms"
                placeholder="Enter a number"
                value={hoa_max}
                onChange={(e) => setHoa_max(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Number of Bedrooms</Form.Label>
                <Form.Control 
                id="bedrooms"
                placeholder="Enter a number 1-6"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Number of Bathrooms</Form.Label>
                <Form.Control 
                id="bathrooms"
                placeholder="Enter a number 1-6"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Laundry</Form.Label>
                <Form.Select 
                id="laundry"
                value={laundry}
                onChange={(e) => setLaundry(e.target.value)}>
                <option></option>
                <option>In Unit</option>
                <option>On Site</option>
                <option>Common Area</option>
                <option>Coin Operated</option>
                <option>Laundry Room</option>
                <option>Shared Laundry</option>
                <option>None</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Dishwasher</Form.Label>
                <Form.Select 
                id="dishwasher"
                value={dishwasher}
                onChange={(e) => converter(e.target.value)}>
                <option></option>
                <option>Yes</option>
                <option>No</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cooling</Form.Label>
                <Form.Select 
                id="cooling"
                value={cooling}
                onChange={(e) => setCooling(e.target.value)}>
                <option></option>
                <option>Central Air</option>
                <option>Window Units</option>
                <option>Split System</option>
                <option>Evaporative Cooling</option>
                <option>Ductless Mini Split</option>
                <option>Geothermal</option>
                <option>Portable Air Conditioner</option>
                <option>No Cooling</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Heating</Form.Label>
                <Form.Select 
                id="heating"
                value={heating}
                onChange={(e) => setHeating(e.target.value)}>
                <option></option>
                <option>Forced Air</option>
                <option>Radiant Heat</option>
                <option>Baseboard</option>
                <option>Central</option>
                <option>Electric</option>
                <option>Wood Stove</option>
                <option>Gas</option>
                <option>Solar</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Parking</Form.Label>
                <Form.Select 
                id="parking"
                value={parking}
                onChange={(e) => setParking(e.target.value)}>
                <option></option>
                <option>Attached Garage</option>
                <option>Detached Garage</option>
                <option>Carport</option>
                <option>Street Parking</option>
                <option>Driveway</option>
                <option>Assigned Parking</option>
                <option>Covered Parking</option>
                <option>No Parking</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Priorities</Form.Label>
                <Form.Select 
                    id="interests"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}>
                <option></option>
                <option>Shopping</option>
                <option>Restaurants</option>
                <option>Supermarkets</option>
                <option>Trails</option>
                <option>Theatre</option>
                <option>Movie Theater</option>
                <option>Night Life</option>
                <option>Public Transit</option>
                <option>Cafes</option>
                <option>Sports</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit" id="preference_button">Submit</Button>
        </Form>
        </div>
    </div>
    </>
    )
}
export default PreferencesPage;