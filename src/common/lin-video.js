/**
 * @author linj
 * eg:
 *let temId = 'linVideo';
 *let option = {
 *    id: temId
 *};
 *let linVideo = {
 *    [temId]: new LinVideo(option)
 *};
 */

class LinVideo {
    // var a = {id: ''};
    constructor(argOption) {
        if (!this.option) {
            this.option = {
                // 实例id
                id: null,
                // 是否自动播放
                autoPlay: false,
                // 总时长 秒
                duration: 0,
                end: null
            };
        }
        // 合并配置
        this.option = Object.assign(this.option, argOption);
        console.log(this.option);
        // 播放进度条
        let id = this.option.id;
        let ids = {
            [id]: document.getElementById(id),
            // 播放器element
            [id + 'Player']: document.getElementById(id + '-player'),
            // 时间
            [id + 'CurrentTime']: document.getElementById(id + '-currentTime'),
            [id + 'Duration']: document.getElementById(id + '-duration'),
            // 播放暂停
            [id + 'Play']: document.getElementById(id + '-play'),
            // 进度条
            [id + 'PlayProgress']: document.getElementById(id + '-play-progress'),
            [id + 'HasPlay']: document.getElementById(id + '-has-play'),
            [id + 'HasLoad']: document.getElementById(id + '-has-load'),
            // 音量
            [id + 'RightBar']: document.getElementById(id + '-right-bar'),
            [id + 'VolumeProgress']: document.getElementById(id + '-volume-progress'),
            [id + 'NowVolume']: document.getElementById(id + '-now-volume')
        };
        let f = {
            get: '获取element',
            drag: '拖拽事件',
            countTime: '计算音乐时长',
            getCss: '获取相关CSS属性',
            getElementLeft: '获取元素绝对位置的横坐标'
        };
        // 获取element
        f.get = (argName) => {
            if (!argName) {
                return ids[id];
            } else {
                return ids[id + argName];
            }
        };
        /**
         * 拖拽事件
         * @param  {[type]} argThis     [click element this]
         * @param  {[type]} argEvent    [event]
         * @param  {[type]} argMove     [move element]
         * @return {[type]}             [description]
         */
        f.drag = (argThis, argEvent, argMove) => {
            var event = argEvent || window.event,
                barWidth = +f.getCss(argThis, 'width').replace('px', ''),
                eleLeft = f.getElementLeft(argThis),
                leftW = event.clientX - eleLeft;
            if (leftW > barWidth) {
                leftW = barWidth;
            } else if (leftW < 0) {
                leftW = 0;
            }
            ids[argMove].style.width = leftW + 'px';
            console.log(
                '鼠标位置',
                event.clientX,
                'this offsetLeft',
                eleLeft,
                'move',
                leftW,
                'barWidth',
                barWidth
            );
        };
        /**
         * 计算音乐时长
         * @param  {[type]} argTime [description]
         * @return {[type]}         [description]
         */
        f.countTime = (argTime) => {
            let time = '',
                m = Math.floor(argTime / 60),
                s = Math.round(argTime - m * 60);
            if (m < 10) {
                time = '0';
            }
            time += m + ':';
            if (s < 10) {
                time += '0';
            }
            time += s;
            return time;
        };
        /**
         * 获取相关CSS属性
         * @param  {[type]} argE [element]
         * @param  {[type]} key  [style name]
         * @return {[type]}      [description]
         */
        f.getCss = (argE, key) => {
            return argE.currentStyle ? argE.currentStyle[key] : document.defaultView.getComputedStyle(argE, false)[key];
        };
        /**
         * 获取元素绝对位置的横坐标
         * @param  {[type]} argE [element]
         * @return {[type]}      [description]
         */
        f.getElementLeft = (argE) => {
            let actualLeft = argE.offsetLeft;
            let current = argE.offsetParent;
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            return actualLeft;
        };
        //  播放/暂停
        f.get('Play').onclick = () => {
            console.log(+new Date());
        };
        // 进度拖拽
        f.get('PlayProgress').onmousedown = function(argEvent) {
            var temThis = this;
            f.drag(temThis, argEvent, id + 'HasPlay');
            f.get('PlayProgress').onmousemove = function(argEvent) {
                var temThis = this;
                f.drag(temThis, argEvent, id + 'HasPlay');
            };
        };
        // 音量进度拖拽
        f.get('VolumeProgress').onmousedown = function(argEvent) {
            var temThis = this;
            f.drag(temThis, argEvent, id + 'NowVolume', id + 'RightBar');
            f.get('VolumeProgress').onmousemove = function(argEvent) {
                var temThis = this;
                f.drag(temThis, argEvent, id + 'NowVolume');
            };
        };
        // 停止拖拽
        document.onmouseup = () => {
            f.get('PlayProgress').onmousemove = null;
            f.get('VolumeProgress').onmousemove = null;
        };
        // video api
        // 开始加载音频和视频。
        f.get('Player').onloadstart = (e) => {
            console.log('开始加载音频和视频。', e);
        };
        // 音频和视频的duration属性（时长）发生变化时触发，即已经知道媒体文件的长度。
        f.get('Player').ondurationchange = () => {
            this.option.duration = f.get('Player').duration;
            f.get('Duration').innerHTML = f.countTime(this.option.duration);
            console.log('获取总时长:秒', this.option.duration);
        };
        // 浏览器正在下载媒体文件，周期性触发。下载信息保存在元素的buffered属性中
        f.get('Player').onprogress = () => {
            let count = 0;
            if (f.get('Player').buffered.length) {
                for (let i = 0; i < f.get('Player').buffered.length; i++) {
                    count += f.get('Player').buffered.end(i) - f.get('Player').buffered.start(i);
                }
                console.log(count);
                let loadWidth = (+f.getCss(f.get('PlayProgress'), 'width').replace('px', '')) * count / this.option.duration;
                if (loadWidth < 0) {
                    loadWidth = 0;
                }
                f.get('HasLoad').style.width = loadWidth + 'px';
            };
        }
    }
}
export default LinVideo;
