import {useDispatch} from "react-redux"
import {closeMenu} from "../utils/appSlice"
import {useEffect} from "react"
import CommentsContainer from "./CommentsContainer"
import Livechat from "./Livechat"
import { useSearchParams } from "react-router-dom"
const WatchPage = () =>{
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  useEffect(()=>{
    dispatch(closeMenu())
  }, [])
 
    return(
      <>
      <div className = "flex flex-col w-full absolute">
      <div className = "px-5 flex">
        <div>
         <iframe  width="1100" height="600" src={"https://www.youtube-nocookie.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      <div className = "w-full">
       <Livechat/>
       </div>
        </div>
        <div className = "px-5">
        <CommentsContainer/>
        </div>
        </div>
       
        </>
    )
}
export default WatchPage