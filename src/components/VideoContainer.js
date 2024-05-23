import {useEffect, useState} from "react"
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import Videocards, { AdVideo } from "./Videocards"
import { Link } from "react-router-dom"
const VideoContainer = () =>{
  const [videos , setVideos] = useState([])

    useEffect(()=>{
      getVideos()
    }, [])
    
    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const jsonData = await data.json()
        setVideos(jsonData.items)
        
    }
    return (
        <div className = "flex justify-center flex-wrap">
        {videos[0] && <AdVideo videos = {videos[0]}/>}
         {videos.map((video) => {
            return <Link key = {video.id.videoId} to = {"/watch?v="+ video.id}><Videocards  videos = {video}/></Link>
          })
          }
        </div>
    )
}

export default VideoContainer













