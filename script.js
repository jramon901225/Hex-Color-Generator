//Create a function to change color

function changeColor() {
  //Create an array with all hex caracters
  const hex_numbers = [
    "0",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  //Create a variable to save hexcode
  let hexcode = "";

  //Iterate the array for create characters for the hexcode
  for (i = 0; i < 6; i++) {
    let hex_caracter = Math.floor(Math.random() * hex_numbers.length);
    hexcode += hex_numbers[hex_caracter];
  }

  //Change the color code in spam
  document.querySelector("#hex-color").innerHTML = "#" + hexcode;
  document.querySelector("body").style.backgroundColor = "#" + hexcode;
}
