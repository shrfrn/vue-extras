export const debounce = {
    mounted(el, { value: handler, arg: ev = 'input', modifiers }) {
        const [ delay ] = Object.keys(modifiers)
        el.addEventListener(ev, _debounce(handler, delay))
    }
}

function _debounce(func, delay) {
    let timeoutId
    
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func, delay, ...args)
    }
}