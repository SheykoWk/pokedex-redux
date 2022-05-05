import { useEffect, useState } from "react"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./PokeType"

const PokeItem = ({url}) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] = useState([])
    const [hp, setHp] = useState(0)

    useEffect(() => {
        getInfoByUrl(url)
            .then((res) =>{ 
            setPokeObj(res.data)
            setPokeImg(res.data.sprites.front_default)
            setTypesArr(res.data.types)
            setHp(res.data.stats[0].base_stat)
        })
    }, [url])



    return(
        <div>
            <img src={pokeImg} alt='' /> 
            <h1>{pokeObj.name}</h1>
            {typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}
            <h2>HP: {hp}</h2>
        </div>
    )
}

export default PokeItem