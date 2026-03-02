import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar,changeAvatarName} = useContext(ShmitterContext);//хук принимает контекст ,а возвращает вэлью
    const rClickName = (e) => {
        e.preventDefault();//откл меню пр клав
        const name = prompt('Enter avatar name');
        changeAvatarName(name);
    }
const clickAvatar = () => {
    const url = prompt('Enter avatar URL');
    changeAvatar(url);
}
    return (
        <img
            onClick={clickAvatar}
            onContextMenu={rClickName}
            className={`user-avatar ${size ?? ''}`}
            src= {user.avatar}
            alt= {user.name}/>
    );
};

export default Avatar;

//const rightClickNew = (e) => {
//         e.preventDefault();//откл меню пр клав
//         const url = prompt('Enter avatar URL');
//         changeAvatar(url);