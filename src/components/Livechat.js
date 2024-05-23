import ChatMessage from "./ChatMessage"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { addMessage } from "../utils/chatSlice"
import { generateRandomName , randomTextGenerator} from "../utils/helper"

const Livechat = ({name , message}) =>{
const [liveChatMessage, setLiveChatMessage] = useState("")
const dispatch = useDispatch()
 const chatMessages = useSelector(store => store.chat.message)   
   useEffect(()=>{
  const i =  setInterval(()=>{
     dispatch(addMessage({
        name : generateRandomName(), 
        message : randomTextGenerator(20)
     }))

    }, 1500)
     
    return (()=> clearInterval(i))
   }, [])



    return(
        <form onSubmit = {(e)=>{
            e.preventDefault()
            dispatch((addMessage({
                name : "Kiran",
                message : liveChatMessage
            })))
            setLiveChatMessage("")
        }}>
                <div className = "w-full mx-2 p-2 bg-slate-50 h-[600px] overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((e, index)=> <ChatMessage key = {index} name = {e.name} message = {e.message}/>)}
          
        </div>
       <div className = "border border-black mx-2 px-2 w-full rounded-md">
        <input type = "text" className = "w-5/6 m-2 px-2" value = {liveChatMessage}
            onChange = { ((e)=> {
                 setLiveChatMessage(e.target.value)
            })}
        />
        <button className = "border border-black bg-gray-100 px-2"
        
        >Send</button>
       </div>
        </form>
    )
}
export default Livechat