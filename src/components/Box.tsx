import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "./box.css";

const quotes = [
	{
		quote:
			"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
		author: "Marilyn Monroe",
		color: "cyan",
	},
	{
		quote: "Be yourself; everyone else is already taken.",
		author: "Oscar Wilde",
	},
	{
		quote:
			"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		author: "Albert Einstein",
	},
	{
		quote: "So many books, so little time.",
		author: "Frank Zappa",
	},
	{
		quote: "A room without books is like a body without a soul.",
		author: "Marcus Tullius Cicero",
	},
];

const Box = () => {
	const [quoteIndex, setQuoteIndex] = useState(0);

	function randomNumber(max: number) {
		const number = Math.floor(Math.random() * max);
		if (number === quoteIndex) {
			return randomNumber(max);
		}
		return number;
	}

	function handleClick() {
		setQuoteIndex(randomNumber(quotes.length));
		changeColor();
	}

	function changeColor() {
		const maxValue = 0xffffff;
		const color = randomNumber(maxValue).toString(16).padStart(6, "0");

		document.documentElement.style.setProperty("--myColor", `#${color}`);
	}

	return (
		<div id="wrapper">
			<div id="quote-box">
				<div id="text">{quotes[quoteIndex].quote}</div>

				<div id="author">~ {quotes[quoteIndex].author}</div>
				<div className="buttonWrapper">
					<button type="button" className="button">
						<a target="_blank" href="https://twitter.com/intent/tweet" id="tweet-quote">
							<FontAwesomeIcon color="white" icon={faTwitter} />
						</a>
					</button>
					<button type="button" id="new-quote" className="button" onClick={() => handleClick()}>
						New Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default Box;
