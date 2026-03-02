import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Stats = () => {
    const {user,stats,setStats} = useContext(ShmitterContext);//или декструризацию {user,stats}
    const upDownMouseAct = (e) => {
        if (e.button === 0) {
            setStats(prev => ({
                ...prev,
                followers: prev.followers + 1

            }));
        }
        if (e.button === 2) {
            e.preventDefault();
            setStats(prev => ({
                ...prev,
                followers: Math.max(0, prev.followers - 1)
            }));
        }
    }
    const upDownMouseAct2 = (e) => {
        if (e.button === 0) {
            setStats(prev => ({
                ...prev,
                following: prev.following + 1

            }));
        }
        if (e.button === 2) {
            e.preventDefault();
            setStats(prev => ({
                ...prev,
                following: Math.max(0, prev.following - 1)
            }));
        }
    }
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onMouseDown={upDownMouseAct}
                     onContextMenu={(e) => e.preventDefault()}
                     style={{cursor: 'pointer'}}
                >
                    Followers:{stats.followers}</div>
                <div onMouseDown={upDownMouseAct2}
                                onContextMenu={(e) => e.preventDefault()}
                                style={{cursor: 'pointer'}}>
                    Following:{stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;