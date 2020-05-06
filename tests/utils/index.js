export function resetParagraphs() {
  // Call test only method
  // See api/paragraphs/methods.app-tests.js
  server.call('paragraphs.reset')
}
