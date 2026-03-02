import {useState} from "react";
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";

import './App.css'
import {ShmitterContext} from "./utils/context.js";


function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 11
    })
const changeAvatar = url => setUser({ ...user, avatar: url || user.avatar});

    return (
        <div className={'app'}>
            <ShmitterContext value={{//заменяет пропс дриллинг (от компонента в компонент,по наследованию )
                user, stats, changeAvatar, setStats //user: user, stats: stats если названия одинаковые ->>можно упрощенный вариант
            }} >
            <Navigation />
            <Body />
            </ShmitterContext>
        </div>


    )
}

export default App
