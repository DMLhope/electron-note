var Main = {
    data:{
      add:''
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          renwu: '2016-05-07' 
        },{
          renwu: '2016-05-07' 
        },{
          renwu: '2016-8-07' 
        }]
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')