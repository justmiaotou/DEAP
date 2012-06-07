var io  = require('socket.io'),
    canvasHandler = require('canvas-handler'),
    msgHandler = require('message-handler'),
    rtcHandler = require('webrtc-handler');

var REPEAT_IDENTIFY = 1,
    IDENTIFY_FAILED = 2;

io.sockets.on('connection', function(socket) {
    var identifyStatus = false;// 当前身份验证状态标识

    // 返回连接成功的消息
    socket.emit('connect-ready', {'msg':'Connect Success!'});

    socket.on('identify', function(message) {
        // 若已经通过身份验证，即已经开始监听其它消息，
        // 则不需再进入if语句
        if (!identifyStatus && message.user && identifyCheck(message.user)) {
            identifyStatus = true;
            
            socket.on('message', function(msg) {
                switch(msg.type) {
                    // 画板相关消息的处理
                    case 'canvas':
                        canvasHandler.handle(message.user, msg)
                        break;
                    // 即时聊天消息的处理
                    case 'message':
                        msgHandler.handle(message.user, msg);
                        break;
                    // WebRTC相关消息的处理
                    case 'rtc':
                        rtcHandler.handle(message.user, msg);
                        break;
                    default;
                        break;
                }
            });
        } else if(identifyStatus) {// 重复验证错误
            socket.emit('error', {'type': REPEAT_IDENTIFY, 'msg': ''});
        } else {// 身份验证失败错误
            socket.emit('error', {'type': IDENTIFY_FAILED, 'msg': 'Identify Failed'});
        }
    });
});
