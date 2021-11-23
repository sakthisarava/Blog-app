import { useLocation } from "react-router"
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

 function Home() {
    const location = useLocation();
    console.log(location);
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts />
            <Sidebar />
        </div>
        </>
    )
}

export default Home;
