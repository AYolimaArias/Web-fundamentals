const assert = chai.assert;

describe("Test de funciones", function () {
  describe("Función interactuarCadenas", function () {
    it('Debería devolver "+-0" para las cadenas "+-+" y "+--"', function () {
      assert.strictEqual(interactuarCadenas("+-+", "+--"), "+-0");
    });

    it('Debería devolver "000000" para las cadenas "--++--" y "++--++"', function () {
      assert.strictEqual(interactuarCadenas("--++--", "++--++"), "000000");
    });

    it('Debería devolver "-+-+-+" para las cadenas "-+-+-+" y "-+-+-+"', function () {
      assert.strictEqual(interactuarCadenas("-+-+-+", "-+-+-+"), "-+-+-+");
    });

    it('Debería devolver "-+00" para las cadenas "-++-" y "-+-+"', function () {
      assert.strictEqual(interactuarCadenas("-++-", "-+-+"), "-+00");
    });
  });

  describe("Función generarApodo", function () {
    it('debería devolver "Rob" para "Robert"', function () {
      assert.equal(generarApodo("Robert"), "Rob");
    });

    it('debería devolver "Kim" para "Kimberly"', function () {
      assert.equal(generarApodo("Kimberly"), "Kim");
    });

    it('debería devolver "Jean" para "Jeannie"', function () {
      assert.equal(generarApodo("Jeannie"), "Jean");
    });

    it('debería devolver "Greg" para "Gregory"', function () {
      assert.equal(generarApodo("Gregory"), "Greg");
    });

    it("debería lanzar un error para nombres con menos de 4 caracteres", function () {
      assert.throws(() => generarApodo("Sam"), Error, "Nombre muy corto");
    });
  });
});
