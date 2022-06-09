import BlogOneCard from "./BlogOneCard";
import BlogOneData from '../../data/blog/bloglist-one.json';
import SectionHeadingTwo from "../heading/HeadingTwo";

export default function BlogOne() {
    const BlogOneCards = BlogOneData.slice(0, 3);
    const BlogCardsItems = BlogOneCards.map((item, index) => (
        <BlogOneCard key={index} data={item} />
    ))
    
    return(
        <div className="saasbox-news-area">

            {/* Section Heading: src > components > heading > HeadingTwo */}
            <SectionHeadingTwo 
                subtitle="Latest Blog's" 
                subtitleColor="" 
                heading="Our Latest News" 
                headingColor="" 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
                paraColor="" 
                btnColor="btn-warning" 
                btnUrl="/blog-details-1" 
                btnText="View All News"
            />

            <div className="container">
                <div className="row justify-content-center g-4 g-md-5 g-lg-4 g-xl-5">
                    {BlogCardsItems}
                </div>
            </div>

        </div>
    )
}