import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AdminPage() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0B0D28] to-[#4B2A5C] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Explore o mundo da programação com a <p className="text-[#8B5CF6] underline">CodeWise!</p>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Descubra o mundo da programação com a CodeWise! Oferecemos cursos totalmente gratuitos, aula por aula
              buscando sempre a melhor qualidade. O nosso único porém, é que não conseguimos ter certificado.
            </p>
            <div className="mt-10">
              <Link
                className="inline-flex items-center rounded-md bg-[#8B5CF6] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2"
                href="/login"
              >
                Vamos começar!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Satellite Solutions
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Leverage our cutting-edge satellite technology to power your
                business operations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Rocket Technology
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Explore the possibilities of our advanced rocket technology to
                reach new heights.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Space Exploration
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Discover new frontiers with our cutting-edge space exploration
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
