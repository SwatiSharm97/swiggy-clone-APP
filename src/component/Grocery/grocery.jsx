
import { useEffect, useState } from "react"
import TrafficSemulator from "./lightInfo"

const Grocery = ()=>{
    const [color, SetColor] =  useState(null)
    const trafficColor = {
        red: {
            backgroundColor: "red",
            duration: 4000,
            next: "green",
          },
          yellow: {
            backgroundColor: "yellow",
            duration: 500,
            next: "red",
          },
          green: {
            backgroundColor: "green",
            duration: 3000,
            next: "yellow",
        },}
        useEffect(()=>{
          SetColor(trafficColor)
        },[])
    return(
        <TrafficSemulator lightColor={color}/>

    )
}
export default Grocery