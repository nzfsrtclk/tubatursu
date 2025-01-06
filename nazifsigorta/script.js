
// tarih kısmı.......
const tarih = document.getElementsByClassName("tarih")[0];
const date = new Date();
const gun = String(date.getDate()).padStart(2, '0'); // Ayın gününü iki haneli yap
const ay = String(date.getMonth() + 1).padStart(2, '0'); // Ayı iki haneli yap
const yil = date.getFullYear();

tarih.innerHTML = gun + " / " + ay + " / " + yil;

// İNPUTLAR ARASI GEÇİŞLERDE SAYFAYI YENİLEME

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="binatipi"]');
    let previousSelection = null;

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            if (previousSelection && previousSelection !== radioButton.id) {
                location.reload();
            } else {
                previousSelection = radioButton.id;
            }
        });
    });
});


// Eksik sigorta nedir tıklandığında açılacak resim

function showModal() {
    document.getElementById('imageModala').style.display = 'block';
}

function hideModal() {
    document.getElementById('imageModala').style.display = 'none';
}

//-----------------------

var isyeri = document.querySelector("#isYeri").addEventListener("change", function () {
    isyeri = this.options[this.selectedIndex].value; console.log("isyeri " + isyeri)
});

var diger = document.querySelector("#digerYapilar").addEventListener("change", function () {
    diger = this.options[this.selectedIndex].value; console.log("diger " + diger)
});

var tarzi = document.querySelector("#binaTarziSelect").addEventListener("change", function () {
    tarzi = this.options[this.selectedIndex].value; console.log("Müstakil , Apartman dairesi " + tarzi)
});                     // Müstakil , Apartman dairesi

var dekor = document.querySelector("#dekorSelect").addEventListener("change", function () {
    dekor = this.options[this.selectedIndex].value; console.log("Dekor var yok " + dekor)
});                     // Dekor var yok 

var asansor = document.querySelector("#asansorSelect").addEventListener("change", function () {
    asansor = this.options[this.selectedIndex].value; console.log("asansör " + asansor)
});                     // Asansör var , yok

var kat = document.querySelector("#katsayisiSelect").addEventListener("change", function () {
    kat = this.options[this.selectedIndex].value; console.log("kat sayısı " + kat)
});                     // Bina kat sayısı seçimi

var yapi = document.querySelector("#binaYapisiSelect").addEventListener("change", function () {
    yapi = this.options[this.selectedIndex].value; console.log("Betonarme , Çelik , Kerpiç , Yığma Tuğla " + yapi)
});                     // Betonarme , Çelik , Kerpiç , Yığma Tuğla

var nizam = document.querySelector("#nizamSelect").addEventListener("change", function () {
    nizam = this.options[this.selectedIndex].value; console.log("bitişik , ayrık " + nizam)
});                     // bitişik , ayrık

var cati = document.querySelector("#catiSelect").addEventListener("change", function () {
    cati = this.options[this.selectedIndex].value; console.log("Çatı seçimi" + cati)
});                     // Çatı seçimi

document.getElementById("numberInput").addEventListener("input", function () {
    document.getElementById("nazifbtn").classList.remove("no-yapi");
    document.getElementById("sifirlabtn").classList.remove("no-yapi");
});

document.getElementById('konut').addEventListener('change', function () {
    var binaTarziDiv = document.getElementById('binaTarzi');
    if (this.checked) {
        binaTarziDiv.classList.remove('no-yapi');
        document.getElementById("calisma").classList.add("no-yapi");
    }
});

document.getElementById("calisma").classList.add("no-yapi");


// Diğer radyo butonları seçildiğinde, no-yapi sınıfını tekrar eklemek için
document.getElementById('isYeri').addEventListener('change', function () {
    var binaTarziDiv = document.getElementById('binaTarzi');
    if (this.checked) {
        binaTarziDiv.classList.add('no-yapi');
        document.getElementById("calisma").classList.remove("no-yapi");
    }
});

document.getElementById('digerYapilar').addEventListener('change', function () {
    var binaTarziDiv = document.getElementById('binaTarzi');
    if (this.checked) {
        binaTarziDiv.classList.add('no-yapi');
        document.getElementById("calisma").classList.remove("no-yapi");
    }
});


document.getElementById('binaTarziSelect').addEventListener('change', function () {
    var binaYapisiDiv = document.getElementById('binaYapisi');
    var selectedOption = this.options[this.selectedIndex];

    if (selectedOption.id === 'mustakil') {
        binaYapisiDiv.classList.remove('no-yapi');
        document.getElementById("ahsap").classList.add("no-yapi");
        document.getElementById("kerpic").classList.add("no-yapi");
    } else {
        binaYapisiDiv.classList.add('no-yapi');
    }
});

document.getElementById("binaYapisiSelect").addEventListener("change", function () {
    document.getElementById("nizam").classList.remove("no-yapi");
});
document.getElementById("nizamSelect").addEventListener("change", function () {
    document.getElementById("cati").classList.remove("no-yapi");
});

