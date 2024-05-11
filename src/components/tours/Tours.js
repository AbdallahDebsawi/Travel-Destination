import "../tours/Tours.css";

function ToursComponet(props) {
    return (
        <div class="tour">
            <h2>{props.title}</h2>

            <img class="tourImage" src={props.image} alt={props.title}></img>
        </div>
    )

}

export default ToursComponet;