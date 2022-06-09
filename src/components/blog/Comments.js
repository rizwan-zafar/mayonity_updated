import { Link } from "react-router-dom";

export default function Comments() {
    return(
        <div className="comment-wrapper mb-50 clearfix">
            <h4 className="mb-5">03 Comments</h4>
            
            <ol className="ps-0 list-unstyled">

                {/* Single Comment Area */}
                <li className="single-comment">
                    <div className="comment-content d-flex">
                        <div className="comment-author">
                            <img src="../assets/img/bg-img/t4.png" alt="author" />
                        </div>
                        <div className="comment-meta py-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6>Lim Jannat</h6><a className="post-date" href="/#">3h ago</a>
                            </div>
                            <p>You've saved our business! Thanks guys, keep up the good work! The best on the net!</p>
                            <Link className="like" to="#">Like</Link>
                            <Link className="reply" to="#">Reply</Link>
                        </div>
                    </div>

                    <ol className="children list-unstyled">
                        {/* Single Comment Area */}
                        <li className="single-comment">
                            <div className="comment-content d-flex">
                                <div className="comment-author">
                                    <img src="../assets/img/bg-img/t2.png" alt="author" />
                                </div>
                                <div className="comment-meta py-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6>Pryce R.</h6>
                                        <a className="post-date" href="/#">2h ago</a>
                                    </div>
                                    <p>I strongly recommend agency to EVERYONE interested in running a successful online business!</p>
                                    <Link className="like" to="#">Like</Link>
                                    <Link className="reply" to="#">Reply</Link>
                                </div>
                            </div>
                        </li>
                    </ol>
                </li>

                {/* Single Comment Area */}
                <li className="single-comment">
                    <div className="comment-content d-flex">
                        <div className="comment-author">
                            <img src="../assets/img/bg-img/t3.png" alt="author" />
                        </div>
                        <div className="comment-meta py-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6>Juergen T.</h6>
                                <a className="post-date" href="/#">41min ago</a>
                            </div>
                            <p>Absolutely wonderful! I wish I would have thought of it first. I would be lost without agency.</p>
                            <Link className="like" to="#">Like</Link>
                            <Link className="reply" to="#">Reply</Link>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}