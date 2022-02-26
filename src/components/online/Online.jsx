import "./online.css"

//FARE ATTENZIONE A QUELLA STRA_MALEDETTE GRAFFE! -> "{...}"
export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
