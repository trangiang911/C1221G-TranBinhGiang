let vatLy = prompt("Nhập điểm vật lý");
let hoaHoc = prompt("Nhập điểm hóa");
let sinhHoc = prompt("Nhập điểm sinh học");
let x=parseInt(vatLy)
let y=parseInt(hoaHoc)
let z=parseInt(sinhHoc)
let diemTb=(x+y+z)/3;
let tong=(x+y+z);
document.write("Điểm vật lý:"+ vatLy);
document.write('<br>')
document.write("Điểm hóa học:"+ hoaHoc);
document.write('<br>')
document.write("Điểm sinh học:"+ sinhHoc);
document.write('<br>')
document.write("Điểm Tổng:" + tong);
document.write('<br>')
document.write("Điểm trung bình:"+ diemTb);
document.write('<br>')
//
