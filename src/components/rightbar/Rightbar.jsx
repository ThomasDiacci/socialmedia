import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar ({ profile }) {

    //spacchetto "HomeRightbar" e "ProfileRightbar", così in base al chiamanet modulerò la pagina (se "Home" o "Profile")
    const HomeRightbar = () => {
        return(
            <>
            <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt="" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other Friends</b> have a birthday.
                </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt=""/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u=>(
                    <Online key={u.id} user={u}/>
                ))}
            </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Bologna</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Italy</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Engaged</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
                    <span className="rightbarFollowingName">Mirco Bertocchi</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
                    <span className="rightbarFollowingName">Abba Sika</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
                    <span className="rightbarFollowingName">Marco Carta</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {/* se arriverà un "profile" allora lancerà "ProfileRightbar" altrimenti "HomeRightbar" */}
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}