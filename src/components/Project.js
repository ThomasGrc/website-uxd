import '../styles/Project.sass'
import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

export function Project(props) {

    return <ScrollAnimation animateIn={"fadeInUp"} animateOut={"fadeOut"} duration={0.4 + props.delay ? props.delay : 0.} className={"project mb-5 eurostile"}>
            <div className={"d-flex"}>
                <div className={"col-5 p-0"}>
                    {props.children}
                </div>
                <div className={"col-7"}>
                    <div className={"title-project"}>TITLE</div>
                    {props.content}
                </div>
            </div>
    </ScrollAnimation>

}
