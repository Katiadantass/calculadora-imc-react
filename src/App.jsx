import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/index.jsx';
import ImcResultado from './components/Calculadora/index.jsx';

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')

  return (
    <div className='container'>
      <Header />

      <h2 className={styles.homeTitulo}>
        Calculadora de IMC
      </h2> 

      <p className={styles.homeTexto}>
        Informe seus dados e descubra seu Índice de Massa Corporal
      </p>

      <div className={styles.valores}>
        <input 
          className={styles.input} 
          type="number" 
          placeholder='Insira sua altura (em cm)' 
          required 
          onBlur={(e) => setAltura(e.target.value)}
        />
        <input 
          className={styles.input} 
          type="number" 
          placeholder='Insira seu peso (em kg)' 
          required 
          onBlur={(e) => setPeso(e.target.value)}
        />
        <button className={styles.button} type='submit'>
          Calcular
        </button>
      </div>

      <ImcResultado altura={altura} peso={peso} />

      <footer className={styles.footer}>
        <p>
          © 2025 - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default App;
