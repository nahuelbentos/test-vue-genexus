const stringToTime = {}

function convertstringToTime (string) {
  const hora = string.substring(11,13)
  const minutos = string.substring(14,16)

  return `${hora}:${minutos}`
  //return `${(hora < 10) ? '0' + hora : hora}:${(minutos < 10) ? '0' + minutos : minutos}`
}

stringToTime.install = (Vue) => {
  Vue.filter('string-to-time', val => {
    return convertstringToTime(val)
  })
}

export default stringToTime
