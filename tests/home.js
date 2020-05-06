// Example test using webdriver.io with Mocha and Chai

import { resetParagraphs } from './utils'

describe('Home page', function () {
  before(function () {
    // Go to homepage
    browser.url('/')

    // Reset paragraphs collection to get same result every time
    resetParagraphs()
  })

  describe('form', function () {
    it('should exist', function () {
      // Wait for element to exist
      $('#paragraph-form').waitForExist()
    })

    it('should take in text', function () {
      // Type some text
      $('#paragraph-form-text').setValue('Lorem ipsum dolor sit amet')
    })

    it('should submit', function () {
      // Submit form using button
      $('#paragraph-form-submit').click()
    })

    it('should add a paragraph', function () {
      // Count paragraph elements
      assert.lengthOf($$('.js-paragraph'), 4, 'expected 4 paragraphs')
    })
  })
})
