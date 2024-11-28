import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <a href="mailto:pavel.filonenko1@gmail.com">
          <div>
            <img src={emailIcon} alt="Email" />
            <span>pavel.filonenko1@gmail.com</span>
          </div>
        </a>
        <a href="tel:+447405821263">
          <div>
            <img src={phoneIcon} alt="Phone No" />
            <span className="phone">(+44) 7405821263</span>
          </div>
        </a>
      </div>
      <Form></Form>
    </Container>
  );
}
