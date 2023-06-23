import React from "react";

export default class Player_1 extends React.Component {
    render() {
        return (
            <section className="player player--1">
                <h2 className="name" id="name--1">Player 2</h2>
                <p className="score" id="score--1">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--1">0</p>
                </div>
            </section>
        );
    }
}
