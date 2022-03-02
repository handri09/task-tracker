export default function convertExcelDate (serial) {
  const months = {
    1: 'january', 2: 'february', 3: 'march', 4: 'april', 5: 'may', 6: 'june', 7: 'july', 8: 'august', 9: 'sept', 10: 'october', 11: 'nov', 12: 'dec'
  } 
  if (!serial) {
    let daty = new Date()
    return `${months[daty.getMonth()+1]} ${daty.getDate().toString().split('').length === 2 ? daty.getDate() : '0'+daty.getDate().toString()}`
  }
  let utc_day = Math.floor(serial-25569)
  let utc_value = utc_day * 86400;
  let date_info = new Date(utc_value*1000)

  let fractional_day = serial - Math.floor(serial) + 0.0000001
  let total_seconds = Math.floor(86400*fractional_day)
  let seconds = total_seconds % 60

  total_seconds -= seconds;

  let hours = Math.floor(total_seconds/ (60*60))
  let minutes = Math.floor(total_seconds/60) % 60

  // return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds) 
  // return `${date_info.getDate().toString().split('').length === 2 ? date_info.getDate() : '0'+date_info.getDate().toString()}-${months[date_info.getMonth()+1]}-${date_info.getFullYear()}`
  return `${months[date_info.getMonth()+1]} ${date_info.getDate().toString().split('').length === 2 ? date_info.getDate() : '0'+date_info.getDate().toString()}`
}