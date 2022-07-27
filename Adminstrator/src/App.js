import "font-awesome/css/font-awesome.css";
import { Route, Routes } from "react-router-dom";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport";
// import CustomerNote from "./pages/CustomerNote/CustomerNote";
// import AgentInfo from "./pages/AgentInfo/AgentInfo";
// import AgentReport from "./pages/AgentReport/AgentReport";
import Administrator from "./pages/Administrator";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";
import TemporaryPassword from "./pages/SignIn/TemporaryPassword";
import CustomerNote from "./pages/CustomerSupport/CustomerNote/CustomerNote";
import AgentInfo from "./pages/CustomerSupport/AgentInfo/AgentInfo";
import AgentReport from "./pages/CustomerSupport/AgentReport/AgentReport";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
    return (
        <>
            <Routes>
                {/* private route */}
                <Route element={<PrivateRoute />}>
                    <Route path="/administrator" element={<Administrator />} />
                    <Route path="/category" element={<Category />} />

                    <Route
                        path="/customer-support"
                        element={<CustomerSupport />}
                    />
                    <Route
                        path="/customer-support-note"
                        element={<CustomerNote />}
                    />
                    <Route
                        path="/customer-support-agent-info"
                        element={<AgentInfo />}
                    />
                    <Route
                        path="/customer-support-agent-report"
                        element={<AgentReport />}
                    />
                </Route>
                {/* public route */}
                <Route element={<PublicRoute />}>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route
                        path="/temporary-password"
                        element={<TemporaryPassword />}
                    />
                </Route>
            </Routes>
        </>
    );
};

export default App;
