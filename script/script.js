function pswGenerate() {
    let chars = 'abcdefghijklmnopqrstuvwxyz'
    let password = '';
    let passwords = '';

    let size = document.getElementById('pswSize').value;
    let qtd = document.getElementById('pswQtd').value;
    let spc = document.getElementById('special').checked;
    let numb = document.getElementById('number').checked;
    let upp = document.getElementById('upperCase').checked;

    if (spc == true) { chars += '!@#$%¨&*()'; }
    if (numb == true) { chars += '0123456789'; }
    if (upp == true) { chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }

    for (let x = 1; x <= qtd; x++) {
        password = '';
        for (let y = 1; y <= size; y++) {
            password = password + chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwords = password + '\n' + passwords;
    }

    document.getElementById('answer').value = passwords;

}

function pswClean() {
    document.getElementById('answer').value = '';
}