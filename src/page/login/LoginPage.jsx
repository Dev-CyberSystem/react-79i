import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    return (
    <>
    <main>
      <section
        className="container vh-100 mt-5 w-100 d-flex justify-content-center"
      >
        <form id="loginForm">
          <div
            className="text-center d-flex align-items-center my-3 pb-3 border border-light border-0 border-bottom"
          >
            <img src="../../public/logo.png" className="img-fluid w-25" alt="" />
            <div className="ms-4 text-start">
              <h1 className="display-5 fw-semibold">Rolling Store</h1>
              <h4>Login</h4>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="emailLoginInput" className="form-label"
              >Ingrese su Email</label
            >
            <input
              type="email"
              className="form-control"
              id="loginEmailInput"
              name="email"
              maxLength="30"
            />
          </div>
          <label htmlFor="loginInputPassword" className="form-label"
            >Ingrese su contraseña</label
          >
          <div className="input-group mb-2">
            <input
              type="password"
              className="form-control"
              id="loginInputPassword"
              name="password"
              maxLength="10"
            />
            <button
              className="btn btn-dark border border-start-0 input-group-text"
              id="showPasswordBtn"
            >
              <i id="icon" className="bi bi-eye"></i>
            </button>
          </div>
          <div
            className="invalid-feedback d-flex hidden mb-2"
            id="invalidLoginFeedback"
          >
            <i className="bi bi-exclamation-circle me-2"></i>
            La contraseña o el email ingresados son invalidos.
          </div>
          <div className="d-flex align-items-center">
            <a onClick={()=> navigate("/signUp")}
              >Aun no tienes una cuenta? Registrate</a
            >
            <button type="submit" className="ms-auto btn btn-primary">
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </main>
    </>
  )
}

export default LoginPage