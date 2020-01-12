$(document).ready(function(){
  $('.modal').modal({
		dismissible: false
	});
});



var appBicho = new Vue({
    el: '#appBicho',
    data: {
      juegoON: true,
      intentos: 3,
      puntos: 0,
      l_arqueria: 0,
      l_1_p: 0,
      l_2_p: 0,
      l_3_p: 0,
      l_4_p: 0,
      name: ''
    },
    
  // define methods under the `methods` object
  methods: {
    iniciando: function (event) {
        M.toast({html: '¡Ay mi madre el Bicho!'});
        this.juegoON = false;
        this.playSound('music/aymimadre.mp3');
    },
    l_1: function (event) {this.l_arqueria = 1; this.chutar(true);},
    l_2: function (event) {this.l_arqueria = 2; this.chutar(true);},
    l_3: function (event) {this.l_arqueria = 3; this.chutar(true);},
    l_4: function (event) {this.l_arqueria = 4; this.chutar(true);},
    chutar: function (ban) {
      if (this.intentos>0) {
        if (ban) {
          $("#modal2").modal('open');
        this.intentos--;
        this.generarAlt();
        switch (this.l_arqueria) {
          case 1:
            M.toast({html: '¡Golazo al lado 1!'});
            this.puntos += this.l_1_p;
            if (this.l_1_p >= 90) {
              this.playSound('music/suu.mp3');
            }
            break;
          case 2: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
            M.toast({html: '¡Golazo al lado 2!'});
            this.puntos += this.l_2_p;
            if (this.l_2_p >= 90) {
              this.playSound('music/suu.mp3');
            }
            break;
            // NOTA: el "break" olvidado debería estar aquí
          case 3: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
            M.toast({html: '¡Golazo al lado 3!'});
            this.puntos += this.l_3_p;
            if (this.l_3_p >= 90) {
              this.playSound('music/suu.mp3');
            }
            break; // Al encontrar un "break", no será ejecutado el 'case 2:'
          case 4:
            M.toast({html: '¡Golazo al lado 4!'});
            this.puntos += this.l_4_p;
            if (this.l_4_p >= 90) {
              this.playSound('music/suu.mp3');
            }
            break;
        }
        }
        
      } else {
        $("#modal3").modal('open');
        
      }
      
    },playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    generarAlt: function () {
      this.l_1_p = Math.floor(Math.random() * (101 - 1)) + 1;
      this.l_2_p = Math.floor(Math.random() * (101 - 1)) + 1;
      this.l_3_p = Math.floor(Math.random() * (101 - 1)) + 1;
      this.l_4_p = Math.floor(Math.random() * (101 - 1)) + 1;

      console.log('L1 ' + this.l_1_p);
      console.log('L2 ' + this.l_2_p);
      console.log('L3 ' + this.l_3_p);
      console.log('L4 ' + this.l_4_p);
    },
    reiniciar: function () {
      this.juegoON = true;
      this.intentos = 3;
      this.puntos = 0;
      this.l_arqueria = 0;
      

    },
    guardar: function () {
     
      if (this.name != '') {
        db.collection("users").add({
          name: this.name,
          puntos: this.puntos
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          alert("Puntaje guardado con exito");
          
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        
        });
        
      }
      this.reiniciar();
        puntajes.actualizar();
    }
  }
  })