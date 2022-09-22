import "./Round.css"

function Round(props) {

    function handleClick() {
        
    }

    if (props.team) {
        return (
            <div className="round" onClick={handleClick}>
                <div className="team">
                    {props.team[0]}
                </div>
                <div className="team">
                    {props.team[1]}
                </div>
            </div>
        );
    } else {
        return (
            <div className="round">
                <div className="team">
                </div>
                <div className="team">
                </div>
            </div>
        );
    }
    
}

export default Round;