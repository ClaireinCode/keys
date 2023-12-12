import { useState, useEffect } from 'react';
import { api } from '../utilities'
import { useParams, Link, useOutletContext, useNavigate } from 'react-router-dom'
import axios from 'axios'


const ProfileThoughtsPage = () => {
    const [house, setHouse] = useState(null)
    const [allThoughts, setAllThoughts] = useState([])
    const [thought, setThought] = useState(null)
    const { house_id } = useParams();
    const { isLoggedIn } = useOutletContext()

    const navigate = useNavigate()

    const getAllThoughts = async() => {
        try {
            let response = await api.get (`user_thoughts/`)
            setAllThoughts(response.data)
            console.log("Thoughts gathered")  
        }catch (error) {
            console.log('Error gathering thoughts: ', error)
        }
    }
    
   
    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/")
        }
        getAllThoughts()
    }, [])

    return (
        <>
        <div id="personal_thoughts"><h4>Thoughts</h4></div>
            {allThoughts.length > 0 ? (allThoughts.map((thought, index) => (
                <div key={thought.id} className="thoughts_div"><h5>{thought.house_id}</h5>{thought.thoughts}</div>))
            ):( <div className="thoughts_div">No thoughts yet!</div>)}
        <div id="thought_create_div"></div>
        </>
    )
}
export default ProfileThoughtsPage