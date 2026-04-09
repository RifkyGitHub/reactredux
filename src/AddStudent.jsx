import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !kelas || !alamat) return;

    dispatch(addStudent(nama, kelas, alamat));

    setNama("");
    setKelas("");
    setAlamat("");

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Siswa</h1>

      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />

      <input
        type="text"
        placeholder="Alamat"
        value={alamat}
        onChange={(e) => setAlamat(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}