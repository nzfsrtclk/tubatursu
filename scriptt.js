
// tarih kısmı.......
const tarih = document.getElementsByClassName("tarih")[0];
const date = new Date();
const gun = String(date.getDate()).padStart(2, '0'); // Ayın gününü iki haneli yap
const ay = String(date.getMonth() + 1).padStart(2, '0'); // Ayı iki haneli yap
const yil = date.getFullYear();

tarih.innerHTML = gun + " / " + ay + " / " + yil;

//  Optionlar arası geçişerde sayfayı yenileme

let previousSelection = null;

document.getElementById('myForm').addEventListener('change', function (event) {
    if (event.target.name === 'binatipi') {
        if (previousSelection && previousSelection !== event.target.value) {
            location.reload(); // Sayfayı yenile
        }
        previousSelection = event.target.value;
    }
});

// Sayfa yüklendiğinde, seçili radio butonunu kaydet
window.addEventListener('load', function () {
    const selectedOption = document.querySelector('input[name="binatipi"]:checked');
    if (selectedOption) {
        previousSelection = selectedOption.value;
    }
});

    var dekor = document.getElementById("dekor");
    

document.querySelectorAll('input[name="binatipi"]').forEach(function (radio) {
    radio.addEventListener('change', function () {

        let seçilentip = document.querySelector('input[name="binatipi"]:checked').value;

        const centerid = document.getElementById("centerid");
        const yapi1 = document.getElementById("yapi1");
        const yapi2 = document.getElementById("yapi2");
        const yapi3 = document.getElementById("yapi3");
        const yapi4 = document.getElementById("yapi4");
        const yapi5 = document.getElementById("yapi5");
        const yapi6 = document.getElementById("yapi6");
        const yapi7 = document.getElementById("yapi7");
        const yapi8 = document.getElementById("yapi8");
        const yapi9 = document.getElementById("yapi9");
        const yapi10 = document.getElementById("yapi10");
        const yapi13 = document.getElementById("yapi13");
        const yapi14 = document.getElementById("yapi14");
        const yapi15 = document.getElementById("yapi15");
        const yapi16 = document.getElementById("yapi16");
        const yapi17 = document.getElementById("yapi17");
        const yapi18 = document.getElementById("yapi18");
        const yapi19 = document.getElementById("yapi19");
        const yapi20 = document.getElementById("yapi20");
        let ev1 = document.getElementById("ev1");
        let ev2 = document.getElementById("ev2");
        let ev3 = document.getElementById("ev3");
        let ev4 = document.getElementById("ev4");
        let ev5 = document.getElementById("ev5");
        let ev6 = document.getElementById("ev6");

        if (seçilentip === 'yapitipi1') {
            centerid.classList.remove("no-yapi");
            yapi1.classList.add("no-yapi");
            yapi2.classList.add("no-yapi");
            ev1.classList.add("no-yapi");
            ev2.classList.add("no-yapi");
            ev3.classList.add("no-yapi");
            ev4.classList.add("no-yapi");
            ev5.classList.add("no-yapi");
            ev6.classList.add("no-yapi");
            dekor.classList.add("no-yapi");
        } else {
            yapi1.classList.remove("no-yapi");
            yapi2.classList.remove("no-yapi");
            dekor.classList.remove("no-yapi");

        };

        if (seçilentip === 'yapitipi2') {
            centerid.classList.remove("no-yapi");
            yapi3.classList.add("no-yapi");
            yapi19.classList.add("no-yapi");
            yapi4.classList.add("no-yapi");
            yapi5.classList.add("no-yapi");
            yapi6.classList.add("no-yapi");
            yapi7.classList.add("no-yapi");
            yapi8.classList.add("no-yapi");
            yapi9.classList.add("no-yapi");
            yapi10.classList.add("no-yapi");
            dekor.classList.add("no-yapi");

        } else {
            yapi3.classList.remove("no-yapi");
            yapi19.classList.remove("no-yapi");
            yapi4.classList.remove("no-yapi");
            yapi5.classList.remove("no-yapi");
            yapi6.classList.remove("no-yapi");
            yapi7.classList.remove("no-yapi");
            yapi8.classList.remove("no-yapi");
            yapi9.classList.remove("no-yapi");
            yapi10.classList.remove("no-yapi");
        };

        if (seçilentip === 'yapitipi3') {
            centerid.classList.remove("no-yapi");
            yapi18.classList.add("no-yapi");
            yapi20.classList.add("no-yapi");
            yapi13.classList.add("no-yapi");
            yapi14.classList.add("no-yapi");
            yapi15.classList.add("no-yapi");
            yapi16.classList.add("no-yapi");
            yapi17.classList.add("no-yapi");
            dekor.classList.add("no-yapi");
        } else {
            yapi18.classList.remove("no-yapi");
            yapi20.classList.remove("no-yapi");
            yapi13.classList.remove("no-yapi");
            yapi14.classList.remove("no-yapi");
            yapi15.classList.remove("no-yapi");
            yapi16.classList.remove("no-yapi");
            yapi17.classList.remove("no-yapi");
        };

    });

});

