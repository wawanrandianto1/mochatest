const assert = require("assert");

// describe digunakan untuk menampung test - test yang akan dijalankan / judul file test
// it adalah fungsi masing2 testnya (title dari test)
// assert digunakan untuk cek hasil test, apakah sukses atau gagal

describe("Basic Mocha String Test", function() {
  it("test panjang string = 4", function(done) {
    assert.equal("Hello".length, 4); // Fail
    done();
  });

  it("test apakah huruf depan sama dng 'H'", function(done) {
    assert.equal("Hello".charAt(0), "H");
    done();
  });
});
