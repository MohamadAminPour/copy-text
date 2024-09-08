let h1 = document.querySelector('h1')
let btn = document.querySelector('button')

function copy(txt) {
   window.navigator.clipboard.writeText(txt)
}

btn.addEventListener('click', () => {
   let h1Txt = h1.innerHTML
   copy(h1Txt)

   btn.innerHTML = 'copied ✓'
   
   setTimeout(() => {
      btn.innerHTML='copy'
   },2000)
})