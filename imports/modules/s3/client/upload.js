export function uploadFile({ url, fields }, file) {
  return new Promise(function (resolve, reject) {
    const xhr = new window.XMLHttpRequest()

    const data = new window.FormData()

    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName]

      data.append(fieldName, field)
    })

    data.append('file', file)

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 299) {
          resolve()
        } else {
          reject(new Error('File upload failed'))
        }
      }
    }

    xhr.open('POST', url)
    xhr.send(data)
  })
}
