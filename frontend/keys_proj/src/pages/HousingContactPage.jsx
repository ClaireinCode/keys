import { useNavigate } from "react-router"
import { useOutletContext } from "react-router"
import { useEffect } from "react"

const HousingContactPage = () => {
    const { isLoggedIn } = useOutletContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/")
        }
    })

    return (
        <>
        </>
    )
}
export default HousingContactPage