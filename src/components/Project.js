import '../styles/Project.sass'
import React, {useState} from 'react'
import AnimateHeight from "react-animate-height";

export function Project(props) {

    const [height, setHeight] = useState(100)

    return <div className={"project eurostile pb-4"}>
        <div>
            {props.children}
        </div>
        <div className={"headline project-details mt-2"}>
            <AnimateHeight
                duration={ 500 }
                height={ height }
            >
                <div className={"eurostile m-3"}>
                    TITLE
                </div>
                <div className={"m-3"}>
                    {props.content}
                </div>
            </AnimateHeight>

        </div>
        {/* eslint-disable-next-line */}
        {height == 'auto' ?
            <div onClick={() => setHeight(100)} className={"read-more align-self-end headline p-1"}>
                read less
            </div> : <div onClick={() => setHeight('auto')} className={"read-more align-self-end headline p-1"}>
                read more
            </div>

        }

    </div>

}