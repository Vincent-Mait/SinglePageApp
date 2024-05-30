import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact Us");
    }

    async getHtml() {
        return `
        <style>
        html,
        body {
            height: 100%;
            overflow: hidden;
        }
        </style>
            <h1 class=contact >Contact Us</h1>
            <div class="container">
                <div class="form-wrapper">
                    <form id="contact-form" class="contact-form">
                        <input
                            type="text"
                            autocomplete="off"
                            placeholder="Name"
                            class="contact-form-input"
                            id="name"
                            required
                        />
                        <input
                            type="email"
                            autocomplete="off"
                            placeholder="Email"
                            class="contact-form-input"
                            id="email"
                            required
                        />
                        <input
                            type="text"
                            autocomplete="off"
                            placeholder="Subject"
                            class="contact-form-input"
                            id="subject"
                            required
                        />
                        <textarea
                            class="contact-form-input contact-form-textarea"
                            placeholder="Message"
                            id="message"
                            required
                        ></textarea>
                        <input type="submit" class="form-submit-btn" value="Send Request" />
                    </form>
                </div>
            </div>
        `;
    }

    async executeViewScript() {
        const contactForm = document.getElementById("contact-form");

        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            // Here you can perform validation before submitting the form
            if (name && email && subject && message) {
                // You can perform further actions like sending the form data to a server
                console.log("Form submitted successfully");
                // Clear the form after submission
                contactForm.reset();
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
    
}