import './App.css';
import Footer from './components/sidebar/footer/Footer';
import PrimarySideBar from './components/sidebar/primary/PrimarySideBar';
import SecondarySideBar from './components/sidebar/secondary/SecondarySideBar';
import Title from './components/sidebar/title/Title';
import ThemeToggleButton from './components/toggleTheme/toggleTheme';

function App() {
  
  return (
      <div className="dashboad">
        {/* Sidebar */}
        <aside class="sidebar">
          <Title />
          <PrimarySideBar />
          <PrimarySideBar />
          <SecondarySideBar />
          <Footer />
        </aside>
        {/* Main Content */}
        <main class="main-content">
          <h1>Main Content</h1>
          <ThemeToggleButton/>
        </main>
      </div>
  );
}

export default App;
