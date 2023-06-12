var 
  now = new Date(),
  Years = now.getFullYear();

msg="© 2003-"+Years+" by R.G.S.";
status=msg;
defaultStatus=msg;
document.title = msg;
document.getElementById("msgs").textContent = msg;
