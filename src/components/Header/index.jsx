import styles from './Header.module.css';
import headerImg from '../../imagens/imc-header.png';

const Header = () => {
    return (
        <header className={styles.header}>

            <img 
                src={headerImg} 
                alt="Imagem ilustrativa sobre IMC" 
                className={styles.headerImg} 
            />

            <div>
                <h1 className={styles.headerTitulo}>Como está o seu IMC?</h1>
                <p className={styles.headerTexto}>
                    IMC é a sigla para Índice de Massa Corporal, um índice utilizado para avaliar a relação entre peso e altura, sendo amplamente adotado por profissionais da saúde como um parâmetro inicial de avaliação do estado nutricional.
                </p>
                <p className={styles.headerTexto}>
                    O cálculo do IMC é realizado pela divisão do peso corporal (em quilogramas) pela altura (em metros) elevada ao quadrado. O resultado permite identificar faixas de classificação, como baixo peso, peso adequado, sobrepeso e obesidade, auxiliando na estimativa de riscos à saúde.
                </p>
                <p className={styles.headerTexto}>
                    O método foi desenvolvido no século XIX pelo matemático belga Lambert Adolphe Quételet. Embora seja uma ferramenta prática e amplamente utilizada, o IMC não considera variáveis individuais como idade, sexo e composição corporal, devendo ser interpretado de forma complementar.
                </p>
            </div>

        </header>
    );
}

export default Header;