import { create } from "zustand";

const useExamStore = create((set) => ({
  exams: JSON.parse(localStorage.getItem("exams")) || [],

  addExam: (exam) => set((state) => {
    const updatedExams = [...state.exams, exam];
    localStorage.setItem("exams", JSON.stringify(updatedExams));
    return { exams: updatedExams };
  }),
}));

export default useExamStore;