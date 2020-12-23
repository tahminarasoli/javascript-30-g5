const msg = new SpeechSynthesisUtterance();

export function setOption(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}