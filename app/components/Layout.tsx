import type { PropsWithChildren } from "react";
import {
  BiCart,
  BiEnvelope,
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiMenu,
} from "react-icons/bi";

export function Layout(props: PropsWithChildren) {
  return (
    <div className="h-full pt-28">
      <div className="fixed top-0 left-0 w-full z-50 border-b border-gray-100">
        <div className="bg-red-50 border-b border-b-red-100 text-base-content">
          <div className="flex flex-row">
            <ul className="menu menu-horizontal p-1">
              <li>
                <a
                  href="mailto:metada.id@gmail.com"
                  className="flex flex-row gap-2 items-center"
                >
                  <BiEnvelope size={18} />
                  <span className="text-base-content">metada.id@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285781069951"
                  className="flex flex-row gap-2 items-center"
                >
                  <BiLogoWhatsapp size={18} />
                  <span className="text-base-content">0857-8106-9951</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <header className="navbar bg-base-100" style={{ minHeight: 68 }}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <BiMenu size={24} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Beranda</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl text-primary">
              <img
                src="/metada-logo.png"
                width={32}
                height={32}
                alt="Metada Logo"
              />
              METADA
            </a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Beranda</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Profil</summary>
                  <ul className="p-2">
                    <li>
                      <a>Sejarah</a>
                    </li>
                    <li>
                      <a>Visi, Misi dan Tujuan</a>
                    </li>
                    <li>
                      <a>Struktur</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Akademik</summary>
                  <ul className="p-2">
                    <li>
                      <a>Kalender Akademik</a>
                    </li>
                    <li>
                      <a>Kurikulum</a>
                    </li>
                    <li>
                      <a>Jadwal Pembelajaran</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Ma'had</summary>
                  <ul className="p-2">
                    <li>
                      <a>Lokasi</a>
                    </li>
                    <li>
                      <a>Kegiatan</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Berita</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn btn-accent btn-sm">
              Beli Modul
              <BiCart size={20} />
            </a>
          </div>
        </header>
      </div>
      {props.children}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img
            src="/metada-logo.png"
            width={48}
            height={48}
            alt="Metada Logo"
          />
          <p>
            <strong className="text-lg">METADA</strong>
            <br />
            Media Tarbiyah dan Dakwah
          </p>
        </div>
        <div>
          <span className="footer-title">Profil</span>
          <a className="link link-hover">Sejarah</a>
          <a className="link link-hover">Visi, Misi dan Tujuan</a>
          <a className="link link-hover">Struktur</a>
        </div>
        <div>
          <span className="footer-title">Akademik</span>
          <a className="link link-hover">Kalender Akademik</a>
          <a className="link link-hover">Kurikulum</a>
          <a className="link link-hover">Jadwal Pembelajaran</a>
        </div>
        <div>
          <span className="footer-title">Update Berita</span>
          <div className="form-control">
            <label className="label">
              <span className="label-text-alt text-neutral-content">
                Ikuti Channel Telegram
              </span>
            </label>
            <a
              href="https://t.me/InfoSalafyPwkt"
              className="link link-secondary px-1 flex gap-2"
            >
              <BiLogoTelegram size={24} />
              Info Salafy Purwokerto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
