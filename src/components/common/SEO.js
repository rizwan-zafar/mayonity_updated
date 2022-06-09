import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function SEO(props) {
    const {title} = props;

    return(
        <HelmetProvider>
            <Helmet>
                {/* <title>Mayonity-Software Development Company </title> */}
                <title>Mayonity </title>
            </Helmet>
        </HelmetProvider>
    )
}