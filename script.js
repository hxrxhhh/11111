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
        document.getElementById('question-box').style.display = 'block';
        document.getElementById('upload-box').style.display = 'none';
    } else {
        let randomDare = dares[Math.floor(Math.random() * dares.length)];
        document.getElementById('dare-text').innerText = randomDare;
        document.getElementById('upload-box').style.display = 'block';
        document.getElementById('question-box').style.display = 'none';
    }
}

function uploadVideo() {
    let fileInput = document.getElementById('video-upload');
    let statusText = document.getElementById('upload-status');
    if (fileInput.files.length > 0) {
        statusText.innerText = "Uploading...";
        setTimeout(() => {
            statusText.innerText = "Upload successful! Video sent.";
            alert("Video uploaded! Now sending...");
            // Integration with Google Drive API or a server backend needed here.
        }, 2000);
    } else {
        alert("Please upload a video first.");
    }
}
function uploadVideo() {
    let fileInput = document.getElementById('video-upload');
    let statusText = document.getElementById('upload-status');

    if (fileInput.files.length > 0) {
        let formData = new FormData();
        formData.append('video', fileInput.files[0]);

        fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            statusText.innerText = data;
            alert("Video uploaded successfully!");
        })
        .catch(error => {
            statusText.innerText = "Upload failed!";
            console.error("Upload error:", error);
        });
    } else {
        alert("Please upload a video first.");
    }
}