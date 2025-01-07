function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value.split(',').map(item => item.trim());
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    const irpfCalc = (irpf / 100) * valorVenda;
    const pisCalc = (pis / 100) * valorVenda;
    const cofinsCalc = (cofins / 100) * valorVenda;
    const inssCalc = (inss / 100) * valorVenda;
    const issqnCalc = (issqn / 100) * valorVenda;

    const totalImpostos = irpfCalc + pisCalc + cofinsCalc + inssCalc + issqnCalc;
    const valorLiquido = valorVenda - totalImpostos;

    document.getElementById('valorVendaDisplay').innerText = valorVenda.toFixed(2);
    const itensList = document.getElementById('itensDisplay');
    itensList.innerHTML = '';
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itensList.appendChild(li);
    });

    
    document.getElementById('irpfCalc').innerText = irpfCalc.toFixed(2);
    document.getElementById('pisCalc').innerText = pisCalc.toFixed(2);
    document.getElementById('cofinsCalc').innerText = cofinsCalc.toFixed(2);
    document.getElementById('inssCalc').innerText = inssCalc.toFixed(2);
    document.getElementById('issqnCalc').innerText = issqnCalc.toFixed(2);
    document.getElementById('totalImpostos').innerText = totalImpostos.toFixed(2);
    document.getElementById('valorLiquido').innerText = valorLiquido.toFixed(2);

    document.getElementById('resultado').style.display = 'block';
}



function baixarNotaFiscal() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('Courier', 'normal');
    doc.setFontSize(12);
    doc.text("Nota Fiscal de Serviço (NFS-e)", 10, 10);
    doc.text(`Valor da Venda: R$ ${document.getElementById('valorVendaDisplay').innerText}`, 10, 20);
    doc.text("Itens Vendidos:", 10, 30);
    const itens = document.querySelectorAll('#itensDisplay li');
    let y = 40;
    itens.forEach(item => {
        doc.text(`- ${item.textContent}`, 10, y);
        y += 10;
    });
    doc.text(`Total Impostos: R$ ${document.getElementById('totalImpostos').innerText}`, 10, y + 10);
    doc.text(`Valor Líquido: R$ ${document.getElementById('valorLiquido').innerText}`, 10, y + 20);

    doc.save("NotaFiscal.pdf");
}

function baixarXML() {
    const valorVenda = document.getElementById('valorVendaDisplay').innerText;
    const itens = Array.from(document.querySelectorAll('#itensDisplay li')).map(li => li.textContent);
    const impostos = {
        IRPF: document.getElementById('irpfCalc').innerText,
        PIS: document.getElementById('pisCalc').innerText,
        COFINS: document.getElementById('cofinsCalc').innerText,
        INSS: document.getElementById('inssCalc').innerText,
        ISSQN: document.getElementById('issqnCalc').innerText,
    };
    const totalImpostos = document.getElementById('totalImpostos').innerText;
    const valorLiquido = document.getElementById('valorLiquido').innerText;

    let xmlContent = `<NotaFiscal>
  <ValorVenda>${valorVenda}</ValorVenda>
  <Itens>${itens.map(item => `<Item>${item}</Item>`).join('')}</Itens>
  <Impostos>
    ${Object.entries(impostos).map(([key, value]) => `<${key}>${value}</${key}>`).join('')}
  </Impostos>
  <TotalImpostos>${totalImpostos}</TotalImpostos>
  <ValorLiquido>${valorLiquido}</ValorLiquido>
</NotaFiscal>`;


    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "NotaFiscal.xml";
    link.click();
}
