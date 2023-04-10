import {IoLogoWhatsapp} from 'react-icons/io'
import "../../../pages/Teams/teams.css"
import cardman from "../../../assets/Teams/cardman-2.svg"
import woman from "../../../assets/Teams/woman.png"
export function Teamscards(props){
    return(
        <div className='card'>
            <img src={props.image}/>
            <div className='overlay'>
            {/* <h1>{props.name}</h1> */}
            <a href={props.link}><div className='flex gap-3'><IoLogoWhatsapp/>Whatsapp</div></a>
            </div>
            
        </div>
    )
}
export function Cardover(props){
    const cardstyle={
        backgroundColor:props.color
    }
    return(
        <div className='grid grid-cols-2 cardover rounded-2xl' style={cardstyle}>
            <div className='grid grid-cols-1 gap-24 z-10'>
                <h1 className='text-5xl font-bold p-5'>{props.name}</h1>
            <a href={props.link} className='px-5 '><div className='flex gap-3'><IoLogoWhatsapp/>Whatsapp</div></a>
            </div>
            <img src={props.image} className='card-img'/>
        </div>
    )
}