document.getElementById('konut').addEventListener('change', function () {

    let selectedOption = this.options[this.selectedIndex];

    let selectedId = selectedOption.id;

    const yapi11 = document.getElementById("yapi11");
    const yapi12 = document.getElementById("yapi12");
    const yapi7 = document.getElementById("yapi7");
    const yapi4 = document.getElementById("yapi4");

    if (selectedId === yapi11.id) {
        yapi7.classList.add("no-yapi");
        yapi4.classList.add("no-yapi");
        ev3.classList.remove("no-yapi");
        ev4.classList.remove("no-yapi");
        ev5.classList.remove("no-yapi");
        ev6.classList.remove("no-yapi");
        dekor.classList.remove("no-yapi");


    } else if (selectedId === yapi12.id) {
        yapi7.classList.remove("no-yapi");
        yapi4.classList.remove("no-yapi");
        yapi5.classList.add("no-yapi");
        yapi6.classList.add("no-yapi");
        ev1.classList.remove("no-yapi");
        ev2.classList.remove("no-yapi");
        ev3.classList.remove("no-yapi");
        ev4.classList.remove("no-yapi");
        ev5.classList.remove("no-yapi");
        ev6.classList.remove("no-yapi");
        dekor.classList.remove("no-yapi");

    } else {
        yapi7.classList.remove("no-yapi");
        yapi4.classList.remove("no-yapi");
        yapi5.classList.remove("no-yapi");
        yapi6.classList.remove("no-yapi");
        ev1.classList.add("no-yapi");
        ev2.classList.add("no-yapi");
        ev3.classList.add("no-yapi");
        ev4.classList.add("no-yapi");
        ev5.classList.add("no-yapi");
        ev6.classList.add("no-yapi");
    };
});


document.getElementById("asansor").addEventListener("change", function () {

    let seçilenAsansorVar = this.options[this.selectedIndex];
    let seçilenAsansorVarId = seçilenAsansorVar.id;

    let asansorsuzOption = document.getElementById("asansorsuz");

    let asan1 = document.getElementById("asan1");
    let asan2 = document.getElementById("asan2");
    let asan3 = document.getElementById("asan3");
    let binakatsayisi = document.getElementById("katsayisi");

    if (seçilenAsansorVarId === "asvar") {
       asansorsuzOption.classList.remove("no-yapi");
    } else {
      asansorsuzOption.classList.add("no-yapi");
    }
    if (seçilenAsansorVarId !== "asvar") {
        asan1.classList.add("no-yapi");
        asan2.classList.add("no-yapi");
        asan3.classList.add("no-yapi");
        binakatsayisi.classList.add("no-yapi");
    } else {
        asan1.classList.remove("no-yapi");
        asan2.classList.remove("no-yapi");
        asan3.classList.remove("no-yapi");
        binakatsayisi.classList.remove("no-yapi");
    }


});

document.getElementById('isyeri').addEventListener('change', function () {

    let seçilenişyeri = this.options[this.selectedIndex];
    let seçilenişyeriİd = seçilenişyeri.id;

    if (seçilenişyeriİd === 'işyeriid1') {        // işyeriid1 olan seçili değilse kat sayısı kısmını gizliyor.
        yapi4.classList.remove("no-yapi");
        yapi7.classList.remove("no-yapi");
    } else {
        yapi4.classList.add("no-yapi");
        yapi7.classList.add("no-yapi");
    }
});


// Hesaplama sonunda tekrar sıfırlama yapma


