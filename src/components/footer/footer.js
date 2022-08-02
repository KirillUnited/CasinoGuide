import React from 'react';
import "./footer.scss";
import Icon1 from "../../images/Frame.svg";
import Icon2 from "../../images/Frame-1.svg";
import Icon3 from "../../images/Frame-2.svg";
import Icon4 from "../../images/Frame-3.svg";

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className='vw-container'>
                <div className='footer-inner'>
                    <div className="footer-info">
                        <p>
                            Alle auf dieser Website aufgeführten Angebote und Aktionen unterliegen bestimmten
                            Bedingungen und Verkaufserfordernissen des jeweiligen Anbieters. Im In den meisten Fällen
                            sind nur Neukunden berechtigt, Angebote, Werbeaktionen und Boni zu erhalten. Die
                            tatsächliche Höhe des Bonus hängt von der individuellen Einzahlungsbetrag. Bitte spielen Sie
                            verantwortungsbewusst, da Glücksspiel süchtig machen kann. Sie müssen mindestens 18 Jahre
                            alt sein, um diese Website nutzen zu können und die Angebote der Online-Casinos.
                        </p>
                    </div>
                    <div className="footer-form">
                        <ul className="footer-icons list-style-reset">
                            <li><img src={Icon1} alt="Superbonus"/></li>
                            <li><img src={Icon4} alt="Superbonus"/></li>
                            <li><img src={Icon3} alt="Superbonus"/></li>
                            <li><img src={Icon2} alt="Superbonus"/></li>
                        </ul>
                        <p className="copy">Copyright © {new Date().getFullYear()} Casino-Leitfaden. Alle Rechte
                            vorbehalten.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
