import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoteForm from "./pages/NoteForm";
import NoteDetail from "./pages/NoteDetail";
import UpdatedListContext from "./components/UpdatedListContext";
function App() {
  const newList = JSON.parse(localStorage.getItem("newUpdatedNoteList"));
  return (
    <UpdatedListContext.Provider value={{ updatedNoteList: newList }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note-form" element={<NoteForm />} />
          <Route path="/note-detail/:id" element={<NoteDetail />} />
        </Routes>
      </Router>
    </UpdatedListContext.Provider>
  );
}

export default App;
