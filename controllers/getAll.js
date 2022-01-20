const { Contact } = require("../model/contact");

const getAll = async (req, res) => {
  const data = await Contact.find({});

  res.json({ status: "success", code: 200, data: { contacts: data } });
};

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => {
//     return item.id === contactId;
//   });
//   const id = contacts[index].id;

//   if (!body.name || !body.phone || !body.email) {
//     return null;
//   }

//   const refreshContact = { ...body, id };
//   contacts.splice(index, 1, refreshContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return refreshContact;
// };

module.exports = getAll;
