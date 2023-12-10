import { useState, useEffect } from 'react';
import { api } from '../utilities'
import { useNavigate, Link, useOutletContext } from 'react-router-dom'


const HousingDetailsPage = () => {
    const [house, setHouse] = useState([])
    const [allThoughts, setAllThoughts] = useState([])
    const [thought, setThought] = useState(null)
    const {house_id} = useOutletContext()

    const apiKey = 'simplyrets';
    const apiSecret = 'simplyrets'
    const credentials = btoa(`${apiKey}:${apiSecret}`)

    useEffect (() => {
        const getHouse = async () => {
        let response = await axios.get(`https://api.simplyrets.com/properties/${house_id}`, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
        setHouse(response.data)
      }
      getHouse()
    })

    useEffect(() => {
        const getAllThoughts = async() => {
            try {
                let response = await api.get (`house_thoughts/${house_id}/`)
                setAllThoughts(response.data)  
            } catch (error) {
                console.log('Error gathering thoughts: ', error)
            }
        }
        getAllThoughts()
    }, [])

    const postThought = async (userThought) => {
        userThought.preventDefault()
        let data = {
            "thought":thought,
            "house_id":house_id
        }
        try {
            let response = await api
                .post("thoughts/", data)
                .catch((err) => {
                    alert("Thought failed to post")
                    console.error(err)
                })
            if (response.status === 201){
                window.location.reload()
            }
        }catch (error) {
            console.log('Error posting thoughts: ', error)
        }
    }

    return (
        <>
        <div>
            <div>
                <div id="picture_div">House Pictures{house.photos}</div>
                <div id="details_div">Detail Buttons{house.property.map((ahouse, idx)=>(<button key={idx}>{ahouse}</button>))}</div>
                <div id="remarks_div">Remarks<p>{house.privateRemarks}</p></div>
                <div id="thoughts">Thoughts</div>
                {allThoughts.map((thought) => (
                    <div key={thought.id}>{thought.thoughts}</div>
                ))}
                <div id="thought_create_div">
                    <form>
                    <textarea
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <input type="submit" value="Post" onClick={postThought}/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default HousingDetailsPage