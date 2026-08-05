import {
  AboutContainer,
  AboutImg,
  AboutTitle,
  InfoCard
} from "./style";
import codingSvg from "../../assets/coding.svg";

export default function About() {
  return (
    <AboutContainer>
      <AboutImg src={codingSvg} alt="Developer" />

      <AboutTitle>
        About Software Developer <span>Ed Ben</span>
      </AboutTitle>

      <InfoCard>
        <h3>I'm Ed.</h3>
        <p>
          I'm currently learning Full-Stack Development Languages.
        </p>
        <p>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB, SQL, Python, AWS Services.
        </p>

        <a href="mailto:edwardbenedict92@gmail.com">
          Send email: edwardbenedict92@gmail.com
        </a>
      </InfoCard>
    </AboutContainer>
  );
}