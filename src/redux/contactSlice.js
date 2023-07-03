import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: "3403403204302",
      name: "Baba",
      number: 2433,
      location: "Accra",
    },
  ],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    updateContact: (state, action) => {
      const { id, name, number, location } = action.payload;
      const contactToUpdate = state.contacts.find(
        (contact) => contact.id === id
      );
      if (contactToUpdate) {
        contactToUpdate.name = name;
        contactToUpdate.number = number;
        contactToUpdate.location = location;
      }
    },
    editContact: (state, action) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return {
            ...contact,
            name: action.payload.name,
            number: action.payload.number,
            location: action.payload.location,
          };
        }
        return contact;
      });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => {
        if (contact.id !== action.payload) return contact;
      });
    },

    // updateContact: (state, action) => {
    //   const { id, name, number, location } = action.payload;
    //   const contactToUpdate = state.contacts.find(
    //     (contact) => contact.id === id
    //   );
    //   if (contactToUpdate) {
    //     contactToUpdate.name = name;
    //     contactToUpdate.number = number;
    //     contactToUpdate.location = location;
    //   }
    // },
    // editContact: (state, action) => {
    //   state.contacts = state.contacts.map((contact) => {
    //     if (contact.id === action.payload.id) {
    //       return {
    //         ...contact,
    //         name: action.payload.name,
    //         number: action.payload.number,
    //         location: action.payload.location,
    //       };
    //     }
    //     return contact;
    //   });
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, editContact, updateContact, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
