const d = document

function c(tag, content, cssClass = null) {
    element = d.createElement(tag)
    element.innerText = content
    if (cssClass) element.classList.add(cssClass)
    return element
}

const root = d.getElementById("root")