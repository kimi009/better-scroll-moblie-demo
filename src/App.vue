<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mixinTest1} from './assets/js/mixin';
export default {
    mixins:[mixinTest1],
    created(){
        this.hello();
    },
    methods: {
        hello: function () {
            console.log('mixinTest2');
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
