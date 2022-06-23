import cssClasses from './Layout.module.css';
import MainNavigation from './MainNavigation/MainNavigation';
function Layout (props) {
    return (
        <div>
            <MainNavigation />
            <main className={cssClasses.main}>
                {props.children}
            </main>
        </div> 
    );
}
export default Layout;