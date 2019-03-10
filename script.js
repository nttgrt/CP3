/*
let dimInit = 16;
console.log("entered js script");
*/
var app = new Vue({
    el: '#app',
    data: {
        activeColor: '',
        rgb: {
            r: 255,
            g: 255,
            b: 255
        }
    },
    /*computed: {
        
    },*/
    watch: {
        'rgb.r': function() {
            this.changeColorTest();
            document.getElementById("rInput").style.backgroundColor = this.rgbString(this.rgb.r, 0, 0);
            if (this.rgb.r < 200) {
                document.getElementById("rInput").style.color = "white";
            }
            else {
                document.getElementById("rInput").style.color = "black";
            }
        },
        'rgb.g': function() {
            this.changeColorTest();
            document.getElementById("gInput").style.backgroundColor = this.rgbString(0, this.rgb.g, 0);
            if (this.rgb.g < 200) {
                document.getElementById("gInput").style.color = "white";
            }
            else {
                document.getElementById("gInput").style.color = "black";
            }
        },
        'rgb.b': function() {
            this.changeColorTest();
            document.getElementById("bInput").style.backgroundColor = this.rgbString(0, 0, this.rgb.b);
            if (this.rgb.b < 200) {
                document.getElementById("bInput").style.color = "white";
            }
            else {
                document.getElementById("bInput").style.color = "black";
            }
        }
    },
    methods: {
        changeColorTest: function() {
            console.log("ran changeColorTest");
            //let colorMain = this.toHex(this.activeColor);
            let rMain = this.rgbLimit(this.rgb.r);
            let gMain = this.rgbLimit(this.rgb.g);
            let bMain = this.rgbLimit(this.rgb.b);
            let colorMain = this.rgbString(rMain, gMain, bMain);
            //let colorMain = "rgb(" + rMain + ", " + gMain + ", " + bMain + ")";
            document.getElementById("colorMain").style.backgroundColor = colorMain;

            let r1 = gMain;
            let g1 = bMain;
            let b1 = rMain;
            let color1 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
            document.getElementById("color1").style.backgroundColor = color1;

            let r2 = bMain;
            let g2 = rMain;
            let b2 = gMain;
            let color2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
            document.getElementById("color2").style.backgroundColor = color2;
        },
        rgbString: function(r, g, b) {
            return("rgb(" + r + ", "+ g + ", " + b + ")");
        },
        rgbLimit: function(number) {
            if (number === undefined || number === '') {
                return 0;
            }
            if (number > 255) {
                return 255;
            }
            return number;
        },
        toHex: function(inputNum) {
            //console.log("input recieved is " + inputNum);
            //console.log("input.length is " + inputNum.length);
            if (inputNum === undefined || inputNum === 0) {
                console.log("toHex returning undefined");
                return('#000000');
            }
            while (inputNum.length < 6) {
                inputNum = '0' + inputNum;
            }
            if (inputNum.length > 6) {
                inputNum = inputNum.substr(0, (inputNum.length - 6));
            }
            returnString = '#' + inputNum;
            console.log("toHex returning " + returnString);
            return('#' + inputNum);
        },
    }
});