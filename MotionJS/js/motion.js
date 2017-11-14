var motion_img = $('.motion_img');
var select_box = $('#selectFileList');

var xhr = new XMLHttpRequest();
var files = {};
var myPlayer; 
var videoSrc;
xhr.open('GET','./public/files.txt',true);
xhr.send(null);

xhr.onload = function () {
    var res = xhr.responseText;
    files = res.split('\n');
    files.forEach(function (itm, ind) {
        if (itm != "") {
            var op =$("<option></option>").text(itm);
            select_box.append(op);
        }
    });
    // set motion profile src
    for (var i = 0; i < 4; i++) {
        console.log("./public/img/" + files[0] + "/" + i + ".png");
        $(motion_img[i]).attr('src', src="/public/img/" + files[0] + "/o" + i + ".png");
    }
    // set video src

    var video = $("<video></video>");
    video.attr('id', 'my-video');
    video.attr('preload', 'auto');
    videoSrc = $("<source></source>");
    videoSrc.attr('src', "/public/video/" + files[0] + ".mp4");
    videoSrc.attr('type', "video/mp4");
    
    video.append(videoSrc);
    select_box.after(video);
    
    myPlayer = videojs('my-video');
    videojs("my-video").ready(function(){
        var myPlayer = this;
        myPlayer.currentTime(0);
        myPlayer.play();
    });


}

$(document).ready(function (e) {

    for (var i = 0; i < motion_img.length; i++) {
        $(motion_img[i]).on('click', function (event) {

            var y = event.offsetY;
            var n = 480/150 * y
            console.log("frame number: " + n);
            n = n/30;
            console.log("second: " + n);

            var myPlayer = videojs('my-video');
            myPlayer.currentTime(n);
        });
    }
    select_box.on('change', function (event) {
        var video_name = select_box.val()
        console.log(video_name)
        
        for (var i = 0; i < 4; i++) {
            console.log("./public/img/" + files[0] + "/" + i + ".png");
            $(motion_img[i]).attr('src', src="/public/img/" + video_name + "/o" + i + ".png");
        }
        myPlayer.pause();
        video = $('#my-video_html5_api');
        video.attr('src', "/public/video/" + video_name + ".mp4");
        videoSrc.attr('src', "/public/video/" + video_name + ".mp4");
        myPlayer.load();
        myPlayer.play();
        
        // change motion profile src and video attr
    });
    
    
});

function play() {
    myPlayer.play();
}

function pause() {
    myPlayer.pause();
}

function setTime() {
    var time1 = document.getElementById('time').value;
    myPlayer.currentTime(time1);
}

