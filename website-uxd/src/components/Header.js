import '../styles/Header.sass'
import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin';
import {Box} from "./Box";
import {useEffect} from "react";

export function Header(props) {

    var backgroundClass = "";

    document.addEventListener('scroll', (e) => {
        if (window.scrollY > 100)
            backgroundClass = "header-background"
        else
            backgroundClass = ""

    })

    return <div className={`header ${backgroundClass} d-flex justify-content-between w-75 eurostile m-5`}>
        <div className={"header-name"}>
            <div className={"logo-container"}>
                <Box />
            </div>
            <div className={"clickable"} style={{marginLeft: '1%'}}>
                {props.name ? props.name : "NO NAME"}
            </div>
        </div>
        <div className={"headline header-links d-flex "}>
            <div className={"clickable"}>
                SOUND VISUALIZER
            </div>
            <div className={"clickable"}>
                TERRAIN GENERATOR
            </div>
            <div className={"clickable"}>
                ADOBE XD
            </div>
          </div>

        <div className={"external-links"}>
            <Github onClick={() => window.open("https://github.com/ThomasGrc/website-uxd")}/>
            <Linkedin onClick={() => window.open("https://www.linkedin.com/in/thomas-garcia-4b8016180/")}/>
        </div>
    </div>

}