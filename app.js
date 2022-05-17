const app = Vue.createApp({
    // data & functions
    // template: '<h2>Iam Template </h2>',
    data(){
        return {
            title: "gamal",
            gender: "male",
            age: "25"
        }
    },
    methods:{
        changeTitle(title){
            // this.title = "Abdo"
            this.title = title;
        }
    }
})

// to run this vue code you should mount the code to the element that we will run in it;
app.mount('#app')