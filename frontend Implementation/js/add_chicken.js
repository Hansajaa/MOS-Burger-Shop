// chicken list
const chickenList = []

// chicken table
// const burgerTable = document.getElementById("");

// table body
const tableBody = document.getElementById('tblChicken');

// add button action
document.getElementById("btnChickenAdd").onclick = function(){
    
    let itemName = document.getElementById("chickenName").value;
    let itemPrice = document.getElementById("chickenPrice").value;

    // console.log(typeof Number(custContactNumber));

    if(itemName != '' && itemPrice != ''){
        chickenList.push(
            {
                Name : itemName,
                Price : itemPrice
            }
        );

        
        const newItem = createItem(itemName, itemPrice);
        tableBody.appendChild(newItem);
    
        document.getElementById("chickenName").value = '';
        document.getElementById("chickenPrice").value = '';
    
        console.log(chickenList);

    }else{

        alert("Enter a valid details !");

    } 
    
}

// create new chicken row
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
