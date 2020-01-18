import React from 'react'
import { FooterContainer, Section, FooterHeader, CallToActions, ActionText } from './Footer.styled';
import Mail from '../../assets/mail.png';
import Phone from '../../assets/phone.png';

const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <FooterHeader>Contact us</FooterHeader>
                <CallToActions href="mailto:shoumitra7@yahoo.co.in">
                    <img className="Images" src={Mail} alt="Mail" />
                    <ActionText>shoumitra7@yahoo.co.in</ActionText>
                </CallToActions>
                <CallToActions href="tel:+91-996-7570-336">
                    <img className="Images" src={Phone} alt="Phone" />
                    <ActionText>+91-996-7570-336</ActionText>
                </CallToActions>
            </Section>
            <Section>
                <FooterHeader>
                    Address
                </FooterHeader>
                <ActionText style={{ marginLeft: 0 }}>Dona Paula Goa.</ActionText>
            </Section>

        </FooterContainer>
    )
}
export default Footer
