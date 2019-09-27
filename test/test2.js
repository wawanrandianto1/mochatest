const assert = require("assert");
const expect = require("chai").expect;
const should = require("chai").should();

describe("Judul BAB 9", () => {
  let arrIndex = ["index1", "index2"];

  describe("subBab 1", () => {
    it("check apakah index1 ada dalam array", function(done) {
      const isValid = arrIndex.indexOf("index1") >= 0;
      //assert.equal(isValid, true);
      expect(isValid).to.be.true; // isValid hasilnya adalah true ??
      done();
    });
  });

  describe("subBab 2", () => {
    it("check apakah index7 ada dalam array", function(done) {
      const isValid = arrIndex.indexOf("index7") >= 0;
      //assert.equal(isValid, false);
      isValid.should.equal(true); // isValid hasilnya adalah true ??
      done();
    });
  });
});
