import mjml2html from 'mjml'
import Handlebars from 'handlebars'
import { TAPi18n } from 'meteor/tap:i18n'

// Register i18n helper
// example: {{_ "i18n.message"}}
Handlebars.registerHelper('_', function (message) {
  return Handlebars.compile(TAPi18n.__(message, {}, this.language))(this)
})

/**
 * Render mjml
 * Takes mjml text file and returns an html string.
 *
 * @param {string} mjml                        - The mjml text
 * @param {Object.<string, function|*>} [data] - Object of Handlebars helpers or data
 * @param {string} [data.language]             - Language used by the i18n helper
 */
export function renderMjml(mjml, data = {}) {
  // Generate html from mjml
  const result = mjml2html(mjml, {
    // Path to build emails folder
    // Allows usage of mj-include tags
    filePath: './assets/app/emails/.'
  })

  if (result.errors && result.errors.length) {
    console.error(result.errors)
    throw result.errors
  }

  // Alows the use of some Handlebars syntax within the template
  return Handlebars.compile(result.html)(data)
}
