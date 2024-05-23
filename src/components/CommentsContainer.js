
const commentsData = [
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : [
            {
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : []
            },{
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : [
                    {
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : []
                    },{
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : []
                    },
                ]
            },{
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : [
                    {
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : []
                    },{
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : []
                    }
                ]
            }
        ]
    },
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : [
            {
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : [
                    {
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : []
                    }
                ]
            },{
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : []
            },
        ]
    },
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : []
    },
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : [
            {
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : [
                    {
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : [
                            {
                                name : "Kiran", 
                                comment : "Great Video watched multiple times", 
                                reply : []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : []
    },
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : []
    },
    {
        name : "Kiran", 
        comment : "Great Video watched multiple times", 
        reply : [
            {
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : []
            },
            {
                name : "Kiran", 
                comment : "Great Video watched multiple times", 
                reply : [
                    {
                        name : "Kiran", 
                        comment : "Great Video watched multiple times", 
                        reply : [
                            {
                                name : "Kiran", 
                                comment : "Great Video watched multiple times", 
                                reply : []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const Comment = ({data}) =>{
    return(
        <div className = "flex items-center bg-gray-100 mb-2 shadow-md">
            <img className = "w-12 h-12" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNd5qrg42z1uw3oSx2bSLXN0hFipA3hzKgwhgsJoOBT7iNKGM9UjF7ZgpdwDQEH9q7LVM&usqp=CAU" alt = "comment-user"/>
            <div className = "m-2">
              <h2 className = "font-semibold">{data.name}</h2>
            <p>{data.comment}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comment})=>{
    return  comment.map((data, index)=> 
    <div>
    <Comment key = {index} data = {data}/>
    <div className = "pl-4 border border-l-black ml-4">
        <CommentsList comment = {data.reply}/>
    </div>

</div>
)
}
const CommentsContainer = () => {
    return(
        <div>
            <h1 className = "font-bold text-xl">Comments</h1>
            {<CommentsList comment = {commentsData}/>}
        </div>
    )
}
export default CommentsContainer