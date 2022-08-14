//parent component
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/albums/index.album";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="*" element={<h1 className="text-center text-danger">404 Not Found</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  );
};

export default App;

// import Testing from "./components/testing";
// const h2 = () => <h2>Testing h2!</h2>;

// const [getLimit, setLimit] = useState(0);
// const [getMyName, setMyName] = useState("Nicho");
// const inputNameRef = useRef(getMyName);

// useEffect(() => {
//   setMyName(inputNameRef.current.value);
// }, [getLimit]); //render 1 kali ketika browser di buka

//getLimit > 1 && button element

// class App extends React.Component{

//   componentWillMount() {
//     console.log('will mounting')
//   }

//   componentDidMount() {
//     console.log('did mounting')
//   }

//   render() {
//     return h1()
//   }
// }

// function App() {
//   return (
//     <React.Fragment>
//       { h1() }
//     </React.Fragment>
//   );
// }
