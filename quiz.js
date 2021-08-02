// 1. Create a multidimensional array to hold quiz questions and answers
let questionAnswer = [
    ["what is 2+2", "4"],
    ["what is 1+1", "2"],
    ["what is 3*2", "6"],
    ["When did the war began?", "1971"],
    ["Who is the prime misnister Now?", "Sheikh Hasina"]
]
let itemsPositive=0;
let itemsNegative=0;
// let correctAns="";
let correctAns = [];
let incorrectAns = [];

// 2. Store the number of questions answered correctly
function quiz(arr){



/* 
  3. Use a loop to cycle through each question
  
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for(let i = 0; i<arr.length; i++){
    let question = arr[i][0]
    let response = prompt (arr[i][0])
    if(response == arr[i][1]){
        itemsPositive =itemsPositive +1 ;
  
//   correctAns += `<li>${questionAnswer[i][0]}</li>`
correctAns.push(question)
    }
    else{
        itemsNegative = itemsNegative - 1;
        incorrectAns.push(question)
    }
}

}

quiz(questionAnswer);

function creatPlaylist(arr){
    let items="";
      for(let i = 0; i<arr.length; i++){
        items += `<li>${arr[i]}</li>`;
      }
      return items;
  }
creatPlaylist(questionAnswer)

let html = `
<h1>You have answer ${itemsPositive} correct answer</h1>
<h2>  and you have answer ${itemsNegative} incorrect ans  </h2>
<h1>Correct ans</h1>
<ol>
${creatPlaylist(correctAns)}
</ol>
<h1>INCorrect ans</h1>
<ol>
${creatPlaylist(incorrectAns)}
</ol>

`

// 4. Display the number of correct answers to the user
document.querySelector("main").innerHTML= html;