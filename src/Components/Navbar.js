import React from 'react';
import "./Navbar.css";

const Navbar = () => {

    const heading = 'Bracket Night';

    return (
        <h2 className='navbar'>
        <span>
            {heading.split("").map(function(char, index){
                const style = {"animationDelay": (0.5 + index / 10) + "s"};
                return <span key={index} style={style}>{char}</span>;
            })}
        </span>
        </h2>
    );
};

export default Navbar;