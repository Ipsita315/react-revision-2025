import { useEffect,useState } from "react";
import { RES_PROFILE_URL } from "../Constants";

const useResProfile = (resId) => {
    const [resProfile, setResProfile] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let url = RES_PROFILE_URL + resId;

        let data = await fetch(url);
        let json = await data.json();
        console.log("json : ", json);
        setResProfile(json);
    }

    return resProfile;
};

export default useResProfile;