let insertDiv=document.querySelector('.insert')
window.addEventListener('keydown',function(e){
    insertDiv.innerHTML=`
    <table>
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>ASCII value</th>
  </tr>
  <tr>
    <td>${e.key==" "?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    `;
})