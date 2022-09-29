import Header from '../componentLayouts/Header/index';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
        </div>
    );
}

export default HeaderLayout;
