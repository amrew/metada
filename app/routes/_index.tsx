import type { V2_MetaFunction } from "@remix-run/node";
import {
  BiBasketball,
  BiBookBookmark,
  BiBookOpen,
  BiBuildingHouse,
  BiBuildings,
  BiCalendar,
  BiChevronRight,
} from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { Layout } from "~/components/Layout";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Media Tarbiyah dan Dakwah" },
    { name: "description", content: "Media Tarbiyah dan Dakwah" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div
        className="hero min-h-full"
        style={{
          backgroundImage: "url(/masjid-annur.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl sm:text-6xl font-bold font-mono">
              MEDIA TARBIYAH DAN DAKWAH
            </h1>
            <p className="mb-5 text-lg sm:text-xl">
              Mengasuh dan mendidik buah hati ibarat memahat ukiran.
              Berbahagialah, kala ukiran yang terpahat adalah ukiran yang indah
            </p>
            <div className="flex gap-2 justify-center">
              <button className="btn btn-primary text-white">
                Pelajari
                <BiChevronRight size={24} />
              </button>
              <button className="btn">
                Lihat Profil <BiBuildings size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto py-8 px-4 sm:py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-mono font-semibold flex flex-row items-center gap-2">
            Keunggulan
          </h2>
          <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-8">
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16">
                  <BiBookBookmark size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Kurikulum</h3>
                  <p>Disusun oleh para praktisi pendidikan dan asatidzah</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16">
                  <BiBasketball size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Kegiatan</h3>
                  <p>Memiliki bermacam extra kurikuler</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16">
                  <BsFillPeopleFill size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Pengajar</h3>
                  <p>Memiliki kompetensi di bidangnya</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16">
                  <BiCalendar size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Kalender</h3>
                  <p>Kalender pendidikan yang seragam</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16">
                  <BiBookOpen size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Buku</h3>
                  <p>Memiliki buku ajar yang sama</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16">
                  <BiBuildingHouse size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Universitas</h3>
                  <p>Bisa melanjutkan ke jenjang universitas</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-8 px-6 sm:py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-secondary-content text-3xl font-bold text-center font-mono">
            Profil
          </h2>
          <div className="mt-8 flex flex-col md:flex-row gap-8">
            <img
              src="/classroom.jpeg"
              width={384}
              height={256}
              className="w-96 h-64 object-cover rounded-lg"
              alt="Profil"
            />
            <div className="prose text-secondary-content text-lg">
              <p>
                Berjuang keras, dibalik meja tak berkursi Berehat dari lelah,
                beralas kasur tak berdipan, Menahan sakit dalam kebisingan.
                Menelan tanpa pilihan.
              </p>
              <br />
              <p>
                Dingin, kamipun kedinginan, panas, kamipun kepanasan, Bahkan,
                kadang.. Hujanpun menerpa wajah yang meringkuk didalamnya.
              </p>
              <br />
              <p>Bermain, belajar, beristirahat, di ruang yang satu.</p>
              <button className="btn mt-6">
                Selengkapnya
                <BiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-6 sm:py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono">Modul Kurikulum</h2>
          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-8">
            {/*  */}
            <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
              <div className="flex justify-center items-center relative">
                <img
                  src="/mi-akhlak.jpeg"
                  alt="Akhlak"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40" />
              </div>
              <div className="card-body bg-base-300 text-base-content">
                <h2 className="card-title">Akhlak</h2>
                <p>
                  Untuk Marhalah Ibtidaiyah (MI) dan sederajat untuk semester
                  gasal (A)
                </p>
              </div>
            </div>
            {/*  */}
            <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
              <div className="flex justify-center items-center relative">
                <img
                  src="/mi-aqidah.jpeg"
                  alt="Aqidah"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40" />
              </div>
              <div className="card-body bg-base-300 text-base-content">
                <h2 className="card-title">Aqidah</h2>
                <p>
                  Untuk Marhalah Ibtidaiyah (MI) dan sederajat untuk semester
                  gasal (A)
                </p>
              </div>
            </div>
            {/*  */}
            <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
              <div className="flex justify-center items-center relative">
                <img
                  src="/mi-fikih.jpeg"
                  alt="Fikih"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40" />
              </div>
              <div className="card-body bg-base-300 text-base-content">
                <h2 className="card-title">Fikih</h2>
                <p>
                  Untuk Marhalah Ibtidaiyah (MI) dan sederajat untuk semester
                  gasal (A)
                </p>
              </div>
            </div>
            {/*  */}
            <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
              <div className="flex justify-center items-center relative">
                <img
                  src="/mi-indo.jpeg"
                  alt="Bahasa Indonesia"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40" />
              </div>
              <div className="card-body bg-base-300 text-base-content">
                <h2 className="card-title">Bahasa Indonesia</h2>
                <p>
                  Untuk Marhalah Ibtidaiyah (MI) dan sederajat untuk semester
                  gasal (A)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="btn btn-primary">Lihat modul lain</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
