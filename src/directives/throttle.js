export const throttle = {
    mounted(el, { value: handler, arg: ev = 'input', modifiers }) {
        const [ delay ] = Object.keys(modifiers)
        el.addEventListener(ev, _throttle(handler, delay))
    }
}

function _throttle(func, delay) {
    let waiting
    
    return (...args) => {
        if (waiting) return

        waiting = true
        func(...args)
        setTimeout(() => waiting = false, delay)
    }
}