const delay = require('./delay')
console.log('start')

async function nonLeakingLoopAsync () {
      while (true) {
              await delay(1)
              console.log(`Tick ${Date.now()}`)
            }
}

function leakingLoop () {
      return delay(1)
        .then(() => {
                  console.log(`Tick ${Date.now()}`)
                  return leakingLoop()
                })
}


//nonLeakingLoopAsync()

leakingLoop()

console.log('end')
