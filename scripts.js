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
  } else if  (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again!"
    console.error("Error: 0 as divider")
    console.trace()
  }
  
  
  
  
  
  else {
    result.innerText = Math.floor(dividend / divider);
  }
  
});

