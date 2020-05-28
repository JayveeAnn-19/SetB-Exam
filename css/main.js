function Evaluate() {
  Excellent=0;
  var math = document.getElementById("Math").value;
  var science = document.getElementById("Science").value;
  var english = document.getElementById("English").value;
  var filipino = document.getElementById("Filipino").value;
  var pe = document.getElementById("PE").value;
  document.getElementById("MathRemarks").innerHTML = GradeRemarks(math);
  document.getElementById("ScienceRemarks").innerHTML = GradeRemarks(science);
  document.getElementById("EnglishRemarks").innerHTML =GradeRemarks(english);
  document.getElementById("FilipinoRemarks").innerHTML =GradeRemarks(filipino);
  document.getElementById("PERemarks").innerHTML = GradeRemarks(pe);
  
  

function GradeRemarks(Grade) {
  if(Grade >= 90 && Grade <= 100){
      return "Excellent";
  }
  else if(Grade >= 80 && Grade <= 89){
      return "Good";
  }
  else if(Grade >= 70 && Grade <= 79){
      return "Average";
  }
  else if(Grade >= 60 && Grade <= 69  ){
      return "Poor";
  }
  else if(Grade >= 0 && Grade <= 59){
      return "Fail";
  }
  else{
      return "Grade out of Range";
  }
}
function Rank(RankHere){

  Excellent=0;
  if( Excellent==5){
      return "Top Honor Student"
  }
  else if (Excellent==3 && Excellent==4){
      return "Second Honorable Student"
  }
  else{
      return "Repeater"
  }
}
}

