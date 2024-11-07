"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale) => {
    setIsOpen(false);
    console.log(pathname.slice(2));

    router.push(`/${locale}${pathname.slice(3)}`);
  };

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ლოგო */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            <Link href="/">Logo</Link>
          </div>

          {/* ჰამბურგერის ღილაკი */}
          <button
            className="text-gray-900 dark:text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* ნავიგაციის ბმულები */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:block space-y-2 md:space-y-0 md:space-x-6`}
          >
            <Link
              href="/"
              className="block md:inline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {t("main")}
            </Link>
            <Link
              href="/about"
              className="block md:inline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {t("about")}
            </Link>
            <Link
              href="/services"
              className="block md:inline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {t("services")}
            </Link>
            <Link
              href="/contact"
              className="block md:inline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {t("contacts")}
            </Link>
          </nav>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {pathname === "/ka" ? "ქართული" : "English"}
            </button>
            {isOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40 overflow-hidden">
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ka")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  ქართული
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
