<script>
    import { onMount } from "svelte";

    function start() {
        window.SpeechRecognition ||= window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = "en"

            let text = ""
            let temp = ""

            recognition.interimResults = true;

            recognition.start();


            recognition.addEventListener("end", (ev) => {    
                console.clear();            

                let span = document.createElement("p")
                
                span.innerText = " " + temp

                document.querySelector("#convert_text").append(span)

                temp = ""

                console.log([temp]);

                recognition.start();
            })

            // setTimeout(() => {
            //     console.log(recognition.stop());
            // }, 3000);

            let prev = ""

            recognition.addEventListener('result', e => {
                // console.clear()

                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')

                console.log(transcript);

                // temp = transcript.replace(prev, "")
                temp = transcript

                // let span = document.createElement("span")
                

                // span.innerText = temp

                // document.querySelector("#convert_text").append(span);
                console.log(temp);

                document.querySelector("#temp").innerText = transcript
            });

            setInterval(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 1000);        
    }

</script>



<p id="convert_text"></p>
<p id=temp translate="no"></p>


<button on:click|once={start}>start</button>
