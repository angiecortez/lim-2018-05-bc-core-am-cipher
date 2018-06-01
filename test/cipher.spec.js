describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    }); // se cambio
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg" para "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz" con offest 33', ()=>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz",33),"HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg");
    });
    it('debería retornar "HIJ KLMN OPQRST UVWXY ZABCDEFG hijklmnopqrs tuvwxyzabdef g" para "ABC DEFG HIJKLM NOPQR STUVWXYZ abcdefghijkl mnopqrstuwxy z" con offest 33', () =>{
      assert.equal(cipher.encode("ABC DEFG HIJKLM NOPQR STUVWXYZ abcdefghijkl mnopqrstuwxy z",33),"HIJ KLMN OPQRST UVWXY ZABCDEFG hijklmnopqrs tuvwxyzabdef g");
    });



  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () =>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });//se cambio
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz" para "HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg" con offest 33', () =>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz");
    });
    it('debería retornar "ABC DEFG HIJKLM NOPQR STUVWXYZ abcdefghijkl mnopqrstuwxy z" para "HIJ KLMN OPQRST UVWXY ZABCDEFG hijklmnopqrs tuvwxyzabdef g" con offest 33', () =>{
      assert.equal(cipher.decode("HIJ KLMN OPQRST UVWXY ZABCDEFG hijklmnopqrs tuvwxyzabdef g",33),"ABC DEFG HIJKLM NOPQR STUVWXYZ abcdefghijkl mnopqrstuwxy z");
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });

});
