import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoArrowBackSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./index.css";
class NoteForm extends Component {
  state = { title: "", description: "", url: "" };

  onClickTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  onClickDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  onClickUrl = (event) => {
    this.setState({ url: event.target.value });
  };
  onSubmitForm = (event) => {
    event.preventDefault();
    const { title, description, url } = this.state;

    const updatedNoteList = {
      id: uuidv4(),
      titleName: title,
      descriptionName: description,
      urlName: url,
      date: new Date(),
    };

    const existingNotes =
      JSON.parse(localStorage.getItem("newUpdatedNoteList")) || [];
    const updatedNotes = [...existingNotes, updatedNoteList];

    localStorage.setItem("newUpdatedNoteList", JSON.stringify(updatedNotes));
    this.setState({
      title: "",
      description: "",
      url: "",
    });
  };

  render() {
    const { title, description, url, newUpdatedList } = this.state;
    console.log(newUpdatedList);

    return (
      <div className="noteForm-bg-container">
        <div className="top-card-container">
          <h1 className="top-content-style">
            <CgNotes /> Notes
          </h1>
          <p className="top-content-style">Create your new notes here</p>
        </div>
        <form className="submit-form-container" onSubmit={this.onSubmitForm}>
          <div>
            <p className="content">Title :</p>
            <input
              type="text"
              value={title}
              placeholder="Title..."
              className="title-input"
              onChange={this.onClickTitle}
            />
          </div>

          <div>
            <p className="content">Description :</p>
            <textarea
              value={description}
              placeholder="Description..."
              className="comment-input"
              onChange={this.onClickDescription}
            />
          </div>

          <div>
            <p className="content">Image/Video :</p>
            <input
              value={url}
              type="text"
              placeholder="url..."
              className="title-input"
              onChange={this.onClickUrl}
            />
          </div>

          <div className="submit-container">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>

          <Link className="link-style" to="/">
            <div className="Back-button-container">
              <button className="back-button" type="submit">
                <IoArrowBackSharp /> Back
              </button>
            </div>
          </Link>
        </form>
      </div>
    );
  }
}

export default NoteForm;
