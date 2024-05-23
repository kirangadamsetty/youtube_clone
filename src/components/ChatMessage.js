const ChatMessage = ({name , message}) =>{
    return(
        <div className  = "flex items-center py-2 shadow-sm">
          <img className = "h-8" alt = "user-icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNd5qrg42z1uw3oSx2bSLXN0hFipA3hzKgwhgsJoOBT7iNKGM9UjF7ZgpdwDQEH9q7LVM&usqp=CAU"/>
        <div className = "flex px-2">
        <h2 className = "font-semibold px-2">{name}</h2>
        <p>{message}</p>
        </div>
        </div>
    )
}

export default ChatMessage