let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    let count = cart.querySelector('.count');
                    count.value = parseInt(count.value) + 1;
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
 
  var totalPriceElement = document.querySelector('.total-price');
  
  totalPriceElement.innerHTML = '0 MDL';


  var addButtons = document.querySelectorAll('.add');

  addButtons.forEach(function(button) {
    button.addEventListener('click', function() {
   
      var itemElement = this.parentNode.parentNode;

      var price = parseInt(itemElement.querySelector('.price').innerHTML);

      var count = parseInt(itemElement.querySelector('.count').value);

      totalPriceElement.innerHTML = (parseInt(totalPriceElement.innerHTML) + price * count) + ' MDL';

    });
  });


  var removeButtons = document.querySelectorAll('.fa-trash-can');

  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
     
      var itemElement = this.parentNode.parentNode.parentNode;

      var key = itemElement.getAttribute('data-key');
     
      Remove(key);
    });
  });
});
function removeFromCart(key) {
  var item = document.querySelector(`[data-key="${key}"]`);
  var price = item.querySelector(".price").innerHTML;
  var count = item.querySelector(".count").value;
  var total = price * count;
  var totalPrice = document.querySelector(".total-price");
  totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - total + " MDL";
  item.querySelector(".count").value = 0;
  item.remove();
}
let deleteButtons = document.querySelectorAll('.fa-trash-can');

deleteButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var itemElement = this.parentNode.parentNode;
    var price = parseInt(itemElement.querySelector('.price').innerHTML);
    var count = parseInt(itemElement.querySelector('.count').value);
    totalPriceElement.innerHTML = (parseInt(totalPriceElement.innerHTML) - price * count) + ' MDL';
    itemElement.remove();
  });
});
function Add($key){
    let list = document.querySelectorAll('.list .item');
    let item;
    list.forEach(i => {
        if(i.getAttribute('data-key') == $key){
            item = i.cloneNode(true);
        }
    })
    if(item){
        document.querySelector('.listCart').appendChild(item);
        var price = parseInt(item.querySelector('.price').innerHTML);
        var count = parseInt(item.querySelector('.count').value);
        var totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.innerHTML = (parseInt(totalPriceElement.innerHTML) + price * count) + ' MDL';
    }
}
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    let item;
    listCart.forEach(i => {
        if(i.getAttribute('data-key') == $key){
            item = i;
        }
    })
    if(item){
        var price = parseInt(item.querySelector('.price').innerHTML);
        var count = parseInt(item.querySelector('.count').value);
        var totalPriceElement = document.querySelector('.total-price');
        console.log(parseInt(totalPriceElement.innerHTML.split(' ')[0]));
        totalPriceElement.innerHTML = (parseFloat(totalPriceElement.innerHTML.split(' ')[0]) - price * count) + ' MDL';
        item.remove();
    }
}








