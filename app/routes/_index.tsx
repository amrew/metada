import type { V2_MetaFunction } from "@remix-run/node";
import {
  BiBasketball,
  BiBookBookmark,
  BiBookOpen,
  BiBuildingHouse,
  BiBuildings,
  BiCalendar,
  BiChevronRight,
  BiLogoTelegram,
  BiMap,
  BiPhone,
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
          <p className="text-lg mt-2">
            Kenapa perlu mengikuti kurikulum Metada?
          </p>
          <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-8">
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16 flex justify-center">
                  <BiBookBookmark
                    size={64}
                    className="w-8 h-8 sm:w-16 sm:h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Kurikulum
                  </h3>
                  <p>Disusun oleh para praktisi pendidikan dan asatidzah</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16 flex justify-center">
                  <BiBasketball size={64} className="w-8 h-8 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Kegiatan
                  </h3>
                  <p>Memiliki bermacam extra kurikuler</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16 flex justify-center">
                  <BsFillPeopleFill
                    size={64}
                    className="w-8 h-8 sm:w-16 sm:h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Pengajar
                  </h3>
                  <p>Memiliki kompetensi di bidangnya</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16 flex justify-center">
                  <BiCalendar size={64} className="w-8 h-8 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Kalender
                  </h3>
                  <p>Kalender pendidikan yang seragam</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16 flex justify-center">
                  <BiBookOpen size={64} className="w-8 h-8 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Buku</h3>
                  <p>Memiliki buku ajar yang sama</p>
                  <a href="" className="link link-accent">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-base-200 w-full p-4 rounded-2xl flex items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-16 flex justify-center">
                  <BiBuildingHouse
                    size={64}
                    className="w-8 h-8 sm:w-16 sm:h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Universitas
                  </h3>
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
              className="w-full sm:w-96 h-64 object-cover rounded-lg"
              alt="Profil"
            />
            <div className="prose text-secondary-content text-lg">
              <p>
                "Berjuang keras, dibalik meja tak berkursi Berehat dari lelah,
                beralas kasur tak berdipan, Menahan sakit dalam kebisingan.
                Menelan tanpa pilihan.
              </p>
              <br />
              <p>
                Dingin, kamipun kedinginan, panas, kamipun kepanasan, Bahkan,
                kadang.. Hujanpun menerpa wajah yang meringkuk didalamnya.
              </p>
              <br />
              <p>Bermain, belajar, beristirahat, di ruang yang satu."</p>
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
          <p className="text-lg mt-2">Buku-buku penunjang kurikulum</p>
          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-8">
            {/*  */}
            <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
              <div className="flex justify-center items-center relative">
                <img
                  src="/mi-akhlak.jpeg"
                  alt="Akhlak"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
              </div>
              <div className="card-body bg-base-300 text-base-content p-4 md:p-6 lg:p-8">
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
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
              </div>
              <div className="card-body bg-base-300 text-base-content p-4 md:p-6 lg:p-8">
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
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
              </div>
              <div className="card-body bg-base-300 text-base-content p-4 md:p-6 lg:p-8">
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
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20" />
              </div>
              <div className="card-body bg-base-300 text-base-content p-4 md:p-6 lg:p-8">
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

      <div className="bg-base-200 border-t border-t-base-300 py-8 px-6 sm:py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-base-content text-3xl font-bold text-center font-mono">
            Hubungi Kami
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-8">
            <div className="sm:w-1/2">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39827.85751019618!2d109.29460045570065!3d-7.466226870401402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655b7427ba30ed%3A0xcdb1728b68574bc4!2sMa&#39;had%20Al%20Faruq%20As%20Salafy%20Kalibagor!5e0!3m2!1sen!2sid!4v1690017485800!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border border-base-300 rounded-lg"
              ></iframe>
            </div>
            <div className="sm:w-1/2">
              <h3 className="text-base-content text-2xl font-semibold mt-4">
                Kontak
              </h3>
              <div className="mt-4 flex flex-col gap-6">
                <div className="flex flex-row gap-4">
                  <div>
                    <BiMap size={36} />
                  </div>
                  <div>
                    <p className="text-xl">Alamat</p>
                    <p>
                      Jl. CSM, Kampung Songgom Desa Kalibagor, Kecamatan
                      Kalibagor RT 08 RW 04, Dusun III Kalibagor, Kalibagor,
                      Kec. Banyumas, Kabupaten Banyumas, Jawa Tengah 53191
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div>
                    <BiPhone size={36} />
                  </div>
                  <div>
                    <p className="text-xl">Nomor telepon</p>
                    <a
                      href="https://wa.me/6285781069951"
                      className="link link-accent"
                    >
                      0857-8106-9951
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div>
                    <BiLogoTelegram size={36} />
                  </div>
                  <div>
                    <p className="text-xl">Telegram</p>
                    <a
                      href="https://t.me/InfoSalafyPwkt"
                      className="link link-accent"
                    >
                      Info Salafy Purwokerto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
