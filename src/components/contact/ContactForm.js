import React from "react";
import axios from "axios";



export default function ContactForm() {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [subject, setSubject] = React.useState();
    const [message, setMessage] = React.useState();





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

                         setName(null);
                         setEmail(null)
                    }, (error) => {
                        console.log('error', error);
                    })

            }
        });



    }


    return (
        <div className="contact-form">
            <form onSubmit={sendMessage} >
                <div className="row">
                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="name">Full Name:</label>
                        <input className="form-control mb-30" onChange={e => setName(e.target.value)} id="name" type="text" placeholder="Jhon Smith" name="name" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="email">Email Address:</label>
                        <input className="form-control mb-30" onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="user@gmail.com" name="email" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="subject">Phone:</label>
                        <input className="form-control mb-30" onChange={e => setSubject(e.target.value)} id="topics" type="number" placeholder="Phone with country code " name="topics" />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea className="form-control mb-30" onChange={e => setMessage(e.target.value)} id="message" name="message" placeholder="Message" defaultValue={""} />
                    </div>

                    {/* Form Control */}
                    <div className="col-12 text-center">
                        <button className="btn btn-primary w-100" type="submit">Send Now</button>
                    </div>
                </div>
            </form>
{/* test modal*/}
 <br />
 <br />
 <br />
 
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

 
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    is this working fine i am  here
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* end test modal */}
        </div>
    )
}