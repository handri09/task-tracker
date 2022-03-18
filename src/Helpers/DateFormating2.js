
export function DateFormating(dat) {
  let date = dat

  let day = date.getDay()
  let month = date.getMonth()+1

  if (day.toString().split('').length === 1) {
      day = `0${day}`
  }

  if (month.toString().split('').length === 1) {
      month = `0${month}`
  }
  
  return `${date.getFullYear()}-${month}-${day}`
}