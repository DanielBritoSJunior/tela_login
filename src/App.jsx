export function App() {
    return  (<div className="container">
        <header className="header">
            <img src="" alt="" />
            <span>Juntos contra a dengue</span>
        </header>

        <form>
            <div className="InputContainer">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" placeholder="email@email.com" />
            </div>

            <div className="InputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="***************" />
            </div>

            <a href="">Esqueceu sua senha ?</a>

            <button className="Button">
                Se conectar <img src="" alt="" />

            </button>

            <div className="footer">
                <p>Ainda não tem uma conta. Cria agora.</p>
                <a href="">Crie agora</a>
            </div>
        </form>
    </div>
    )
}