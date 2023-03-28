import React from "react";

function Card() {
    return (
        <div className = "card">
            <img className = "card--image" src="../assets/katie-zaferes.png" />
            <div className = 'card--stats'>
                <img className = 'card--star' src="../assets/star.png"/>
                <span>5.0</span>
                <span>(6 ratings)•</span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className ='bold'>From £80</span> per person</p>
        </div>
    )
}

export default Card