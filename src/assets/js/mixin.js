/**
 * 创建一个项目中的混入文件
 */

// 创建一个需要混入的对象
export const mixinTest1 = {
    created() {
        this.hello();
    },
    data(){
        return{
            msg:'hello word'
        }
    },
    methods: {
        hello() {
            console.log('mixinTest1');
        }
    }
};