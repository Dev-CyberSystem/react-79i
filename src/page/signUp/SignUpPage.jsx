

const SignUpPage = () => {
  return (
    <main>
      <section
        className="container vh-100 mt-5 w-100 d-flex justify-content-center"
      >
        <form id="signUpForm">
          <div
            className="text-center d-flex align-items-center my-3 pb-3 border border-light border-0 border-bottom"
          >
            <img src="../../public/logo.png" className="img-fluid w-25" alt="" />
            <div className="ms-4 text-start">
              <h1 className="display-5 fw-semibold">Rolling Store</h1>
              <h4 className="">Sign Up</h4>
            </div>
          </div>
          <div className="mb-4 position-relative">
            <label htmlFor="emailLoginInput" className="form-label"
              >Ingrese un Email</label
            >
            <input
              type="email"
              className="form-control"
              id="emailSignUpInput"
              name="email"
              maxLength="30"
            />
            <div className="invalid-feedback">
              El email ingresado es invalido o ya esta registrado.
            </div>
          </div>

          <label htmlFor="emailSignUpPassword" className="form-label"
            >Ingrese su contraseña</label
          >
          <div className="input-group mb-1 position-relative">
            <input
              type="password"
              className="form-control"
              id="emailSignUpPassword"
              name="password"
              maxLength="10"
            />
            <button
              className="btn btn-dark border border-start-0 input-group-text"
              id="showPasswordBtn"
            >
              <i id="icon" className="bi bi-eye"></i>
            </button>
            <div className="invalid-feedback">
              La contraseña ingresada es invalida.
            </div>
          </div>
          <div className="form-text mb-3" id="basic-addon4">
            Su contraseña debe contener entre 8 y 10 caracteres y al menos una
            letra y un número
          </div>

          <label htmlFor="repeatSignUpPassword" className="form-label"
            >Vuelva a ingresar su contraseña</label
          >
          <div className="input-group mb-3 position-relative">
            <input
              type="password"
              className="form-control"
              id="repeatSignUpPassword"
              name="repeatPassword"
              maxLength="10"
            />
            <div className="invalid-feedback">Las contraseñas no coinciden.</div>
          </div>
          <div className="d-flex align-items-center">
            <button type="submit" className="ms-auto btn btn-primary">
              Registrarme
            </button>
          </div>
        </form>
      </section>
      <div
        className="modal fade modal-lg"
        id="succesfulSignupModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body border-0">
              <div className="text-center">
                <i className="bi bi-check-lg display-1 text-success"></i>
                <h2 className="fw-normal my-2">Te has registrado exitosamente!</h2>
                <p className="my-4">
                  Te redirigiremos a nuestra pagina principal para que puedas
                  explorar todos nuestros productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage