import "./RegisterBanner.css";

export const RegisterBanner = ({bgImage, title, subTitle}) => {
    const bannerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`
    };

    return (
        <>
        <section className="register_banner" style={bannerStyle}>
            <div className="container">
                <div className="register_banner-content">
                    <h2>{ title }</h2>
                </div>
                <div className="register_banner-content">
                    <p>{ subTitle }</p>
                </div>
            </div>
        </section>
        </>
    );
}