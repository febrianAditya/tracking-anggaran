
import "../../css/iconify-icons.css"
import "../../css/node-waves.css"
import "../../css/core.css"
import "../../css/demo.css"
import "../../css/perfect-scrollbar.css"
import "../../css/bs-stepper.css"
import "../../css/bootstrap-select.css"
import "../../css/select2.css"
import "../../css/form-validation.css"
import "../../css/page-auth.css"
import authRegister from "../../assets/img/illustrations/auth-register-multisteps-illustration.png"
import shapeDarkAuthRegister from "../../assets/img/illustrations/auth-register-multisteps-shape-light.png"
import { useRef, useLayoutEffect, useState } from "react"
import Stepper from "bs-stepper";
import "bs-stepper/dist/css/bs-stepper.min.css"; 
import { Link } from "react-router-dom";


export default function RegisterPage() {
    const stepperRef = useRef(null);
    const stepper = useRef(null);
    const [formStepOne, setFormStepOne] = useState({
        username: "",
        password: ""
    })
    const [formStepTwo, setFormStepTwo] = useState({
        namaLengkap: "",
        email: "",
        tanggalLahir: ""
    })
    const [formStepThree, setFormStepThree] = useState({
        divisi: "",
        atasan: ""
    })

    useLayoutEffect(() => {
        if (stepperRef.current) {
            stepper.current = new Stepper(stepperRef.current, {
                linear: false,
                animation: true,
            });
        }
    }, []);


    return (
        <div className="authentication-wrapper authentication-cover authentication-bg">
            {/* <!-- Logo --> */}
            <a href="index.html" className="app-brand auth-cover-brand">
                {/* <span className="app-brand-logo demo">
                    <span className="text-primary">
                        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                            fill="currentColor" />
                        <path
                            opacity="0.06"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                            fill="#161616" />
                        <path
                            opacity="0.06"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                            fill="#161616" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                            fill="currentColor" />
                        </svg>
                    </span>
                </span> */}
                <span className="app-brand-text demo text-heading fw-bold">Me4u</span>
            </a>
            {/* <!-- /Logo --> */}

            <div className="authentication-inner row">
                {/* <!-- Left Text --> */}
                <div
                    className="d-none d-lg-flex col-lg-4 align-items-center justify-content-center p-5 position-relative auth-multisteps-bg-height"
                >
                    <img
                        src={authRegister}
                        alt="auth-register-multisteps"
                        className="img-fluid"
                        width="280" />
                    <img
                        src={shapeDarkAuthRegister}
                        alt="auth-register-multisteps"
                        className="platform-bg"
                        data-app-light-img="illustrations/auth-register-multisteps-shape-light.png"
                        data-app-dark-img="illustrations/auth-register-multisteps-shape-dark.png" />
                </div>

                <div
                    ref={stepperRef}
                    className="d-flex col-lg-8 align-items-center justify-content-center authentication-bg p-5"
                >
                    <div className="w-px-700">
                        <div id="multiStepsValidation" className="bs-stepper border-none shadow-none mt-5">
                            <div className="bs-stepper-header border-none pt-12 px-0">
                                <div className="step" data-target="#test-part1">
                                    <button type="button" className="step-trigger">
                                        <span className="bs-stepper-circle"><i className="icon-base ti tabler-file-analytics icon-md"></i></span>
                                        <span className="bs-stepper-label">
                                        <span className="bs-stepper-title">Akun</span>
                                        <span className="bs-stepper-subtitle">Informasi Akun</span>
                                        </span>
                                    </button>
                                </div>

                                <div className="line"></div>

                                <div className="step" data-target="#test-part2">
                                    <button type="button" className="step-trigger">
                                        <span className="bs-stepper-circle"><i className="icon-base ti tabler-user icon-md"></i></span>
                                        <span className="bs-stepper-label">
                                        <span className="bs-stepper-title">Personal</span>
                                        <span className="bs-stepper-subtitle">Informasi Detail</span>
                                        </span>
                                    </button>
                                </div>

                                <div className="line"></div>

                                <div className="step" data-target="#test-part3">
                                    <button type="button" className="step-trigger">
                                        <span className="bs-stepper-circle"><i className="icon-base ti tabler-user icon-md"></i></span>
                                        <span className="bs-stepper-label">
                                        <span className="bs-stepper-title">Kepegawaian</span>
                                        <span className="bs-stepper-subtitle">Informasi Divisi</span>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="bs-stepper-content px-0">
                                <div id="test-part1" className="content">
                                    <div className="content-header mb-6">
                                        <h4 className="mb-0">Account Information</h4>
                                        <p className="mb-0">Enter Your Account Details</p>
                                    </div>

                                    <div className="row g-6">
                                        <div className="col-sm-6 form-control-validation">
                                            <label className="form-label" htmlFor="multiStepsUsername">Username</label>
                                            <input
                                            type="text"
                                            name="multiStepsUsername"
                                            id="multiStepsUsername"
                                            className="form-control"
                                            placeholder="johndoe" />
                                        </div>

                                        <div className="col-sm-6 form-control-validation">
                                            <label className="form-label" htmlFor="multiStepsEmail">Email</label>
                                            <input
                                            type="email"
                                            name="multiStepsEmail"
                                            id="multiStepsEmail"
                                            className="form-control"
                                            placeholder="john.doe@email.com"
                                            aria-label="john.doe" />
                                        </div>

                                        <div className="col-12 d-flex justify-content-between">
                                            <button className="btn btn-label-secondary btn-prev" disabled>
                                                <i className="icon-base ti tabler-arrow-left icon-xs me-sm-2 me-0"></i>
                                                <span className="align-middle d-sm-inline-block d-none">Previous</span>
                                            </button>
                                            <button className="btn btn-primary btn-next" onClick={() => stepper.current.next()}>
                                                <span className="align-middle d-sm-inline-block d-none me-sm-1 me-0">Next</span>
                                                <i className="icon-base ti tabler-arrow-right icon-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-part2" className="content">
                                    <div className="content-header mb-6">
                                        <h4 className="mb-0">Account Information</h4>
                                        <p className="mb-0">Enter Your Account Details</p>
                                    </div>

                                    <div className="row g-6">
                                        <div className="col-sm-6 form-control-validation">
                                            <label className="form-label" htmlFor="multiStepsUsername">Username</label>
                                            <input
                                            type="text"
                                            name="multiStepsUsername"
                                            id="multiStepsUsername"
                                            className="form-control"
                                            placeholder="johndoe" />
                                        </div>

                                        <div className="col-sm-6 form-control-validation">
                                            <label className="form-label" htmlFor="multiStepsEmail">Email</label>
                                            <input
                                            type="email"
                                            name="multiStepsEmail"
                                            id="multiStepsEmail"
                                            className="form-control"
                                            placeholder="john.doe@email.com"
                                            aria-label="john.doe" />
                                        </div>
                                        <div className="col-12 d-flex justify-content-between">
                                            <button className="btn btn-label-secondary btn-prev" onClick={() => stepper.current.previous()}>
                                                <i className="icon-base ti tabler-arrow-left icon-xs me-sm-2 me-0"></i>
                                                <span className="align-middle d-sm-inline-block d-none">Previous</span>
                                            </button>
                                            <button className="btn btn-primary btn-next" onClick={() => stepper.current.next()}>
                                                <span className="align-middle d-sm-inline-block d-none me-sm-1 me-0">Next</span>
                                                <i className="icon-base ti tabler-arrow-right icon-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-part3" className="content">
                                    <div className="content-header mb-6">
                                        <h4 className="mb-0">Account Information</h4>
                                        <p className="mb-0">Enter Your Account Details</p>
                                    </div>

                                    <div className="row g-6">
                                        <div className="col-sm-6 form-control-validation">
                                            <label className="form-label" htmlFor="multiStepsUsername">Username</label>
                                            <input
                                            type="text"
                                            name="multiStepsUsername"
                                            id="multiStepsUsername"
                                            className="form-control"
                                            placeholder="johndoe" />
                                        </div>

                                        <div className="col-sm-6 form-control-validation">
                                            <label className="form-label" htmlFor="multiStepsEmail">Email</label>
                                            <input
                                            type="email"
                                            name="multiStepsEmail"
                                            id="multiStepsEmail"
                                            className="form-control"
                                            placeholder="john.doe@email.com"
                                            aria-label="john.doe" />
                                        </div>

                                        <div className="col-12 d-flex justify-content-between">
                                            <button className="btn btn-label-secondary btn-prev" onClick={() => stepper.current.previous()}>
                                                <i className="icon-base ti tabler-arrow-left icon-xs me-sm-2 me-0"></i>
                                                <span className="align-middle d-sm-inline-block d-none">Previous</span>
                                            </button>
                                            <button className="btn btn-primary btn-next" onClick={e => alert("berhaisl")}>
                                                <span className="align-middle d-sm-inline-block d-none me-sm-1 me-0">Register!</span>
                                                <i className="icon-base ti tabler-arrow-right icon-xs"></i>
                                            </button>
                                        </div>                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center mt-6">
                                <p className="text-center">
                                    <span>Sudah punya akun? Kembali ke </span>
                                    <Link to="/login">
                                        <span>Halaman Login</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}