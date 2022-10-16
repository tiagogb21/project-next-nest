import Image from "next/image";
import Link from "next/link";
import error404 from '../../public/error404.png';

function Error404() {
  return (
    <section className="d-flex flex-column">
      <button
        type="button"
        className="p-2 mb-4 text-xl text-primary md:text-3xl">
        Página não encontrada
      </button>
      <Link href="/">
        <a
          className="btn-link"
        >
          Voltar pra Home
        </a>
      </Link>
      <Image
        src={ error404 }
        className="w-25"
        alt="error 404"
      />
    </section>
  );
}

export default Error404;
