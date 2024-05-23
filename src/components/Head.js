import {toggleMenu} from "../utils/appSlice"
import {useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import { YOUTUBE_SEARCH } from "../utils/constants"
import { useSelector } from "react-redux"
import { cacheResults } from "../utils/searchSlice"
import {Link} from "react-router-dom"

const Head  =() =>{
    const [searchQuery , setSearchQuery] = useState("")
   const [suggestionList , setSuggestionList] = useState([])
   const [showSuggestions , setShowSuggestions] = useState(false)
    const searchCache = useSelector((store)=>store.search)
     useEffect(()=>{
        //debouncing
    const time =  setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestionList(searchCache[searchQuery])
      }else{                                                       
        getSearchData()                                 
      }
    }
  , 200) 
    return(()=>{
        clearTimeout(time)
    })
    }, [searchQuery])

    const getSearchData = async () =>{
        const data = await fetch(YOUTUBE_SEARCH + searchQuery)
        const jsonData  = await data.json()
        setSuggestionList(jsonData[1])
       
       dispatch(cacheResults({
        [searchQuery] : jsonData[1]
       }))  

       }
       const dispatch = useDispatch()
       const handleSidebar = () =>{
        dispatch(toggleMenu()) 
    }

    return (
        <div className = "grid grid-flow-col py-2 items-center  bg-white shadow-lg w-full">
        <div className = "flex col-span-2">
           <img onClick  = {handleSidebar} className = "cursor-pointer h-16" alt = "handburger-icon" src = "https://www.svgrepo.com/show/312300/hamburger-menu.svg"/>
          <img className = "h-16" alt = "youtube-logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9Y4p9eDSg1Zu8VREncY5JHV93Du97yRG2u8TZDgHeCJBbEdQ-ynRpgB6bJl7ciCre_8&usqp=CAU"/>
      
           
           
           </div>
           <div className = "col-span-8">
           <div>

            <input type = "text" placeholder = "Search" 
            className = "w-6/12 border border-black rounded-l-full p-[5px] px-4"
            value = {searchQuery}
            onChange = {((e)=>setSearchQuery(e.target.value))}
            onClick = {(()=> setShowSuggestions(true))}
            onBlur = {(()=> setShowSuggestions(false))}

            />
            <button className = "border bg-gray-100 border-black rounded-r-full p-[5px] px-4">🍳</button>            
           </div>
        { showSuggestions && <div className = "bg-white absolute rounded-md shadow-lg px-3 w-4/12 border border-gray-200">
<ul>
  {suggestionList.map((name)=><li>{name}</li>)}
</ul>
</div>}

</div>

           <div className = "col-span-2">
            <img className = "h-8" alt = "user-icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNd5qrg42z1uw3oSx2bSLXN0hFipA3hzKgwhgsJoOBT7iNKGM9UjF7ZgpdwDQEH9q7LVM&usqp=CAU"/>
           </div>
        </div>
    )
}
export default Head