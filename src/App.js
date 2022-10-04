import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { publicRouter } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment, useEffect } from 'react';
import Login from './pages/Login';
function App() {
    return (
        <Router basename='/binance'>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Fragment>
                                <Login />
                            </Fragment>
                        }
                    />
                    {publicRouter?.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {localStorage.getItem('accessToken') ? (
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    ) : (
                        <Route path="*" element={<Navigate to="/" replace />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
