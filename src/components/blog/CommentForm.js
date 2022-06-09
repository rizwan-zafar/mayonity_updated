export default function CommentForm() {
    return(
        <div className="contact-area">
            <h4 className="mb-5">Leave A Comment</h4>
            
            {/* Comment Form */}
            <form className="contact-from" onSubmit={e => { e.preventDefault(); }} >
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <input className="form-control mb-30" type="text" name="message-name" placeholder="Your Name" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <input className="form-control mb-30" type="email" name="message-email" placeholder="Your Email" />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control mb-30" name="message" placeholder="Type your comments..." defaultValue={""} />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit Comment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}