import "./closeFriend.css"

//FARE ATTENZIONE A QUELLA STRA_MALEDETTE GRAFFE! -> "{...}"
export default function CloseFriend({ user }) {
    //console.log(user)

    // //metodo per ricercare lo user collegato al "post"
    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].username)

  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt=""/>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
