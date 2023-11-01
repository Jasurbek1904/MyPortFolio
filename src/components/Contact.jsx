import React from "react";


export default function Contact() {
    return (
        <div className="contact w-100" id="contact">
            <div className="container">
                <h1 className="text-center">
                    <p className="textAbout textserv">Contact</p>
                    <p className="textKnow servKnow">Get in Touch</p></h1>
                <hr className="hrKnow" />
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h3>ADDRESS</h3>
                        <p><strong>Fergana city</strong></p>
                        <p>Faravon turmush-2, 12</p>
                        <p>Direction: <strong>Near to Fergana International Aeroport</strong></p>
                        <div className="mt-5 mb-5">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <span className="m-2">+123456789</span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                                <span className="m-2">+123456789</span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                <span className="m-2">chat@Jasurbek.com</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 mb-5">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="validationServer01" className="form-label">First name</label>
                                <input type="text" className="form-control is-valid" id="validationServer01" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationServer02" className="form-label">Last name</label>
                                <input type="text" className="form-control is-valid" id="validationServer02" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationDefault03" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Textarea</label>
                                <textarea className="form-control" placeholder="Example textarea" required></textarea>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}