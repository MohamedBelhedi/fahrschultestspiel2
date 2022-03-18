

// function test()
// {


//     alert("es funktioniert")

// }
class Modal{
    //constractor
    constructor(){
        this.modal=document.querySelector(".js-modal")
    }


open(){
    this.modal.style.display='initial'

}

close() {

    this.modal.style.display='none'
}
}

const openbtn=document.querySelector(".js-open-modal")
const closebtn=document.querySelector(".js-close-modal")

// hier muss die modal funktion aufgerufen werden mut mit new
const modal=new Modal()

openbtn.addEventListener('click',function(event) {
    
   modal.open();
   event.preventDefault();
})
closebtn.addEventListener('click',function() {
    event.preventDefault();
   modal.close()
})


