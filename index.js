const edit_btn = document.getElementById('edit_btn');
const update_form = document.getElementById('update_form');
const save_btn = document.getElementById('save_btn')
const add_top_btn = document.getElementById('add_top_btn')
const add_bottom_btn = document.getElementById('add_bottom_btn')
let rowIndex, table = document.getElementById("table");


const CheckEmpty = () =>{
    let isEmpty = false,
    fname_form = document.getElementById('fname_form').value,
    lname_form = document.getElementById('lname_form').value,
    country_form = document.getElementById('country_form').value,
    city_form = document.getElementById('city_form').value;

    if(fname_form == ""){
        alert("fname cannot be empty !!")        
        isEmpty =true;   
    }else if(lname_form == ""){
            alert("lnmae cannot be empty !!")
        isEmpty = true;
    }else if(country_form == ""){
            alert("country cannot be empty !!")
        isEmpty = true;
    }else if(city_form == ""){
            alert("city cannot be empty !!")
        isEmpty = true;
    }
    return isEmpty;
}


const AddHtmlDataToTable = () => {
    let count=0;
    let newRow = table.insertRow(table.length),
    cell0= newRow.insertCell(0),
    cell1 = newRow.insertCell(1),
    cell2 = newRow.insertCell(2),
    cell3 = newRow.insertCell(3),
    cell4 = newRow.insertCell(4),

    srNo = document.getElementById('srNo_form').value,
    fname = document.getElementById('fname_form').value,
    lname = document.getElementById('lname_form').value,
    country = document.getElementById('city_form').value,
    city = document.getElementById('country_form').value;
    count =count+1;
    cell0.innerHTML = count;
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = country;
    cell4.innerHTML = city;
    SelectedIndexRow();

    document.getElementById('srNo_form').value = "",
    document.getElementById('fname_form').value = "",
    document.getElementById('lname_form').value = "",
    document.getElementById('city_form').value = "",
    document.getElementById('country_form').value = "";

}


const SelectedIndexRow = () =>{
    for(let i = 1; i<table.rows.length; i++){
        table.rows[i].onclick = function (){
            rowIndex = this.rowIndex;
            document.getElementById("srNo_form").value = this.cells[0].innerHTML;
            document.getElementById("fname_form").value = this.cells[1].innerHTML;
            document.getElementById("lname_form").value = this.cells[2].innerHTML;
            document.getElementById("city_form").value = this.cells[3].innerHTML;
            document.getElementById("country_form").value = this.cells[4].innerHTML;
        }
    }
}

const UpdateHtmlTableRow = () =>{

    let srNo = document.getElementById('srNo_form').value,
    fname = document.getElementById('fname_form').value,
    lname = document.getElementById('lname_form').value,
    country = document.getElementById('city_form').value,
    city = document.getElementById('country_form').value;

    table.rows[rowIndex].cells[0].innerHTML = srNo;
    table.rows[rowIndex].cells[1].innerHTML = fname;
    table.rows[rowIndex].cells[2].innerHTML = lname;
    table.rows[rowIndex].cells[3].innerHTML = country;
    table.rows[rowIndex].cells[4].innerHTML = city;

    document.getElementById('srNo_form').value = "",
    document.getElementById('fname_form').value = "",
    document.getElementById('lname_form').value = "",
    document.getElementById('city_form').value = "",
    document.getElementById('country_form').value = "";
}


const DeleteSelectedRow = ()=>{
    table.deleteRow(rowIndex);
    document.getElementById('srNo_form').value = "",
    document.getElementById('fname_form').value = "",
    document.getElementById('lname_form').value = "",
    document.getElementById('city_form').value = "",
    document.getElementById('country_form').value = "";
}

const AddToTop = () =>{

    let srNo = document.getElementById('srNo_form').value,
    fname = document.getElementById('fname_form').value,
    lname = document.getElementById('lname_form').value,
    country = document.getElementById('city_form').value,
    city = document.getElementById('country_form').value;

    let table = document.getElementById("table");

    let newRow = table.insertRow(1);
    cell0 = newRow.insertCell(0),
    cell1 = newRow.insertCell(1),
    cell2 = newRow.insertCell(2),
    cell3 = newRow.insertCell(3),
    cell4 = newRow.insertCell(4);
    cell0.innerHTML = srNo;
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = city;
    cell4.innerHTML = country;

    SelectedIndexRow();
    document.getElementById('srNo_form').value = "",
    document.getElementById('fname_form').value = "",
    document.getElementById('lname_form').value = "",
    document.getElementById('city_form').value = "",
    document.getElementById('country_form').value = "";
}


