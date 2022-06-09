import { Link } from "react-router-dom";

export default function BlogOneCard({data}) {
    return(
        <div className="col-12 col-sm-9 col-md-6 col-lg-4">
            <div className="card blog-card border-0">

                {/* Image Wrap */}
                <div className="image-wrap">
                    <Link className="d-block" to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`} >
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.image}`} alt={data.title} />
                    </Link>
                    <div className={`video-play-btn ${data.haveVideo}`}>
                        <i className="bi bi-play" />
                    </div>
                </div>
                
                {/* Post Content */}
                <div className="card-body p-4 pb-2">
                    {/* Post Meta */}
                    <div className="post-meta d-flex align-items-center justify-content-between mb-3">
                        <span className="fz-14">
                            <i className="me-1 bi bi-calendar" />
                            {data.date}
                        </span>
                        <span className="fz-14">
                            <i className="me-1 bi bi-clock" />
                            {data.readTime}
                        </span>
                    </div>
                    {/* Post Title */}
                    <Link className="post-title d-block mb-3" to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`} >
                        {data.title}
                    </Link>
                    {/* Post Excerpt */}
                    <p>{data.excerpt}</p>
                    {/* Read More Button */}
                    <Link className="btn btn-primary btn-minimal" to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`} >
                        Continue reading...
                    </Link>
                </div>
            </div>
        </div>
    )
}