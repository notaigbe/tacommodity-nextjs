import React from 'react';

function Cta() {
    return (
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
                <div className="row"></div>
                    <div className="col-md-8">
                        <h3>Get some insight</h3>
                        <p>
                            Would you like to speak to or chat with one of our financial advisers?
                            You can start a WhatsApp chat with us. Just Enter your name and choose a topic you would like to speak about.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <form>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" id="wa-text" />
                            </div>
                            <div className="form-group">
                                <select className="form-select" id="topic">
                                    <option value="https://wa.me/2348032679974">Business Planning</option>
                                    <option value="https://wa.me/2348032679974">Audit and Insurance</option>
                                    <option value="https://wa.me/2348032679974">Strategic Planning</option>
                                    <option value="https://wa.me/2348032679974">Trade and Stocks</option>
                                    <option value="https://wa.me/2348032679974">Financial Projections</option>
                                </select>
                                <a id="wa-contact" className="cta-btn text-center" href="javascript:void(0);">
                                    Contact
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            {/* </div> */}
        </section>
    );
};

export default Cta;