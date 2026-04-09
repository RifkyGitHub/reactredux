import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "./studentSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const student = useSelector((state) =>
    state.students.find((s) => s.id === id)
  );

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (student) {
      setNama(student.nama);
      setKelas(student.kelas);
      setAlamat(student.alamat);
    }
  }, [student]);

  if (!student) {
    return <h2>Student not found.</h2>;
  }

  const handleUpdate = () => {
    dispatch(
      updateStudent({
        id,
        nama,
        kelas,
        alamat,
      })
    );

    navigate("/");
  };

return (
  <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
    <h2>Edit</h2>
    <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
    <input value={kelas} onChange={(e) => setKelas(e.target.value)} placeholder="Kelas" />
    <input value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />
    <button onClick={handleUpdate} className="button">Save</button>
  </div>
);
}