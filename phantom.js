var page = require('webpage').create()

phantom.onError = function(msg, trace) {
  console.log(msg, trace)
}

page.onCallback = function(data) {
  console.log(data)
  if(data == 'feature-complete'){
    var content = page.evaluate(function() {
      return document.documentElement.outerHTML
    })
    console.log(content)
  }
}

page.onError = function(data) {
  console.log(data)
}
page.onConsoleMessage = function(data) {
  console.log(data)
}

page.onLoadFinished = function(s) {
  console.log('page status: ', s)
  console.log(page.content)
}

page.onResourceReceived = function(v) {
  console.log('R', JSON.stringify(v))
}

page.onResourceError = function(v) {
  console.log('err', JSON.stringify(v))
}

page.open('http://1111hui.com/github/browser-features/')
