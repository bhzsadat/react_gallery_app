import { useState, useEffect } from 'react'
import './App.css'
import apiKey from './config'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

const validRoutes = ['cats', 'dogs', 'computers'];

function App() {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  const fetchData = async (query) => {
    try {
      const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setPhotos(data.photos.photo || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPhotos([]);
    }
    // const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
    // const data = await response.json();
    // console.log(data);
    // setPhotos(data.photos.photo);
  };

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (validRoutes.includes(path)) {
      fetchData(path);
    } else if (path === 'search') {
      const query = location.pathname.split('/')[2];
      if (query) fetchData(query);
    } else {
      navigate('/not-found');
    }
  }, [location, navigate]);

  const handleRouteChange = (query) => {
    navigate(`/search/${query}`);
  };

  // useEffect(() => {
  //   const path = location.pathname.split('/')[1];
  //   if (validRoutes.includes(path)) {
  //     fetchData(path);
  //   } else if (path === 'search') {
  //     const query = location.pathname.split('/')[2];
  //     fetchData(query);
  //   } else {
  //     fetchData('cats');
  //   }
  // }, [location]);

  // const handleRouteChange = (query) => {
  //   //fetchData(query);
  //   navigate(`/search/${query}`);
  // };

  return (
    <div>
      <Search fetchData={fetchData} />
      <Nav handleRouteChange={handleRouteChange} />
      <Routes>
        <Route path='/' element={<PhotoList photos={photos} title="Home" />} />
        <Route path='/cats' element={<PhotoList photos={photos} title="Cats"/>} />
        <Route path='/dogs' element={<PhotoList photos={photos} title="Dogs"/>} />
        <Route path='/computers' element={<PhotoList photos={photos} title="Computers" />} />
        <Route path='/search/:query' element={<PhotoList photos={photos} title="Search Results" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default App
