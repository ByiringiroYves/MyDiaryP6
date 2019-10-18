const OpenNav = () =>{
  const NavDiv = document.getElementById("navigation");
  if(!NavDiv.classList.contains("hide")){
    NavDiv.classList.add("hide")
  }else{
    if(NavDiv.classList.contains("hide")){
      NavDiv.classList.remove("hide")
    }
  }
}

// whhen user clicked on account journal

const LoggOut = () =>{
  const LoggDiv = document.getElementById("out");
  if(LoggDiv.classList.contains("hide")){
    LoggDiv.classList.remove("hide")
  }else{
    if(!LoggDiv.classList.contains("hide")){
      LoggDiv.classList.add("hide")
    }
  }
}
// when user clicked on an entry

