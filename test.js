function clean(item) {
  console.log(`I just cleaned a ${item}`)
}

var nails = ['rusty nail', 'rusty nail', 'bent nail', 'clean nail']
var planks = ['splintered plank', 'straight plank', 'bent plank']

function groupAndClean (items, cleaningMethod, done) {
  for (var i = 0; i < items.length; i++) {
    cleaningMethod(items[i])
  }
  done()
}

groupAndClean(nails.concat(planks), clean, function() {
  console.log('Whew, that was a lot of work!')
})

function doTo5(anything) {
  return anything(5)
}

function divide10ByN(n) {
  return 10 / n
}

function appendToHello(s) {
  return `Hello, ${s}!`
  }
  
console.log(doTo5(appendToHello))