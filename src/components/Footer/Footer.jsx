function Footer() {
    return (
        <footer className="footer container-fluid">
            <div className="footer-navigation">
                <h4 className="h4">navigation</h4>
                <ul className="ul">
                    <li className="li"><a href="#" className='a'>home</a></li>
                    <li className="li"><a href="#featured-products" className='a'>products</a></li>
                    <li className="li"><a href="#" className='a'>info</a></li>
                </ul>
            </div>
            <div className="footer-payment">
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="visa" className="img"/>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="mastercard" className="img"/>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" alt="cabal" className="img"/>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" alt="naranjax" className="img"/>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" alt="mercadopago" className="img"/>
            </div>
            <div className="footer-rights">
                <p className="p"> © 2023 | All Rights Reserved to Agustin Musumeci</p>
            </div>
        </footer>
    );
}

export default Footer