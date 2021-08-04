const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const clearAll = document.querySelector(".clear-all")
const list = document.querySelector(".list")


addBtn.addEventListener("click", () => {
    if (textInput.value.trim()) {
        list.innerHTML += `<li>
                           <input type="checkbox" class="done">        
                           ${textInput.value}
                           <button class="cls-btn" 
                            >Удалить</button>
                           </li>`
        textInput.value = ""
    }
})

list.addEventListener("click", (event) => {
    if (event.target.classList[0] === "cls-btn") {
        event.target.parentNode.remove()
    }
    if(event.target.classList[0] === "done"){
        if(event.target.checked){
            event.target.parentNode.classList.add("line-through")
            event.target.setAttribute("checked", "checked")
        }else {
            event.target.parentNode.classList.remove("line-through")
            event.target.removeAttribute("checked")
        }
    }
})

textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && textInput.value.trim()) {
        list.innerHTML += `<li>
          <input  class="done"  type="checkbox">
                           ${textInput.value}
                           <button class="cls-btn">Удалить</button>
                           </li>`
        textInput.value = ""
    }
})

clearAll.addEventListener("click", () => {
    list.innerHTML = ""
})

// if (event.target.classList[0] === 'done'){
//     event.target.parentNode.classList.toggle('line-through')
// }

