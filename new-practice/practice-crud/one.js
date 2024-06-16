let selectedrow = null;


function onFormSubmit(){
    if(validate()){
        const formData = readFormData();
        selectedrow === null ? insertNewRecord(formData) : updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    return {
        fullName: getValue("fullName"),
        email: getValue("email"),
        salary: getValue("salary"),
        city: getValue("city")
    }
}

function getValue(elementId){
    return document.getElementById(elementId).value;
}

function insertNewRecord(data){
    const table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
    <td>${data.fullName}</td>
    <td>${data.email}</td>
    <td>${data.salary}</td>
    <td>${data.city}</td>
    <td>
        <a onClick="onEdit(this)">Edit</a>
        <a onClick="onDelete(this)">Delete</a>.
    </td>`;
}

function resetForm(){
    const formElements = ["fullName", "email", "salary", "city"];
    formElements.forEach(elementId => document.getElementById(elementId).value = "");
    selectedrow = null;
}

function onEdit(td){
    selectedrow = td.closest("tr");
    const [fullName, email, salary, city] = Array.from(selectedrow.cells).map(cell => cell.innerHTML);
    setFormValues({fullName, email, salary, city})
}

function setFormValues(data){
    Object.entries(data).forEach(([key,value]) => document.getElementById(key).value = value);
}

function updateRecord(formData){
    const cellValues = Object.values(formData);
    Array.from(selectedrow.cells).slice(0,cellValues.length).forEach((cell,index) => cell.innerHTML = cellValues[index])
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        const row = td.closest("tr");
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}










function validate(){
    const fullName = getValue("fullName");
    const fullNameValidationError = document.getElementById("fullNameValidationError");

    if(fullName.trim() === ""){
        fullNameValidationError.classList.remove("hide");
        return false;
    }else{
        fullNameValidationError.classList.add("hide");
        return true;
    }
}
