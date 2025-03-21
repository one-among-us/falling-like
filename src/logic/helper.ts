export function getResponseSync(url: string): string {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, false)
  xhr.send()
  return xhr.responseText
}
