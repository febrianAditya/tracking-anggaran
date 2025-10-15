import { Routes, Route, Navigate } from "react-router-dom"

import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProtectedRoute from "./helpers/ProtectedRoute"

import Dashboard from "./pages/DashboardPage/Dashboard"
import UserPage from "./pages/UserPage/UserPage"
import MainLayout from "./layouts/MainLayout"
import OdpPage from "./pages/OdpPage/OdpPage"
import AssetsPage from "./pages/AssetsPage/AssetsPage"
import InvoicePage from "./pages/InvoicePage/Invoicepage"
import MessagePage from "./pages/MessagePage/MessagePage"

function App() {
    const token = localStorage.getItem("token")
    return (
        <>
            <Routes>
                <Route 
                    path="/"
                    element={
                        token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
                    }
                />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>}/>      
                <Route 
                    element={
                        <ProtectedRoute>
                            <MainLayout/>
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<UserPage />} />
                    <Route path="/assets" element={<AssetsPage />} />
                    <Route path="/odp" element={<OdpPage />} />
                    <Route path="/message" element={<MessagePage />} />
                    <Route path="/invoice" element={<InvoicePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
