

// function test()
// {


//     alert("es funktioniert")

// }
function button(){
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

openbtn.addEventListener('click',function(e) {

    
    e.preventDefault();
   modal.open();

})
closebtn.addEventListener('click',function(e) {
    e.preventDefault();
   modal.close()
})

}
