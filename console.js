// Execute these in the console in the Developer Tools (in the Inspect Element)
//1. Use the console to change a background image as it could be done in the inspector
document.querySelector('img')

const ourImage = document.querySelector('img');

ourImage.setAttribute('src', 'https://www.image_url');

// -> set the width of the image to 100
ourImage.style.width = 100;

ourImage.setAttribute('width', 100);

// -> create a function to change an image
function changeImage(url) {
    document.querySelector('img').setAttribute('src', url);
}

//call the function and pass the value
changeImage('https://....');

//call the function and pass the value
changeImage('https://....');

/**
 * ===============================================================================================================================================================================================
 */

//2.Use the console to change a background color of the webpage by targeting the <body></body>
const htmlBody = document.querySelector("body");


const randomClickFunction = function (){
    const colors = ["$002942", "#0Ca7O8", "red", "green", "yellow", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log("The user clicked and set the color to " + randomColor);
}

//call function
randomClickFunction();

//add an onClick event - each time you click the webpage, the color of the background should change
htmlBody.onClick = randomClickFunction;



/**
 * ===========================================================================================================
 */

//3. 
const myArray = [10, 20, 30, 40];
//built in fns for arrays
myArray.push(50);

myArray.reverse(); //reverses the order of the arrays in the myArray
