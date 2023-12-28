import { FC } from "react";
import './Footer.css'

export const Footer: FC = () => {
    return (
        <div className="center">
            <img className="footer11" alt="" />
            <div className="footer-row">
                <div className="footer-first">
                    <div className="logo-flex">
                        <div className="logo_footer">
                            <div className="T">T</div>
                        </div>
                        <div className="footer-first_title">
                            HealthCare
                        </div>
                    </div>
                    <div className="footer-first_title2">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                    <div className="footer-first_title3">©HealthCare PTY LTD 2023. All rights reserved</div>
                </div>
                <div className="column">
                    <div className="footer-second-big">Company</div>
                    <div className="footer-second-small">About</div>
                    <div className="footer-second-small">Testimanials</div>
                    <div className="footer-second-small">Find a doctor</div>
                    <div className="footer-second-small">Apps</div>
                </div>
                <div className="column">
                    <div className="footer-second-big">Region</div>
                    <div className="footer-second-small">Indonesia</div>
                    <div className="footer-second-small">Singapore</div>
                    <div className="footer-second-small">Hongkong</div>
                    <div className="footer-second-small">Canada</div>
                </div>
                <div className="column">
                    <div className="footer-second-big">Help</div>
                    <div className="footer-second-small">Help center</div>
                    <div className="footer-second-small">Contact support</div>
                    <div className="footer-second-small">Instructions</div>
                    <div className="footer-second-small">How it works</div>
                </div>
            </div>
            <img className="footer22" alt="" />
        </div>
    );
}
export default Footer;