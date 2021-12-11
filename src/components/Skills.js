import Cpp from "../assets/cpp.png"
import C from "../assets/c.png"
import Three from "../assets/three.png"
import Git from "../assets/git.png"
import ReactLogo from "../assets/logo192.png"
import {Suspense} from "react";
import "../styles/Skill.sass"
import {Tooltip} from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll"

export function Skills() {

    return <Suspense fallback={null}>
        <ScrollAnimation animateIn={"fadeInUp"} className={"w-100"}>
            <div className={"d-flex w-100 justify-content-around"}>
                <Tooltip title={"C++\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} className={"title"}><img width={50} src={Cpp} alt={"no images to dispaly"}/></Tooltip>
                <Tooltip title={"C\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} className={"title"}><img width={50} src={C}  alt={"no images to dispaly"}/></Tooltip>
                <Tooltip title={"Three.js\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} className={"title"}><img width={50} src={Three} alt={"no images to dispaly"}/></Tooltip>
                <Tooltip title={"Git\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} className={"title"}><img width={50} src={Git} alt={"no images to dispaly"}/></Tooltip>
                <Tooltip title={"React.js\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} className={"title"}><img width={50} src={ReactLogo} alt={"no images to dispaly"}/></Tooltip>
            </div>
        </ScrollAnimation>
    </Suspense>
}
