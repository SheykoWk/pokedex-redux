import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import getPokemonById from "../services/getPokemonById"

const Pokemon = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [pokeName, setPokeName] = useState('')

    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
                console.log(res.data)
                setPokeName(res.data.name)
            })
    }, [id])

    return(
        <div>
            {pokeName}
            <br/>
            <button onClick={() => navigate(-1)}>Atras</button>
        </div>
    )
}

export default Pokemon