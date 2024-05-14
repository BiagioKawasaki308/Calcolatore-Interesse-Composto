function CalcolaInteresse() {
    var capitale = parseFloat(document.getElementById('capitale').value);
    var anni = parseInt(document.getElementById('anni').value);
    var tasso = parseFloat(document.getElementById('tasso').value);

    var montante = capitale * Math.pow((1 + tasso / 100), anni);
    montante = Math.round(montante * 100) / 100;

    document.getElementById('anniOutput').innerHTML = anni;
    document.getElementById('montanteOutput').innerHTML = montante;
    document.getElementById('result').classList.remove('hidden');
}