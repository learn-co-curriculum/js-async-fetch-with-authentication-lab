const expect = chai.expect;

describe('index.js', function () {

  describe('displayTime()', function () {
    it('can successful access moment() from the momentjs node module', function () {
      expect(moment()).to.exist
    });
  });

  describe("index.html", () => {
    it("includes 'hello'", () => {
      expect(document.querySelector('body').innerHTML).to.include('hello')
    })

    it("includes div", () => {
      expect(document.querySelector('body').innerHTML, "no empty div element found within body").to.include('<div></div>')
    })


  })

  describe("index.js", () => {
    it("exists", () => {
      expect(testVar).to.exist
      expect(testVar).to.deep.equal({}) //without .deep, {} does not equal {}
      expect(testFunc).to.exist
      expect(testFunc()).to.equal('hi')
    })
  })

});
