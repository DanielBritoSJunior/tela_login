import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="container">
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <span>Junte-se a nós e diga não à dengue!</span>
        </header>

        <form>
            <div className="InputContainer">
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" id="email" placeholder="email@email.com" />
            </div>

            <div className="InputContainer">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="***************" />
            </div>

            <button className="Button">
              Conectar <img src="" alt="" />

            </button>
        </form>
    </div>
    )
}

export default App;
