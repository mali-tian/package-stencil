const { expect } = require('chai');
const helloStencil = require('../src/helloStencil');

describe('helloStencil', () => {
  it('should return expected string', () => {
    expect(helloStencil('test')).to.equal('Hello Stencil test');
  });
});
