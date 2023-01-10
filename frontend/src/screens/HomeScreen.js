import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import React from 'react';
// import data from '../data';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// function HomeScreen() {
//   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
//     products: [],
//     loading: true,
//     error: '',
//   });
//   // const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: 'FETCH_REQUEST' });
//       try {
//         const result = await axios.get('/api/products');
//         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//       } catch (err) {
//         dispatch({ type: 'FETCH_FAIL', payload: err.message });
//       }

//       // setProducts(result.data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <Helmet>
//         <title>Amazona</title>
//       </Helmet>
//       <h1>Featured Products</h1>
//       <div className="products">
//         {loading ? (
//           <LoadingBox />
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
//           <Row>
//             {products.map((product) => (
//               <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
//                 <Product product={product}></Product>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </div>
//     </div>
//   );
// }
// export default HomeScreen;

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

class HomeScreen extends React.Component {
  state = {
    loading: true,
    error: '',
    products: [],
  };

  componentDidMount() {
    const fetchData = async () => {
      this.setState({ loading: true });
      try {
        const result = await axios.get('/api/products');
        this.setState({ loading: false, products: result.data });
      } catch (err) {
        this.setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Herbaciarnia</title>
        </Helmet>
        <h1>Featured Products</h1>
        <div className="products">
          {this.state.loading ? (
            <LoadingBox />
          ) : this.state.error ? (
            <MessageBox variant="danger">{this.state.error}</MessageBox>
          ) : (
            <Row>
              {this.state.products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
