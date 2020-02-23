const escapeEl = document.createElement('textarea')

export function escapeHTMLEntities(str) {
  let result = str

  if (typeof result === 'string') {
    escapeEl.textContent = str
    result = escapeEl.innerHTML
  }

  return result
}
