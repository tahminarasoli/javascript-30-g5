import {setOption} from '../handlers/setOption.js'

const options = document.querySelectorAll('[type="range"], [name="text"]');
options.forEach(option => option.addEventListener('change', setOption));
