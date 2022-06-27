function CreateTable(){
  let body = document.getElementsByTagName("body")[0];

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  
  for (let i = 0; i < 2; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
    
      let cell = document.createElement("td");
      let cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

   
    tblBody.appendChild(row);
  }

  
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

function CreateList(){
    
    let sel = document.createElement('select');
    sel.name = 'drop1';
    sel.id = 'Select1';
    
    let month = [
      "Jan", "Feb", "March", "Apr","May", "June", "Jule", "Aug", 
      "Sep", "Oct", "Nov", "Dec" 
    ];
    
    let options_str = "";
    
    month.forEach( function(month) {
      options_str += '<option value="' + month + '">' + month + '</option>';
    });
    
    sel.innerHTML = options_str;
    document.body.appendChild(sel);
    
  
}   
function MoveImg(){
    let img = document.createElement("img")
    img.src = "img/photo.jpg"
    document.body.appendChild(img)
} 
