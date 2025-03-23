
  //variables to select elements
  
  const itemForm = document.getElementById('item-form');
  const itemInput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');
  const clearBtn = document.getElementById('clear');
  const itemFilter = document.getElementById('filter');



  // Function to add item

  function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;

  // Validate Input 

  if (newItem === ''){
    alert('Please add an item');
    return;

  }
  
  // Create List Item 

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // to add to listing
  
  itemList.appendChild(li);

  checkUI();


  // to clear input 

  itemInput.value = '';


  console.log('Item is added :', li);

}

// fucntions to create button and icon

  function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
  }

  function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

  }

  //functions to remove items

  function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item'))
      e.target.parentElement.parentElement.remove();
  }

  function clearItems(){
    while(itemList.firstChild){
      itemList.removeChild(itemList.firstChild);
    }
  }
  
  
  function checkUI(){
    const items = itemList.querySelectorAll('li') // make sure this one is not on a global scope otherwise nodelist would be 0.
    console.log(items);
    if(items.length === 0){
      clearBtn.style.display = 'none';
      itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
    }
  }
  
  
  
  
  // Event Listeners
  
  itemForm.addEventListener('submit', addItem);
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);

  



  
