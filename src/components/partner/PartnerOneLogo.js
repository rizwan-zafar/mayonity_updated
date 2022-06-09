export default function PartnerOneLogo(props) {
    const {partnerLogo} = props;

    return(
        <div className="partner-logo px-sm-3">
            <img src={`${process.env.PUBLIC_URL}/${partnerLogo}`} alt="logo" />
        </div>
    )
}