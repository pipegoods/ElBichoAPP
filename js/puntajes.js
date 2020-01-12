var puntajes = new Vue({
    el: '#puntajes',
    data: {
      tabla: [],
      elbicho: {}
    },
    created: function() {
        var cities = [];
        citiesRef.orderBy("puntos", "desc").limit(10).onSnapshot(function(querySnapshot) {
            
            querySnapshot.forEach(function(doc) {
                cities.push({name: doc.data().name, puntos: doc.data().puntos});
                
            });
            
        });
        cities.forEach(t => {
            this.tabla.push(t);
            console.log(t);
            
        });
    },
    methods: {
        actualizar: function() {
            console.log("HOLA");
            
        }
      }
    
  })