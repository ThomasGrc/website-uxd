import React from 'react';

export function Heading(props) {
    const characters = props.text.split('');
    const degree = props.arc / characters.length;
    console.log(characters)
    return (
        <div style={{display: "flex", marginBottom: '-35%'}} className={"eurostile text-red"}>
            {characters.map((char, i) => (
                <div
                    key={`span-${i}`}
                    style={{height: `${props.radius}px`, transform: `rotate(${degree * i - props.arc / 2}deg)`, transformOrigin: `0 ${props.radius}px 0`}}>{char}</div>
            ))}
        </div>
    );
}
