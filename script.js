let isLampOn = false;

function toggleLamp() {
    isLampOn = !isLampOn;
    const lamp = document.getElementById('lamp');
    const switchButton = document.getElementById('switch');
    
    if (isLampOn) {
        lamp.src = 'Photos/lamp-on.png';
        switchButton.textContent = 'Turn Off';
    } else {
        lamp.src = 'Photos/lamp-off.png';
        switchButton.textContent = 'Turn On';
    }
}