import womanImage from "../assets/imgs/home.jpg";

const home = function() {
    const content = document.querySelector("#content")

    const header = document.createElement("header")
    content.appendChild(header)

    const title = document.createElement("h1")
    title.classList.add('title')
    title.innerText = "Muscle Buddy"
    header.appendChild(title)

    const nav = document.createElement("nav")
    header.appendChild(nav)

    const list = document.createElement("ul")
    nav.appendChild(list)

    const navitems = ['Home', 'Workout Readiness Quiz', 'Results & Recommendations', 'Gym Guidelines']
    const navitemclasses = ['home', 'workout', 'results', 'guidelines']
    for (let i = 0; i < navitems.length; i++) {
        let li = document.createElement("li")
        li.innerText = navitems[i]
        li.classList.add(navitemclasses[i])
        list.appendChild(li)
    }

    const welcomeSection = document.createElement("div")
    welcomeSection.classList.add("welcome-section")
    content.appendChild(welcomeSection)

    const homeImage = new Image()
    homeImage.src = womanImage
    homeImage.classList.add("woman-img")
    welcomeSection.appendChild(homeImage)

    const textContainer = document.createElement("div")
    textContainer.classList.add("text-container")
    welcomeSection.appendChild(textContainer)

    const subtitle = document.createElement("h2")
    subtitle.classList.add("subtitle")
    subtitle.innerText = "WELCOME"
    textContainer.appendChild(subtitle)

    const cta = document.createElement("p")
    cta.classList.add("cta")
    cta.innerText = "Are you ready to workout?"
    textContainer.appendChild(cta)

    const ctaSubtitle = document.createElement("p")
    ctaSubtitle.classList.add("cta-subtitle")
    ctaSubtitle.innerText = "Let's find out together"
    textContainer.appendChild(ctaSubtitle)

    const button = document.createElement("p")
    button.classList.add("button")
    button.innerText = "Take Quiz"
    textContainer.appendChild(button)
}

export default home