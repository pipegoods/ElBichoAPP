$(document).ready(function(){
  $('.modal').modal();
});

var appBicho = new Vue({
    el: '#appBicho',
    data: {
      juegoON: true,
      intentos: 3,
      puntos: 0,
      l_arqueria: 0
    },
    
  // define methods under the `methods` object
  methods: {
    iniciando: function (event) {
        M.toast({html: '¡Ay mi madre el Bicho!'});
        this.juegoON = false;
    },
    l_1: function (event) {this.l_arqueria = 1;},
    l_2: function (event) {this.l_arqueria = 2;},
    l_3: function (event) {this.l_arqueria = 3;},
    l_4: function (event) {this.l_arqueria = 4;},
    chutar: function () {
      
    }
  }
  })