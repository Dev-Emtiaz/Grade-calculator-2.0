let btn = document.querySelector("#submit");
let heading = document.querySelector(".heading");


btn.addEventListener("click", () =>{
    let web = document.querySelector("#web").value;
    let math = document.querySelector("#math").value;
    let computer = document.querySelector("#computer").value;
    let physics = document.querySelector("#physics").value;
    let grade = "";
    if(web === "" && math === "" && computer === "" && physics === ""){
        alert("Before enter your marks then press showresult button");
        return false;
    }

    let totlaMarks = parseFloat(web) + parseFloat(math) + parseFloat(computer) + parseFloat(physics);
    console.log(totlaMarks);
    let persentage = `${Math.round((totlaMarks/400) * 100)}`;
    if(persentage >=80 && persentage <=100){
        grade = "A+";
    }else if(persentage >= 70 && persentage <=79){
        grade = "A-";
    }else if(persentage >= 60 && persentage <= 69){
        grade = "A";
    }else if(persentage >= 50 && persentage <= 59){
        grade = "B";
    }else if(persentage >= 40 && persentage <= 49){
        grade = "C";
    }else if(persentage >=33 && persentage <= 39){
        grade = "D";
    }else if(persentage >=0 && persentage <= 32){
        grade = "F";
    }
   
    if(persentage >= 33){
    
        heading.innerHTML = `Out of 400 your total is ${totlaMarks} and  percentage is ${persentage}% <br> Your grade is ${grade} You pass all subjects. You are pass!!` ;
       
    }

   if(web <= 32){
    
    heading.innerHTML = `Out of 400 your total is ${totlaMarks} and  percentage is ${persentage}% <br> Your grade is ${grade} You fail in Web. You are Fail.`;
   }else if(math <= 32){
    heading.innerHTML = `Out of 400 your total is ${totlaMarks} and  percentage is ${persentage}% <br> Your grade is ${grade} You fail in Math. You are Fail.`;
   }else if(computer <= 32){
    heading.innerHTML = `Out of 400 your total is ${totlaMarks} and  percentage is ${persentage}% <br> Your grade is ${grade} You fail in Computer. You are Fail.`;
   }else if(physics <= 32){
    heading.innerHTML = `Out of 400 your total is ${totlaMarks} and  percentage is ${persentage}% <br> Your grade is ${grade} You fail in Physics. You are Fail.`;
   }

})