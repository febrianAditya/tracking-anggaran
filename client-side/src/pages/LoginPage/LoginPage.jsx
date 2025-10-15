import { useState } from "react";
import "../../css/core.css"
import "../../css/demo.css"
import "../../css/form-validation.css"
import "../../css/iconify-icons.css"
import "../../css/node-waves.css"
import "../../css/page-auth.css"
import "../../css/scrollbar.css"
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [emailUser, setEmailUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    const navigate = useNavigate();

    const handleFormSubmit = () => {
        let inputUser = {
            emailUser,
            passwordUser
        }

        // console.log(inputUser);
        if (inputUser.emailUser == "admin@mail.com" && inputUser.passwordUser == "qwerty") {
            localStorage.setItem("token", "dummy_token");
            navigate("/dashboard");
        }else {
            alert("Email or Password Incorrect")
        }

    }

    return (
    <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner py-6">
            {/* Login Card */}
            <div className="card">
                <div className="card-body">
                    {/* Logo */}
                    <div className="app-brand justify-content-center mb-6">
                        <a href="/" className="app-brand-link">
                    
                        <span className="app-brand-text demo text-heading fw-bold">
                            Me4u 
                        </span>
                        </a>
                    </div>
                    {/* /Logo */}

                    <h4 className="mb-1">Login Page </h4>
                    <p className="mb-6">
                        Silahkan login dengan akun mu 👋
                    </p>

                    <form
                        id="formAuthentication"
                        className="mb-4"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleFormSubmit()
                        }}
                    >
                        {/* Email */}
                        <div className="mb-6 form-control-validation">
                            <label htmlFor="email" className="form-label">
                                Email :
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="e.g jhondoe@mail.com"
                                autoFocus
                                onChange={e => setEmailUser(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6 form-password-toggle form-control-validation">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <div className="input-group input-group-merge">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="••••••••••"
                                    onChange={e => setPasswordUser(e.target.value)}
                                />
                                <span
                                    className="input-group-text cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i
                                        className={`icon-base ti ${showPassword ? "tabler-eye" : "tabler-eye-off"}`}
                                    />
                                </span>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="my-8">
                            <div className="d-flex justify-content-between">
                                <div className="form-check mb-0 ms-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="remember-me"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="remember-me"
                                    >
                                        Ingat Saya
                                    </label>
                                </div>
                                <a href="/forgot-password">
                                    <p className="mb-0">Lupa Password?</p>
                                </a>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="mb-6">
                            <button
                                className="btn btn-primary d-grid w-100"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Register */}
                    <p className="text-center">
                        <span>Belum punya akun? </span>
                        <Link to="/register">
                            <span>Daftar</span>
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="divider my-6">
                        <div className="divider-text">or</div>
                    </div>

                    {/* Social buttons */}
                    <div className="d-flex justify-content-center">
                        <a
                        href="#"
                        className="btn btn-icon rounded-circle btn-text-facebook me-1_5"
                        >
                        <i className="icon-base ti tabler-brand-facebook-filled icon-20px"></i>
                        </a>
                        <a
                        href="#"
                        className="btn btn-icon rounded-circle btn-text-twitter me-1_5"
                        >
                        <i className="icon-base ti tabler-brand-twitter-filled icon-20px"></i>
                        </a>
                        <a
                        href="#"
                        className="btn btn-icon rounded-circle btn-text-github me-1_5"
                        >
                        <i className="icon-base ti tabler-brand-github-filled icon-20px"></i>
                        </a>
                        <a
                        href="#"
                        className="btn btn-icon rounded-circle btn-text-google-plus"
                        >
                        <i className="icon-base ti tabler-brand-google-filled icon-20px"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* /Login */}
            </div>
        </div>
    </div>
  );
}