function sifirla() {
    // Tüm radio button'ların seçimini kaldırır
    document.querySelectorAll('input[name="binatipi"]').forEach(function (radio) {
        radio.checked = false;  // radio butonu seçimini kaldırmak için false kullanılır
    });

    // Tüm select (dropdown) elemanlarını varsayılan duruma getirir
    document.querySelectorAll('select').forEach(function (select) {
        select.selectedIndex = 0;  // İlk (varsayılan) seçeneği seçer
    });

    // Tüm input (text) elemanlarını temizler
    document.getElementById("numberInput").value = "";  // Text alanlarını boşaltır   
    document.getElementById("yazdir").innerHTML = "";

    // Gerekirse diğer alanları gizlemek için
    document.getElementById("centerid").classList.add("no-yapi");
    document.getElementById("yapi1").classList.add("no-yapi");
    document.getElementById("yapi2").classList.add("no-yapi");
    document.getElementById("yapi3").classList.add("no-yapi");
    // document.getElementById("yapi4").classList.add("no-yapi");
    document.getElementById("yapi5").classList.add("no-yapi");
    document.getElementById("yapi6").classList.add("no-yapi");
    // document.getElementById("yapi7").classList.remove("no-yapi");
    document.getElementById("yapi8").classList.add("no-yapi");
    document.getElementById("yapi9").classList.add("no-yapi");
    document.getElementById("yapi10").classList.add("no-yapi");
    document.getElementById("hesapla").classList.remove("hesapla");   // hesaplama düğmesi gösteriliyor.

    // Sayfayı yeniden yükler
    location.reload();

    // Sıfırla butonuna tıklanıldığında sifirla fonksiyonunu çağırır
    document.getElementById("sifirlaButton").addEventListener("click", sifirla);
};


// Hesaplama formülleri.

