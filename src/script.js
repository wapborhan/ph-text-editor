var input = document.querySelectorAll("textarea")[0],
  characterCount = document.querySelector("#characterCount"),
  wordCount = document.querySelector("#wordCount"),
  sentenceCount = document.querySelector("#sentenceCount"),
  paragraphCount = document.querySelector("#paragraphCount");
let inputValue = document.getElementById("textarea");

// updating the displayed stats after every keypress
input.addEventListener("keyup", function () {
  //keeping the console clean to make only the latest data visible
  // console.clear();

  // character count

  characterCount.innerHTML = input.value.length;

  // word count using \w metacharacter - replacing this with .* to match anything between word boundaries since it was not taking 'a' as a word.
  // this is a masterstroke - to count words with any number of hyphens as one word
  // [-?(\w+)?]+ looks for hyphen and a word (we make both optional with ?). + at the end makes it a repeated pattern
  // \b is word boundary metacharacter
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  // console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  // sentence count	using ./!/? as sentense separators
  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    // console.log(sentences);
    sentenceCount.innerHTML = sentences.length - 1;
  } else {
    sentenceCount.innerHTML = 0;
  }

  // paragraph count from http://stackoverflow.com/a/3336537
  if (words) {
    // \n$ takes care of empty lines: lines with no characters, and only \n are not paragraphs
    // and need to be replaced with empty string
    var paragraphs = input.value.replace(/\n$/gm, "").split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
});
// font name
const inputFont = document.getElementById("font-name").value;

console.log(inputFont);

// Font Size Changes
// Input Value Pick
let fontSize = document.getElementById("fontsize");
const fontsizeValue = function (e) {
  inputValue.style = "font-size:" + `${e.target.value}px`;
};
fontSize.addEventListener("input", fontsizeValue);
fontSize.addEventListener("propertchange", fontsizeValue);

// Font size increment
document.getElementById("sizeincrement").addEventListener("click", function () {
  fontNumber = parseFloat(fontSize.value);
  fontSize.value = fontNumber + 1;
  inputValue.style = "font-size:" + `${fontNumber + 1}px`;
});

// Font size Decrement
document.getElementById("sizedecriment").addEventListener("click", function () {
  fontNumber = parseFloat(fontSize.value);
  fontSize.value = fontNumber - 1;
  inputValue.style = "font-size:" + `${fontNumber - 1}px`;
});

// text decoration
document.getElementById("font-normal").addEventListener("click", function () {
  inputValue.style = "font-weight:" + "400";
});
document.getElementById("font-bold").addEventListener("click", function () {
  inputValue.style = "font-weight:" + "bold";
});
document.getElementById("font-italic").addEventListener("click", function () {
  inputValue.style = "font-style:" + "italic";
});
document
  .getElementById("font-underline")
  .addEventListener("click", function () {
    inputValue.style = "text-decoration:" + "underline";
  });
document.getElementById("font-overline").addEventListener("click", function () {
  inputValue.style = "text-decoration:" + "overline";
});
document
  .getElementById("font-line-through")
  .addEventListener("click", function () {
    inputValue.style = "text-decoration:" + "line-through";
  });
// text alignment
document.getElementById("text-left").addEventListener("click", function () {
  inputValue.style = "text-align:" + "left";
});
document.getElementById("text-center").addEventListener("click", function () {
  inputValue.style = "text-align:" + "center";
});
document.getElementById("text-right").addEventListener("click", function () {
  inputValue.style = "text-align:" + "right";
});
document.getElementById("text-justify").addEventListener("click", function () {
  inputValue.style = "text-align:" + "justify";
});
// Text Color

let inputColor = document.getElementById("text-color");
const colorValue = function (e) {
  inputValue.style = "color:" + `${e.target.value}`;
};
fontSize.addEventListener("input", colorValue);
fontSize.addEventListener("propertchange", colorValue);
