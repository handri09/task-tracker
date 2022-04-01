export function types(name) {
  switch(name) {
    case 'status':
      return 'digit'
    case 'type':
      return 'digit'
    case 'name':
      return 'text'
    case "action":
      return "text"
    case "bidders":
      return "text"
    case "budget":
      return "text"
    case "cbe":
      return "text"
    case "date":
      return "date"
    case "endUser_name":
      return "text"
    case "endUser_dep":
      return "text"
    case "execDate":
      return "text"
    case "extendedClosingDate":
      return "text"
    case "frqClosed":
      return "text"
    case "frqSent":
      return "text"
    case "name":
      return "text"
    case "nextAction":
      return "text"
    case "nextStep":
      return "text"
    case "quotationSentToEu":
      return "text"
    case "quoteClarif":
      return "text"
    case "reference":
      return "text"
    case "responsible":
      return "text"
    case "rtaSub":
      return "text"
    case "rtaValid":
      return "text"
    case "saving":
      return "text"
    case "siteVisit":
      return "text"
    case "sowSrfReceived":
      return "text"
    case "state":
      return "text"
    case "strategy":
      return "digit"
    case "tbe":
      return "text"
    case "tracked":
      return "digit"    
  }
}