const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

const itemname = document.getElementById('item_name');
const item_price = document.getElementById('item_price');

open.addEventListener('click', function () {
  document.getElementById(
    'modaliD'
  ).innerHTML += ` <div class="cartlist" id="cartlist_item">
            <div class="added--itemname">${itemname.textContent}</div>
            <div class="add--itemquantity">1</div>
            <div class="add--itemprice">${item_price.textContent}</div>
            </div> `;

  modal_container.classList.add('show');
});

close.addEventListener('click', function () {
  console.log('hello');

  modal_container.classList.remove('show');
});
