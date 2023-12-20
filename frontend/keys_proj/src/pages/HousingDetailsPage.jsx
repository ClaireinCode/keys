import { useState, useEffect } from 'react';
import { api } from '../utilities'
import { useParams, Link, useOutletContext, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Buttons from '../components/Buttons';

const HousingDetailsPage = () => {
    const [house, setHouse] = useState(null)
    const [allThoughts, setAllThoughts] = useState([])
    const [thought, setThought] = useState("")
    const [preferences, setPreferences] = useState([])
    const [position, setPosition] = useState(null)
    const [currentZipcode, setCurrentZipcode] = useState()
    const [pointsofInterest, setPointsofInterest] = useState([])
    const [commaPrice, setCommaPrice] = useState()
    const [trigger, setTrigger] = useState(true)
    const { house_id } = useParams();
    const { isLoggedIn } = useOutletContext()

    const navigate = useNavigate()

    const apiKey = 'simplyrets';
    const apiSecret = 'simplyrets';
    const credentials = btoa(`${apiKey}:${apiSecret}`);

    //tomtom
    //const ttApiKey = import.meta.env.VITE_TOMTOM_API_KEY
    //const ttApiKey = 
    
  
    //console.log("no key",ttApiKey)

    const getHouse = async () => {
        console.log(house_id)
        let response = await axios.get(`https://api.simplyrets.com/properties/${house_id}`, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
        setHouse(response.data)
        getCoordinates()
    }

    const getCoordinates = async () => {
        console.log(house.address.postalCode)
        setCurrentZipcode(house.address.postalCode)
        console.log("zipcode",currentZipcode)
        let response = await axios
                                .get(`https://api.tomtom.com/search/2/geocode/${currentZipcode}%20United%20States.json?key=${ttApiKey}`)
                                .catch((err) => {
                                    console.error("Zipcode not found",err)})
        setPosition(response.data.results[0].position)
        console.log("are we null here or...?",position)
        getPointsofInterest()
        numberWithCommas()
    }

    const getPointsofInterest = async () => {
        let poi = await axios
                            .get(`https://api.tomtom.com/search/2/nearbySearch/.json?key=${ttApiKey}&lat=${position.lat}&lon=${position.lon}&radius=1610&limit=10&categoryset=7315`)
                            .catch((err) => {
                                    console.error("No interesting places!")
                                    })
        setPointsofInterest(poi.data.results)
        console.log(poi.data)
    }

    const getPreferences = async() => {
        try {
            let preferenceResponse = await api.get(`user_preferences/`)
            setPreferences(preferenceResponse.data)
            console.log("Preferences gathered", preferences)
        } catch (error) {
            console.log("Error gathering preferences: ", error)
        }
    }

    const getAllThoughts = async() => {
        try {
            let response = await api.get (`user_thoughts/house_thoughts/${house_id}/`)
            setAllThoughts(response.data)
            console.log("Thoughts gathered")  
        }catch (error) {
            console.log('Error gathering thoughts: ', error)
        } finally {
            console.log("stop making errors")
        }
    }

    const triggerThought = () => {
        setTrigger(!trigger)
    }
    
   
    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/")
        }
        getHouse()
        getPreferences()
        getAllThoughts()
        //getPointsofInterest()
    }, [])

    useEffect(() => {
        getAllThoughts()
    }, [trigger])

    const postThought = async (userThought) => {
        userThought.preventDefault()
        let data = {
            "thoughts":thought,
            "house_id":house_id
        }
        try {
            let response = await api
                .post("user_thoughts/", data)
                .catch((err) => {
                    alert("Thought failed to post")
                    console.error(err)
                })
            if (response && response.status === 201){
                console.log("successful post!")
                triggerThought()
                setThought("")
            }
        }catch (error) {
            console.log('Error posting thoughts: ', error)
        }
    }

    

    const numberWithCommas = () => {
        //console.log("housedetails",house.listPrice)
        setCommaPrice(house.listPrice.toLocaleString('en-US'));
    };

    const handleDoubleClick = () => {
        navigate(`/houses`)
    }

    //console.log("POI",pointsofInterest)

    return (
        <>
        <div id="details_page_div">
            <div id="details_div" onDoubleClick={handleDoubleClick}>
                {house ? (
                    <>
                    <div id="picture_div">
                    <Container>
                        <Row id="details_pictures_row">
                            {house.photos.length > 0 ? (house.photos.map((photo, index) => (
                            <Col xs={6} md={6} id="picture_column">
                            <Image key={index} src={photo} rounded id="details_pictures"/>
                            </Col>
                            ))): (<div>No photos available.</div>)}
                        </Row>
                    </Container>
                    </div>
                    <div id="major_deets_div"><h3>${commaPrice} - {house.address.full} - {house.property.yearBuilt}</h3></div>
                    <div id="remarks_div"><p>{house.privateRemarks.toLowerCase()}</p></div>
                    <div id="minor_deets_div">
                    <Buttons
                    house={house}
                    preferences={preferences}/>
                    </div>
                    <div id="interests_div">
                    {pointsofInterest.length > 0 ? (pointsofInterest.map((interest, index) => (
                        <button className="interests_buttons" key={index}>{interest.poi.categories[0]}: {interest.poi.name}</button>))):( <h5>No interesting places nearby...</h5>)}</div>
                    <div id="school_div">
                        <p>Elementary School: {house.school.elementarySchool}</p>
                        <p>Middle School: {house.school.middleSchool}</p>
                        <p>High School: {house.school.highSchool}</p>
                    </div>
                    <div id="contact_div">
                        <h5>{house.agent.contact.firstName} {house.agent.contact.lastName}</h5>
                        <p>Cell: {house.agent.contact.cell}</p>
                        <p>Email: {house.agent.contact.email}</p>
                    </div>
                    <div id="thoughts"><h4>thoughts</h4></div>
                    {allThoughts.length > 0 ? (allThoughts.map((thought, index) => (
                        <div key={thought.id} className="thoughts_div"><h5>{thought.username}</h5>{thought.thoughts}</div>))
                    ):( <div className="thoughts_div">No thoughts yet! Care to share yours?</div>)}
                    <div id="thought_create_div">
                    <form>
                    <textarea
                        placeholder="Tell me your thoughts."
                        value={thought}
                        onChange={(e) => setThought(e.target.value)}
                        id="thought_textarea"
                    ></textarea>
                    <input type="submit" value="Post" onClick={postThought}/>
                    </form>
                </div>
                </>
                ) : (
                    <div><h5>No details available!</h5></div>
                )}
            </div>
        </div>
        </>
    )
}
export default HousingDetailsPage