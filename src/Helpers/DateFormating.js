
export function DateFormating(dat) {
    let date = new Date(dat)

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
  /*
  let second = (task.endDate-task.startDate)/1000
  let minute = parseInt(second/60)
  let hour =  parseInt(minute/60)
  let day = parseInt(hour/24)

  // illustration DAY - Hour:Min:ss
  let ss = second - minute*60
  let min = minute - hour*60
  let hh = hour - day*24

  // console.log('day:',day,'hh:',hh,'min:',min,'ss:', ss)
  // Formating 
  if (ss.toString().split('').length === 1) {
      ss = `0${ss}`
  }
  if (min.toString().split('').length === 1) {
      min = `0${min}`
  }
  if (hh.toString().split('').length === 1) {
      hh = `0${hh}`
  }
  if (day.toString().split('').length === 1) {
      day = `0${day}`
  }*/

  
  // console.log(day, hour, minute, hour, second)
  // console.log(day + ' - ' + hh + ':' + min + ':' + ss)