// Funcao invocada no tempo de build
export async function getStaticPaths() {
  // Chama um endpoint de uma API externa para get products
  const res = await fetch('http://localhost:3000/products')
  const products = await res.json()

  // Gaz o get dos paths que queremos pre-renderizar em produtos
  const paths = products.map((post) => ({
    params: { id: post.id },
  }))

  // Nos apenas iremos pre-renderizar os caminhos no tempo de build
  // { fallback: false } outras rotas irao retornar 404.
  return { paths, fallback: false }
}

// Tambem sera chamada em tempo de build
export async function getStaticProps({ params }) {
  // params contem o products id
  // Se a rota for /products/1, entao o  params.id sera 1
  const res = await fetch(`http://localhost:3000/products/${params.id}`)
  const products = await res.json()

  // Pass post data to the page via props
  return { props: { products } }
}

function Products({ products }) {
  return (
    <section>
      {
        products?.map(({ id, name, price }) => (
          <article key={ id }>
            <p>{ name }</p>
            <p>{ price }</p>
          </article>
        ))
      }
    </section>
  )
}

export default Products;
