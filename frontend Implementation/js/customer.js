
// customer list
const customerList = []

// customer table
const customerTable = document.getElementById("tblCustomer");

// table body
const tableBody = document.getElementById('tblBody');

// add button action
document.getElementById("btnCustAdd").onclick = function(){
    
    let custContactNumber = document.getElementById("custContactNumber").value;
    let custName = document.getElementById("custName").value;

    // console.log(typeof Number(custContactNumber));

    if(custContactNumber.length == 10 && custContactNumber != '' && custName != ''){
        customerList.push(
            {
                contactNumber : custContactNumber,
                Name : custName
            }
        );

        
        const newCustomer = createCustomer(custContactNumber, custName);
        tableBody.appendChild(newCustomer);
    
        document.getElementById("custContactNumber").value = '';
        document.getElementById("custName").value = '';
    
        console.log(customerList);
    }else{
        alert("Enter valid details !")
    }


        
    
}

// create new customer row
function createCustomer(number, name){
    const row = document.createElement('tr');
    
    const cNumber = document.createElement('td');
    cNumber.textContent=number;
    row.appendChild(cNumber);

    const cName = document.createElement('td');
    cName.textContent = name;
    row.appendChild(cName);

    const btn = document.createElement('td');
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Delete";
    btn.appendChild(btnDelete);
    row.appendChild(btn);

    return row;
}
