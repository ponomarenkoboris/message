// TODO complite voice message function 
export function voiceMessage() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            let voice = [];

            // start recording 
            document.querySelector('#voice').addEventListener('click', () => {
                mediaRecorder.start();
            });
            mediaRecorder.addEventListener('dataavailable', e => {
                voice.push(e.data);
            });

            // stop recording on repeated click
            document.addEventListener('#voice').addEventListener('click', () => {
                mediaRecorder.stop();
            });

            // prepearing data to send to server
            mediaRecorder.addEventListener('stop', () => {
                const voiceBlob = new Blob(voice, {
                    type: 'audio/wav'
                });

                // creating new form element
                const fd = new FormData();
                fd.append('voice', voiceBlob);

                // send voice to server
                sendVoice(fd);

            });
        })
        .catch(err => {
            return err;
        });
}

async function sendVoice(fdVocie) {
    const options = {
        method: 'POST',
        headers: {

        },
        body: fdVocie
    };

    try {
        const response = await fetch('url', options);
        const data = response.json();
        console.log(data);
        // ...
    } catch (error) {
        throw new Error('Cannot send voice message: ', error);
    }
}