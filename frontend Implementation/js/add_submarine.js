// submarine list
const submarineList = []

// submarine table
// const burgerTable = document.getElementById("");

// table body
const tableBody = document.getElementById('tblSubmarine');

// add button action
document.getElementById("btnSubmarineAdd").onclick = function(){
    
    let itemName = document.getElementById("submarineName").value;
    let itemPrice = document.getElementById("submarinePrice").value;

    // console.log(typeof Number(custContactNumber));

    if(itemName != '' && itemPrice != ''){
        submarineList.push(
            {
                Name : itemName,
                Price : itemPrice
            }
        );

        
        const newItem = createItem(itemName, itemPrice);
        tableBody.appendChild(newItem);
    
        document.getElementById("submarineName").value = '';
        document.getElementById("submarinePrice").value = '';
    
        console.log(submarineList);

    }else{

        alert("Enter a valid details !");

    }


        
    
}

// create new submarine row
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
