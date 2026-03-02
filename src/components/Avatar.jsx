import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar} = useContext(ShmitterContext);//хук принимает контекст ,а возвращает вэлью
    const rightClickNew = (e) => {
        e.preventDefault();//откл меню пр клав
        const url = prompt('Enter avatar URL');
        changeAvatar(url);

    }
    return (
        <div onContextMenu={rightClickNew}>
            <img
                className={`user-avatar ${size ?? ''}`}
                src={user.avatar}
                alt={user.name}/>
        </div>
    );
};

export default Avatar;