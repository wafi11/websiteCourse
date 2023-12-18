import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { RiThreadsFill, RiTwitterXLine } from "react-icons/ri";
const Kelas = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-16 px-6 grid lg:grid-cols-3 gap-0 text-gray-300 bg-[#000] ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#fff]">CONVERSE.</h1>
        <p className="py-4 ">
          Converse Inc., yang berkantor pusat di Boston, Massachusetts, adalah
          anak perusahaan yang dimiliki sepenuhnya oleh NIKE, Inc. Didirikan
          pada tahun 1908 sebagai perusahaan sepatu karet yang mengkhususkan
          diri pada sepatu karet.
        </p>
        <div className="flex justify-between md:w-[75%] my-4">
          <FaFacebookSquare style={{ color: "#3b5998" }} size={30} />
          <FaInstagram
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            size={30}
          />
          <RiTwitterXLine style={{ color: "#" }} size={30} />
          <RiThreadsFill size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Trending Searches</h6>
          <ul>
            <li className="py-2 text-sm">Sepatu Converse</li>
            <li className="py-2 text-sm">Sepatu Sneakers</li>
            <li className="py-2 text-sm">Sepatu Sneakers Wanita</li>
            <li className="py-2 text-sm">Sepatu Sneakers Pria</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Layanan Pelanggan</h6>
          <ul>
            <li className="py-2 text-sm">Kontak Kami</li>
            <li className="py-2 text-sm">FAQs</li>
            <li className="py-2 text-sm">Status Pemesanan</li>
            <li className="py-2 text-sm">Panduan Ukuran</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Tentang Kami</h6>
          <ul>
            <li className="py-2 text-sm">Tentang Converse</li>
            <li className="py-2 text-sm">Tentang MAPCLUB</li>
            <li className="py-2 text-sm">Syarat dan Ketentuan</li>
            <li className="py-2 text-sm">Kebijakan Privasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kelas;
