// beverage list
const beveragesList = []

// beverage table
// const burgerTable = document.getElementById("");

// table body
const tableBody = document.getElementById('tblBeverages');

// add button action
document.getElementById("btnBeveragesAdd").onclick = function(){
    
    let itemName = document.getElementById("beverageName").value;
    let itemPrice = document.getElementById("beveragePrice").value;

    // console.log(typeof Number(custContactNumber));

    if(itemName != '' && itemPrice != ''){
        beveragesList.push(
            {
                Name : itemName,
                Price : itemPrice
            }
        );

        
        const newItem = createItem(itemName, itemPrice);
        tableBody.appendChild(newItem);
    
        document.getElementById("beverageName").value = '';
        document.getElementById("beveragePrice").value = '';
    
        console.log(beveragesList);

    }else{

        alert("Enter a valid details !");

    } 
    
}

// create new beverage row
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
