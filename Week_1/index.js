//task 1
{
    var subs = "Maths";
    const marks = 30;
    let outOf = 50;
    let pass = true; 

    document.querySelector("#task1").innerHTML = `Var: ${subs}<br> Const:  ${marks} <br> let: ${outOf}<br>bool: ${pass}`;
}

//task 2
{

    let num1 = 10;
    let num2 = 20;
    operators(num1,num2);
    function operators(num1 , num2){
        document.querySelector("#task2").innerHTML = `Num1: ${num1}<br>Num2: ${num2}<br>Add: ${num2+num1}<br> Sub:  ${num2-num1} <br> Product: ${num2*num1}<br>Quotient: ${num2/num1}`;
    };
}

//task 3
{
    let age = prompt("Enter your Age: ");
    if(age < 18){
        document.querySelector("#task3").innerHTML = "You are a Minor";
    }

    else if(age>18 && age<65){
        document.querySelector("#task3").innerHTML = "You are a Adult";
    }

    else{
        document.querySelector("#task3").innerHTML = "You are a senior Citizen";
    }
}

//task 4 
{
    const arr = [1000,900,800,1200,800];

    document.querySelector("#task4").innerHTML = `Max Function: ${maxval(arr)}<br> Min Function: ${minval(arr)}`;

    function maxval(arr){
        let max = arr[0];
            for (let i=1; i<arr.length; i++) {
                if(max<arr[i]){
                    max = arr[i];
                }
            }
            return max;
    }
    function minval(arr){
        let min = arr[0];
            for (let i=1; i<arr.length; i++) {
                if(min>arr[i]){
                    min = arr[i];
                }
            }
            return min;
    }
}

//task 5
{
    let books = ["The Divine Comedy","The Republic","Don Quixote","The Great Gatsby"];
    function book(books){
        books.forEach(element => {
            document.querySelector("#task5").innerHTML += `${element}<br>`;
        });
    }
    book(books);
}

//task 6 
{
        //using var
        var vvar = 10;
        function test()
        {
            var vvar = 20;
        }
        test();

        //using let
        let lvar=10;
        function test(){
        let lvar=20;
        }
        test();

        //using const
        const cvar=10;
        function test3(){
        const cvar=20;
        }
        test();

        document.querySelector("#task6").innerHTML = `varVariable: ${vvar} <br> letVariable: ${lvar} <br> constVariable: ${cvar} `;
}


//task 7 
{
    let btn = document.querySelector("button");
    btn.addEventListener("click",function(){
        btn.innerText = "Clicked!!";
    })
}

//task 8
{
    let getNum = document.querySelector("#getNum");

    getNum.addEventListener("click", function() {
        let numInput = document.querySelector("input").value;
        try {
            validateNumber(numInput);
        } catch (error) {
            document.querySelector("#task8").innerHTML = `Error: ${error.message}`;
        }
    });

    function validateNumber(num) {
        if (num < 0) {
            throw new Error('Negative numbers are not allowed.');
        }
    }

}

//task 9
{
    function simulateAsyncOperation(callback) {

    setTimeout(function() {
      const randomNumber = Math.floor(Math.random() * 100);
      callback(null, randomNumber);
    }, 2000);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const task9Element = document.querySelector("#task9");
  
    simulateAsyncOperation(function(error, result) {
      if (error) {
        task9Element.textContent = "Error: " + error;
      } else {
        task9Element.textContent = "Result: " + result;
      }
    });
  });
}  