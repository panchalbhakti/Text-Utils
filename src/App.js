import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
<Navbar title="TextUtils" aboutus="About TextUtils"/>
<div className="container my-2">
<TextForm heading="Text Area"/>
</div>
    </>
  );
}

export default App;
