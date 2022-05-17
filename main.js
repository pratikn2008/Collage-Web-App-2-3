var SpeechRecognition = window.webkitSpeechRecognition;

var recognititon = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognititon.start();
}

recognititon.onresult = function(event){
    console.log(event);

    var Content = event.results [0] [0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("taking your selfie ---")
        Webcam.attach(camera);
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    take_snaphot();
}

camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality:90
});

function take_snaphot(){

        setTimeout(function(){
            Webcam.snap(function(data_uri){
                document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
                save();
            });
        },5000);

        setTimeout(function(){
            Webcam.snap(function(data_uri){
                document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
                save();
            });
        },10000);

        setTimeout(function(){
            Webcam.snap(function(data_uri){
                document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
                save();
            });
        },15000);
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}