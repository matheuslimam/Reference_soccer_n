 //Seleciona a div onde ocorre todas as mudanças de pagina
 var SCREEN = document.querySelector("div#boardimg");
 var as;
 //aparece os botoes
 function btns(){
     var btnsss = document.querySelector("div#btnss").innerHTML;
     document.querySelector("div#side").innerHTML = btnsss;
 }
 //Pagina placa bottom
 function bottomf(){
     var bttm = document.querySelector("div#bottom_html").innerHTML;
     SCREEN.innerHTML = bttm;
 }

 //Pagina placa top
 function topf(){
     var tp = document.querySelector("div#top_html").innerHTML;
     SCREEN.innerHTML = tp;
 }

 //Pagina que explica a placa
 function aboutf(){
     var  about = document.querySelector("div#about_html").innerHTML;
     SCREEN.innerHTML = about;
 }

 //Pagina dos motores
 function motorsf(){
     var  mtrs = document.querySelector("div#motors_html").innerHTML;
     SCREEN.innerHTML = mtrs;
 }

 //Pagina dos resistores
 function resistorsf(){
     var restrs  = document.querySelector("div#resistors_html").innerHTML;
     SCREEN.innerHTML = restrs;
 }

 //Pagina dos fototransistors
 function phototransistorsf(){
     var phts = document.querySelector("div#phototransistors_html").innerHTML;
     SCREEN.innerHTML = phts;
 }

 //Pagina dos leds
 function LEDf(){
     var leds = document.querySelector("div#leds_html").innerHTML;
     SCREEN.innerHTML = leds;
 }
 
 //Pagina do cabo flat
 function conectionf(){
     var cnct = document.querySelector("div#conections_html").innerHTML;
     SCREEN.innerHTML = cnct;
 }

 //Pagina do GND
 function GNDf(){
     var gnd = document.querySelector("div#gnd_html").innerHTML;
     SCREEN.innerHTML = gnd;
 }

 //Pagina do VCC
 function VCCf(){
     var vcc = document.querySelector("div#vcc_html").innerHTML;
     SCREEN.innerHTML = vcc;
 }

 //Pagina do hasball
 function hasballf(){
     var hasbll = document.querySelector("div#hasball_html").innerHTML;
     SCREEN.innerHTML = hasbll;
 }
 function keyboardf(){
     var kbrd = document.querySelector("div#keyboard_html").innerHTML;
     SCREEN.innerHTML = kbrd;
 }

 //comandos de tecla
 function tecla(event) {
     var x = event.key;
     var ctrl = event.ctrlKey;
     var alt = event.altKey;
     if(alt && x=="t" || alt && x=="T") topf() //tecla 'T' aciona o top
     if(alt && x=="b" || alt && x=="B") bottomf () //tecla 'B' aciona o bottom
     if(alt && x=="i" || alt && x=="I") infof () //tecla 'I' aciona o info
     if(alt && x=="m" || alt && x=="M") btns() //tecla 'M' aciona o menu
     if(alt && x=="a" || alt && x=="A") aboutf() //tecla 'A' aciona about
     if(alt && x=="k" || alt && x=="K") keyboardf() //tecla 'K' aciona keyboard comandos
     if(ctrl && x=="F1") motorsf() //tecla 'ctrl+F1' aciona os motores
     if(ctrl && x=="F2") resistorsf() //tecla 'ctrl+F2' aciona os resistores
     if(ctrl && x=="F3") phototransistorsf() //tecla 'ctrl+F3' aciona os fototransistores
     if(ctrl && x=="F6") LEDf() //tecla 'ctrl+F6' aciona os LEDS
     if(ctrl && x=="F7") conectionf() //tecla 'ctrl+F7' aciona conection
     if(ctrl && x=="F8") GNDf() //tecla 'ctrl+F8' aciona o gnd
     if(ctrl && x=="F9") VCCf() //tecla 'ctrl+F9' aciona o vcc
     if(ctrl && x=="F10") hasballf() //tecla 'ctrl+F10' aciona hasball
}
 function infof(){ 
     var inf = document.querySelector("div#info_html").innerHTML;
     SCREEN.innerHTML = inf;
 }