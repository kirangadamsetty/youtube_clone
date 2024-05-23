import Buttons from "./Buttons"
const bodyButtons = ["All" , "Live" ,"Music", "Cricket",  "TeluguMovies" , "News" , "Gaming" , "Sports", "BakthiTV", "Comedy"]


const ButtonList  = () =>{

    return (
        <div className = "flex">
        {bodyButtons.map((value, index) => {
          return <Buttons key = {index} name = {value}/>
        })
        }
        </div>
    )
}
export default ButtonList