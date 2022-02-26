import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import { Posts } from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          {/* qua vanno i post degli altri utenti */}
          <Share></Share>
          {/* ciclo su tutti gli elementi di "Posts" e li passo come proprietà a "Post" */}
          {Posts.map(p=>(
            <Post key={p.id} post={p}/>
          ))}
        </div>
    </div>
  )
}
