<template>
    <div class="hello">
        <link rel="stylesheet" media="all" href="https://linjielinlin.github.io/static/libs/font-awesome/css/font-awesome.min.css">
        <div class="main">
        </div>
        <button v-on:click="linVideo()">video</button>
        <div class="my"></div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>0</div>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>
<script>
import LinPlayer from '../common/lin-video.js'
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to my Vue.js App',
            number: 1
        }
    },
    beforeCreate: function() {
        console.log('beforeCreate 钩子执行...');
        console.log(this.number);
    },
    cteated: function() {
        console.log('cteated 钩子执行...');
        console.log(this.number);
    },
    beforeMount: function() {
        console.log('beforeMount 钩子执行...');
        console.log(this.number);
    },
    mounted: function() {
        console.log('mounted 钩子执行...');
        console.log(this.number);
        this.linVideo();
    },
    beforeUpdate: function() {
        console.log('beforeUpdate 钩子执行...');
        console.log(this.number);
    },
    updated: function() {
        console.log('updated 钩子执行...');
        console.log(this.number);
    },
    beforeDestroy: function() {
        console.log('beforeDestroy 钩子执行...');
        console.log(this.number);
    },
    destroyed: function() {
        console.log('destroyed 钩子执行...');
        console.log(this.number)
    },
    methods: {
        linVideo: function() {
            let temId = 'linVideo';
            let option = {
                // autoPlay: true,
                type: 'video',
                src: 'http://kuxiao.jxzy.com/Act-ss-mp4-hd/59142851e27ce1253d36da3c.mp4?OSSAccessKeyId=STS.MWgVXMKErUNk8Qpqxv7aVXT6z&Expires=1499281948000&security-token=CAIS%2FwF1q6Ft5B2yfSjIrJTSHeL5pppT4oyAOnfBlXgjO%2B56t5GdmDz2IHBMdXdrCeEev%2F82nmhU5%2FwZlrEuGsJJH0ecPMIpsZldrVj9bdSbt5TosrZcGA9m0NHQWXDBx8b3T7jTbrG0I4WACT3tkit03sGJF1GLVECkNpukkINuas9tMCCzcTtBAqU9RGIg0rh4U0HcLvGwKBXnr3PNBU5zwGpGhHh49L60z7%2F3iHOcriWjmrNN%2F96gf8H8NpM3bMoiabrvgrwqLJim%2BTVL9h1H%2BJ1xiKF54jrdtrmfeQIBu0TYaLqFqow0dVUhOvlgQLQksvnwmPpjpvfDMG5QKYqK94oagAFJ0a2cQh6aso5bjZRC486I22Bpsirh6ZGuvE1m%2FPw7ClmLr8YtzJXM25B5v3%2BXfMjeaBoH84B8sy%2BNkVRHY72E6Y6YfWL8VLtr3a7T1Jx64RW6Hfr9%2FgW9hmBCj0DFBFVc2aCYq1BlRR8tRim%2BnxfxJzq3dEwOPQJXRI5DaZoOMg%3D%3D&Signature=hdZJRfiKmjkwdYEtDNMqEZ7X8Mk%3D',
                id: temId
            };
            let linPlayer = LinPlayer(option);
            temId = 'linVideo-1';
            option = {
                // autoPlay: true,
                type: 'video',
                src: 'http://kuxiao.jxzy.com/Act-ss-mp4-hd/59142851e27ce1253d36da3c.mp4?OSSAccessKeyId=STS.MWgVXMKErUNk8Qpqxv7aVXT6z&Expires=1499281948000&security-token=CAIS%2FwF1q6Ft5B2yfSjIrJTSHeL5pppT4oyAOnfBlXgjO%2B56t5GdmDz2IHBMdXdrCeEev%2F82nmhU5%2FwZlrEuGsJJH0ecPMIpsZldrVj9bdSbt5TosrZcGA9m0NHQWXDBx8b3T7jTbrG0I4WACT3tkit03sGJF1GLVECkNpukkINuas9tMCCzcTtBAqU9RGIg0rh4U0HcLvGwKBXnr3PNBU5zwGpGhHh49L60z7%2F3iHOcriWjmrNN%2F96gf8H8NpM3bMoiabrvgrwqLJim%2BTVL9h1H%2BJ1xiKF54jrdtrmfeQIBu0TYaLqFqow0dVUhOvlgQLQksvnwmPpjpvfDMG5QKYqK94oagAFJ0a2cQh6aso5bjZRC486I22Bpsirh6ZGuvE1m%2FPw7ClmLr8YtzJXM25B5v3%2BXfMjeaBoH84B8sy%2BNkVRHY72E6Y6YfWL8VLtr3a7T1Jx64RW6Hfr9%2FgW9hmBCj0DFBFVc2aCYq1BlRR8tRim%2BnxfxJzq3dEwOPQJXRI5DaZoOMg%3D%3D&Signature=hdZJRfiKmjkwdYEtDNMqEZ7X8Mk%3D',
                id: temId
            };
            let linPlayer1 = LinPlayer(option);
            console.log('--------------');
            console.log(linPlayer, linPlayer1);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$cRed:red;
h1,
h2 {
    font-weight: normal;
    color: $cRed;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

// lin-video
@mixin iCB($old:false) {
    @if $old {
        &:before,
        &:after {
            content: "";
            display: table;
            font: 0/0 a;
        }
    }
    @else {
        &:after {
            content: "";
            display: block;
            clear: both;
        }
    }
}

.main {
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 1;
}

.v-player {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

.lin-video {
    position: relative;
    width: 480px;
    height: 240px;
    &.full-video {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 9999999999;
        > video {
            width: 100%;
            height: 100%;
        }
    }
    > video {
        width: 480px;
        height: 240px;
        background-color: #000;
    }
    .hide {
        display: none;
    }
    .video-bar {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.5);
        height: 40px;
        line-height: 40px;
        width: 100%;
        color: #fff;
        // @include iCB();
        > div {
            height: 100%;
        }
    }
    .v-play {
        position: absolute;
        z-index: 1;
        cursor: pointer;
        width: 30px;
        text-align: right;
    }
    .v-time {
        position: absolute;
        left: 40px;
        z-index: 1;
        width: 90px;
        text-align: center;
        font-size: 14px;
    }
    .v-progress {
        padding-left: 140px;
        padding-right: 30%;
        position: relative;
    }
    .play-progress {
        cursor: pointer;
        height: 100%;
        width: 100%;
        position: relative;
        &::before {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 0;
            width: 100%;
            height: 4px;
            transform: translate(-50%, -50%);
            background-color: #666;
            content: "";
        }
        .has-play {
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 2;
            width: 0%;
            height: 4px;
            transform: translate(0, -50%);
            background-color: #00BFB8;
            &:before {
                position: absolute;
                right: -5px;
                top: 50%;
                z-index: 1;
                transform: translate(0, -50%);
                height: 14px;
                width: 14px;
                border-radius: 100%;
                background-color: #00BFB8;
                content: "";
            }
        }
        .has-load {
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 1;
            width: 0%;
            height: 4px;
            transform: translate(0, -50%);
            background-color: #ccc;
        }
    }
    .right-bar {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        width: 29%;
    }
    .v-volume {
        position: absolute;
        left: 0;
        z-index: 1;
        cursor: pointer;
        width: 30px;
        height: 100%;
        text-align: right;
    }
    .v-volume-btn {
        width: 15px;
        text-align: left;
        display: inline-block;
    }
    .v-volume-progress {
        padding-left: 40px;
        padding-right: 50px;
        height: 100%;
        position: relative;
    }
    .volume-progress {
        cursor: pointer;
        height: 100%;
        padding: 0;
        position: relative;
        &::before {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 0;
            width: 100%;
            height: 4px;
            transform: translate(-50%, -50%);
            background-color: #666;
            content: "";
        }
        .now-volume {
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 2;
            width: 100%;
            height: 4px;
            transform: translate(0, -50%);
            background-color: #00BFB8;
            &:before {
                position: absolute;
                right: -5px;
                top: 50%;
                z-index: 1;
                transform: translate(0, -50%);
                height: 14px;
                width: 14px;
                border-radius: 100%;
                background-color: #00BFB8;
                content: "";
            }
        }
    }
    .v-expand {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        cursor: pointer;
        width: 30px;
        height: 100%;
        text-align: left;
    }
}
</style>
