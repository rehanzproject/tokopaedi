import React from 'react';
import logo from '../../../assets/images/logosocmed.png'
function Footer() {
  return (
    <footer className=" py-5">
      <div className="container border-t mx-auto grid grid-cols-4 gap-4">
        {/* Column 1 */}
        <div>
          <h3 className=" font-bold text-2xl my-6">Tokopaedi</h3>
          <ul className=''>
            <li><a href="#" className="mb-3 ">Tentang Kami</a></li>
            <li><a href="#" className="mb-3">Mitra</a></li>
            <li><a href="#" className="mb-3">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-bold my-6 ">Jual </h3>
          <ul>
            <li><a href="#" className="mb-3">Kebijakan Privasi</a></li>
            <li><a href="#" className="mb-3">Karir</a></li>
            <li><a href="#" className="mb-3">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-2xl font-bold my-6">Bantuan </h3>
          <ul>
            <li><a href="#" className="mb-3">Hubungi Kami</a></li>
            <li><a href="#" className="mb-3">Syarat dan Ketentuan</a></li>
            <li><a href="#" className="mb-3">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-2xl font-bold my-6">Ikuti Kami</h3>
          <img src={logo} alt="" width={150}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
