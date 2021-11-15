import '../styles/Header.sass'

export function Header(props) {

    return <div className={"header cubano"}>
        <div className={"header-name"}>
            <div className={"square"}></div>
            <div style={{marginLeft: '1%'}}>
                {props.name ? props.name : "NO NAME"}
            </div>
        </div>
        <div className={"headline header-links"}>
            <div className={"orange-hover"}>
                SOUND VISUALIZER
            </div>
            <div className={"orange-hover"}>
                TERRAIN GENERATOR
            </div>
            <div className={"orange-hover"}>
                ADOBE XD
            </div>
        </div>
    </div>
}