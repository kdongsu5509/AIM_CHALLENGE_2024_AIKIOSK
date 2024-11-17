let audioChunks = []; // 음성 녹음을 담을 변수
let mediaRecorder; // 녹음 기능 자체
var convertedText;

window.onload = function () {
    startRecording();  // 페이지 로드 후 바로 녹음 시작
};

// 오디오 녹음 후 서버에 업로드 하는 함수.
function startRecording() {
    // 사용자의 마이크 장치에 접근하여 오디오 스트림을 얻음
    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {
            // MediaRecorder 객체 초기화 (오디오 스트림을 기록하는 객체)
            mediaRecorder = new MediaRecorder(stream);

            // 녹음된 데이터가 준비될 때마다 호출되는 이벤트 리스너
            mediaRecorder.ondataavailable = event => {
                // 녹음된 오디오 데이터를 audioChunks 배열에 저장
                audioChunks.push(event.data);
            };

            // 녹음이 중지되었을 때 호출되는 이벤트 리스너
            mediaRecorder.onstop = () => {
                // 저장된 오디오 데이터를 Blob 객체로 변환 (type: 'audio/wav')
                const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});

                // Blob 객체를 URL로 변환하여 오디오 재생
                const tempAudioBlob = new Blob(audioChunks, {type: 'audio/wav'});
                const audioUrl = URL.createObjectURL(tempAudioBlob);
                const audio = new Audio(audioUrl);
                audio.play();

                // FormData 객체를 생성하여 오디오 파일과 함께 전송할 데이터 준비
                const formData = new FormData();
                formData.append("file", audioBlob);

                // 파일을 서버에 업로드
                fetch('/audio', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => {
                        if (response.ok) {
                            convertedText = response.body// 업로드 후 변환 성공 시 변환된 텍스트를 가지고 온다.
                        } else {
                            console.error('Failed to upload'); // 업로드 실패 시 에러 메시지 출력
                        }
                    })
                    .catch(error => {
                        console.error('Error occurred during upload:', error); // 네트워크 오류 발생 시 에러 메시지 출력
                    });

                // String type으로 convertedText를 전달./
                fetch('/result', {
                    method: 'GET',
                }).then(response => {
                    if (response.ok) {
                        return null;
                    } else {
                        console.error("Failed to Analyzing");
                    }
                }).catch(error => {
                    console.error('Error occured during analyzing : ', error);
                })
            };

            // 녹음 시작
            mediaRecorder.start();
            var progressBarElement = document.getElementById('onProgressBar');
            var progressBar = getProgressBar();
            progressBarElement.add(progressBar);
            var timeout = 5000;
            setTimeout(() => {
                mediaRecorder.stop();
            }, 5000);

        })
        .catch(console.error); // 마이크 접근에 실패했을 경우 에러 메시지 출력
}