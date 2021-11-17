import '../styles/Project.sass'
import React, {useState} from 'react'

export function Project(props) {

    const [expand, setExpand] = useState();
    return <div className={"project eurostile"}>
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
            <div className={"m-3"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div onClick={() => setExpand(true)} className={"read-more align-self-end headline p-1"}>
                Read more
            </div>
        </div>
    </div>

}