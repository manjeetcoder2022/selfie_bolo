var speech  = window.webkitSpeechRecognition
var recongnition= new speech()
function start(){
    document.getElementById("mic").src="speak.gif"

    setTimeout(function(){
        document.getElementById("mic").src =  "mic.png"
    },5000)
document.getElementById("text_box").innerHTML=""
    recongnition.start()

}

recongnition.onresult= function(event){
    console.log(event)

    var say= event.results[0][0].transcript
    document.getElementById("text_box").innerHTML= say

    if(say=="selfie"){
       text_box= "First Image capture in 5 second wait!"
       speek()
     setTimeout(function(){
        snap()
     },5000)
    }
   
}

function speek(){
    var synthesis= window.speechSynthesis
    // var text_box= document.getElementById("text_box").value 

    var utterThis = new SpeechSynthesisUtterance(text_box)
    synthesis.speak(utterThis)


Webcam.attach("camera")

Webcam.set({
    width:350,
    height:250,
    image_formet:"jpeg",
    jpeg_quality:90,

})
}

function snap(){
    Webcam.snap(

        function (data_uri){
            image="<image id='first_image' src=" + data_uri + ">"
            document.getElementById("image_1").innerHTML= image
            text_box="Second Image capture in 5 second wait!"
            speek()
        setTimeout(function(){
            snap_2()
        },5000)
        
           
        }
    )
}
function snap_2(){
    Webcam.snap(

        function(data_uri){
            image_2="<image id='second_image' src=" + data_uri + ">"
    document.getElementById("image_2").innerHTML= image_2
    text_box="Third Image capture in 5 second wait!"
    speek()
setTimeout(function(){
    snap_3()
},5000)

        }
    )
}
function snap_3(){
    
    Webcam.snap(

    function(data_uri){
        image_3="<image id='third_image' src=" + data_uri + ">"
document.getElementById("image_3").innerHTML= image_3
save()
}
)
}

function save(){
   document.getElementById("result_1").innerHTML= image
   document.getElementById("result_2").innerHTML= image_2
   document.getElementById("result_3").innerHTML= image_3
}

