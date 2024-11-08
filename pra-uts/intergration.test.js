// tests/integration.test.js
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe("HTML Integration Tests", () => {
    let document;

    before(() => {
        const dom = new JSDOM(`<!DOCTYPE html>
            <!-- Paste your HTML content here for testing -->
            <html lang="en">
                <!-- Content -->
            </html>`);
        document = dom.window.document;
    });

    it("should have a footer that displays copyright information", () => {
        const footer = document.querySelector("footer");
        expect(footer).to.exist;
        expect(footer.textContent).to.include("© 2024 [Jorge Conde]. All rights reserved.");
    });

    it("should contain navigation links that lead to sections on the page", () => {
        const links = document.querySelectorAll("nav a");
        links.forEach(link => {
            const href = link.getAttribute("href");
            const targetSection = document.querySelector(href);
            expect(targetSection).to.exist;
        });
    });
});
