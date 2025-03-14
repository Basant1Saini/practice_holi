let data =[];
document.getElementById('dataform').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    //add data to array
    data.push({name, age});
    //update table
    updateTable();
    //clear form
    this .reset();
});
document.getElementById('downloadBtn').addEventListener('click', function(){
    //create worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    //create workbook and add worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    //genrte and download excel file
    XLSX.writeFile(wb, 'data.xlsx');
}
);

function updateTable(){
    const tbody = document.querySelector('#dataTable tbody');
    table.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.age}</td>
    `;
    tbody.appendChild(row);
       });
}