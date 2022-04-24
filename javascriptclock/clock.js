let name=prompt("Kullanıcı adınız: ")
let myName=document.querySelector('#myName')
myName.innerHTML=`${name}`

let date = new Date();
let day = date.getDay();
let days = [
  "/ Pazar",
  "/ Pazartesi",
  "/ Salı",
  "/ Çarşamba",
  "/ Perşembe",
  "/ Cuma",
  "/ Cumartesi",
];
function tarihSaat() {
  let date = new Date().toLocaleTimeString() + ` ${days[day]}`;
  document.getElementById("myClock").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);
// günün saat bilgisi: ${new Date().getHours()