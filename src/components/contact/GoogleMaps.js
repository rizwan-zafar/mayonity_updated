export default function GoogleMaps(props) {
    return(
        <div className="google-maps-wrapper">
            <iframe src={props.mapSource} title="Contact Map" allowFullScreen></iframe>
        </div>
    )
}