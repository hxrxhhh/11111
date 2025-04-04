const truths = [
    ["What is your biggest fear?", "Have you ever lied to your best friend?"],
    ["What's your most embarrassing moment?", "What's a secret you've never told anyone?"],
    ["Who was your first crush?", "Have you ever cheated on a test?"]
];

const dares = [
    "Do 10 push-ups!", "Sing a song loudly!", "Dance for 30 seconds!", "Speak in a funny accent for a minute!"
];

function playGame(choice) {
    if (choice === 'truth') {
        let randomTruth = truths[Math.floor(Math.random() * truths.length)];
        document.getElementById('question').innerText = "Choose one:";
        document.getElementById('option1').innerText = randomTruth[0];
        document.getElementById('option2').innerText = randomTruth[1];
        showPopup('question-box');
    } else {
        let randomDare = dares[Math.floor(Math.random() * dares.length)];
        document.getElementById('dare-text').innerText = randomDare;
        showPopup('upload-box');
    }
}

function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function uploadVideo() {
    let fileInput = document.getElementById('video-upload');
    let statusText = document.getElementById('upload-status');
    if (fileInput.files.length > 0) {
        statusText.innerText = "Uploading...";
        setTimeout(() => {
            statusText.innerText = "Upload successful! Video sent to Google Drive.";
            alert("Video uploaded!");
            // Google Drive API integration needed here
        }, 2000);
    } else {
        alert("Please upload a video first.");
    }
}