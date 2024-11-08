// tests/unit.test.js
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe("HTML Unit Tests", () => {
    let document;

    before(() => {
        const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="#sobre mim">Sobre mim</a></li>
            <li><a href="#hobbies">My Hobbies</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>
    </nav>
    <h1>Bem vindos tonis mansos!</h1>
    <br>
    <br>
    <img src="images/profile.jpg" alt="Profile Picture" width="200">    <br>
    <br>
<section id="sobre mim">
    </section>
    <h2>Sobre mim</h2>
    <p>Primeira vez a usar HTML and CSS portanto vai ficar lindo!.</p>
        <p>Boas! Sou um corno manso, estou a aprender web development, sinto que já sou um profissional!.</p>
<p>Bem easy brother! </p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
    <section id="hobbies">
        <h2>Passatempos</h2>
         </section>
            <li>Cozinhar gandas cenas</li>
            <li>Correr</li>
            <li>Jogar pc 24/7</li>
        </ul>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </nav>
    <section id="contact">
    </section>
        <h2>Contact Me</h2>
        <p>You can reach me at <a href="https://discord.gg/9p2k43WF" target="_blank" rel="noopener noreferrer">my Discord</a>.</p>

    </section>
</body>
</nav>


<body>
    <!-- Existing content -->

    <footer>
        <p>&copy; 2024 [Jorge Conde]. All rights reserved.</p>
    </footer>
</body>


</html>`);
        document = dom.window.document;
    });

    it("should have a nav element with links", () => {
        const nav = document.querySelector("nav");
        expect(nav).to.exist;
        const links = nav.querySelectorAll("a");
        expect(links.length).to.equal(3);
    });

    it("should have a profile image", () => {
        const img = document.querySelector("img[alt='Profile Picture']");
        expect(img).to.exist;
        expect(img.getAttribute("width")).to.equal("200");
    });

    it("should have a 'Contact Me' section with Discord link", () => {
        const contactSection = document.querySelector("#contact");
        expect(contactSection).to.exist;
        const discordLink = contactSection.querySelector("a[href='https://discord.gg/9p2k43WF']");
        expect(discordLink).to.exist;
        expect(discordLink.getAttribute("target")).to.equal("_blank");
    });
});
