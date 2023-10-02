export function Bootstrap() {
  return (
    <main className="main">
      <h2 className="mb-5">
        Unfortunately, Bootstrap is <br />a necessary part of the assignment
      </h2>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Арсен Люпен</h1>
            <p className="lead">Джентльмен-грабитель</p>
          </div>
        </div>

        {/* <!-- Dropdown Button --> */}
        <div className="container my-4">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Quick Links
            </button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="#arsene-lupin"
              >
                Арсен Люпен
              </a>
              <a
                className="dropdown-item"
                href="#books"
              >
                Любимые книги
              </a>
              <a
                className="dropdown-item"
                href="#gallery"
              >
                Галерея
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Bootstrap Cards --> */}
        <div
          className="container"
          id="arsene-lupin"
        >
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="/img/arsene lupin/al1.jpg"
                  className="card-img-top"
                  alt="Image 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Арсен Люпен (слева)</h5>
                  <p className="card-text">
                    Иллюстрация Ричарда Бёма из американского издания (1909)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="/img/arsene lupin/al2.jpg"
                  className="card-img-top"
                  alt="Image 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Обложка</h5>
                  <p className="card-text">
                    Обложка французского издания 1907 года «Арсен Люпен,
                    благородный грабитель», художник Анри Гуссе
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="/img/arsene lupin/al3.jpg"
                  className="card-img-top"
                  alt="Image 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Андре Брюле</h5>
                  <p className="card-text">
                    Андре Брюле в спектакле театра Атеней «Арсен Люпен» (1909)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- List Group --> */}
        <div
          className="container"
          id="books"
        >
          <h2>Любимые книги</h2>
          <ul className="list-group">
            <li className="list-group-item">Арсен Люпен</li>
            <li className="list-group-item">1984</li>
            <li className="list-group-item">Сияние</li>
            <li className="list-group-item">Шестерка воронов</li>
            <li className="list-group-item">Мартин Иден</li>
          </ul>
        </div>

        {/* <!-- Carousel --> */}
        <div
          className="container my-4"
          id="gallery"
        >
          <h2>Галерея</h2>
          <div
            id="imageCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#imageCarousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li
                data-bs-target="#imageCarousel"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#imageCarousel"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  height={300}
                  src="/img/arsene lupin/al1.jpg"
                  className="d-block"
                  alt="Image 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  height={300}
                  src="/img/arsene lupin/al2.jpg"
                  className="d-block"
                  alt="Image 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  height={300}
                  src="/img/arsene lupin/al3.jpg"
                  className="d-block"
                  alt="Image 3"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#imageCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#imageCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>

        {/* <!-- Bootstrap Form --> */}
        <div className="container">
          <h2>Свяжитесь со мной</h2>
          <form>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label"
              >
                Имя
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Имя..."
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email..."
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="form-label"
              >
                Сообщение
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
                placeholder="Сообщение..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
