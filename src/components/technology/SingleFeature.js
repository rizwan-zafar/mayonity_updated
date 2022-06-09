export default function SingleFeature(props) {
    const {image, title} = props;

    return(
        <div className="col-6 col-md-4 col-lg-3">
            <div className="demo-single-feature border py-4 px-3 text-center wow fadeInUp" data-wow-delay="200ms">
                <img className="mb-3" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
                <h6 className="mb-0">{title}</h6>
            </div>
        </div>
    )
}