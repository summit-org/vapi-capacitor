import { Vapi } from 'vapi-capacitor';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Vapi.echo({ value: inputValue })
}
