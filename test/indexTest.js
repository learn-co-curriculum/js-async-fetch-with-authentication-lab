const expect = chai.expect;

describe('index.js', function () {

  describe('displayTime()', function () {
    it('can successful access moment() from the momentjs node module', function () {
      expect(moment()).to.exist
    });
  });

  describe("index.html", () => {
    it("doesnt't include 'p' tag", () => {
      expect(document.querySelector('p'), "A 'p' tag as found").to.not.exist
    })

    it("includes an empty div", () => {
      expect(document.querySelector('body').innerHTML, "No empty div element found within body").to.include('<div></div>')
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
