

class Music {
    constructor(title,singer,img,file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Boşver","Nilüfer","1.jpeg","1.mp3"),
    new Music("Bu da Geçer mi Sevgilim","Yalın","2.jpeg","2.mp3"),
    new Music("Aramızda Uçurumlar","Suat Suna","3.jpeg","3.mp3"),
    new Music("Baby Shark","PinkFong","4.jpeg","4.mp3"),
    new Music("İsmet Ben Bu Kafayı Durduramıyorum","Celal Şengör","5.jpeg","5.mp3"),
    new Music("Panky Aragaz","Panky","6.jpeg","6.mp3"),
    new Music("Ne Gerek Var Dedi","Panky","7.jpeg","7.mp3")
];