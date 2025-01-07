export const colorful = {

    mounted(el, binding) {
        const { arg } = binding
        const event = arg ? arg : 'input'
        
        el.addEventListener(event, () => 
            el.style.backgroundColor = getRandomColor())
    },
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
