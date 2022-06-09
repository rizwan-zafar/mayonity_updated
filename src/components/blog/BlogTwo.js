import { Link } from 'react-router-dom';
import SectionHeading from '../heading/HeadingOne';
import BlogData from '../../data/blog/bloglist-one.json';

export default function BlogTwo() {
    const BlogSlice = BlogData.slice(0, 3);
    
    const BlogItems = BlogSlice.map((ele, index) => (
        <div key={index} className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="card blog-card border-0">
                <Link className="image-wrap d-block" to={`${process.env.PUBLIC_URL}/blog-details/${ele.id}`} >
                    <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.heading} />
                </Link>
                <div className="card-body px-4 pb-0">
                    <Link className="badge bg-primary text-white mb-1" to={`${process.env.PUBLIC_URL}/catagory/${ele.catagory}`} >
                        {ele.catagory}
                    </Link>
                    <Link className="post-title d-block mb-3" to={`${process.env.PUBLIC_URL}/blog-details/${ele.id}`} >
                        {ele.title}
                    </Link>
                    <div className="post-meta">
                        <span className="text-muted fz-14">
                            <i className="bi bi-clock me-2" />
                            {ele.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="saasbox-news-area news2">
            {/* Section Heading: src > components > heading > Heading */}
            <SectionHeading 
                subtitle="Latest Blog's" 
                heading="Our Latest News" 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
            />

            <div className="container">
                <div className="row justify-content-center g-4 g-md-5 g-lg-4 g-xl-5">
                    {BlogItems}
                </div>
            </div>
        </div>
    )
}