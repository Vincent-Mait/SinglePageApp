import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About Us");
    }

    async getHtml() {
        return `
            <h1 class="about">Meet the Consultant</h1>
            <h2 id="name">Val Maitland</h2>
            <div class="back2"></div>
            <p style="text-align:center;">I have worked for Metro North Railroad from 1993 to Present. My job responsibilities currently
            include connecting electrical systems to the outside power source, and distribute that power throughout
            the facility. Installing conduit, lighting fixtures, electrical outlets, and electrical control panels. Inspecting,
            maintaining and repairing existing electrical systems, electrical motors and equipment within the facility.</p>
            <p style="text-align:center;">I have over twenty years of commercial and residential experience. I am adept in performing electrical
            installations, maintenance and repairs in homes and plant facilities. I am knowledgeable in all areas of
            the national electrical code; and excel in analyzing and solving problems with various electrical controls
            and systems.</p>
        `;
    }
}