document.getElementById("catiSelect").addEventListener("change", function () {
    document.getElementById("dekor").classList.remove("no-yapi");
});

document.getElementById("dekorSelect").addEventListener("change", function () {
    document.getElementById("metrekare").classList.remove("no-yapi");
});

document.getElementById("numberInput").addEventListener("click", function () {
    document.getElementById("nazifbtn").classList.remove("no-yapi");
    document.getElementById("sifirlabtn").classList.remove("no-yapi");
});

document.getElementById("binaTarziSelect").addEventListener("change", function () {
    var binaYapisiDivapart = document.getElementById("binaYapisi");
    var selectedOptionapart = this.options[this.selectedIndex];

    if (selectedOptionapart.id === "apartman") {
        document.getElementById("asansor").classList.remove("no-yapi");
        document.getElementById("ahsap").classList.add("no-yapi");
        document.getElementById("kerpic").classList.add("no-yapi");
    } else {
        document.getElementById("asansor").classList.add("no-yapi");
    }
    document.getElementById("asansorSelect").addEventListener("change", function () {
        document.getElementById("katsayisi").classList.remove("no-yapi");
    });

    document.getElementById("katsayisiSelect").addEventListener("change", function () {
        document.getElementById("binaYapisi").classList.remove("no-yapi");
    });

});

function nazifclick() {

    // Modal Elementini Seç
    var modal = document.getElementById("myModal");

    // Modal Butonunu Seç
    var btn = document.getElementById("nazifbtn");

    // Kapatma Butonunu Seç
    var span = document.getElementsByClassName("close")[0];

    // Butona tıklandığında modalı göster
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Kapatma butonuna tıklandığında modalı kapat
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Kullanıcı modal dışına tıkladığında modalı kapat
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Seçilen kısımlar ve tarih
    let today = new Date();
    let date2 = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    let selectedParts = `<p>Tarih: ${date2}</p>`

    document.getElementById("selectedParts").innerHTML = selectedParts;

    // Seçilen kısımlar ve tarih üst taraf

    var girilenmetre = document.getElementById("numberInput").value;

    if (document.getElementById("mustakil").id == "mustakil") {

        var mustakilevdeg = 12250;                                   // Müstakil Ev Değeri

        var sonuc = girilenmetre * mustakilevdeg * dekor;

    }

    if (document.getElementById("asyok").id == "asyok") {

        var asyokapartman = 12250;                                   // Asansörsüz Apartman 1-3 Kat

        var sonuc = girilenmetre * asyokapartman * dekor; }   

    var konutValue = document.querySelector('select[name="konut"]');

    if (konutValue.selectedIndex == 1 ) {

        var asvarapart1 = 13000;                                     // Asansörlü Apartman 1-3 Kat

        var sonuc = girilenmetre * dekor * asvarapart1;

    } else if (konutValue.selectedIndex == 2 ){

        var asvarapart2 = 13000;                                     // Asansörlü Apartman 4-6 Kat

        var sonuc = girilenmetre * dekor * asvarapart2;

    } else if(konutValue.selectedIndex == 3 ){

        var asvarapart3 = 14400;                                     // Asansörlü Apartman 7-9 Kat

        var sonuc = girilenmetre * dekor * asvarapart3;

    } else if(konutValue.selectedIndex == 4) {

        var asvarapart5 = 15300;                                     // Asansörlü Apartman 10-16 Kat

        var sonuc = girilenmetre * dekor * asvarapart5;

    } else if(konutValue.selectedIndex == 5) {

        var asvarapart6 = 18700;                                     // Asansörlü Apartman 17 üzeri

        var sonuc = girilenmetre * dekor * asvarapart6;

    }
 
    let hesaplamaSonucu = document.getElementById("hesaplamaSonucu");  
    var sonuc2 = sonuc*(145/100);

    hesaplamaSonucu.innerHTML = sonuc2.toLocaleString({ style: 'currency', currency: 'TRY' }) + " TL";;

    document.querySelector("#tavsiye").innerHTML = "Tavsiye Edilen Sigorta Bedeli ";

    modal.style.display = "block";

    document.getElementById("nazifbtn").disabled = true;
    document.getElementById("nazifbtn").classList.add("no-yapi");
};


document.getElementById("numberInput").addEventListener("keydown", function(event) {
    // Enter tuşuna basıldığında işlemi yap
    if (event.key === "Enter") {
        event.preventDefault(); // Varsayılan davranışı engelle (form gönderimini engelle)
        hesapla(); // Hesaplama fonksiyonunu çağır
        hesaplamaSonucu.innerHTML = sonuc2.toLocaleString({ style: 'currency', currency: 'TRY' }) + " TL";;
    }
});

function sifirlaclick() {
    location.reload();  // Sayfayı yeniden yükler
    window.scrollTo(0, 0);  // Sayfanın başına gider
}
