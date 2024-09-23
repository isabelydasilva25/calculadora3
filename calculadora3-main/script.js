function calcular() {
    const valor = document.getElementById('valor').value;
    const taxa = document.getElementById('taxa').value;
    const parcela = document.getElementById('parcela').value;

     const valor_parcela = (valor * Math.pow(taxa +1, parcela))/(Math.pow(taxa +1, parcela)-1);
     const corpo_tabela  = document.querySelector('#tabela tbody');

     for(let i = 1; i<=parcela; i++){
        const linha =`
            <tr>
              <td>${i}</td>
              <td>${valor_parcela.toFixed(2)}</td>
            </tr>
        `;
        corpo_tabela.innerHTML += linha;
     }
}