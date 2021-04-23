const renderFooter = (rootElement) => {
    const footer = document.createElement("div")
    footer.classList.add("footer")

    const footerContainer = document.createElement("div")
    footerContainer.classList.add("footer-container")
    
    const footerText = document.createElement("h2")
    footerText.classList.add("header-text")
    footerText.textContent = "Listings"

    footerContainer.appendChild(footerText)
    footer.appendChild(footerContainer)
    rootElement.appendChild(footer)
}

export default renderFooter;