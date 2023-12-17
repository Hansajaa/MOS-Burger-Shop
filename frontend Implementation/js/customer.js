
const customerList = []

document.getElementById("btnCustAdd").onclick = function(){
        
    customerList.push(
        {
            contactNumber : document.getElementById("custContactNumber").value,
            Name : document.getElementById("custName").value
        }
    );

    document.getElementById("custContactNumber").value = ''
    document.getElementById("custName").value = ''

    console.log(customerList);
}

