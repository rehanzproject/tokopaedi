import React from "react";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, logoutUser, setAlert } from "../../../config/redux/userSlice/userSlice";
import {  useNavigate } from "react-router-dom";
import AlertSuccess from "../../atoms/Alert/AlertSuccess";
import NavigationBar from "../../moleculs/NavigationBar/NavigationBar";
function SettingAccount() {
  const [isChange, setChange] = useState(false);
  const [hasChange, setHasChange] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const handleSubmit = () => {
    formik.handleSubmit();
    setChange(false);
    setHasChange(true)
    dispatch(setAlert('account'));
   
  
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const schema = Yup.object().shape({
    nama: Yup.string().required("Perlu Diisi!"),
    jenisKelamin: Yup.string().required("Perlu Diisi!"),
    alamatLengkap: Yup.string().required("Perlu Diisi!"),
    pinPoint: Yup.string().required("Perlu Diisi!"),
    nomorHP: Yup.string()
      .matches(/^0/, "Nomor HP Harus Diawali 0")
      .required("Perlu Diisi!"),
    email: Yup.string().email().required("Perlu Diisi!"),
  });

  const formik = useFormik({
    initialValues: {
      nama: "",
      jenisKelamin: "",
      alamatLengkap: "",
      pinPoint: "",
      nomorHP: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addProfile(values));
    
    },
  });
  return (
    <>
      <NavigationBar />
      <AlertSuccess />
     
      <div className="px-24">
        <h1 className="font-bold text-2xl py-4">Akun Kamu</h1>
        <h1 className="font-semibold py-2">Ubah Biodata diri</h1>
      
        <div className="flex justify-between max-w-md">
          <p>Nama</p>
          <input
            type="text"
            className="border rounder-md px-5"
            onChange={formik.handleChange}
            value={formik.values.nama}
            placeholder={user.nama}
            name="nama"
            id=""
            disabled={!isChange}
          />
        </div>
        {formik.errors.nama && (
          <div className="text-red-500 px-56">{formik.errors.nama}</div>
        )}
        <div className="flex justify-between max-w-md py-5">
          <p>Jenis Kelamin</p>
          <select
            className="border w-56 text-center"
            name="jenisKelamin"
            id=""
            disabled={!isChange}
            onChange={formik.handleChange}
            value={formik.values.jenisKelamin}
          >
            <option value="" disabled>
              Pilih
            </option>
            <option value="laki">Laki - Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        {formik.errors.jenisKelamin && (
          <div className="text-red-500 px-56">{formik.errors.jenisKelamin}</div>
        )}

        <h1 className="font-semibold">Alamat</h1>
        <div className="flex justify-between max-w-md py-5">
          <p>Alamat Lengkap</p>
          <textarea
            type="text"
            className="border rounder-md pr-14 py-3 "
            onChange={formik.handleChange}
            value={formik.values.alamatLengkap}
            placeholder={user.alamatLengkap}
            name="alamatLengkap"
            id=""
            disabled={!isChange}
          ></textarea>
        </div>
        {formik.errors.alamatLengkap && (
          <div className="text-red-500 px-56">
            {formik.errors.alamatLengkap}
          </div>
        )}

        <div className="flex justify-between max-w-md py-5">
          <p>Pinpoint</p>
          <input
            type="text"
            className="border rounder-md px-5"
            onChange={formik.handleChange}
            value={formik.values.pinPoint}
            placeholder={user.pinPoint}
            name="pinPoint"
            id=""
            disabled={!isChange}
          />
        </div>
        {formik.errors.pinPoint && (
          <div className="text-red-500 px-56">{formik.errors.pinPoint}</div>
        )}

        <div className="flex justify-between max-w-md py-5">
          <p>Nomor HP</p>
          <input
            type="text"
            className="border rounder-md px-5"
            onChange={formik.handleChange}
            value={formik.values.nomorHP}
            placeholder={user.nomorHP}
            name="nomorHP"
            id=""
            disabled={!isChange}
          />
        </div>
        {formik.errors.nomorHP && (
          <div className="text-red-500 px-56">{formik.errors.nomorHP}</div>
        )}

        <div className="flex justify-between max-w-md py-5">
          <p>Email</p>
          <input
            type="text"
            className="border rounder-md px-5"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder={user.email}
            name="email"
            id=""
            disabled={!isChange}
          />
        </div>
        {formik.errors.email && (
          <div className="text-red-500 px-56">{formik.errors.email}</div>
        )}

        <button
          type="button"
          onClick={isChange ? handleSubmit : () => setChange(!isChange)}
          className="bg-green-500 font-bold px-5 py-2 text-white"
        >
          {isChange ? "Simpan" : "Ubah"}
        </button>
        
       {hasChange &&  <button
          type="button"
          onClick={()=>navigate(-1)}
          className="border text-green-500 font-bold px-5 py-2 mx-2 "
        >
          Kembali
        </button>}
       
      </div>
      
    </>
  );
}

export default SettingAccount;
