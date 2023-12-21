import { useState, useEffect } from 'react';
import { api } from '../utilities'
import { useParams, Link, useOutletContext, useNavigate } from 'react-router-dom'

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

    const deleteThought = async (thought_id) => {
        try {
          const response = await api.delete(`user_thoughts/${thought_id}`, {
          });
      
          console.log('Thought deleted');
        } catch (error) {
          console.error('Error deleting thought:', error);
        }
        getAllThoughts()
      };
    
    const handleDoubleClick = async() => {
        navigate(`/house_details/${thought.house_id}`)
    }
   
    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/")
        }
        getAllThoughts()
    }, [])

    return (
        <>
        <div id="thoughts_page">
        <div id="personal_thoughts"><h4>Your Thoughts</h4></div>
            {allThoughts.length > 0 ? (allThoughts.map((thought, index) => (
                <div key={thought.id} className="thoughts_div"><h5>{thought.house_id}</h5>{thought.thoughts}<button onClick={() => deleteThought(thought.id)}>Trash</button></div>))
            ):( <div className="thoughts_div">No thoughts yet!</div>)}
        <div id="thought_create_div"></div>
        </div>
        </>
    )
}
export default ProfileThoughtsPage