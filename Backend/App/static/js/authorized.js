const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(item => {

    item.addEventListener('click', () => {
        
        document.querySelector(".tabs_content").innerHTML = item.id
        
    })

})

