import '../styles/Terminal.sass'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import {Box} from "./Box";

export function Terminal() {

    
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal('.terminal', {delay: 200});
        const options = {
            strings: [
                'Hi ! My name is Thomas.',
                'This is my portfolio.',
                'The work presented here is either programming or design.'
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };
        typed.current = new Typed(el.current, options);
        typed.current.start()
        return () => {
            typed.current.destroy();
        }
        
    }, [])

    return (
        <div className={"perspective"}>
            <div className={"terminal"}>
                <div className={"terminal-buttons"}>
                    <div className={"terminal-button green"}></div>
                    <div className={"terminal-button yellow"}></div>
                    <div className={"terminal-button red"}></div>
                </div>

                <div className="eurostile">
                    <span>{"$>"}</span>
                    <span style={{ whiteSpace: 'pre', paddingLeft: '10px' }} ref={el} />
                </div>

            </div>
            <div className={"td-container col-6"}>
                <Box />
            </div>
        </div>

);

}