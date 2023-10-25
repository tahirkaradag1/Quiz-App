function Soru(soruMetni, soruSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.soruSecenekleri = soruSecenekleri;
    this.dogruCevap = dogruCevap;

}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Bir elmanın 6 dilimini yedikten sonra geriye ne kalır?",{a:"6 dilim", b:"1 elma çekirdeği",c:"Hiçbir şey kalmaz"},"c"),
    new Soru('2-"tahirkaradag.com" sitesinin kurucusu kimdir?',{a:"Şehinşah (Rap Sanatçısı)", b:"Satoshi Nakamoto (Bitcoin'in Yaratıcısı)",c:"Tahir Karadağ (Üniversite Öğrencisi)",d:"Köksal Baba (İnternet Ünlüsü)"},"c"),
    new Soru("3-Bir kalem ve bir silgi 5 TL'ye satılıyor.Kalem 4 TL daha pahalıysa, silgi kaça satılıyor?",{a:"1 TL", b:"2 TL",c:"5 TL"},"a"),
    new Soru('4-"adA nioc hallaşni 8 ralod rulo." cümlesindeki kelimlerin doğru yazılışı nasıldır?',{a:"Ada inşallah 8 dolar olur", b:"8 dolar olur inşallah Ada coin",c:"Ada coin olur inşallah 8 dolar",d:"Ada coin inşallah 8 dolar olur"},"d")
]