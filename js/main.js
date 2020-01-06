var appBicho = new Vue({
    el: '#appBicho',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    },
    
  // define methods under the `methods` object
  methods: {
    toast: function (event) {
        M.toast({html: 'I am a toast!'})
    }
  }
  })