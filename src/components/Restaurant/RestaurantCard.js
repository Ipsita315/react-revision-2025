import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
    const navigate = useNavigate();
    let { name, avgRating, costForTwo, sla, cuisines, cloudinaryImageId, id } = resData?.info;
    
    const handleClick = () => {
        navigate("/res-profile/" + id);
    }

    return (
        <section className='res-card' onClick={handleClick}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <div>{name}</div>
            <div>{avgRating} stars</div>
            <div>{costForTwo}</div>
            <div>{sla.slaString}</div>
            <div>{cuisines.join(", ")}</div>
        </section>
    )
}

export default RestaurantCard;