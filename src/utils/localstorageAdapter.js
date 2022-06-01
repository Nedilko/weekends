const writeToLocalstorage = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

const readFromLocalstorage = (key) => {
  try {
    return localStorage.getItem(key)
  } catch (e) {
    console.error(e)
  }
}

export { readFromLocalstorage, writeToLocalstorage }
