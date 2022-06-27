const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]
for (let i= 0; i < planets.length; i++) {
    const content = document.createElement('div')
   // content.textContent = planets[i].name
    const color = planets[i].color
    content.style.background = `linear-gradient(90deg, ${color} 10%, black 60%)` 
    content.style.width = planets[i].diameter/1100 + 'px'
    content.style.height = planets[i].diameter/1100 +'px'
    content.style.borderRadius = '80%'
    content.style.margin = '0 16px'
    solarSystem.appendChild(content)
}

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)
