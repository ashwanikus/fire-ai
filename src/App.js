import './App.css';
import MainTitle from './components/mainTitle/mainTitle';
import OrderHistory from './components/OrderHistory';
import PrimarySideBar from './components/sidebar/primary/PrimarySideBar';
import SecondarySideBar from './components/sidebar/secondary/SecondarySideBar';
import Title from './components/sidebar/title/Title';
import ThemeToggleButton from './components/toggleTheme/toggleTheme';

function App() {
  
  return (
    <>
    <ThemeToggleButton/>
    <div className="dashboard">
        {/* Sidebar */}
        <aside class="sidebar">
          <Title />
          <PrimarySideBar />
          <PrimarySideBar />
          <SecondarySideBar />
        </aside>
        {/* Main Content */}
        <main class="main-content">
          <MainTitle/>
          <div className='main-content__content'>
            <OrderHistory/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
