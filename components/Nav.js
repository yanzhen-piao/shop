import Link from 'next/link'


export default function Nav() {
   
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link legacyBehavior href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
            HOTELS&RESORTS
            </span>
          </a>
        </Link>
        <a 
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
          >
          购物车
        </a>
      </div>
    </header>
  )
}
