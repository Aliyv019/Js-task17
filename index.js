const press_txt=document.querySelector('.press')
const main=document.querySelector('main')


document.addEventListener('keydown',(event)=>{
    press_txt.style.display='none'
    main.style.display='flex'
    const key=document.querySelector('.key')
    const keycode=document.querySelector('.keyCode')
    const code=document.querySelector('.code')
    key.textContent=`${event.key}`
    keycode.textContent=`${event.keyCode}`
    code.textContent=`${event.code}`
})