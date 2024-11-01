import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        console.log('Hola')
    }, []);
    return (
        <div>Hola</div>
    )
}

export default Home