<template>
    <div class="header">
        <div v-for="item in menu">
            {{item}}
        </div>
        {{d}}
    </div>
</template>
<script>
import { default as C } from '../common'
export default {
    name: 'header',
    data() {
        var menu = {
            a: C,
            b: 2,
            c: C.a
        }
        return {
            menu: menu
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$cRed:red;
.header {
    position: absolute;
    top:0;
    left:0;
    padding: 10px 60px;
    color: $cRed;
    font-size: 20px;
}
</style>
