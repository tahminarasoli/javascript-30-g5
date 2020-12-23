let voices = [];

const voicesDropdown = document.querySelector('[name = "voice"]');
 
export function populateVoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML=voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option voice = "${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('');
};