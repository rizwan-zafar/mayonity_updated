import React from "react";
import axios from "axios";

// const api = axios.create({
//     baseURL: "https://www.admin.mayonity.com/",
//     withCredentials: true,
//     headers: {
//       "Content-type": "application/json",
//       Accept: "application/json",
//     },
//   });

//   export const PostRequest = async (subURL, data) => {
//     const res = await api.post(subURL, data);
//     return res;
//   };

export default function ContactForm() {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [subject, setSubject] = React.useState();
    const [message, setMessage] = React.useState();


    // const sendMessage = async () => {
 
    //     try {
     
    //       const { data } = await PostRequest('webform_rest/submit?_format=json', {
    //         "webform_id": "contact",
    //         "entity_type": null,
    //         "entity_id": null,
    //         "in_draft": false,
    //         "uri" : ["/webform/contact/api"],
    //         "name": "Ali",
    //         "email": "test@gmail.com",
    //         "subject": "this is sbub",
    //         "message": "message"
    //     });
    //       console.log(data);
    //     } catch (err) {
    //       console.log(err.response.data.message);
    //     } 
      
    // }


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

                fetch('https://www.admin.mayonity.com/webform_rest/submit?_format=json',{
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                  },
                  body:JSON.stringify(data),
                })
                    .then(response => {
                        
                        console.log('testresp',response)
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
                        <input className="form-control mb-30" onChange={e => setName(e.target.value)} id="name" type="text" placeholder="Designing World" name="name" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12 col-lg-6">
                        <label className="form-label" htmlFor="email">Email Address:</label>
                        <input className="form-control mb-30" onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="care.designingworld@gmail.com" name="email" required />
                    </div>

                    {/* Form Control */}
                    <div className="col-12">
                        <label className="form-label" htmlFor="subject">Topics:</label>
                        <input className="form-control mb-30" onChange={e => setSubject(e.target.value)} id="topics" type="text" placeholder="Presale Questions" name="topics" />
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
        </div>
    )
}