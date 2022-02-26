//dopo react 17 non c'è più bisogno di importare "React" su ogni progetto, lo fa automativamente
//import React from "react";
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"

export default function Home() {
    return(
        //non si possono usare multi componenti nel "return" separatamente
        // <Topbar></Topbar>
        // <Sidebar></Sidebar>
        //per poterlo fare devo usare i "Fragments":
        <>
            <Topbar></Topbar>
            <div className="homeContainer">
                <Sidebar></Sidebar>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}