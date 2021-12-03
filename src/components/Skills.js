import Cpp from "../assets/cpp.png"
import C from "../assets/c.png"
import Three from "../assets/three.png"
import Git from "../assets/git.png"
import ReactLogo from "../assets/logo192.png"
import {Suspense} from "react";
import "../styles/Skill.sass"
import {Tooltip} from "@mui/material";

export function Skills() {

    return <Suspense fallback={null}>
        <div className={"d-flex w-100 justify-content-around"}>
            <Tooltip title={"C++"} className={"title"}><img width={50} src={Cpp} alt={"no images to dispaly"}/></Tooltip>
            <Tooltip title={"C"} className={"title"}><img width={50} src={C}  alt={"no images to dispaly"}/></Tooltip>
            <Tooltip title={"Three.js"} className={"title"}><img width={50} src={Three} alt={"no images to dispaly"}/></Tooltip>
            <Tooltip title={"Git"} className={"title"}><img width={50} src={Git} alt={"no images to dispaly"}/></Tooltip>
            <Tooltip title={"React.js"} className={"title"}><img width={50} src={ReactLogo} alt={"no images to dispaly"}/></Tooltip>
        </div>
    </Suspense>
}