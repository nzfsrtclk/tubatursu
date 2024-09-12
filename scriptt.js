
// tarih kısmı.......
const tarih = document.getElementsByClassName("tarih")[0];
const date = new Date();
const gun = String(date.getDate()).padStart(2, '0'); // Ayın gününü iki haneli yap
const ay = String(date.getMonth() + 1).padStart(2, '0'); // Ayı iki haneli yap
const yil = date.getFullYear();

tarih.innerHTML = gun + " / " + ay + " / " + yil;

//  Optionlar arası geçişerde sayfayı yenileme

let previousSelection = null;

document.getElementById('myForm').addEventListener('change', function(event) {
    if (event.target.name === 'binatipi') {
        if (previousSelection && previousSelection !== event.target.value) {
            location.reload(); // Sayfayı yenile
        }
        previousSelection = event.target.value;
    }
});

// Sayfa yüklendiğinde, seçili radio butonunu kaydet
window.addEventListener('load', function() {
    const selectedOption = document.querySelector('input[name="binatipi"]:checked');
    if (selectedOption) {
        previousSelection = selectedOption.value;
    }
});


// Seçimlere gizlenenler ve gösterilenler

document.querySelectorAll('input[name="binatipi"]').forEach(function (radio) {
    radio.addEventListener('change', function () {

        let seçilentip = document.querySelector('input[name="binatipi"]:checked').value;

        const centerid = document.getElementById("centerid");
        const yapi1 = document.getElementById("yapi1");            //  İŞ YERİ TİPLERİ  
        const yapi2 = document.getElementById("yapi2");            //  DİĞER YAPI TİPLERİ
        const yapi3 = document.getElementById("yapi3");            //  BİNA DURUMU
        const yapi4 = document.getElementById("yapi4");            //  ASANSÖR VAR YOK
        const yapi5 = document.getElementById("yapi5");            //  YIĞMA TUĞLA
        const yapi6 = document.getElementById("yapi6");            //  AHŞAP    
        const yapi7 = document.getElementById("yapi7");            //  KAT SAYISI 
        const yapi8 = document.getElementById("yapi8");            //  BİNA YAPI TARZI - BETONARME - YIĞMA TUĞLA - AHŞAP - ÇELİK KONSTRÜKSİYON
        const yapi9 = document.getElementById("yapi9");            //  NİZAM
        const yapi10 = document.getElementById("yapi10");          //  ÇATI
        const yapi13 = document.getElementById("yapi13");          //  BİNA DURUMU
        const yapi14 = document.getElementById("yapi14");          //  KAT SAYISI 
        const yapi15 = document.getElementById("yapi15");          //  NİZAM
        const yapi16 = document.getElementById("yapi16");          //  ÇATI
        const yapi17 = document.getElementById("yapi17");          //  BİNA YAPI TARZI - BETONARME - YIĞMA TUĞLA - AHŞAP - ÇELİK KONSTRÜKSİYON
        const yapi18 = document.getElementById("yapi18");          //  ASANSÖR VAR YOK 
        const yapi19 = document.getElementById("yapi19");          //  DİĞER YAPI TİPLERİ
        const yapi20 = document.getElementById("yapi20");          //  İŞ YERİ TİPLERİ
        const ev1 = document.getElementById("ev1");
        const ev2 = document.getElementById("ev2");
        const ev3 = document.getElementById("ev3");
        const ev4 = document.getElementById("ev4");
        const ev5 = document.getElementById("ev5");
        const ev6 = document.getElementById("ev6");

        if (seçilentip === 'yapitipi1') {                 // konut seçildiğinde gözükenler ve gizleneler
            centerid.classList.remove("no-yapi");
            yapi1.classList.add("no-yapi");
            yapi2.classList.add("no-yapi");   
            ev1.classList.add("no-yapi"); 
            ev2.classList.add("no-yapi");   
            ev3.classList.add("no-yapi");     
            ev4.classList.add("no-yapi");
            ev5.classList.add("no-yapi");
            ev6.classList.add("no-yapi");
        } else {
            yapi1.classList.remove("no-yapi");
            yapi2.classList.remove("no-yapi");
        };

        if (seçilentip === 'yapitipi2') {                 // işyeri seçildiğinde gözükenler ve gizleneler
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

        if (seçilentip === 'yapitipi3') {                    // diğer yapılar seçildiğinde gözükenler ve gizleneler
            centerid.classList.remove("no-yapi");
            yapi18.classList.add("no-yapi");
            yapi20.classList.add("no-yapi");
            yapi13.classList.add("no-yapi");
            yapi14.classList.add("no-yapi");
            yapi15.classList.add("no-yapi");
            yapi16.classList.add("no-yapi");
            yapi17.classList.add("no-yapi");
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

    //  const yapi11 = document.getElementById("yapi11");

    if (selectedId === 'yapi11') {
        yapi7.classList.add("no-yapi");
        yapi4.classList.add("no-yapi");
        ev3.classList.remove("no-yapi");  // yapı tarzı
        ev4.classList.remove("no-yapi");  // nizam
        ev5.classList.remove("no-yapi");  // çatı
        ev6.classList.remove("no-yapi");  // input alanı metrekare
    } else {
        yapi7.classList.remove("no-yapi");
        yapi4.classList.remove("no-yapi");
    };

    if (selectedId === 'yapi12') {
        yapi5.classList.add("no-yapi");
        yapi6.classList.add("no-yapi");
        yapi7.classList.remove("no-yapi");
        ev1.classList.remove("no-yapi");  // katsayisi
        ev2.classList.remove("no-yapi");  // asansor
        ev3.classList.remove("no-yapi");  // yapı tarzı  
        ev4.classList.remove("no-yapi");  // nizam
        ev5.classList.remove("no-yapi");  // çatı
        ev6.classList.remove("no-yapi");  // input alanı metrekare
    } else {
        yapi5.classList.remove("no-yapi");
        yapi6.classList.remove("no-yapi");
        yapi7.classList.add("no-yapi");
        ev1.classList.add("no-yapi");  // katsayisi
        ev2.classList.add("no-yapi");  // asansor
        ev3.classList.add("no-yapi");  // yapı tarzı  
        ev4.classList.add("no-yapi");  // nizam
        ev5.classList.add("no-yapi");  // çatı
        ev6.classList.add("no-yapi");  // input alanı metrekare
    };
});

document.getElementById("asansor").addEventListener("change", function () {

    let seçilenAsansorVar = this.options[this.selectedIndex];
    let seçilenAsansorVarId = seçilenAsansorVar.id;

    let asansorsuzOption = document.getElementById("asansorsuz");
    let  asan1 = document.getElementById("asan1");
    let  asan2 = document.getElementById("asan2");
    let  asan3 = document.getElementById("asan3");

    if (seçilenAsansorVarId === "asvar") {
        asansorsuzOption.classList.add("no-yapi");
    } else {
        asansorsuzOption.classList.remove("no-yapi");
    }
    if(seçilenAsansorVarId !=="asvar"){
        asan1.classList.add("no-yapi");
        asan2.classList.add("no-yapi");
        asan3.classList.add("no-yapi");
    } else {
        asan1.classList.remove("no-yapi");
        asan2.classList.remove("no-yapi");
        asan3.classList.remove("no-yapi");
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

            alanlar.push(bina,nizam, cati,numberInput)

        } else if(konut.selectedIndex === 2){

            alanlar.push(bina,nizam,cati,numberInput,katsayisi,asansor);

        }
        
    } else if (selectedValue === 'yapitipi2') {

        // İş yeri için gerekli alanlar

        alanlar.push(isyeri, numberInput);

        // Sadece "İş Merkezi" seçildiğinde katsayisi alanını kontrol et       

        if (isyeri.selectedIndex === 1) {

            alanlar.push(katsayisi,asansor);
        }
    } else if (selectedValue === 'yapitipi3') {

        // Diğer yapılar için gerekli alanlar

        alanlar.push(digeryapi, numberInput);
    }


    // Boş alanları kontrol et
    
    alanlar.forEach((alan) => {

        if (alan && alan.value.trim() === ""   ) {

            bosAlanVarMi = true;

            alan.style.border = "3px solid red"; // Boş alanın kenarlığını kırmızı yap

        } else  if (alan) {

            alan.style.border = ""; // Alan doluysa kenarlığı sıfırla

        }
    });

    if (bosAlanVarMi) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    let hesaplamaSonucu1;

    // Seçilen tip ve metrekareye göre hesaplama

    if (selectedValue === 'yapitipi3') {

        hesaplamaSonucu1 = digeryapi.value * numberInput.value;

    } else if (selectedValue === 'yapitipi2') {

        if(katsayisi.selectedIndex===1) {    

            let isyeritek = 12250 ;     // Ticari binalarda 3 kata kadar 3 kat dahil asansörsüz.

            hesaplamaSonucu1 =isyeritek * numberInput.value;

        } else if (katsayisi.selectedIndex===2){

            let isyeri3 = 14400 ;       // Ticari amaçlı binalarda 21,50 metre yüksekliğe kadar olan yapılar.

            hesaplamaSonucu1 = isyeri3 * numberInput.value;

        } else if (katsayisi.selectedIndex===3){

            let isyeri8 = 18700 ;       // İş merkezleri 21,50 metre ile 30,50 metre arası dahil yapılar.

            hesaplamaSonucu1 = isyeri8 * numberInput.value ;

        } else if (katsayisi.selectedIndex===4){

            let isyeri10 = 21300 ;      // İş merkezleri yapı yüksekliği 30,50 metreyi aşan yapılar.

            hesaplamaSonucu1 = isyeri10 *numberInput.value ;

        } else if (isyeri.selectedIndex > 1 ){

            hesaplamaSonucu1 = isyeri.value * numberInput.value;
        }

    } else if (selectedValue === 'yapitipi1') {

        if (konut.selectedIndex === 1) {

            let müstakil = 12250 ;     // Konutlar 3 kata kadar 3 kat dahil asansörsüz.

            hesaplamaSonucu1 = müstakil * numberInput.value;        
        }

        else if(katsayisi.selectedIndex===2){
            
            let uckat = 14400 ;        // 21,50 metre yüksekliğe kadar olan konutlar.

            hesaplamaSonucu1 = uckat * numberInput.value;
        } 

        else if(katsayisi.selectedIndex===3){

            let dortkat = 15300 ;      // 30,50 metre yüksekliğe kadar olan apartman tipi konutlar.

            hesaplamaSonucu1 = dortkat * numberInput.value;
        }

        else if(katsayisi.selectedIndex===4){

            let beskat = 18700 ;      // 30,50 metre ile 51,50 metre arası dahil. 

            hesaplamaSonucu1 = beskat  * numberInput.value;
        } 
        
        else if (asansor.selectedIndex===2){

            let asansorsuz13 = 12250;

            hesaplamaSonucu1 = asansorsuz13 * numberInput.value;
        }
    }

    // hesaplama düğmesi gizleniyor.

    document.getElementById("hesapla").classList.add("hesapla");   
    
    // Sonuç sayfasını yazırma.

    document.getElementById("yazdir").innerHTML = "Tavsiye Edilen Sigorta Bedeli : " + hesaplamaSonucu1;
}

