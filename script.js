 document.addEventListener("DOMContentLoaded", function () {
   const headings = [
       "40% OFF, ONE TIME OFEFER",
      "PLUS 200% ON YOUR SALES",
       "YOUR BUSINESS ON THE MAP"
   ];

   const texts = [
       "Transform Your Online Presence!",
       "Safe and reliable online Publication.",
       "E-commerce, LandingPage etc...",
   ];

   const bgElements = document.querySelectorAll(".hero-bg");
   const headingEl = document.getElementById("hero-heading");
   const textEl = document.getElementById("hero-text");

   let index = 0;

   function changeText() {
       // Fade out current text
       headingEl.classList.add("fade-out");
       textEl.classList.add("fade-out");

       setTimeout(() => {
           // Update index
           index = (index + 1) % headings.length;

           // Update text content
           headingEl.textContent = headings[index];
           textEl.textContent = texts[index];

           // Remove 'active' from all backgrounds and set the new one
           bgElements.forEach(bg => bg.classList.remove("active"));
           bgElements[index].classList.add("active");

           // Fade in text
           headingEl.classList.remove("fade-out");
           textEl.classList.remove("fade-out");
       }, 1000); // Match the animation duration
   }

   setInterval(changeText, 4000);
});


//nav bar
let hiddenMenu = document.querySelector('.nav');
let hamburger = document.querySelector('.ham-menu');

document.querySelector('.ham-menu').onclick = ()=>{
    hiddenMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}





function copyValue(){
    document.getElementById("output").value = document.getElementById("usd").value;
}


//for length 
const inputValueL = document.getElementById('lengthInput');
const outputValueL = document.getElementById('lengthOutput');
const inputUnitL = document.getElementById('fromUnitL');
const outputUnitL = document.getElementById('toUnitL');
const convertBtnL = document.getElementById('convertLength');



    const conversionFactorsL ={
        km: {
         km:1, m:1000, microm:1000000000,  mm :1000000, cm:100000, nm:1000000000000, mile:0.621371, yard:1093.61, foot:3280.84, inch:39370.1,
        },

        m: {
          m:1, km:0.001, microm:1000000,  mm :1000, cm:100, nm:1000000000, mile:0.000621371, yard:1.09361, foot:3.28084, inch:39.3701,
         },

        cm: {
          km:0.00001, m:0.01, microm:10000,  mm:10, cm:1, nm:10000000, mile:0.00000621371, yard:0.0109361, foot:0.0328084, inch:0.393701,
         },

         mm: {
          km:0.000001, m:0.001, microm:1000,  mm:1, cm:0.1, nm:1000000, mile:0.000000621371, yard:0.00109361, foot:0.00328084, inch:0.0393701,
         },

         nm: {
            km:0.000000000001, microm:0.001, m:0.000000001,  mm :0.000001, cm:0.0000001, nm:1, mile:0.000000000000621371, yard:0.00000000109361, foot:0.00000000328084, inch:0.0000000393701,
         },

         microm: {
            km:0.000000001, microm:1, m:0.000001,  mm :0.001, cm:0.0001, nm:1000, mile:0.000000000621371, yard:0.00000109361, foot:0.00000328084, inch:0.0000393701,
         },

         mile: {
         km:1.60934, m:1609.34, microm:1609340000,  mm :1609340, cm:160934, nm:1609340000000, mile:1, yard:1760, foot:5280, inch:63360,
         },

         yard: {
         km:0.0009144, m:0.9144, microm:914400,  mm :914.4, cm:91.44, nm:914400000, mile:0.000568182, yard:1, foot:3, inch:36,
         },

         foot: {
        km:0.0003048, m:0.3048, microm:304800,  mm:304.8, cm:30.48, nm:304800000, mile:0.000189394, yard:0.333333, foot:1, inch:12,
         },

         inch: {
        km:0.0000254, m:0.0254, microm:25400,  mm :25.4, cm:2.54, nm:25400000, mile:0.000015783, yard:0.0277778, foot:0.0833333, inch:1,
         },

        };

     convertBtnL.addEventListener('click', () => {
        const inputValL = parseFloat(inputValueL.value);
        const inputUnitValL = inputUnitL.value;
        const outputUnitValL = outputUnitL.value;

        if (isNaN(inputValL)){
            outputValueL.value = 'invalid input'; return;
        }

        const factor = conversionFactorsL[inputUnitValL][outputUnitValL];
        const result = inputValL * factor;

        outputValueL.value = result;

    });



//for volume
const inputValue = document.getElementById('volumeInput');
const outputValue = document.getElementById('volumeOutput');
const inputUnit = document.getElementById('fromUnitV');
const outputUnit = document.getElementById('toUnitV');
const convertBtn = document.getElementById('convertVolume');



    const conversionFactors ={
        l: {
          l:1, kl:0.001,  ml :1000, cl:100, dl:10, gallon:0.264172, quart:1.05669, pint:2.11338, fluid:33.814,
        },

        ml: {
          ml:1,  kl:0.000001,  l :0.001, cl:0.1, dl:0.01, gallon:0.000264172, quart:0.00105669, pint:0.00211338, fluid:0.033814,
        },

        cl: {
          cl:1,  kl:0.00001,  ml :10, l:0.01, dl:0.1, gallon:0.00264172, quart:0.0105669, pint:0.0211338, fluid:0.33814,
        },

        dl: {
          dl:1,  kl:0.0001,  ml :100, cl:10, l:0.1, gallon:0.0264172, quart:0.105669, pint:0.211338, fluid:3.3814,
        },

        kl: {
            kl:1,  dl:10000,  ml :1000000, cl:100000, l:1000, gallon:264.172, quart:1056.69, pint:2113.38, fluid:33814,
          },
  

        gallon: {
          gallon:1,  kl:0.00378541, ml :3785.41, cl:378.541, dl:37.541, l:3.78541, quart:4, pint:8, fluid:128,
        },

        quart: {
         quart:1,  kl:0.000946353,  ml :956.353, cl:94.6353, dl:9.46353, gallon:0.25, l:0.946353, pint:2, fluid:32,
        },

        pint: {
            pint:1,  kl:0.000473176, ml :473.176, cl:47.3176, dl:4.73176, gallon:0.125, quart:0.5, l:0.473176, fluid:16,
        },

        fluid: {
              fluid:1,  kl:0.0000295735, ml :29.5735, cl:2.95735, dl:0.295735, gallon:0.0078125, quart:0.03125, pint:0.0625, l:0.0295735,
        },

    };
     convertBtn.addEventListener('click', () => {
        const inputVal = parseFloat(inputValue.value);
        const inputUnitVal = inputUnit.value;
        const outputUnitVal = outputUnit.value;

        if (isNaN(inputVal)){
            outputValue.value = 'invalid input'; return;
        }

        const factor = conversionFactors[inputUnitVal][outputUnitVal];
        const result = inputVal * factor;

        outputValue.value = result;

    });






const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,ngn,ghs";

async function fetchCryptoPrices() {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        //add value to front end here
    } catch (error) {
        console.error("error fetching crypto data:", error);
    }
    
}
setInterval(fetchCryptoPrices, 300000); //refresh data every 5 minutes

fetchCryptoPrices();