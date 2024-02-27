const container = document.querySelector('section')
const original = container.querySelector('article')

const cloned = original.cloneNode(true)
container.appendChild(cloned)

window.addEventListener("scroll", () => {
    const halfHeight = original.clientHeight

    if (window.scrollY > halfHeight) {
        window.scrollTo(0, 0)
    }
})

window.addEventListener("scroll", () => {
    const halfWidth = original.clientWidth

    if (window.scrollX > halfWidth) {
        window.scrollTo(0, 0)
    }
})