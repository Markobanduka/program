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
document.addEventListener('DOMContentLoaded', function() {
  exactTime();
});

 function exactTime(){
  const dateInput = document.getElementById('date');
  const today = new Date()
  const f= new Intl.DateTimeFormat("es-sp", {
    dateStyle: "short",
  })
  const formattedDate = f.format(today);
  console.log(formattedDate); // For debugging purposes
  dateInput.value = formattedDate;
 }

 