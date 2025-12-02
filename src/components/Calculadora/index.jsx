import styles from './Calculadora.module.css';

const ImcResultado = ({ altura, peso }) => {
    const confereCampos = () => {
        if (!altura || !peso || altura === '' || peso === '') {
            return 'Todos os campos devem ser preenchidos para que o resultado seja exibido.'
        }
        return null
    }

const imcCalculo = () => {
    const alturaCm = parseInt(altura.replace(',', '.').trim())
    const pesoKg = parseInt(peso.replace(',', '.').trim())

    if (isNaN(alturaCm) || isNaN(pesoKg) || alturaCm <= 0 || pesoKg <= 0) {
        return null
    }

    const alturaMetros = alturaCm / 100
    const imc = pesoKg / (alturaMetros * alturaMetros)

    if (imc >= 50) {
        return 'Por favor, informe sua altura em centímetros.'
    } else {
        return imc .toFixed(1)
    }
}

const imcTabela = [
    { limite: 18.5, classificacao: `Você está abaixo do peso. Recomenda-se a consulta com um nutricionista.`, cor: styles.baixoPeso },
    { limite: 24.9, classificacao: `Seu peso está dentro da faixa considerada normal.`, cor: styles.pesoNormal },
    { limite: 29.9, classificacao: `Você está com sobrepeso. É recomendável adotar hábitos mais saudáveis.`, cor: styles.sobrepeso },
    { limite: 34.9, classificacao: `Você está com obesidade grau I. Procure orientação de um profissional de saúde.`, cor: styles.obesidadeI },
    { limite: 39.9, classificacao: `Você está com obesidade grau II. É fortemente recomendada a orientação profissional.`, cor: styles.obesidadeII },
    { limite: Infinity, classificacao: `Você está com obesidade grau III. É fundamental buscar acompanhamento médico.`, cor: styles.obesidadeIII },
]

const erro = confereCampos()
const imc = imcCalculo()

const getClassificacao = (imc) => {
    return imcTabela.find(({ limite }) => imc <= limite)
}

const classificacao = imc && !isNaN(imc) ? getClassificacao(imc) : null

return (
    <>
        {erro && <h2>{erro}</h2>}
        {typeof imc === 'string' && imc.includes('erro') ? (
            <h2>{imc}</h2>
        ) : (
            imc && (
                <>
                    <h2> Seu IMC é: {imc}</h2>
                        {classificacao && (
                            <p className={`${classificacao.cor} ${styles.classificacaoAtual}`}>
                                {classificacao.classificacao}
                            </p>
                        )}
                    <h3>Tabela de Classificação de IMC:</h3>
                    <ul>
                        {imcTabela.map(({ classificacao, cor, limite }) => (
                            <li key={limite} className={cor}>
                                <p>
                                    IMC {limite === Infinity ? `≥ 40` : `≤ ${limite}`}
                                </p>
                                <p>{classificacao}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )
        )}
    </>
)
} 

export default ImcResultado