export default function PartnerOneLogo(props) {
    const {partnerLogo} = props;

    return(
        <div className="partner-logo px-sm-3">
            <img src={ partnerLogo} alt="logo" />
        </div>
    )
}