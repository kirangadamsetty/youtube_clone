import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Sidebar = () =>{
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    //Early Return Pattern
    if(!isMenuOpen) return null

    return(
        
        <div className = "p-4 w-36 shadow-xl relative z-[10000] bg-white">
            <ul className = "p-2">
               <li className = "p-0.5"> <Link to ="/">Home</Link></li>
                <li className = "p-0.5">Shorts</li>
                <li className = "p-0.5">Subscriptions</li>
            </ul>
            <hr className = "my-4"/>
            <h1 className = "font-bold text-2lg px-2">You </h1>
            <ul className = "p-2">
                <li className = "p-0.5">Your Channel</li>
                <li className = "p-0.5">History</li>
                <li className = "p-0.5">Playlists</li>
                <li className = "p-0.5">Your videos</li>
                <li className = "p-0.5">Watch Later</li>
                <li className = "p-0.5">Liked Videos</li>
                
            </ul>
           
            <hr className = "my-4"/>
            <h1 className = "font-bold text-2lg px-2">Explore</h1>
            <ul className = "p-2">
                <li className = "p-0.5">Trending</li>
                <li className = "p-0.5">Shopping</li>
                <li className = "p-0.5">Music</li>
                <li className = "p-0.5">Movies</li>
                <li className = "p-0.5">Live</li>
                <li className = "p-0.5">Gaming</li>
                <li className = "p-0.5">News</li>
                <li className = "p-0.5">Sports</li>
                <li className = "p-0.5">Courses</li>
                <li className = "p-0.5">Fasion & Beauty</li>
                <li className = "p-0.5">Podcasts</li>
            </ul>
        </div>
    )
}
export default Sidebar