import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Stats = () => {
    const value = useContext(ShmitterContext);//или декструризацию {user,stats}
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar />
                {value.user.name}
            </div>
            <div className={'stats'}>
                <div>Followers:{value.stats.followers}</div>
                <div>Following:{value.stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;