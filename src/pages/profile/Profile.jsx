import "./profile.css"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

export default function Profile() {
  return (
    <>
        <Topbar></Topbar>
        <div className="profile">
            <Sidebar></Sidebar>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img className="profileCoverImg" src="assets/post/8.jpeg" alt="" />
                  <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">Thomas Diacci</h4>
                  <span className="profileInfoDescription">I'm learning React</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
              </div>
            </div>
        </div>
    </>
  )
}
