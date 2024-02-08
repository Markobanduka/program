function generatePDF(){
  const element = document.getElementById("invoice");

  html2pdf()
  .from(element)
  .save();
}



function buildTable() {
  event.preventDefault();
  document.getElementById('addingRows').style.display = "none";
  const table = document.getElementById('myTable');
  const numOfSessions = document.querySelector('#sessions');
  
  const numOfRows = numOfSessions.value;
  console.log(numOfRows);
  
      for (let i = 0; i < numOfRows/2; i++) {
       
          let row = `<tr>
                      <td class="firstFild">${i+1}.</td>
                      <td></td>
                      <td></td>
                      <td>${Math.ceil(numOfRows / 2) + i + 1}.</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>`;
          table.innerHTML += row;
      }
  
}

