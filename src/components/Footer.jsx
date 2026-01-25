export default function Footer() {
    return(
        <div className="footer">
            <div className="footer__container">
                <img className="footer__container--img" src="/img/logo.png" alt="logo" />
                <div className="footer__container--texts">
                    <h1 className="footer__container--texts--title">Address</h1>
                    <div className="footer__container--texts--div">
                        <p className="footer__container--texts--div--p">Svobody str. 35</p>
                        <p className="footer__container--texts--div--p1">Kyiv</p>
                        <p className="footer__container--texts--div--p">Ukraine</p> 
                    </div>
                </div>
                <div className="footer__container--contacts">
                    <h1 className="footer__container--contacts--title">Contact us</h1>
                    <div className="footer__container--contacts--logos">
                        <img className="footer__container--contacts--logos--img" src="./img/instagram.svg" alt="logo" />
                        <img className="footer__container--contacts--logos--img" src="./img/facebook.svg" alt="logo" />
                        <img className="footer__container--contacts--logos--img" src="./img/whatsapp.svg" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}