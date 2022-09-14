import Link from 'next/Link'

const Header = () => {
  return (
    <header className="text-gray-400 sticky top-0">
      <ul className="flex gap-10 p-10">
        <li>
          <Link href="#home"> Home </Link>
        </li>
        <li>
          <Link href="#projects"> My Projects </Link>
        </li>
        <li>
          <Link href="#contact"> Contact </Link>
        </li>
      </ul>
    </header>
  )
}


export default Header