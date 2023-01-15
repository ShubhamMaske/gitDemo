var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  //Get description
  var newItemDes = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  var dis = document.createElement('li');

  // Add class
  li.className = 'list-group-item';
  dis.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "+newItemDes));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Create EditButton button element
  var editbtn = document.createElement('button');



  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Add classes to Edit button
  editbtn.className = 'btn btn-info btn-sm float-right mr-2 edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  editbtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);
 

  // Append li to list
  itemList.appendChild(li);
 
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var desc = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';     
        }else{
            item.style.display = 'none'; 
        }
    })
}

