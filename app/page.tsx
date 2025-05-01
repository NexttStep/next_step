import Features from './ui/Features';
import Flow from './ui/Flow';
import Footer from './ui/Footer';
import Hero from './ui/Hero';
import Problem from './ui/Problem';
import Solution from './ui/Solution';
import Target from './ui/Target';
import Value from './ui/Value';

export default function Home() {
	return (
		<div>
			<Hero /> 
			<Problem /> // Kya dikkat hai?
			<Solution /> // Kya samadhan hai?
			<Flow /> // Kese kaam karega? Steps: User Input - LLM - Personalised Path
			<Features /> 
			<Target /> // Target Audience
			<Value /> // Badi badi baatein
			<Footer /> 
		</div>
	);
}
