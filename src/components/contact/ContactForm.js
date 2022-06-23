import React from "react";
import axios from "axios";



export default function ContactForm() {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [subject, setSubject] = React.useState();
    const [message, setMessage] = React.useState();

    const [loading, setLoading] = React.useState(false);
    const [failer, setFailer] = React.useState(false);
    const [successs, setSuccesss] = React.useState(false);



    const sendMessage = (e) => {
      
        e.preventDefault();
        const data = {
            'webform_id': 'contact',
            'entity_type': null,
            'entity_id': null,
            'in_draft': false,
            'uri': ['/webform/contact/api'],
            'name': name,
            'email': email,
            'subject': subject,
            'message': message,
        }

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

        }



        
            setLoading(true);
            axios.get('https://www.admin.mayonity.com/session/token').then(result => {


                if (200 === result.status) {
                    const csrfToken = result.data;

                    fetch('https://www.admin.mayonity.com/webform_rest/submit?_format=json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-Token': csrfToken
                        },
                        body: JSON.stringify(data),
                    })
                        .then(response => {
                         
                            setLoading(false);
                            setSuccesss(true);
                            setName("");
                            setSubject("")
                            setEmail("")
                            setMessage("")
                        })

                }
                
            }).catch((e)=>{
                    setLoading(false);
                    setFailer(true);
            });

     



    }


    return (
        <div className="contact-form">
            <form onSubmit={sendMessage} >
                <div className="row">

                    <div className={`alert alert-warning alert-dismissible  ${loading ? "" : "d-none"}`} role="alert">
                        Processing. . .
                    </div>

                    <div className={`alert alert-success alert-dismissible  ${successs ? "d-block" : "d-none"}`} role="alert">
                        Your requested <b>submited successfully.</b><br /> you can also contact via whatsapp "+923454671224"
                    </div>

                    <div className={`alert alert-danger alert-dismissible  ${failer ? "d-block" : "d-none"}`} role="alert">
                        Oops, <b>Something went to Wrong,</b><br />
                        Kindly contact via whatsapp "+923454671224"
                    </div>

                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="name">Full Name:</label>
                        <input className="form-control mb-30" value={name} onChange={e => setName(e.target.value)} id="name" type="text" placeholder="Jhon Smith" name="name" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="email">Email Address:</label>
                        <input className="form-control mb-30" value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="user@gmail.com" name="email" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="subject">Phone:</label>
                        <input className="form-control mb-30" value={subject} onChange={e => setSubject(e.target.value)} id="topics" type="number" placeholder="Phone with country code " name="topics" />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea className="form-control mb-30" value={message} onChange={e => setMessage(e.target.value)} id="message" name="message" placeholder="Message" defaultValue={""} />
                    </div>

                    {/* Form Control */}
                    <div className="col-12 text-center">
                        <button className={`btn btn-primary w-100 ${loading ? "d-none" : ""}`} type="submit">Send Now</button>
                        <button className={`btn btn-primary w-100 ${loading ? "" : "d-none"}`} type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Processing . . .
                    </button>
                    </div>
                </div>
            </form>

        </div>
    )
}