d = document

function c(tag, content, cssClass = None) {
    element = d.createElement(tag)
    element.innerText = content
    if (cssClass) element.classList.add(cssClass)
}