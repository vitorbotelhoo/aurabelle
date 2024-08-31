import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full h-full flex flex-col gap-12 max-w-5xl items-center justify-center">
        <Image
        src="/logo.png"
        width={500}
        height={100}
        alt="Logo da Aurabelle"
        style={{objectFit: "contain"}}	
        />
        <div className="flex flex-col gap-4 items-center justify-center w-full text-center">
          <p className="font-regular text-md">
            Seja bem-vindo.
          </p>
          <h1 className="font-bold text-2xl">
            Bem-estar  é tudo, saúde é para você!
          </h1>
          <div className="flex flex-row gap-4">
            <a
              href="https://www.instagram.com/aurabelle.saude/"
              className="py-2 px-3 my-2 bg-pink-700/50 drop-shadow-none hover:drop-shadow-md hover:bg-pink-800/30 text-pink-200 hover:text-pink-100 rounded-lg w-fit">
              Instagram
            </a>
            <a
              href="https://wa.me/554888649266/"
              className="py-2 px-3 my-2 bg-pink-700/50 drop-shadow-none hover:drop-shadow-md hover:bg-pink-800/30 text-pink-200 hover:text-pink-100 rounded-lg w-fit">
              WhatsApp
            </a>
          </div>
        </div>
        <a
            className="opacity-50 fixed bottom-0 center-0 m-8 drop-shadow-lg text-orange-200 py-1 px-2 border-2 border-orange-800/50 rounded-lg w-fit">
            Responsáveis: Beatriz Heinrich e Yasmim de Mello
          </a>
      </div>
    </main>
  );
}
