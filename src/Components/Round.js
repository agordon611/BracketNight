import "./Round.css";

function Round(props) {

    function handleTopClick(event) {

        if (props.roundNumber === 1) {
            document.getElementsByClassName('semis')[1].children[0].children[0].innerHTML = props.team[0];
        }

        if (props.roundNumber === 2) {
            document.getElementsByClassName('semis')[1].children[0].children[1].innerHTML = props.team[0];
        }

        if (props.roundNumber === 3) {
            document.getElementsByClassName('semis')[1].children[1].children[0].innerHTML = props.team[0];
        }

        if (props.roundNumber === 4) {
            document.getElementsByClassName('semis')[1].children[1].children[1].innerHTML = props.team[0];
        }

        if (props.roundNumber === 5) {
            document.getElementsByClassName('finals')[1].children[0].children[0].innerHTML = document.getElementsByClassName('semis')[1].children[0].children[0].innerHTML;
        }

        if (props.roundNumber === 6) {
            document.getElementsByClassName('finals')[1].children[0].children[1].innerHTML = document.getElementsByClassName('semis')[1].children[1].children[0].innerHTML;
        }

        if (props.roundNumber === 7) {
            document.getElementsByClassName('winner')[1].children[0].innerHTML = document.getElementsByClassName('finals')[1].children[0].children[0].innerHTML;
        }
    }

    function handleBottomClick(event) {

        if (props.roundNumber === 1) {
            document.getElementsByClassName('semis')[1].children[0].children[0].innerHTML = props.team[1];
        }

        if (props.roundNumber === 2) {
            document.getElementsByClassName('semis')[1].children[0].children[1].innerHTML = props.team[1];
        }

        if (props.roundNumber === 3) {
            document.getElementsByClassName('semis')[1].children[1].children[0].innerHTML = props.team[1];
        }

        if (props.roundNumber === 4) {
            document.getElementsByClassName('semis')[1].children[1].children[1].innerHTML = props.team[1];
        }

        if (props.roundNumber === 5) {
            document.getElementsByClassName('finals')[1].children[0].children[0].innerHTML = document.getElementsByClassName('semis')[1].children[0].children[1].innerHTML;
        }

        if (props.roundNumber === 6) {
            document.getElementsByClassName('finals')[1].children[0].children[1].innerHTML = document.getElementsByClassName('semis')[1].children[1].children[1].innerHTML;
        }

        if (props.roundNumber === 7) {
            document.getElementsByClassName('winner')[1].children[0].innerHTML = document.getElementsByClassName('finals')[1].children[0].children[1].innerHTML;
        }

    }

    if (props.team) {
        return (
            <div className="round">
                <div className="team" onClick={handleTopClick}>
                    {props.team[0]}
                </div>
                <div className="team" onClick={handleBottomClick}>
                    {props.team[1]}
                </div>
            </div>
        );
    } else {
        return (
            <div className="round">
                <div className="team" onClick={handleTopClick}></div>
                <div className="team" onClick={handleBottomClick}></div>
            </div>
        );
    }
    
}

export default Round;