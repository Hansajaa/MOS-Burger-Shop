// pasta list
const pastaList = []

// pasta table
// const burgerTable = document.getElementById("");

// table body
const tableBody = document.getElementById('tblPasta');

// add button action
document.getElementById("btnPastaAdd").onclick = function(){
    
    let itemName = document.getElementById("pastaName").value;
    let itemPrice = document.getElementById("pastaPrice").value;

    // console.log(typeof Number(custContactNumber));

    if(itemName != '' && itemPrice != ''){
        pastaList.push(
            {
                Name : itemName,
                Price : itemPrice
            }
        );

        
        const newItem = createItem(itemName, itemPrice);
        tableBody.appendChild(newItem);
    
        document.getElementById("pastaName").value = '';
        document.getElementById("pastaPrice").value = '';
    
        console.log(pastaList);

    }else{

        alert("Enter a valid details !");

    } 
    
}

// create new pasta row
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
