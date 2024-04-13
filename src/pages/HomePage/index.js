import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import UpdatedListContext from "../../components/UpdatedListContext";
import { BallTriangle } from "react-loader-spinner";
import "./index.css";

class Home extends Component {
  state = {
    loading: true,
    search: "",
    updatedNoteList: [],
  };

  onFilerNotesByTitle = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem("newUpdatedNoteList"));
    if (savedNotes) {
      this.setState({ updatedNoteList: savedNotes, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  renderNotesElement = (updatedNoteList) => {
    const { search } = this.state;
    const filteredNotes = updatedNoteList.filter((note) =>
      note.titleName.toLowerCase().includes(search.toLowerCase())
    );

    if (!filteredNotes || filteredNotes.length === 0) {
      return null;
    }
    return filteredNotes.map((note) => (
      <Link className="link-style" to={`/note-detail/${note.id}`}>
        <div className="card-container" key={note.id}>
          <h1 className="title-heading">{note.titleName}</h1>
          <span>
            {formatDistanceToNow(new Date(note.date), { addSuffix: true })}
          </span>
        </div>
      </Link>
    ));
  };

  render() {
    const { loading, updatedNoteList } = this.state;

    return (
      <UpdatedListContext.Provider value={{ updatedNoteList }}>
        <div className="bg-container">
          <div className="search-bar-container">
            <div className="search-bar-heading-container">
              <h1 className="top-heading">
                <CgNotes /> Notes
              </h1>
              <input
                type="search"
                placeholder="Search"
                className="input-field"
                onChange={this.onFilerNotesByTitle}
              />
            </div>
          </div>
          <div className="card-bg-container" data-testid="loader">
            {loading ? (
              <BallTriangle
                type="TailSpin"
                color="#00bfff"
                height={50}
                width={50}
              />
            ) : (
              this.renderNotesElement(updatedNoteList)
            )}
          </div>

          <Link className="link-style" to="/note-form">
            <div className="FloatingButton-container">
              <button className="floating-button">Create</button>
            </div>
          </Link>
        </div>
      </UpdatedListContext.Provider>
    );
  }
}

export default Home;
