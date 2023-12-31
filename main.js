//var fs = require('fs')

let username;
const countries = ["France", "Germany", "Poland", "Italy", "Czechia"];
const capitals = ["Paris", "Berlin", "Warsaw", "Rom", "Praha"];
let capitalsMap = new Map();
let countriesMap = new Map();
let que
let duration;
let input;
let xyz;

capitalsMap.set("France", "Paris")


document.getElementById("sub").onclick = function() {
        username = document.getElementById("fname");
        //save(username);
        console.log(username.value);
        quiz()
}

function quiz() {

      document.body.onload = addButtons();

      document.getElementById("cou").onclick = function() {
        document.body.onload = addH2();
        
        document.getElementById("sub").onclick = function() {
                input = document.getElementById("fname");
                console.log(capitalsMap.get(countries[xyz]));
                let f = countries.at(xyz)
                if(input.value === capitalsMap.get(f)) {
                        console.log("super")
                }
                else {
                        console.log("wrong")
                }
                const question = document.getElementById("h2")
                question.remove();  
        }
        let random = Math.floor(Math.random *5)
        xyz = random;
        duration++; 
        
                     
                
      }

}
function addButtons() {
        // create a new div element
        const newButton1 = document.createElement("button");
        const newButton2 = document.createElement("button");

        // and give it some content
        const newContent1 = document.createTextNode("Countries -> Capitals");
        const newContent2 = document.createTextNode("Capital -> Countries");

        
        // add the text node to the newly created div
        newButton1.appendChild(newContent1);
        newButton2.appendChild(newContent2);
        newButton1.id = "cou";
        newButton2.id = "cap";
      
        // add the newly created element and its content into the DOM
        const div = document.getElementById("div1");

       div.appendChild(newButton1);
       div.appendChild(newButton2);
      }
function addH2() {
        let random = Math.floor(Math.random() *5);
        xyz = random;
        console.log(xyz);
        const h2 = document.createElement("h2")
        h2.id = "h2";
        const content = document.createTextNode("Capital of: " + countries[random])
        h2.appendChild(content)

        
        div = document.getElementById("div2");
        div.appendChild(h2);
}   
function save(username) {
        fs.writeFile(username.value + '.txt', username.value, (err) => {
                // In case of a error throw err.
                if (err) throw err;
            })
}   