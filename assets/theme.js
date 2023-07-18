let btnTheme = document.querySelector(".btn__bar");
let custom = document.querySelector(".calc__custom");
let barOpcion = document.querySelector(".btn__bar");
let displays = document.querySelector(".calc__display");
let bgbtnGrup = document.querySelector(".calc__btns ");
let btnGrup = document.querySelectorAll(".btn");
let btnreset = document.querySelector(".btnres");
let btnDel = document.querySelector(".btndel");
let btnCalcular = document.querySelector(".btncalc");
let foot = document.querySelector(".calc__foot");


btnTheme.addEventListener("click", (event) => {
    let x = event.offsetX;
   
   
    if (x > 0 && x < 10) {

     btnTheme.style.justifyContent = "start";
     document.body.style.backgroundColor = "var(--bg-body-t1)";
     custom.style.color = "var(--color-t1)";
     barOpcion.style.backgroundColor = "var(--bg-btn-t1)";
     displays.style.backgroundColor = "var(--bg-display-t1)";
     displays.style.color = "var(--color-t1)";
     bgbtnGrup.style.backgroundColor = "var(--bg-btn-t1)";

     btnGrup.forEach(
       (btn) => (
         (btn.style.backgroundColor = "var(--bg-btnGrup-t1)"),
         (btn.style.color = "var(--bg-colorG-t1)"),
         (btn.style.boxShadow = "var(--box-shadow-t1)"),
         (btn.style.MozBoxShadow = "var(--box-shadow-t1)"),
         (btn.style.webkitBoxShadow = "var(--box-shadow-t1)")
       )
     );

      btnreset.style.backgroundColor = "var(--bg--btnGrupRest-t1)";
      btnreset.style.color = "white";

      btnDel.style.backgroundColor = "var(--bg--btnGrupRest-t1)";
      btnDel.style.color = "white";

      btnCalcular.style.backgroundColor = "var(--bg--btnGrupCalc-t2)";
      btnCalcular.style.color = "white"; 

   } else if (x > 10 && x < 40) {

     btnTheme.style.justifyContent = "center";
     document.body.style.backgroundColor = "var(--bg-body-t2)";
     custom.style.color = "var(--color-t2)";
     barOpcion.style.backgroundColor = "var(--bg-btn-t2)";
     displays.style.backgroundColor = "var(--bg-display-t2)";
     displays.style.color = "var(--color-t2)";
     bgbtnGrup.style.backgroundColor = "var(--bg-btn-t2)";

        btnGrup.forEach(
          (btn) => (
            (btn.style.backgroundColor = "var(--bg-btnGrup-t2)"),
            (btn.style.color = "var(--bg-colorG-t2)"),
            (btn.style.boxShadow = "var(--box-shadow-t1)"),
            (btn.style.MozBoxShadow = "var(--box-shadow-t1)"),
            (btn.style.webkitBoxShadow = "var(--box-shadow-t1)")
          )
        ); 

    btnreset.style.backgroundColor = "var(--bg--btnGrupRest-t2)";
    btnreset.style.color = "white";

    btnDel.style.backgroundColor = "var(--bg--btnGrupRest-t2)";
    btnDel.style.color = "white";

    btnCalcular.style.backgroundColor = "var(--bg--btnGrupCalc-t2)";
    btnCalcular.style.color = "white";  
     
   } else {

     btnTheme.style.justifyContent = "end";
     document.body.style.backgroundColor = "var(--bg-body-t3)";
     custom.style.color = "var(--color-t3)";
     barOpcion.style.backgroundColor = "var(--bg-btn-t3)";
     displays.style.backgroundColor = "var(--bg-display-t3)";
     displays.style.color = "var(--color-t3)";
     bgbtnGrup.style.backgroundColor = "var(--bg-btn-t3)";

     btnGrup.forEach(
       (btn) => (btn.style.backgroundColor = "var(--bg-btnGrup-t3)",
                 btn.style.color = "var(--bg-colorG-t3)",
                 btn.style.boxShadow = "var(--box-shadow-t3)",
                 btn.style.MozBoxShadow = "var(--box-shadow-t3)",
                 btn.style.webkitBoxShadow = "var(--box-shadow-t3)"
                 
             ) );      

     btnreset.style.backgroundColor = "var(--bg--btnGrupRest-t3)";
     btnreset.style.color = "white";

     btnDel.style.backgroundColor = "var(--bg--btnGrupRest-t3)";
     btnDel.style.color = "white";

     btnCalcular.style.backgroundColor = "var(--bg--btnGrupCalc-t3)";   
     btnCalcular.style.color = "black";
     btnCalcular.style.boxShadow = "none";
        
      foot.style.color = "white";

   }   
});


