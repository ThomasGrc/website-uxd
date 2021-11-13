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
            <div>
                SOUND VISUALIZER
            </div>
            <div>
                TERRAIN GENERATOR
            </div>
            <div>
                ADOBE XD
            </div>
        </div>

    </div>

}