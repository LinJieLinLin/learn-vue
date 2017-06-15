<template>
    <div class="hello">
        <link rel="stylesheet" media="all" href="https://linjielinlin.github.io/static/libs/font-awesome/css/font-awesome.min.css">
        <div class="main">
            <div id="linVideo" class="lin-video">
                <video id="linVideo-player" preload="auto" poster="https://s.cdpn.io/6035/vp_poster.jpg">
                    <source src="http://fs.kuxiao.cn/usr/api/dload?mark=video-58abb093e27ce1087fc8ea00-14944930748540&type=V_pc&token=5942B727A17EB404BFBEDAD6" type="video/mp4" />
                    <p>你的浏览器不支持视频播放.</p>
                </video>
                <div class="video-bar">
                    <div id="linVideo-play" class="v-play">
                        <i class="fa fa-play" aria-hidden="true"></i>
                        <i class="fa fa-pause hide" aria-hidden="true"></i>
                    </div>
                    <div class="v-time">
                        <span id="linVideo-currentTime" class="currentTime">00:00</span>
                        <span>/</span>
                        <span id="linVideo-duration" class="duration">00:00</span>
                    </div>
                    <div class="v-progress">
                        <div id="linVideo-play-progress" class="play-progress">
                            <div id="linVideo-has-play" class="has-play"></div>
                            <div id="linVideo-has-load" class="has-load"></div>
                        </div>
                    </div>
                    <div id="linVideo-right-bar" class="right-bar">
                        <div id="linVideo-volume" class="v-volume">
                            <i class="fa fa-volume-off hide" aria-hidden="true"></i>
                            <i class="fa fa-volume-down hide" aria-hidden="true"></i>
                            <i class="fa fa-volume-up" aria-hidden="true"></i>
                        </div>
                        <div class="v-volume-progress">
                            <div id="linVideo-volume-progress" class="volume-progress">
                                <div id="linVideo-now-volume" class="now-volume"></div>
                            </div>
                        </div>
                        <div class="v-expand">
                            <i class="fa fa-expand" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
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
import LinVideo from '../common/lin-video.js'
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
                id: temId
            };
            let linVideo = {
                [temId]: new LinVideo(option)
            };
            console.log(linVideo);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

.lin-video {
    position: relative;
    width: 480px;
    height: 240px;
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
            width: 40%;
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
