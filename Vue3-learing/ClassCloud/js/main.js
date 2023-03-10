// const product = 'Socks'
const app = Vue.createApp({
    data(){
        return{
            details:[
                {
                    image:'../images/10001.jpg',
                    tecname: '许莫淇',
                    avatar:'../images/10002.jpg',
                    classname:'前端工程化开发',
                    classnum:'软件2242 Web2班',
                    course:false,
                    show:false,
                    endimg:'https://static-cdn-oss.mosoteach.cn/mosoteach2/common/images/index_creat_icon_end.png',
                },
                {
                    image:'../images/10003.jpeg',
                    tecname: '许莫淇',
                    avatar:'../images/10002.jpg',
                    classname:'后端工程化开发',
                    classnum:'软件2242 Web2班',
                    course:false,
                    show:false,
                    endimg:'https://static-cdn-oss.mosoteach.cn/mosoteach2/common/images/index_creat_icon_end.png',
                },
                {
                    image:'../images/10004.jpeg',
                    avatar:'../images/10002.jpg',
                    tecname: '许莫淇',
                    classname:'Web应用开发',
                    classnum:'软件2242 Web2班',
                    course:true,
                    show:false,
                    endimg:'https://static-cdn-oss.mosoteach.cn/mosoteach2/common/images/index_creat_icon_end.png',
                },
            ]
            
        }
    },
    methods:{
        changeShow(item){
            if(item.show){
                item.show=false
            }else{
                item.show=true;
            }
        }
    }
})