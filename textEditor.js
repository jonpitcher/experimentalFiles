
function boldText(){
 
  var textBox = 
      document.getElementById("message")
 
  textBox.style.fontWeight="bold";

}

function colorChange(){
 
  var textBox = 
      document.getElementById("message")
 
  var selectValue = document.getElementById("colors").value

  var sValueToString = selectValue.toString(document.getElementById("colors").value)
  
 textBox.style.color = sValueToString ;
 

}

