import { useEffect, useState } from "react"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./PokeType"
import { Link } from 'react-router-dom'


const PokeItem = ({url}) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] = useState([])
    const [hp, setHp] = useState(0)
    const [pokeId, setPokeId] = useState(null)

    useEffect(() => {
        getInfoByUrl(url)
            .then((res) =>{ 
            setPokeObj(res.data)
            setPokeImg(res.data.sprites.front_default)
            setTypesArr(res.data.types)
            setHp(res.data.stats[0].base_stat)
            setPokeId(res.data.id)
        })
    }, [url])



    return(
        <Link to={`/pokedex/${pokeId}`}>
            <div style={{margin: "15px", backgroundColor: "#333", borderRadius: "8px" }} >
                <img src={pokeImg} alt='' /> 
                <h1>{pokeObj.name}</h1>
                {typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}
                <h2>HP: {hp}</h2>
            </div>
        </Link>
    )
}

export default PokeItem