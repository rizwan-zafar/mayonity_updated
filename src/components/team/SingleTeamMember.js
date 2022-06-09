import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

export default function SingleTeamMember(props) {
    const {memberImage, memberName, designation, contactUrl, contactText } = props;

    console.log("props : " ,props);


    return(
            <div className="col-12 col-sm-6">
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                    <div className="card team-card">
                        <div className="card-body px-4 py-5 py-sm-4 py-md-5 text-center">
                            <div className="member-img mb-4 rounded-circle">
                                <img src={memberImage} alt={memberName} />
                            </div>
                            <h6>{memberName}</h6>
                            <p className="fz-14">{designation}</p>
                            <div className="border" />

                            {/* <Link className="mt-3 btn btn-info btn-minimal fz-14" to={contactUrl} > */}
                                {/* {contactText} {memberName}
                                <i className="bi bi-caret-right-fill" />
                            </Link> */}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
    )
}