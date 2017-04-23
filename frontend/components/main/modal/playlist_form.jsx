import React from 'react';

class PlaylistForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: "", description: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    let modal = document.getElementById("playlist-form-modal");
    modal.style.display = "none";
  }

  closeForm(){
    let modal = document.getElementById("playlist-form-modal");
    modal.style.display = "none";
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.name === ""){
      this.setState({name: "New Playlist"});
    }
    this.props.createPlaylist({name: "New Playlist", description: "The most bestest playlist in the world!"}).then(() => this.closeForm());
    this.setState({name: "", description: ""});
  }

  handleInput(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }


  render(){

    return(
        <div id="playlist-form-modal" className="modal">

          <div className="modal-content">

            <div className="form-header">
              <span onClick={this.handleClick} className="close">&times;</span>
              <h2>Create Playlist</h2>
            </div>

            <form className="playlist-form">
              <label>Name</label>
              <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
              <label>Description </label>
              <textarea type="text" value={this.state.description} onChange={this.handleInput('description')}>Give your playlist a catchy description</textarea>
              <div className='form-btns'>
                <button onClick={this.handleClick} id="form-cancel-btn">Cancel</button>
                <button onClick={this.handleSubmit} id="form-create-btn">Create</button>
              </div>
            </form>

          </div>
        </div>
    );
  }
}

export default PlaylistForm;
