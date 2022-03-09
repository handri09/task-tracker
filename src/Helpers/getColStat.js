export function getColStat(status) {
  let status_color = 'text-white m-0.5'
  switch(status) {
    case 'New':
      status_color = 'bg-red-500 '+status_color
      break;
    case 'Ongoing':
      status_color = 'bg-orange-400 '+status_color
      break;
    case 'On Hold':
      status_color = 'bg-sky-500 '+status_color
      break;
    case 'Done':
      status_color = 'bg-green-500 '+status_color
      break;
    case 'Cancelled':
      status_color = 'bg-gray-400 '+status_color
      break;
  }
  return status_color
}