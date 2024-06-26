import email_icon from "../../assets/email.svg"
import linkedin_icon from "../../assets/linkedin.svg"

export default function Info() {
	return (
		<>
			<h1>Spider-Man</h1>
			<h2>Superhero</h2>
			<a id="personal-website" href="https://example.com">spiderman.com</a>
			<menu id="main-links-menu">
				<li><a id="email-anchor" href="mailto:user@example.com">
					<img src={email_icon} alt="Email pictogram" />
					<div>Email</div>
				</a></li>
				<li><a id="linkedin-anchor" href="https://www.linkedin.com">
					<img src={linkedin_icon} alt="LinkedIn pictogram" />
					<div>LinkedIn</div>
				</a></li>
			</menu>
		</>
	)
}