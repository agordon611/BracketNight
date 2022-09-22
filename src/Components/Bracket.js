import Round from "./Round.js";
import "./Bracket.css";

function Bracket() {
    return (
        <>
        <div className="bracket">
            <div className="round1">
                <Round team={["Pong", "Stack Cup"]}></Round>
                <Round></Round>
                <Round></Round>
                <Round></Round>
            </div>
            
            <div className="semis">
                <Round></Round>
                <Round></Round>
            </div>
            
            <div className="finals">
                <Round></Round>
            </div>
        </div>
        </>
    );
}

export default Bracket;