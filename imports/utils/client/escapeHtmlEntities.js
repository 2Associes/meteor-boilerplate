const escapeEl = document.createElement('textarea')

export default function escapeHtmlEntities(str) {
  let result = str

  if (typeof result === 'string') {
    escapeEl.textContent = str
    result = escapeEl.innerHTML
  }

  return result
}
