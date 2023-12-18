// fires list
const firesList = []

// fires table
// const burgerTable = document.getElementById("");

// table body
const tableBody = document.getElementById('tblFries');

// add button action
document.getElementById("btnFriesAdd").onclick = function(){
    
    let itemName = document.getElementById("friesName").value;
    let itemPrice = document.getElementById("friesPrice").value;

    // console.log(typeof Number(custContactNumber));

    if(itemName != '' && itemPrice != ''){
        firesList.push(
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