function hesapla() {
    const selectedTip = document.querySelector('input[name="binatipi"]:checked');
    const digeryapi = document.getElementById("digeryapi");
    const numberInput = document.getElementById("numberInput");
    const isyeri = document.getElementById("isyeri");
    const katsayisi = document.getElementById("katsayisi");
    const konut = document.getElementById("konut");
    const bina = document.getElementById("bina");
    const nizam = document.getElementById("nizam");
    const cati = document.getElementById("cati");
    const asansor = document.getElementById("asansor");

    if (!selectedTip) {
        alert('Lütfen bina tipini seçin!');
        return;
    }

    let selectedValue = selectedTip.value;
    let alanlar = [];
    let bosAlanVarMi = false;

    // Seçilen tipin gerektirdiği alanları kontrol et

    if (selectedValue === 'yapitipi1') {

        if (konut.selectedIndex === 1) {

            alanlar.push(bina, nizam, cati, numberInput)

        } else if (konut.selectedIndex === 2) {

            alanlar.push(bina, nizam, cati, numberInput, asansor);

        }

    } else if (selectedValue === 'yapitipi2') {

        // İş yeri için gerekli alanlar

        alanlar.push(isyeri, numberInput);

        // Sadece "İş Merkezi" seçildiğinde katsayisi alanını kontrol et       

        if (isyeri.selectedIndex === 1) {

            alanlar.push( asansor);
        }
    } else if (selectedValue === 'yapitipi3') {

        // Diğer yapılar için gerekli alanlar

        alanlar.push(digeryapi, numberInput);
    }


    // Boş alanları kontrol et

    alanlar.forEach((alan) => {

        if (alan && alan.value.trim() === "") {

            bosAlanVarMi = true;

            alan.style.border = "3px solid red"; // Boş alanın kenarlığını kırmızı yap

        } else if (alan) {

            alan.style.border = ""; // Alan doluysa kenarlığı sıfırla

        }
    });

    if (bosAlanVarMi) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

  let hesaplamaSonucu1;
  var dekorValue = document.querySelector('select[name="dekor"]').value;

console.log(dekorValue);
// Seçilen tip ve metrekareye göre hesaplama
if (selectedValue === 'yapitipi3') {

    hesaplamaSonucu1 = digeryapi.value * numberInput.value;

} else if (selectedValue === 'yapitipi2') {

    if ( asansor.selectedIndex === 2){

        let isyeriAsansorsuz = 12250;

        hesaplamaSonucu1 = isyeriAsansorsuz * numberInput.value;

    } else if (katsayisi.selectedIndex === 1) {

        let isyeritek = 13000; // Ticari binalarda 3 kata kadar 3 kat dahil asansörsüz.

        hesaplamaSonucu1 = isyeritek * numberInput.value;

    } else if (katsayisi.selectedIndex === 2) {

        let isyeri3 = 14400; // Ticari amaçlı binalarda 21,50 metre yüksekliğe kadar olan yapılar.

        hesaplamaSonucu1 = isyeri3 * numberInput.value;

    } else if (katsayisi.selectedIndex === 3) {

        let isyeri8 = 18700; // İş merkezleri 21,50 metre ile 30,50 metre arası dahil yapılar.

        hesaplamaSonucu1 = isyeri8 * numberInput.value;

    } else if (katsayisi.selectedIndex === 4) {

        let isyeri10 = 21300; // İş merkezleri yapı yüksekliği 30,50 metreyi aşan yapılar.

        hesaplamaSonucu1 = isyeri10 * numberInput.value;

    } else if (isyeri.selectedIndex > 1) {

        hesaplamaSonucu1 = isyeri.value * numberInput.value;
    }
} else if (selectedValue === 'yapitipi1') {
    if (konut.selectedIndex === 1) {

        let mustakil = 12250; // Konutlar 3 kata kadar 3 kat dahil asansörsüz.

        hesaplamaSonucu1 = mustakil * numberInput.value * dekorValue ;
console.log(dekor.value);
     } else if (katsayisi.selectedIndex ===1) {

        let birkat = 13000; // 1-3 kat 

        hesaplamaSonucu1 = birkat * numberInput.value * dekorValue ;

    } else if (katsayisi.selectedIndex === 2) {

        let uckat = 14400; // 21,50 metre yüksekliğe kadar olan konutlar.

        hesaplamaSonucu1 = uckat * numberInput.value * dekorValue ;

    } else if (katsayisi.selectedIndex === 3) {

        let dortkat = 15300; // 30,50 metre yüksekliğe kadar olan apartman tipi konutlar.

        hesaplamaSonucu1 = dortkat * numberInput.value * dekorValue ;

    } else if (katsayisi.selectedIndex === 4) {

        let beskat = 18700; // 30,50 metre ile 51,50 metre arası dahil.

        hesaplamaSonucu1 = beskat * numberInput.value * dekorValue ;

    } else if (asansor.selectedIndex === 2) {

        let asansorsuz13 = 12250;

        hesaplamaSonucu1 = asansorsuz13 * numberInput.value * dekorValue ;
    }
}

// Üçerli rakam grupları halinde nokta ile ayırma
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

hesaplamaSonucu1 = formatNumber(hesaplamaSonucu1);

// Hesaplama düğmesi gizleniyor.
document.getElementById("hesapla").classList.add("hesapla");

// Seçilen kısımlar ve tarih
let today = new Date();
let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

let selectedParts = `

    <p>Tarih: ${date}</p>
`;

//    <p>Yapı Tipi: ${selectedValue}</p>
//    <p>Metrekare: ${numberInput.value}</p>

// Yeni sayfa içeriği
let newWindowContent = `
    <html>
    <head><title>Hesaplama Sonucu</title></head>
    <body>
    <h3 style="text-align: center; margin-top: 5%">${selectedParts}</h3>
    <h1 style="text-align: center; margin-top: 20px"> Tavsiye Edilen Sigorta Bedeli = ${hesaplamaSonucu1} TL</h1>
    <h3 style="color: red; text-align: center">ÖNEMLİ NOT :</h3>
    <p style="color: red; text-align: center">Hesaplanan sigorta değeri bilgilendirmek maksatlı tavsiye niteliğindedir.</p>    
    <p style="color: red; text-align: center">Doğacak zararlardan veya hatalı işlemlerden dolayı  sayfamız sorumlu tutulamaz.</p>            
    </body>
    </html>
`;
//<hr style="width:10% ; border: 0.0005rem solid red; margin-top: -0.6rem; margin-bottom: -0.7rem; border-radius: 5px " >
//<h2>Seçilen Kısımlar</h2>

// Yeni sayfada gösterme
let newWindow = window.open();
newWindow.document.write(newWindowContent);
newWindow.document.close();
}

