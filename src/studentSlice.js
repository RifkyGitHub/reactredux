import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {

    addStudent: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(nama, kelas, alamat) {
        return {
          payload: {
            id: nanoid(),
            nama,
            kelas,
            alamat,
          },
        };
      },
    },

    removeStudent(state, action) {
      return state.filter((student) => student.id !== action.payload);
    },

    updateStudent(state, action) {
      const { id, nama, kelas, alamat } = action.payload;

      const student = state.find((s) => s.id === id);

      if (student) {
        student.nama = nama;
        student.kelas = kelas;
        student.alamat = alamat;
      }
    },

  },
});

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer; 