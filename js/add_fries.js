// fires list
const friesList = [
    {
        Name:"Steak Fries (Large) ",
        Price: 1200
    },
    {
        Name:"Steak Fries (Medium)",
        Price: 600
    },
    {
        Name:"French Fries (Large) ",
        Price: 800
    },
    {
        Name:"French Fries (Medium)",
        Price: 650
    },
    {
        Name:"French Fries (Small)",
        Price: 450
    },
    {
        Name:"Sweet Potato Fries (Large) ",
        Price: 600
    },
]

// table body
const tableBody = document.getElementById('tblFries');

function loadTable(){
    for(i=0; i<friesList.length; i++){
        let item=createItem(friesList[i].Name,friesList[i].Price);
        tableBody.appendChild(item);
    }
}

// add button action
document.getElementById("btnFriesAdd").onclick = function(){
    
    let itemName = document.getElementById("friesName").value;
    let itemPrice = document.getElementById("friesPrice").value;

    if(itemName != '' && itemPrice != ''){
        friesList.push(
            {
                Name : itemName,
                Price : itemPrice
            }
        );

        
        const newItem = createItem(itemName, itemPrice);
        tableBody.appendChild(newItem);
    
        document.getElementById("friesName").value = '';
        document.getElementById("friesPrice").value = '';
    
        console.log(firesList);

    }else{

        alert("Enter a valid details !");

    } 
    
}

// create new fires row
function createItem(itemName, price){
    const row = document.createElement('tr');
    
    const iName = document.createElement('td');
    iName.textContent=itemName;
    row.appendChild(iName);

    const iPrice = document.createElement('td');
    iPrice.textContent = "Rs."+price;
    row.appendChild(iPrice);

    const btn = document.createElement('td');
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Delete";
    btn.appendChild(btnDelete);
    row.appendChild(btn);

    return row;
}
