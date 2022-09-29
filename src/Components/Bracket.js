import Round from "./Round.js";
import "./Bracket.css";

function Bracket() {
    return (
        <>
        <div className="bracket">
            <div className="round1">
                <Round team={["Pong", "Stack Cup"]} roundNumber={1}></Round>
                <Round team={["King's Cup", "Civil War"]} roundNumber={2}></Round>
                <Round team={["Baseball", "Chandelier"]} roundNumber={3}></Round>
                <Round team={["Die", "Ride the Bus"]} roundNumber={4}></Round>
            </div>
            
            <div className="semis">
                <Round roundNumber={5}></Round>
                <Round roundNumber={6}></Round>
            </div>
            
            <div className="finals">
                <Round roundNumber={7}></Round>
            </div>
        </div>
        </>
    );
}

export default Bracket;