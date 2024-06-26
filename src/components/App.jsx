import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import personalImage from '../../assets/personal_image.png'

export default function App() {
	return (
		<div id="top-level-container">
			<img id="personal-image" src={personalImage} width="400px" />
			<div id="text-container">
				<Info />
				<About />
				<Interests />
			</div>
			<Footer />
		</div>
	)
}