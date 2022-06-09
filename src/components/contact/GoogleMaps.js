export default function GoogleMaps(props) {
    console.log("props map",props);
    return(
        <div className="google-maps-wrapper">
            <iframe src={props.mapSource} title="Contact Map" allowFullScreen></iframe>
        </div>
    )
}