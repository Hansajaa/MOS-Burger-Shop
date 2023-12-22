// chicken list
const chickenList = [
    {
        Name: "Fried Chicken (Small)",
        Price: 1200
    },
    {
        Name: "Fried Chicken (Regular)",
        Price: 2300
    },
    {
        Name: "Fried Chicken (Large) ",
        Price: 3100
    },
    {
        Name: "Hot Wings (Large)",
        Price: 2400
    },
    {
        Name: "Devilled Chicken (Large) ",
        Price: 900
    },
    {
        Name: "BBQ Chicken (Regular) ",
        Price: 2100
    },
]

// table body
const tableBody = document.getElementById('tblChicken');

function loadTable(){
    for(i=0; i<chickenList.length; i++){
        let item=createItem(chickenList[i].Name,chickenList[i].Price);
        tableBody.appendChild(item);
    }
}

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
