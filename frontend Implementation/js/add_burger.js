// burger list
const burgerList = []

// burger table
// const burgerTable = document.getElementById("");

// table body
const tableBody = document.getElementById('tblBurger');

// add button action
document.getElementById("btnBurgerAdd").onclick = function(){
    
    let itemName = document.getElementById("burgerName").value;
    let itemPrice = document.getElementById("burgerPrice").value;

    // console.log(typeof Number(custContactNumber));

    if(itemName != '' && itemPrice != ''){
        burgerList.push(
            {
                Name : itemName,
                Price : itemPrice
            }
        );

        
        const newItem = createItem(itemName, itemPrice);
        tableBody.appendChild(newItem);
    
        document.getElementById("itemName").value = '';
        document.getElementById("itemPrice").value = '';
    
        console.log(burgerList);
    }else{
        alert("Enter a valid details !")
    }


        
    
}

// create new burger row
function createItem(itemName, price){
    const row = document.createElement('tr');
    
    const iName = document.createElement('td');
    iName.textContent=itemName;
    row.appendChild(iName);

    const iPrice = document.createElement('td');
    iPrice.textContent = price;
    row.appendChild(iPrice);

    const btn = document.createElement('td');
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Delete";
    btn.appendChild(btnDelete);
    row.appendChild(btn);

    return row;
}
