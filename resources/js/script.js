/*-------------------------------------------------

	- Proyect: Netflix ClonePage
	- Date: Jan 2020
	- Author: Bryan Rodríguez
	- Disclaimer: This project was made to practice web dev skills with educational non-profit purposes

-------------------------------------------------*/

/*-------------------------------------------------
    - Dom elements -
-------------------------------------------------*/

const faqButtons = document.getElementsByClassName("faq-question");
const faqAnswers = document.getElementsByClassName("faq-answer");
const faqIcons = document.getElementsByClassName("faq-icon");

/*-------------------------------------------------
    - Hide FAQ answers -
-------------------------------------------------*/
function hideAnswers() {
	Array.from(faqAnswers).forEach(faqAns => {
		faqAns.classList.remove("show");
	});
	Array.from(faqIcons).forEach(faqIcon => {
		faqIcon.classList.remove("ion-md-close");
		faqIcon.classList.add("ion-md-add");
	});
}

/*-------------------------------------------------
    - FAQ buttons events -
-------------------------------------------------*/
if (faqButtons) {
	Array.from(faqButtons).forEach(faqBtn => {
		faqBtn.addEventListener("click", e => {
			e.preventDefault();

			const i = faqBtn.dataset.i;
			const answer = document.querySelector(`.faq-answer-${i}`);
			const icon = document.querySelector(`.faq-icon-${i}`);

			if (answer.classList.contains("show")) {
				hideAnswers();
			} else {
				hideAnswers();
				answer.classList.add("show");
				icon.classList.remove("ion-md-add");
				icon.classList.add("ion-md-close");
			}
		});
	});
}
