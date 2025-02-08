function showAnswer(response) {
 let jokeElement = document.querySelector("#joke");
 let jokeText = response.data.answer;

 jokeElement.innerHTML = "";
 let typewriter = new Typewriter(jokeElement, {
  loop: false,
  delay: 30,
  cursor: "",
 });

  typewriter 
  .typeString(jokeText)
  .start();

}



function fetchJoke() {
  let apiKey = "af7fdt6fa4f53b42o7a4a46850bd8911";
let context = "You are a helpful and funny AI assistant, Make sure to not reapet an answer and always give a new joke";
let prompt = "Tell me a funny joke";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

document.querySelector("#joke").innerHTML = "Loading...";

axios.get(apiUrl).then(showAnswer);

}


let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", fetchJoke);

