document.addEventListener("DOMContentLoaded", () => {
   BASE_URL = "http://localhost:3000/burgers"

   const menu = document.getElementById('burger-menu')
   fetch(BASE_URL)
   .then(resp => resp.json())
   .then(burgers => burgers.forEach(addBurger))
   
  const ul = document.getElementById('order-list')
  
  function addBurger(burger){
    menu.innerHTML += `
    <div class="burger">
    <h3 class="burger_title">"${burger.name}"</h3>
    <img src="${burger.image}">
    <p class="${burger.description}">
    What a Good Burger!
    </p>
    <button id= ${burger.id} class="button">Add to Order</button>
    </div>`
  }
  menu.addEventListener("click", function(event){
    let li = document.createElement('li')
       li = document.createElement('li')
       li.innerText = (event.target.parentNode.children[0].innerText).slice(1, -1)
       ul.append(li)
  })// menuListener

   const form = document.getElementById('custom-burger')

    form.addEventListener("submit", function(event){
      event.preventDefault()
      console.log(event.target)
      name = event.target.name.value
      description = event.target.description.value
      url = event.target.url.value

      const newBurger = {name: name, description:description, url:url}
      addBurger(newBurger)

      fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(newBurger)
      })
//fetch

    })//fromlistener
      
})//DOM
