const renderHeader = (rootElement) => {
    const header = document.createElement("div")
    header.classList.add("header")

    const headerContainer = document.createElement("div")
    headerContainer.classList.add("header-container")
    
    const headerText = document.createElement("h1")
    headerText.classList.add("header-text")
    headerText.textContent = "Listings"

    headerContainer.appendChild(headerText)
    header.appendChild(headerContainer)
    rootElement.appendChild(header)
}

export default renderHeader;