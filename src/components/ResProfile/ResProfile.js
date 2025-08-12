import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResProfile from "../../utils/Hooks/useResProfile";

const ResProfile = () => {
    const { id } = useParams();
    const resProfile = useResProfile(id);
    console.log("Res profile: ", resProfile);
    if (resProfile == null || resProfile == undefined) {
        return <Shimmer />
    }

    const { name, avgRating, costForTwoMessage, cuisines, areaName, sla } = resProfile?.data?.cards[2]?.card?.card?.info;
    return (
        <div className="res-profile">
            <h1>{name}</h1>
            <h2>Rating {avgRating} - {costForTwoMessage}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>Outlet - {areaName}</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    )
};

export default ResProfile;

