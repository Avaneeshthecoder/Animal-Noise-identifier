//https://teachablemachine.withgoogle.com/models/S4VR39Bo5/
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XfWerhhWx/", model_ready)
}
function model_ready() {
    classifier.classify(got_results)
}
function got_results(error, results) {
    console.log("Got Results")
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        r = Math.floor(Math.random()*255)+1
        g = Math.floor(Math.random()*255)+1
        b = Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label
        document.getElementById("Accuracy").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+" %"
        document.getElementById("result_label").style.color="rgb("+r+", "+g+", "+b+")"
        document.getElementById("Accuracy").style.color="rgb("+r+", "+g+", "+b+")"
        img1=document.getElementById("a1")
        img2=document.getElementById("a2")
        img3=document.getElementById("a3")
        img4=document.getElementById("a4")
        if (results[0].label=="Clapping") {
            img1.src='aliens-01.gif'
            img2.src='aliens-02.png'
            img3.src='aliens-03.png'
            img4.src='aliens-04.png'
        }
        else if (results[0].label=="Tapping") {
            img1.src='aliens-01.png'
            img2.src='aliens-02.gif'
            img3.src='aliens-03.png'
            img4.src='aliens-04.png'
        }
        else if (results[0].label=="Glass ") {
            img1.src='aliens-01.png'
            img2.src='aliens-02.png'
            img3.src='aliens-03.gif'
            img4.src='aliens-04.png'
        }
        else {
            img1.src='aliens-01.png'
            img2.src='aliens-02.png'
            img3.src='aliens-03.png'
            img4.src='aliens-04.gif'
        }
    }
}