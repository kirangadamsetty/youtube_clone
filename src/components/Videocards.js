const Videocards = ({videos}) =>{
 const {snippet, statistics} = videos
 const {title , thumbnails} = snippet
 
    return(
        <div className  = "w-64 m-2">
        <img alt = "thumbnail" src = {thumbnails.medium.url} className = "rounded-md"/>
        <h1 className = "font-semibold text-md" >{title}</h1>
        <h1 className = "text-sm">{snippet.channelTitle}</h1>
      <p className = "text-sm">{statistics.viewCount}</p>
        </div>
    )
}

//higher order function which will takes a function enhances it and send the component back
export const AdVideo = ({videos})=>{
    return(
      <div className  = "border border-red-400 p-1">
        <Videocards videos = {videos}/>
      </div>
    )
  }
  export default Videocards
