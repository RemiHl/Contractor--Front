import React from 'react';
import { useMousePosition } from '../js/useMousePosition';
import '../style/MouseShadow.css';

function MouseShadow() {
    const { x, y } = useMousePosition();

    return (
        <div
            className="mouse-shadow"
            style={{
                left: x,
                top: y,
            }}
        ></div>
    );
}

export default MouseShadow;