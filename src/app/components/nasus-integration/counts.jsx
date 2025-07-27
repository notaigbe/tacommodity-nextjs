import React from 'react';

function Counts() {
    return (
        <section id="counts" className="counts section-bg">
            <div className="container">
                <div className="row no-gutters">

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" data-purecounter-filesizing="true" className="purecounter"></span>
                            <p><strong>Customer Satisfaction</strong></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"></i>
                            <span data-purecounter-start="0" data-purecounter-end="321" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Projects Completed</strong></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="bi bi-people"></i>
                            <span data-purecounter-start="0" data-purecounter-end="27" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Experts/Professionals</strong></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="bi bi-award"></i>
                            <span data-purecounter-start="0" data-purecounter-end="125" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Awards & Achievements</strong></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Counts;