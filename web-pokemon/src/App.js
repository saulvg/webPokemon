import './App.css';
import { HomePage, Contact, NotFound, About, ProductsList, Product, Vehicles, Vehicle, Animals, Animal } from './pages/';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Footer, Header } from './layout/'
import { useEffect } from 'react';
import { postVehicles } from './data/dataVehicles/dataVehicles';
import postProduct from './data/products/products';
import { postAnimals } from './data';



function App() {

  useEffect(() => {
    postAnimals()
    postVehicles()
    postProduct()

  },[]);


  return (
    <BrowserRouter>
      <div id='container-app'>
        <Header />
        <div id='container-body-app'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/animals' element={<Animals />} />
            <Route path='/animal/:id' element={<Animal />} />
            <Route path='/about' element={<About />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/products/product/:id' element={<Product />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/vehicles/vehicle/:id' element={<Vehicle />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
