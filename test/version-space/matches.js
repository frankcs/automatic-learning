/* global describe, it */
const { matches } = require('../../version-space')
const { expect } = require('chai')

describe('Testing matches functions', function () {
  it('should be a function', function () {
    expect(matches).to.be.a('Function')
  })
  it('should return false if called with no parameters', function () {
    expect(matches()).to.equals(false)
  })
})
