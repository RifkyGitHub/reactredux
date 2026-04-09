import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "./studentSlice";
import { useNavigate } from "react-router-dom";
import "./ListStudent.css";

export default function ListStudent() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header-section">
        <h2>Student List</h2>
        <button className="btn-add" onClick={() => navigate("/add")}>
          <span>+ Add Student</span>
        </button>
      </div>

      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Address</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.nama}</td>
                  <td>{student.kelas}</td>
                  <td>{student.alamat}</td>
                  <td className="action-buttons">
                    <button 
                      className="btn-update" 
                      onClick={() => navigate(`/update/${student.id}`)}
                    >
                      Update
                    </button>
                    <button 
                      className="btn-delete" 
                      onClick={() => dispatch(removeStudent(student.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}