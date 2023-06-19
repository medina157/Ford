
function Corbarra(){
    const caixa = document.querySelector(".desliza");
    caixa.style.animation = "";
    setTimeout(() => caixa.style.animation = "desliza2 3s linear", 990);
 
     document.getElementById('button').className = 'Atual';
     document.getElementById('button2').className = 'titulobarra2';


     document.getElementById('textomustang').textContent = 'O Mustang Mach 1 carrega consigo o legado histórico de performance e esportividade. Compartilhando diversos componentes com os modelos Shelby® GT350 e GT500, eleva a experiência de pilotagem ao extremo.A edição limitada carrega consigo o legado histórico de performance com a utilização de diversos componentes dos modelos Shelby® GT350 e GT500. O motor 5.0 V8 com novo Sistema de admissão e 483cv, a transmissão automática de 10 velocidades com nova calibração e o sistema de arrefecimento ainda mais eficiente ajudam você a extrair o máximo de performance em qualquer condição. ';
     document.getElementById('grademustang').src= "imgskaique/grade.jpg"
     document.getElementById('titulo').textContent = 'Nascido para as pistas';
    
     document.getElementById("trocar img").src="imgskaique/cor6-removebg-preview.png";


     document.getElementById('titulograde').textContent = 'UM LEGADO HISTÓRICO DE PERFORMANCE';
     document.getElementById('preco').src= "imgskaique/Motor_Potencia_Torque-removebg-preview.png";
 }
 
 function Corbarra2(){
     
     const caixa = document.querySelector(".desliza");
     caixa.style.animation = "";
     setTimeout(() => caixa.style.animation = "desliza2 3s linear", 990);
 

     document.getElementById('button').className = 'titulobarra';
     document.getElementById('button2').className = 'Atual2';
 
     document.getElementById('textomustang').textContent = 'O Ford Mustang Mach-E é um SUV elétrico posicionado com um carro premium dentro da gama da Ford. E para honrar a fama do seu irmão a combustão, ele é munido de opções de motorização que lhe dão muita potência e agilidade, como um verdadeiro esportivo, mas, claro, amigo do meio ambiente.Na aparência, tudo lembra o velho Mustang, com inúmeras referências nas linhas, conjunto óptico e, claro no emblema do carro. Não há uma logomarca da Ford em todo o veículo. Nas lanternas traseiras, o desenho é bem parecido com os modelos atuais a combustão.';

     document.getElementById('grademustang').src= "imgskaique/Design sem nome.jpg"

     document.getElementById('titulo').textContent = 'Conforto é o sobrenome';

     
     document.getElementById("trocar img").src="imgskaique/laranja (1).png";

     document.getElementById('preco').src= "imgskaique/especificaomache.png";

     document.getElementById('titulograde').textContent = 'CONFORTO EM UM SÓ LUGAR';


 }

