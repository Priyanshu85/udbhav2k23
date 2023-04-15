import React from "react"
import {IoLogoWhatsapp} from 'react-icons/io'
import "../../../pages/Teams/teams.css"
import { Container } from "./style"
import {LazyLoadImage} from "react-lazy-load-image-component"


// export function Cardover(props){
//     const cardstyle={
//         backgroundColor:props.color
//     }
//     return(
//         <div className='grid grid-cols-2 cardover rounded-2xl xs:w-56 sm:w-56 md:w-56 xl:w-60' style={cardstyle}>
//             <div className='grid grid-cols-2 gap-12 z-10'>
//                 <h1 className='text-4xl font-bold py-5 px-2'>{props.name}</h1>
//             <a href={props.link} target="_blank"><div className='flex gap-2 align-text-top'><IoLogoWhatsapp/>Whatsapp</div></a>
//             </div>
//             <LazyLoadImage src={props.image} alt="Image" />
//         </div>
//     )
// }
export function CardOverlay(props){
    const [hover, setHover] = React.useState(false);
    return(
        <Container
      style={{
        backgroundColor:props.color,
        backgroundImage: hover
          ? `linear-gradient(128deg, #0000006b 0%, #0000006b 100%), url(${props.image})`
          : `linear-gradient(128deg, #65429987 4%, #6170ba46 46%, #2acabf46 81%), url(${props.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="cardover rounded-full w-32 h-32 xs:w-36 xs:h-36 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44 "
    >
      <div
        style={{
          display: hover ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
        }}
      >
        <div className="font-bold text-sm xs:text-sm sm:text-sm md:text-md lg:text-lg mb-2">{props.name}</div>
        <a href={props.link} className='px-2 flex gap-2 items-center justify-center text-sm xs:text-xs sm:text-sm md:text-md lg:text-lg'><IoLogoWhatsapp className="text-2xl text-emerald-400 hover:text-emerald-300"/>Whatsapp</a>
      </div>
    </Container>
    )
}