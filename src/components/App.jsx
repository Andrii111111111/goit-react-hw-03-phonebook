
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { Component } from "react";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }
  
  deleteContacs = (id) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id !== id)
    }))
  }

  chengeFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  formSubmitEnd = data => {
    if (this.state.contacts.find(({name}) => 
      name.toLowerCase() === data.name.toLowerCase()))
    {
      alert(`${data.name} is already in contacts.`);
      return;
    }
       this.setState(prevState => ({ contacts: [...prevState.contacts, { ...data, id: nanoid() }] })) 
    }
//  eslint-disable-next-line array-callback-return

    // eslint-disable-next-line array-callback-return
  // contactFilter = e => {
  //   if (this.state.contacts.filter(contact  =>
  //     contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ))
  //      {
  //         return  this.contact
  //       }
  //   }
  
  render() {
     const { filter } = this.state
  
 // eslint-disable-next-line array-callback-return
 const contactFilter =  this.state.contacts.filter(contact => {
         if (contact.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
           return contact
         }
     })
  return (
   
    <>
      <Form onSubmit={this.formSubmitEnd} />
      <Filter filter={filter} onChengeFilter={this.chengeFilter}/>
      <ContactList contacts={contactFilter}
        deleteCon = {this.deleteContacs}
      />
    </>)

}
}



