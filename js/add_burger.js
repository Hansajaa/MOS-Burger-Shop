// burger list
const burgerList = [
    {
        Name:"Classic Burger (Large) ", Price:"750"
    },
    {
        Name:"Classic Burger (Regular) ", Price:"1500"
    },
    {
        Name:"Turkey Burger ", Price:"1600"
    },
    {
        Name:"Chicken Burger (Large)", Price:"1400"
    },
    {
        Name:"Chicken Burger (Regular) ", Price:"800"
    },
    {
        Name:"Cheese Burger (Large) ", Price:"1000"
    },
    {
        Name:"Cheese Burger (Regular) ", Price:"600"
    },
    {
        Name:"Bacon Burger", Price:"650"
    },
    {
        Name:"Shawarma Burger", Price:"800"
    },
    {
        Name:"Olive Burger", Price:"1800"
    },
    {
        Name:"Double-Cheese Burger", Price:"1250"
    },
    {
        Name:"Crispy Chicken Burger (Regular)", Price:"1300"
    },
    {
        Name:"Crispy Chicken Burger (Large) ", Price:"1600"
    },
    {
        Name:" Paneer Burger", Price:"900"
    }
]

// table body
const tableBody = document.getElementById('tblBurger');

function loadTable(){
    for(i=0; i<burgerList.length; i++){
        let item=createItem(burgerList[i].Name,burgerList[i].Price);
        tableBody.appendChild(item);
    }
}

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
    
        document.getElementById("burgerName").value = '';
        document.getElementById("burgerPrice").value = '';
    
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
    iPrice.textContent = "Rs."+price;
    row.appendChild(iPrice);

    const btn = document.createElement('td');
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Delete";
    btn.appendChild(btnDelete);
    row.appendChild(btn);

    return row;
}
