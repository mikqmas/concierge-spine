import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../logo.svg';
import small from '/small.svg'; 
import chevron from '/chevron.svg';



export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    const navigation = [
    { name: 'Who We Serve', href: '#' },
    { name: 'Scheduling', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'About', href: '/team' },
    ]


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header className={`absolute inset-x-0 top-0 z-50 ${scrolled ? 'shadow-sm' : ''}`}>
            <nav 
            aria-label="Global" 
            className={`flex items-center justify-between p-6 lg:px-8 transition-colors duration-300 ${
                scrolled ? 'bg-white text-gray-500' : 'text-white hover:bg-white hover:text-gray-500'
            }`}
            >
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Concierge Spine</span>
                <img
                    alt="logo"
                    src={logo}
                    className="h-12 w-auto"
                />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6 text-indigo-400" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 select-none">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold flex items-center group">
                    {item.name}
                    <svg
                    className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {/* <a href="#" className="text-sm/6 font-semibold text-white">
                Log in <span aria-hidden="true">&rarr;</span>
                </a> */}
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Schedule
                    Consultation
                </a>
            </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black/50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Concierge Spine</span>
                    <img
                    alt=""
                    src={small}
                    className="h-8 w-auto"
                    />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-white"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
                </div>
                <div className="mt-6 flow-root select-none">
                <div className="-my-6 divide-y divide-gray-700">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                        >
                        <div className="flex items-center">
                            {item.name}
                            <img src={chevron} alt="Chevron" className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                        </div>
                        </a>

                    ))}
                    </div>
                    <div className="py-6">
                    {/* <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                    >
                        Log in
                    </a> */}
                    <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Schedule
                        Consultation
                    </a>
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
      </header>
    )
}