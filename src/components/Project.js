import '../styles/Project.sass'
import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import Cpp from "../assets/cpp.png"
import C from "../assets/c.png"
import "../styles/Skill.sass"

export function Project(props) {

    return <ScrollAnimation animateIn={"fadeInUp"} animateOut={"fadeOut"} duration={0.4 + props.delay ? props.delay : 0.} className={"project mb-5 eurostile"}>
            <div className={"d-flex"}>
                <div className={"col-5 p-0"}>
                    {props.children}
                </div>
                <div className={"col-7 d-flex flex-column justify-content-between pl-4"}>
                    <div className={"title-project"}>TITLE</div>
                    <div>
                        <div className={"eurostile mb-4 skill-title"}>Skills
                        <div className={"line"}></div>
                        </div>
                        <div className={"d-flex w-25 justify-content-between"}>
                            <img width={50} src={Cpp} alt={"no images to dispaly"}/>
                            <img width={50} src={C}  alt={"no images to dispaly"}/>
                        </div>
                    </div>
                    <div className={"content-project"}>
                        {props.content}
                    </div>
                </div>
            </div>
    </ScrollAnimation>

}
