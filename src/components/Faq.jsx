import React from "react";


const FAQ =()=>{
    return(
        <section className="container faq-section" id="FAQ-Section">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 faq-section">
              <div className="faq-intro">
                  <h2><b>Frequently Asked Question</b></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 faq-section">
          <div className="list-questions">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseOne">
                Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" 
              aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the 
                  collapse plugin adds the appropriate classes that we use to style each element. These classes
                   control the overall appearance, as well as the showing and hiding via CSS transitions. You can 
                   modify any of this with custom CSS or overriding our default variables. It's also worth noting 
                   that just about any HTML can go within the <code>.accordion-body</code>, though the transition does 
                   limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseTwo">
                Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML 
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseThree">
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML 
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseFour">
                Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML 
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" 
                aria-controls="panelsStayOpen-collapseFive">
                Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" 
              aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse 
                  plugin adds the appropriate classes that we use to style each element. These classes control the 
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this 
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                   can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
    );
}

export default FAQ