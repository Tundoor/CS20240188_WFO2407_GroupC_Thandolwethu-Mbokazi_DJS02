const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);


  //Checks if inputs are empty
  if (dividend === "" || divider === "") {     
      result.innerText = "Division not performed. Both values are required in inputs. Try again!"
      return
  } 
  // When divider is 0
  else if  (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again!"
    console.error("Error: 0 as divider")
    console.trace()
  }
  // When value is not a number
  else if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = `<h1>Something critical went wrong. Please reload the page</h1>`
    console.error(new Error("Error: Used numbers in input").stack)
    }
  else {
    // Rounds down answer
    result.innerText = Math.floor(dividend / divider);
  }
  
});

