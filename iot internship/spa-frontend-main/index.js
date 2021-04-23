const rootElement = document.getElementById("root")

import renderHeader from './src/components/header.js'
import renderFooter from './src/components/footer.js'

let listingData = []


const getListings = () => {
    fetch("http://localhost:3000/listings").then(response => response.json()).then(data => { 
       const listingsContainer = createListingsContainer()

       listingData = data;
       data.forEach(listing => {
           const listingNode = createListing(listing);
           listingsContainer.appendChild(listingNode)
       })

       rootElement.appendChild(listingsContainer)
       renderFooter(rootElement)
    })
}

const createListingsContainer = () => {
    const container = document.createElement("div")
    container.classList.add("listings-container")

    return container;
}

const createListing = (listingData) => {
    const listing = document.createElement("a")
    listing.classList.add("listing")
    
    const image = document.createElement("img")
    image.src = listingData.imageUrl;

    const header = document.createElement("h2")
    header.classList.add("listing-header");
    header.textContent = listingData.header

    const paragraph = document.createElement("p")
    paragraph.classList.add("listing-paragraph")
    paragraph.textContent = listingData.description;
    
    const innerContainer = document.createElement("div")
    innerContainer.classList.add("listing-inner-container")

    innerContainer.appendChild(header)
    innerContainer.appendChild(paragraph)

    listing.appendChild(image)
    listing.appendChild(innerContainer)

    listing.addEventListener("click", (e) => {
        e.preventDefault()
        history.pushState({}, "", `${listingData.id}`)
        route()
    })

    return listing
}

const renderMainPage = () => {
    renderHeader(rootElement)
    getListings()
}

const clearElement = (className) => {
   const element = document.querySelector(className)
   rootElement.removeChild(element)
}


const clearMainPage = () => {
    clearElement(".header")
    clearElement(".listings-container")
    clearElement(".footer")
}
 
const renderSingleListing = (id) => {
    clearMainPage()

    renderHeader(rootElement)
    getSingleListing(id)
    renderFooter(rootElement)
}

const getSingleListing = (id) => {
    const listing = listingData.find(item => item.id === id)

    const container = document.createElement("div")
    container.classList.add("single-listing-container")

    const bodyContent = document.createElement("h2")
    bodyContent.textContent = listing.header;
    
    container.appendChild(bodyContent)
    rootElement.appendChild(container)
}

const route = () => {
    const path = location.pathname;
    console.log(path)

    if (path === "/") {
        renderMainPage()
    } else if (path.length > 1) {
        const id = Number(path[path.length - 1])
        renderSingleListing(id)
    }
}

route()



