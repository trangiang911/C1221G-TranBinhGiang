function showTien(){
let tien=document.getElementById('1').value
let x=document.getElementById('2').value
let y=document.getElementById('3').value

if (x==y) {
    alert(tien)
}
else if (x === "vnd" && y ==="usd") {
    alert (tien/23000)}
else {
    alert (tien*23000)}
}
