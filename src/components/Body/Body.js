import RestaurantContainer from "../Restaurant/RestaurantContainer";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";
import "./Body.scss";
const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline. Please check your internet connection !!!</h1>
  }
  return (
    <div className="body-container"><RestaurantContainer /></div>
  )
}

export default Body;