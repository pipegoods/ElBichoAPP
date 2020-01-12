var puntajes = new Vue({
    el: '#puntajes',
    data: {
      tabla: [],
      elbicho: {}
    },
    created: function() {
      this.actualizar();
    },
    methods: {
        actualizar: function() {
            console.log(this.tabla);
            this.tabla = [];
           citiesRef.orderBy("puntos", "desc").limit(10).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
             this.elbicho = {
                name: doc.data().name,
                puntos: doc.data().puntos
              }
              this.tabla.push(this.elbicho);
              
              
            })
          });
            
        }
      }
    
  })