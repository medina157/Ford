


function Corbarra(){
   const caixa = document.querySelector(".desliza");
   caixa.style.animation = "";
   setTimeout(() => caixa.style.animation = "desliza2 3s linear", 990);

    document.getElementById('button').className = 'Atual';
    document.getElementById('button2').className = 'titulobarra2';
    document.getElementById('button3').className = 'titulobarra3';
    document.getElementById('Fade5').textContent = 'E';
    document.getElementById('Fade6').textContent = 'D';
    document.getElementById('Fade7').textContent = 'G';
    document.getElementById('Fade8').textContent = 'E';
    document.getElementById('Fade9').textContent = 'L';
    document.getElementById('Fade10').textContent = 'I';
    document.getElementById('Fade11').textContent = 'M';
    document.getElementById('Fade12').textContent = 'I';
    document.getElementById('Fade13').textContent = 'T';
    document.getElementById('Fade14').textContent = 'E';
    document.getElementById('Fade15').textContent = 'D';
    document.getElementById('Fade16').textContent = 'V6';

    document.getElementById('Titulo').textContent = 'PERSONALIZE SEU FORD EDGE';

    document.getElementById('imgCar').src= "IMGdanilo/Ford-Edge_2011_01.jpg";

}

function Corbarra2(){
    
    const caixa = document.querySelector(".desliza");
    caixa.style.animation = "";
    setTimeout(() => caixa.style.animation = "desliza2 3s linear", 990);

   /* document.getElementById("Titulo").style.animation = "slidein2 0.75s 2";*/
    document.getElementById('button').className = 'titulobarra';
    document.getElementById('button2').className = 'Atual2';
    document.getElementById('button3').className = 'titulobarra3';

    document.getElementById('Fade5').textContent = 'B';
    document.getElementById('Fade6').textContent = 'R';
    document.getElementById('Fade7').textContent = 'O';
    document.getElementById('Fade8').textContent = 'NCO';
    document.getElementById('Fade9').textContent = '';
    document.getElementById('Fade10').textContent = '';
    document.getElementById('Fade11').textContent = '';
    document.getElementById('Fade12').textContent = '2022';
    document.getElementById('Fade13').textContent = '';
    document.getElementById('Fade14').textContent = '';
    document.getElementById('Fade15').textContent = '';
    document.getElementById('Fade16').textContent = '';


    document.getElementById('Titulo').textContent = 'PERSONALIZE SEU FORD BRONCO';
    document.getElementById('imgCar').src= "IMGdanilo/Ford-Bronco-Sport-Wildtrack_7.jpg";


}

function Corbarra3(){
    const caixa = document.querySelector(".desliza");
    caixa.style.animation = "";
    setTimeout(() => caixa.style.animation = "desliza2 3s linear", 990);

    

    document.getElementById('button').className = 'titulobarra';
    document.getElementById('button2').className = 'titulobarra2';
    document.getElementById('button3').className = 'Atual3';


    document.getElementById('Fade5').textContent = 'F';
    document.getElementById('Fade6').textContent = '-';
    document.getElementById('Fade7').textContent = '1';
    document.getElementById('Fade8').textContent = '5';
    document.getElementById('Fade9').textContent = '0';
    document.getElementById('Fade10').textContent = '';
    document.getElementById('Fade11').textContent = 'RAPTOR';
    document.getElementById('Fade12').textContent = '';
    document.getElementById('Fade13').textContent = '';
    document.getElementById('Fade14').textContent = '';
    document.getElementById('Fade15').textContent = '';
    document.getElementById('Fade16').textContent = '';

    document.getElementById('Titulo').textContent = 'PERSONALIZE SEU FORD RAPTOR';
    document.getElementById('imgCar').src= "IMGdanilo/Ford-F-150-Lightning_5.jpg";
}

function valorcarro(){

 const select = document.getElementById('CARROS2');

 var t1 = document.getElementById("CARROS2").value;

 parcerla  = document.getElementById('parcela').value
 
 if(t1 == "FORD F150"){
    carro = 500000
 }

 if(t1 == "MUSTANG MACH 1"){
    carro = 544520
 }

 if(t1 == "MUSTANG MACH E"){
    carro = 449000
 }
 if(t1 == "FORD MAVERICK"){
    carro = 544520
 }
 if(t1 == "FORD ECOSPORT"){
    carro = 70000
 }
 if(t1 == "FORD BRONCO"){
    carro = 260000
 }
 if(t1 == "FORD TERRITORY"){
    carro = 218000
 }
 if(t1 == "TRANSIT MINIBUS"){
    carro = 240000
 }
 if(t1 == "TRANSIT FURGÃO"){
    carro = 250000
 }


 document.getElementById('carrotitulo').textContent = t1;

 document.getElementById('carrobruto').textContent = carro;

 document.getElementById('valor').textContent = "Valor do carro = R$";

 document.getElementById('total').textContent = "Total da parcela = R$";

  carro -= document.getElementById('entrada').value

  valor = carro/ parcerla
 
  document.getElementById('valorcarro').textContent = Math.round(valor);
  
}