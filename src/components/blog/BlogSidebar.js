import { Link } from "react-router-dom";
import BlogData from "../../data/blog/bloglist-one.json";

export default function BlogSidebar() {
    const RecentPosts = BlogData.slice(0, 6);

    const RecentPostItems = RecentPosts.map((ele, index) => (
        <div key={index} className="single-recent-post d-flex align-items-center">
            <div className="post-thumb">
                <Link className="rounded" to={`${process.env.PUBLIC_URL}/blog-details/${ele.id}`} >
                    <img className="rounded" src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.title} />
                </Link>
            </div>
            <div className="post-content">
                <Link className="post-title" to={`${process.env.PUBLIC_URL}/blog-details/${ele.id}`} >
                    {ele.title}
                </Link>
                <p className="post-date">{ele.date}</p>
            </div>
        </div>
    ))

    const catagoryItems = [
        {
            name: "Corporate",
            count: 9
        },
        {
            name: "Agency",
            count: 16
        },
        {
            name: "Business",
            count: 21
        },
        {
            name: "eCommerce",
            count: 8
        },
        {
            name: "Blog",
            count: 13
        },
        {
            name: "Creative Ideas",
            count: 4
        }
    ].map((ele, index) => (
        <li key={index}>
            <Link to="#">
                <i className="bi bi-caret-right" /> {ele.name}
                <span className="text-muted ms-2">{`(${ele.count})`}</span>
            </Link>
        </li>
    ))

    const tagsItems = [
        "saasbox",
        "npm",
        "saas",
        "pug",
        "gulp",
        "css3",
        "bootstrap",
        "html5",
        "react",
        "design"
    ].map((item, index) => (
        <li key={index}>
            <Link to="#">{item}</Link>
        </li>
    ))

    return(
        <div className="blog-sidebar-area">

            {/* Widget Area */}
            <div className="single-widget-area mb-4 mb-lg-5">
                <form className="widget-form" onSubmit={e => { e.preventDefault(); }} >
                    <input className="form-control" type="search" placeholder="Type your keyword" />
                    <button type="submit">
                        <i className="bi bi-search" />
                    </button>
                </form>
            </div>

            {/* Widget Area */}
            <div className="single-widget-area mb-4 mb-lg-5">
                <h4 className="widget-title mb-30">Recent Posts</h4>
                
                {RecentPostItems}
            </div>

            {/* Widget Area */}
            <div className="single-widget-area mb-4 mb-lg-5">
                <h5 className="widget-title mb-30">Categories</h5>

                <ul className="catagories-list ps-0 list-unstyled">
                    {catagoryItems}
                </ul>
            </div>

            {/* Widget Area */}
            <div className="single-widget-area">
                <h4 className="widget-title mb-30">Popular Tags</h4>

                <ul className="popular-tags clearfix ps-0 mb-0">
                    {tagsItems}
                </ul>
            </div>
        </div>
    )
}