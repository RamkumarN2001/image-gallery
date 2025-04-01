function Image_gallery(props) {

    return (
        <div class="Image">
            <img src={props.Image} alt={props.Brand}></img>
            <h1>{props.Brand}</h1>
        </div>

    )
}

export default Image_gallery