export const trackmouse = {
    mounted(el, binding){
        window.addEventListener('mousemove', 
            ev => onMouseMove(ev, binding))
    },
}
function onMouseMove({ clientX, clientY }, binding){
    const { value: handler, arg, instance } = binding

    if(arg && !instance.$data[arg]) return
    handler(clientX, clientY)
}