Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90

});
Webcam.attach("#camera");

image_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/g6ZqMtMN6/model.json", model_loaded);

function model_loaded() {
    console.log("Model loaded successfully");
}

function capture_image() {
    Webcam.snap(function (cam_pic) {
        document.getElementById("result").innerHTML = '<img id="pic" src="' + cam_pic + '">';
    });
}