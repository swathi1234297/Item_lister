
var input = document.getElementById('addform');
var itemList = document.getElementById('items');

input.addEventListener('submit',additems);


function additems(e)
{
  var newItem = document.getElementById('item').value;
  console.log(newItem);

  var li = document.createElement('li');
  li.className='list-group-item';
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  e.preventDefault();
  itemList.appendChild(li);

  var btn=document.createElement('button')
  btn.className='btn btn-danger btn-sm float-right delete';
  
  btn.appendChild(document.createTextNode('X'));
  li.appendChild(btn);
}

itemList.addEventListener('click',removeitem);

function removeitem(e)
{
   if(e.target.classList.contains('delete'));
   if(confirm("Are you sure ?"));
   var li=e.target.parentElement;
   itemList.removeChild(li);
}

var itemInput = document.querySelector('input[type="text"]');

itemInput.addEventListener('keyup',search);
itemInput.addEventListener('keydown',search);

function search(e){
  const term = e.target.value.toLowerCase();
  const itemName = document.querySelectorAll('.list-group-item .list-name');

  Array.from(itemName).forEach(function(items){
    const itemTitle = items.textContent.toLowerCase();
    console.log(itemTitle);
    if(itemTitle.indexOf(term)!=-1){

      items.parentElement.style.display='block';
    }
    else{
      items.parentElement.style.display='none';
    }
  })
}
