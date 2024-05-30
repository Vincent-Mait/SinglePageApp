import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
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
        <div id="page-container">
          <div id="content-wrap">

            <div class="back">
            <h1> VEEMAN Electrical Consulting</h1>
            <h1>
            Powering Progress, Illuminating Solutions
            </h1>
            </div>
        <div class = boxes>
            <div class="flip-box1">
                <div class="flip-box-inner1">
                    <div class="flip-box-front1">
                        <h2>Interior and Site Lighting Layout/Design</h2>
                    </div>
                    <div class="flip-box-back1">
                        <p>Our expertise encompasses the strategic placement of fixtures, energy
                        efficiency considerations, and aesthetic enhancements to create environments that are both functional and visually appealing.</p>
                    </div>
                </div>
            </div>
            <div class="flip-box2">
                <div class="flip-box-inner2">
                    <div class="flip-box-front2">
                        <h2>Power Distribution</h2>
                    </div>
                    <div class="flip-box-back2">
                        <p>We ensure safe and efficient electrical distribution systems tailored to the unique requirements of each setting.</p>
                    </div>
                </div>
            </div>
            <div class="flip-box3">
                <div class="flip-box-inner3">
                    <div class="flip-box-front3">
                        <h2>Renovations</h2>
                    </div>
                    <div class="flip-box-back3">
                        <p>Delivers transformative results that breathe new life into properties with innovative designs and meticulous craftsmanship.</p>
                    </div>
                </div>
            </div>
            <div class="flip-box4">
                <div class="flip-box-inner4">
                    <div class="flip-box-front4">
                        <h2>HVAC and More</h2>
                    </div>
                    <div class="flip-box-back4">
                        <p>Delivering comprehensive HVAC and electrical solutions to meet all your needs.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>

            <footer id="footer">
                <h4 class="foot">VEEMAN Electrical Consulting</h4>
            </footer>
        </div>
        `;
    }
}