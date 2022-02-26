import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react"

//FARE ATTENZIONE A QUELLA STRA_MALEDETTE GRAFFE! -> "{...}"
export default function Post({ post }) {
    // console.log(post)

    // //metodo per ricercare lo user collegato al "post"
    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].username)

    //questo permette di gestire i "like" della pagina
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked
                ? like - 1
                : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    {/* "post?" si mette perché il valore "description" non è presente in tutti i "post", nullable*/}
                    <span className="postText">{post?.description}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
