import React from "react";
import Footer from "../components/footer";

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Perfect Moment</Footer.Link>
                    <Footer.Link href="#">STI College Meycauayan</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Joshua Benitez</Footer.Link>
                    <Footer.Link href="#">Denzel Dulay</Footer.Link>
                    <Footer.Link href="#">Auriel Garcia</Footer.Link>
                    <Footer.Link href="#">Rain Vincent Simbol</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><i className="fab fa-facebook-f"></i> Facebook</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-instagram"></i> Instagram</Footer.Link>                    
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}