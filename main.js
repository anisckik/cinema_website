  
   const dedline = new Date("01-03-2025");const GetRemaingTime = (item) => {

   
    let vaqt = Date.parse(item);
    const Hozir = Date.parse(new Date());
    let Interval = vaqt-Hozir   ;
    const days = Math.floor((Interval /(1000 * 60 * 60 * 24)));
    const hours =Math.floor(((Interval /(1000 * 60 * 60) % 24)));
    const minutes = Math.floor(((Interval /(100 * 60)) % 60));
    const seconds = Math.floor((Interval /(1000) % 60));
      
   return{
    days:days,
    hours:hours,
    minutes:minutes,
    seconds:seconds
   } 

  };

  const FixedTime=(elem)=>{
    if(elem<10){
      return `0${elem}`
    }else{
      return elem
    }
  }

  const AddTime =(malumot,selektor)=>{
    const timer =document.querySelector(selektor)
    const days =timer.querySelector("#days")
     const hours =timer.querySelector("#hours")
     const minutes =timer.querySelector("#minutes")
     const seconds =timer.querySelector("#seconds")
    console.log(timer);
   const ChangeClock = () => {
    const T = GetRemaingTime (malumot)
    console.log(T);
    days.innerHTML = FixedTime(T.days)
    hours.innerHTML = FixedTime(T.hours)
    minutes.innerHTML = FixedTime(T.minutes)
    seconds.innerHTML = FixedTime(T.seconds)
  }
  
setInterval( ChangeClock,1000)

   }

   AddTime(dedline,".timer")

  



