import express from  "express";

let contacts=[
     {
    "id": 1,
    "first_name": "steve",
    "second_name": "ayes",
    "Contact": "0721323454",
  },
    {
    "id": 2,
    "first_name": "AYESIGA",
    "second_name": "john",
    "Contact": "0721322054",
  },
    {
    "id": 3,
    "first_name": "John ",
    "second_name": "Doe",
    "Contact": "0721349454",
  }
]

export const getAllContacts=(req,res)=>{
    res.json(contacts)
}
export const getContact=(req,res)=>{
    const contactId=parseInt(req.params.id)
    const contact=contacts.find((contact)=>contact.id===contactId);
    if(!contact){
        res.json({msg: `contact with id ${contactId} not found`})
    }else{
        res.json(contact)
    }
}

export const createContact=(req,res)=>{
    const {first_name,second_name,contact}=req.body

    if (!first_name && !second_name || !contact ){
        res.json({msg: "missing field"})
    }{
        const newContact={
            id:contacts.length+1,
            first_name:first_name,
            second_name:second_name,
            contact:contact
        }
        contacts.push(newContact)
        res.json(contacts)
    }
}

export const updateContact=(req,res)=>{
    const contactId=parseInt(req.params.id)
    const {first_name,second_name,Contact}=req.body;

    const contact=contacts.find((contact)=>{contact.id === contactId})
    if(!contactId){
        res.json("Contact not found")
    }else{
        if(!first_name && !second_name || !Contact){
            res.json("missing field")
        }else{
            const filteredContacts=contacts.filter((contact)=>{contact.id !== contactId})
            const newContact={
                first_name:first_name,
                second_name:second_name,
                Contact: Contact
            }
            filteredContacts.push(newContact);
            res.json(filteredContacts);


        }
    }
}

export const deleteContact=(req,res)=>{
    contactId=parseInt(contacts.params.id)

    const {first_name,second_name,contact}=req.body
    contact=contacts.find((contact)=>{contact.id===contactId})

    if(!contactId){
        res.json("contact doesnt exist")
    }else{
        const filteredContacts=contacts.filter((contact)=>{contact.id !== contactId})
        res.json(filteredContacts)
    }

}

export const deleteAllContacts = (req, res) => {
  if (contacts.length === 0) {
    res.json({ message: "No contacts to delete." });
  }

  // Clear the contacts array (this effectively deletes all contacts)
  contacts = [];

  // Respond with success message
  res.json({ message: "All contacts have been deleted.", contacts });
};