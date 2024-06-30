function calculateSpeed(){
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;

    if (speed < 70) {
        document.getElementById('outcome').textContent = 'Ok';
    } else {
        points = Math.floor((speed -70) / 5);
        if (points > 12) {
            document.getElementById('outcome').textContent = 'License suspended';
        } else {
            document.getElementById('outcome').textContent = 'Points: ' + points;
        }
    }
}

