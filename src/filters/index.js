const filters = {
  formateTest(value) {
    return 'Test: ' + value
  }
}

export default (Vue) => {
  Object.keys(filters).forEach((key) =>{
    Vue.filter(key, filters[key])
  })
}