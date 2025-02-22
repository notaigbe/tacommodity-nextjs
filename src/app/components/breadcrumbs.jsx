import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/globals.css"

export default function Breadcrumbs() {
    const title = "Projects";
    return (
// <!-- ======= Breadcrumbs Section ======= -->
    <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{ title }</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>{ title }</li>
          </ol>
        </div>

      </div>
    </section>
    // <!-- End Breadcrumbs Section -->
    );
}