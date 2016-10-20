const byYarn = require('../')

test('main', () => {
  if (process.env.CI) {
    expect(byYarn()).toBe(false)
  } else {
    expect(byYarn()).toBe(true)
  }
})
