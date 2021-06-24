import { FunctionalComponent, h } from 'preact';
import LogoWhite from '../../../assets/logo/white.svg';

const Footer: FunctionalComponent = () => {
    return (
        <footer className="bg-primary py-3 text-white">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3 col-12 order-lg-1 text-lg-end text-center mb-lg-0 mb-4">
                        <LogoWhite />
                    </div>
                    <div className="col-lg-9 col-12 text-lg-start text-center">
                        © 2021 <a href="https://www.dotcentric.co.uk" target="_blank" rel="noreferrer">Dotcentric</a> Code Test - All rights reserved - Call 01234 432 123
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
