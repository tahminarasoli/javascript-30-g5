// the function of the handler taggle 
const msg = new SpeechSynthesisUtterance();
msg.text= document.querySelector('[name="text"]').value;
export function toggle (start0ver = true){
    speechSynthesis.cancel();
    if (start0ver){
      speechSynthesis.speak(msg);  
    }  
}