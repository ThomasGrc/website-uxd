import '../styles/Project.sass'
import React, {useState, useEffect} from 'react'
import AnimateHeight from "react-animate-height";

export function Project(props) {

    const [height, setHeight] = useState(100)

    return <div className={"project eurostile w-100"}>
        <div className={"project-header"}>
            <div style={{marginRight: '1%'}}>
                {props.title ? props.title : "NO TITLE"}
            </div>
            <div className={"square"}></div>
        </div>
        <div>
            {props.children}
        </div>
        <div className={"headline project-details mt-2"}>
            <AnimateHeight
                duration={ 500 }
                height={ height }
            >
                <div className={"m-3"}>
                    {props.content}
                </div>
            </AnimateHeight>

        </div>
        {height == 'auto' ?
            <div onClick={() => setHeight(100)} className={"read-more align-self-end headline p-1"}>
                read less
            </div> : <div onClick={() => setHeight('auto')} className={"read-more align-self-end headline p-1"}>
                read more
            </div>

        }

    </div>

}