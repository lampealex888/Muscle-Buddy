import "./styles/home.css"
import render from "./functions/render.js"
import home from "./pages/home.js"

home()

const homeButton = document.querySelector(".home")
const workoutButton = document.querySelector(".workout")

homeButton.addEventListener('click', function() {
    render()
})

workoutButton.addEventListener('click', function() {
    home()
})