const app = Vue.createApp({
    //data,functions
    //template:'<h2>I am the template</h2>'
    data(){
        return {
            showbooks: true,
            title : 'the final empire',
            author : 'r p',
            age : 45,
            x:0,
            y:0
        }
    },
    methods:{
        changeTitle(title = 'word of radiance'){
            this.title = title
        },
        toggleShowBooks(){
            this.showbooks = !this.showbooks;
        },
        handleEvent(ev,data){
            console.log(ev,ev.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

})

app.mount('#app');// mount with id = "app"