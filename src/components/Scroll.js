import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '450px', position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
            {props.children}
        </div>
    );
};

export default Scroll;