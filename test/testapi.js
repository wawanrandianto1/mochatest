const assert = require("assert");
const chai = require("chai");
const expect = require("chai").expect;
const should = require("chai").should();
const chaiHttp = require("chai-http");
const urlApi = "https://admin.hobid.id/api";
chai.use(chaiHttp);

describe("API Testing", () => {
  describe("testing GET", () => {
    it("kita test get semua kurir", done => {
      chai
        .request(urlApi) // chai meminta base URL dan port kita
        .get("/kurir") // 'get' disini adalah REST method dan '/kurir' adalah endpoint kita
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(200);
          res.should.have.status(200);
        });
      done();
    });
  });

  describe("testing POST", () => {
    it("kita test post contact us", done => {
      let body = {
        email: "wawanrandianto1@gmail.com",
        name: "wawan",
        subject: "ini subjeknya ?",
        message: "pesan terakhir anda ?"
      };

      chai
        .request(urlApi)
        .post("/contactus")
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(200); // pengecekan apakah bisa terlaksana
          res.should.have.status(200);

          // bisa juga compare dengan isi dari body
          assert.equal(res.body.message, "Email contact us telah dikirim");
        });
      done();
    });
  });
});
