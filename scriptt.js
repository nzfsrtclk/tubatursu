
// tarih kısmı.......
const tarih = document.getElementsByClassName("tarih")[0];
const date = new Date();
const gun = String(date.getDate()).padStart(2, '0'); // Ayın gününü iki haneli yap
const ay = String(date.getMonth() + 1).padStart(2, '0'); // Ayı iki haneli yap
const yil = date.getFullYear();

tarih.innerHTML = gun + " / " + ay + " / " + yil;


document.querySelectorAll('input[name="binatipi"]').forEach(function (radio) {
    radio.addEventListener('change', function () {

        let seçilentip = document.querySelector('input[name="binatipi"]:checked').value;

        const centerid = document.getElementById("centerid");
        const yapi1 = document.getElementById("yapi1");            //  İŞ YERİ TİPLERİ        
        const yapi3 = document.getElementById("yapi3");            //  BİNA DURUMU
        const yapi2 = document.getElementById("yapi2");            //  DİĞER YAPI TİPLERİ
        const yapi4 = document.getElementById("yapi4");            //  ASANSÖR VAR YOK
        const yapi5 = document.getElementById("yapi5");            //  YIĞMA TUĞLA
        const yapi6 = document.getElementById("yapi6");            //  AHŞAP    
        const yapi7 = document.getElementById("yapi7");            //  KAT SAYISI 
        const yapi8 = document.getElementById("yapi8");            //  BİNA YAPI TARZI - BETONARME - YIĞMA TUĞLA - AHŞAP - ÇELİK KONSTRÜKSİYON
        const yapi9 = document.getElementById("yapi9");            //  NİZAM
        const yapi10 = document.getElementById("yapi10");          //  ÇATI
        const yapi19 = document.getElementById("yapi19");          //  DİĞER YAPI TİPLERİ
        const yapi18 = document.getElementById("yapi18");          //  ASANSÖR VAR YOK 
        const yapi20 = document.getElementById("yapi20");          //  İŞ YERİ TİPLERİ
        const yapi13 = document.getElementById("yapi13");          //  BİNA DURUMU
        const yapi14 = document.getElementById("yapi14");          //  KAT SAYISI 
        const yapi15 = document.getElementById("yapi15");          //  NİZAM
        const yapi16 = document.getElementById("yapi16");          //  ÇATI
        const yapi17 = document.getElementById("yapi17");          //  BİNA YAPI TARZI - BETONARME - YIĞMA TUĞLA - AHŞAP - ÇELİK KONSTRÜKSİYON

        if (seçilentip === 'yapitipi1') {
            centerid.classList.remove("no-yapi");
            yapi1.classList.add("no-yapi");
            yapi2.classList.add("no-yapi");

        } else {
            yapi1.classList.remove("no-yapi");
            yapi2.classList.remove("no-yapi");
        };

        if (seçilentip === 'yapitipi2') {
            centerid.classList.remove("no-yapi");
            yapi3.classList.add("no-yapi");
            yapi19.classList.add("no-yapi");
            yapi4.classList.add("no-yapi");
            yapi5.classList.add("no-yapi");
            yapi6.classList.add("no-yapi");
            // yapi7.classList.add("no-yapi");
            yapi8.classList.add("no-yapi");
            yapi9.classList.add("no-yapi");
            yapi10.classList.add("no-yapi");
        } else {
            yapi3.classList.remove("no-yapi");
            yapi19.classList.remove("no-yapi");
            yapi4.classList.remove("no-yapi");
            yapi5.classList.remove("no-yapi");
            yapi6.classList.remove("no-yapi");
            // yapi7.classList.remove("no-yapi");
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
    } else {
        yapi7.classList.remove("no-yapi");
        yapi4.classList.remove("no-yapi");
    };

    if (selectedId === 'yapi12') {
        yapi5.classList.add("no-yapi");
        yapi6.classList.add("no-yapi");
    } else {
        yapi5.classList.remove("no-yapi");
        yapi6.classList.remove("no-yapi");
    };
});

document.getElementById('isyeri').addEventListener('change', function () {

    let seçilenişyeri = this.options[this.selectedIndex];
    let seçilenişyeriİd = seçilenişyeri.id; 

    let işyeriid2Element = document.getElementById('işyeriid2');

    if (seçilenişyeriİd !== 'işyeriid1') {
        işyerikat.classList.add("no-yapi");
    } else {
        işyerikat.classList.remove("no-yapi");
    }
});





