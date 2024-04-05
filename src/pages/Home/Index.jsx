import { useContext } from 'react'
import Layout from '../../Components/Layout/Index.jsx'
import Card from '../../Components/Card/Index.jsx'
import ProductDetail from '../../Components/ProductDetail/Index.jsx'
import { ShoppingCartContext } from '../../Context/Index.jsx'

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>EXCLUSIVE PRODUCTS</h1>
      </div>
      <input type="text" placeholder='search a product' className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home