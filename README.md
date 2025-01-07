# Gerar Nota Fiscal Eletrônica (NFS-e)

Este é um projeto simples e funcional para a emissão de uma Nota Fiscal Eletrônica de Serviço (NFS-e). O sistema permite que o usuário insira os dados necessários, calcule os impostos automaticamente e gere a nota fiscal em dois formatos: PDF e XML.

## Como Funciona

1. **Preenchimento dos Dados**
   - Valor da venda: Insira o valor total do serviço ou produto vendido.
   - Itens vendidos: Descreva os itens vendidos, separados por vírgula.
   - Porcentagem de impostos:
     - IRPF (%)
     - PIS (%)
     - COFINS (%)
     - INSS (%)
     - ISSQN (%)

2. **Cálculo dos Impostos**
   - O sistema calcula automaticamente os valores correspondentes a cada imposto e o valor total dos impostos.

3. **Emissão da Nota Fiscal**
   - Exibe na tela a Nota Fiscal com:
     - Valor bruto.
     - Itens vendidos.
     - Valores calculados para cada imposto.
     - Valor total dos impostos.
     - Valor líquido (valor bruto menos os impostos).

4. **Download**
   - **PDF:** A Nota Fiscal gerada pode ser baixada em PDF, estilizada com a fonte tradicional de notas fiscais (`Courier New`).
   - **XML:** Também é possível baixar a nota fiscal em formato XML, contendo todos os dados preenchidos.

## Tecnologias Utilizadas

- **HTML:** Estruturação da página.
- **CSS:** Estilo da interface.
- **JavaScript:** Lógica de cálculo e interação.
- **jsPDF:** Biblioteca para geração de PDF.
- **GitHub Pages:** Para publicação do projeto.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Jeffbet/gerarNFE.git
