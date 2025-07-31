function Breadcrumbs({page}){
    return(
<section class="breadcrumbs position-fixed w-100"
      style={{ top: '70px', zIndex: 1000 }}>
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{ page }</h2>
          <ol>
            <li><a href="/nasus-integration">Home</a></li>
            <li>{page}</li>
          </ol>
        </div>

      </div>
    </section>
    )
}

export default Breadcrumbs;