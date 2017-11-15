const React = require('react')
const {
  Link
} = require('react-router')

class Profile extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        firstName: 'Keri', 
          lastName: 'Petski',
          editing: false,
          firstNameEdit: '',
          lastNameEdit: ''
      }

      
    
  }

  handleEdit() {
    console.log('IN HANDLE EDIT')
    if(this.state.editing){
        this.setState({editing: false})
    }
    else {
        this.setState({editing: true})
    }
    
}

handleSave(event) {
    console.log('IN HANDLE SAVE')
    console.log(event)
    let first = this.state.firstNameEdit
    if(first === '') {
        first = this.state.firstName
    }
    let last = this.state.lastNameEdit
    if(last === '') {
        last = this.state.lastName
    }

    this.setState ({
        firstName: first,
        lastName: last
    })
    
}

handleFirstNameChange(event) {
    this.setState({firstNameEdit: event.target.value})
}
handleLastNameChange(event) {
    this.setState({lastNameEdit: event.target.value})
}


  render() {
    return <div>
      <h1>Profile</h1>
      <p>First Name: {this.state.firstName}</p>
      <p>Last Name: {this.state.lastName}</p>
      <button className="btn btn-default"onClick={this.handleEdit.bind(this)}>Edit</button><br/><br/>
      {(this.state.editing && 
            <div>
                <p>First Name: </p>
                <input type="text" className="form-control" defaultValue={this.state.firstName} onChange={this.handleFirstNameChange.bind(this)}/>
                <p>Last Name: </p>
                <input type="text" className="form-control" defaultValue={this.state.lastName} onChange={this.handleLastNameChange.bind(this)}/>
                <button className="btn pull-right btn-default"onClick={this.handleSave.bind(this)}>Save</button>
                <br/><br/>
            </div>)}
      <Link to="/" className="btn btn-info" >Home</Link>
      
    </div>
  }
}

module.exports = Profile