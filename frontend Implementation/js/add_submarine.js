// submarine list
const submarineList = [
    {
        Name: "Crispy Chicken Submarine (Large) ",
        Price: 2000
    },
    {
        Name: "Crispy Chicken Submarine (Regular) ",
        Price: 1500
    },
    {
        Name: "Chicken Submarine (Large) ",
        Price: 1800
    },
    {
        Name: "Chicken Submarine (Regular)",
        Price: 1400
    },
    {
        Name: "Grinder Submarine",
        Price: 2300
    },
    {
        Name: "Cheese Submarine",
        Price: 2200
    },
    {
        Name: "Double Cheese n Chicken Submarine",
        Price: 1900
    },
    {
        Name: "Special Horgie Submarine",
        Price: 2800
    },
    {
        Name: "MOS Special Submarine",
        Price: 3000
    },
]

// table body
const tableBody = document.getElementById('tblSubmarine');


function loadTable(){
    for(i=0; i<submarineList.length; i++){
        let item=createItem(submarineList[i].Name,submarineList[i].Price);
        tableBody.appendChild(item);
    }
}

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
