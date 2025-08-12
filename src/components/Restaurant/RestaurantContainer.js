import { useEffect, useState } from "react";
import "./Restaurant.scss";
import RestaurantCard from './RestaurantCard';
import Shimmer from "../Shimmer/Shimmer";

const RestaurantContainer = () => {
    const [resList, setResList] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const fetchResList = async () => {
        let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(url);
        const json = await response.json();

        console.log("res list api :", json);
        console.log("restaurant list: " , json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        let resArr = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(resArr);
        setFilteredRes(resArr);
    };

    useEffect(() => {
        fetchResList();
    }, []);

    const handleClick = () => {
        let topRes = resList.filter(res => res.info.avgRating > 4.2);
        console.log("Filtered res: ", topRes);
        setFilteredRes(topRes);
    }

    const handleSearch = () => {
        const filteredRes = resList.filter(res => res.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRes(filteredRes);
    }

    // if (filteredRes.length === 0) {
    //     return <Shimmer />
    // }

    return resList.length === 0 ? <Shimmer /> : (
        <>
            <button className="top-res-btn" onClick={handleClick}>Top Restaurants</button>
            <button className="top-res-btn" onClick={() => {
                setFilteredRes(resList);
            }}>All Restaurants</button>
            <div>
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => {
                    console.log(e.key);
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }} />
                <button onClick={handleSearch} >Search</button>
            </div>
            <section className='res-container'>
                {filteredRes.map(res => <RestaurantCard key={res.info.id} resData={res} />)}

            </section>
        </>
    );
}

export default RestaurantContainer;