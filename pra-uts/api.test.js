// tests/api.test.js
const { expect } = require('chai');
const sinon = require('sinon');

describe("Mock API Tests", () => {
    let fetchStub;

    before(() => {
        fetchStub = sinon.stub(global, "fetch");
    });

    after(() => {
        fetchStub.restore();
    });

    it("should call fetch with correct URL", async () => {
        fetchStub.resolves({ json: async () => ({ success: true }) });

        const response = await fetch("https://example.com/api");
        const data = await response.json();

        expect(fetchStub.calledOnce).to.be.true;
        expect(fetchStub.calledWith("https://example.com/api")).to.be.true;
        expect(data.success).to.be.true;
    });
});
