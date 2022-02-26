import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar () {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Racoon Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"></Search>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person></Person>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat></Chat>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                {/* immagine del profilo */}
                <img src="/assets/person/5.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}