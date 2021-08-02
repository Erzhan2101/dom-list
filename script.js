const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const clearAll = document.querySelector(".clear-all")
const list = document.querySelector(".list")

addBtn.addEventListener("click", () => {
    if (textInput.value.trim()) {
        list.innerHTML += `<li>
                           <input type="checkbox">        
                           ${textInput.value}
                           <button class="cls-btn">Удалить</button>
                           </li>`
        textInput.value = ""
    }
})

list.addEventListener("click", (event) =>{
    if(event.target.classList[0] === "cls-btn"){
        event.target.parentNode.remove()
    }
})