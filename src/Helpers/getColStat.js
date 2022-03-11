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
    case 'False':
      status_color = 'bg-red-500 '+status_color
      break;
    case 'True':
      status_color = 'bg-green-500 '+status_color
      break;
    case 'Amendment':
      status_color = 'bg-gray-500 '+status_color
      break;
    case 'PO':
      status_color = 'bg-gray-700 '+status_color
      break;
    case 'Contract':
      status_color = 'bg-gray-100 text-gray-800 m-0.5'
      break;
    case 'Tendering':
      status_color = 'bg-gray-500 '+status_color
      break;
    case 'SSJ':
      status_color = 'bg-gray-100 text-gray-800 m-0.5'
      break;
  }
  return status_color
}