import React from 'react';

class PlaylistEditForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: this.props.currentPlaylist.name, description: this.props.currentPlaylist.description, formOpen: false, id: this.props.currentPlaylist.id};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.closeForm = this.closeForm.bind(this);

  }

  componentDidMount(){
    this.setState({formOpen: true});
  }


  handleClick(e){
    e.preventDefault();
    let modal = document.getElementsByClassName('edit-form-modal-open')[0];
    let menu = document.getElementsByClassName('options-menu-open')[0];
    menu.setAttribute("class", "options-menu-close");
    modal.style.display = "none";
  }

  closeForm(){
    let modal = document.getElementsByClassName("edit-form-modal-open")[0];
    modal.style.display = "none";
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.name === ""){
      this.setState({name: "New Playlist"});
      this.props.updatePlaylist({name: "New Playlist", description: "The most bestest playlist in the world!"}).then(() => this.closeForm());
    } else {
      this.props.updatePlaylist(this.state).then((playlistAction) => this.props.receivePresentationItem(playlistAction.playlist, "Playlists"));
      this.closeForm();
      let menu = document.getElementsByClassName('options-menu-open')[0];
      menu.setAttribute("class", "options-menu-close");
    }
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
        <div className={this.state.formOpen ? "edit-form-modal-open" : "edit-form-modal-close"}>

          <div className="modal-content">

            <div className="form-header">
              <span onClick={this.handleClick} className="close">&times;</span>
              <h2>Edit Playlist</h2>
            </div>

            <form className="playlist-form">
              <label>Name</label>
              <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
              <label>Description </label>
              <textarea type="text" value={this.state.description} onChange={this.handleInput('description')}>Give your playlist a catchy description</textarea>
              <div className='form-btns'>
                <button onClick={this.handleClick} id="form-cancel-btn">Cancel</button>
                <button onClick={this.handleSubmit} id="form-create-btn">Update</button>
              </div>
            </form>

          </div>
        </div>
    );
  }
}

export default PlaylistEditForm;
