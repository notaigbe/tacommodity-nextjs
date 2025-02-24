import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/globals.css"

export default function Breadcrumbs({page}) {
    const title = "Projects";
    return (
// <!-- ======= Breadcrumbs Section ======= -->
    <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          {page=="Women Sustainable Group" ? (
            <>
            <h2>{ page }</h2>
            <ol>
            <li><a href="/">Home</a></li>
            <li>{ page }</li>
          </ol>
          </>
          ):(
            <>
          <h2>{ title }</h2>
          <ol>
          <li><a href="/">Home</a></li>
          <li>{ title }</li>
        </ol>
        </>
          )}
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