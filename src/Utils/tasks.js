export const tasks = [
  { name:'task - 01', action: 'do task - 01', date: '2022-03-10', status: 'Done' },
  { name:'task - 02', action: 'do task - 02', date: '2022-03-20', status: 'Ongoing' },
  { name:'task - 03', action: 'do task - 03', date: '2022-03-30', status: 'On Hold' },
  { name:'task - 04', action: 'do task - 04', date: '2022-04-10', status: 'Cancelled' },
  { name:'task - 05', action: 'do task - 05', date: '2022-04-15', status: 'New' },
  { name:'task - 06', action: 'do task - 06', date: '2022-05-01', status: 'Ongoing' }
]

export const tasks_ = [
  {
    description: "task - 01",  // Task Name 
    status:"Ongoing",         // Done, Ongoing, On Hold, Cancelled, New
    type:"Contract",          // Contract, Amendment, PO, Quotation 
    strategy:"Tendering",     // Tendering, SSJ
    reference:"",                
    tracked: false,               // True, False
    endUser : { name: "Engineering", departement: "Vikesh" }, // End-User Name - Department
    state:"Revision of T&C",
    nextAction:"Action - 01",
    responsible:["Diary"],
    sowSrfReceived:"",
    frqSent:"",
    siteVisit:"",
    frqClosed:"",
    extendedClosingDate:"",
    quotationSentToEu:"",
    quoteClarif:"",
    tbe:"",
    cbe:"",
    rtaSub:"",
    rtaValid:"",
    execDate:"",
    budget:"",
    saving:"",
    nextStep:"",
    bidders:"DRA_FLUOR_SNC"
  }]