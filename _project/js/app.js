let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let text = document.getElementById("text").value.length;
  document.getElementById(
    "para1"
  ).innerHTML = `Number of characters are ${text}`;
  let text1 = document.getElementById("text").value;
  let words = text1.match(/\w+/g).length;
  document.getElementById("para2").innerHTML = `Number of Words are ${words}`;
});
