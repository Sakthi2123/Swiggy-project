import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { RESTAURANT_MENU_URL } from "../Body/config/utils";
                                
const RestaurantInfo = ()=>{
    const [card1Info,setcard1Info]=useState([]);
    useEffect(()=>{
        getRestaurantMenu();
    },[])

    const {restaurantId} = useParams();

    const getRestaurantMenu = async()=>{
        const fetchData = await fetch(`${RESTAURANT_MENU_URL}${restaurantId}`);
        const data = await fetchData.json()
        console.log("menuData",data);
        setcard1Info(data?.cards[0]?.card?.card?.info)
    }
    if(card1Info.length===0)
    return "data loading";
    return(
        <div>
            
        </div>
    )
}
export default RestaurantInfo;