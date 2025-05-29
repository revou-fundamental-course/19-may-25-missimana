 console.log('javascript loaded successfully');

 // js kalkulator suhu
 function Konversi() {
     const suhu = parseFloat(document.getElementById("suhu").value);
     const satuan = document.getElementById("satuan").value;
     let hasil = "";

     if (isNaN(suhu)) {
         hasil = "Masukkan angka suhu yang valid.";
     } else {
         let c, f;

         switch (satuan) {
             case "celsius":
                 c = suhu;
                 f = (suhu * 9 / 5) + 32;
                 //  k = suhu + 273.15;
                 break;
             case "fahrenheit":
                 c = (suhu - 32) * 5 / 9;
                 f = suhu;
                 //  k = c + 273.15;
                 break;
             case "kelvin":
                 c = suhu - 273.15;
                 f = (c * 9 / 5) + 32;
                 //  k = suhu;
                 break;
         }

         hasil = `
          <strong>Hasil Konversi:</strong><br>
          Celsius: ${c.toFixed(2)} °C<br>
          Fahrenheit: ${f.toFixed(2)} °F<br>
          Kelvin: ${k.toFixed(2)} K
        `;
     }

     document.getElementById("hasil").innerHTML = hasil;
 }
 }


 //  js indexK
 function konversiSuhu() {
     const suhu = parseFloat(document.getElementById("suhu").value);
     const satuan = document.getElementById("satuan").value;
     let hasil = "";

     if (isNaN(suhu)) {
         hasil = "Masukkan angka suhu yang valid.";
     } else {
         let c, f;

         switch (satuan) {
             case "celsius":
                 c = suhu;
                 f = (suhu * 9 / 5) + 32;
                 //  k = suhu + 273.15;
                 break;
             case "fahrenheit":
                 c = (suhu - 32) * 5 / 9;
                 f = suhu;
                 //  k = c + 273.15;
                 break;
             case "kelvin":
                 c = suhu - 273.15;
                 f = (c * 9 / 5) + 32;
                 //  k = suhu;
                 break;
         }

         hasil = `
          <strong>Hasil Konversi:</strong><br>
          Celsius: ${c.toFixed(2)} °C<br>
          Fahrenheit: ${f.toFixed(2)} °F<br>
          Kelvin: ${k.toFixed(2)} K
        `;
     }

     document.getElementById("hasil").innerHTML = hasil;
 }