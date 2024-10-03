const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: User,
  },
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },

  street: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Address = mongoose.model('Address', AddressSchema)