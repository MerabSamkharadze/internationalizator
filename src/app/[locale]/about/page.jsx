import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("About");
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center md:flex-row">
          {/* გამოსახულება */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/300"
              alt="About us"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>

          {/* ტექსტი */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              {t("heading")}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{t("text-1")}</p>
            <p className="text-lg text-gray-600">{t("text-2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
