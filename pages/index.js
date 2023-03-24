import MySwiper from '../components/MySwiper';
import {getProductsInCollection} from '../lib/shopify';
import ProductList from '@/components/ProductList';
import 'tailwindcss/tailwind.css'
// const Home = ({products}) =>{
//   console.log(products)
//   return (
    
    

//     <>
//       <MySwiper></MySwiper>
//       <MySwiper></MySwiper>
//     </>

   
//   );
// };
export default function Home({products}) {
  console.log(products)

  return (
    <div className="text-3xl">
       <>
      <MySwiper></MySwiper>
    </>
      <ProductList products={products}/>
     
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: {products},
  }
}


