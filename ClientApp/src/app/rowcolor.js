function rowHighlight(x) {
    var tr = x.closest('table tbody tr');
    var alltr = document.getElementsByTagName("tr");
for(var i=0;i<alltr.length;i++){
    alltr[i].style.background = "initial"   
}
    tr.style.backgroundColor = 'rgba(71, 186, 231, 0.575)';

  }
