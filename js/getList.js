// run this js in console
// on url: https://modernizr.com/docs#modernizr-api
var obj = {}
var el, tag, a=$$('table tr'), next, api, desc
for(var i = 0; i < a.length; i++) {
  el = a[i].firstChild
  tag = el.tagName
  if (tag=='TD' && el.colSpan<2) {
    api = el.nextSibling.innerText.split(',')
    next = a[i].nextSibling.firstChild
    if (next.colSpan>1) {
      desc = next.innerHTML
      i++
    } else {
      desc = ''
    }
    api.forEach(function(v) {
      obj[v] = {name: el.innerText, desc: desc}
    })
  } else {
    i++
  }
}
JSON.stringify(obj)
// copy text as config in index.js
