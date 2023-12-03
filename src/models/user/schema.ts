const UserSchema: Schema<IUserDocument> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String,
  },
  settings: {
    type: Object,
    default: {
      algorithm: 'hp2',
    }
  },
  create_date: {
    type: Date,
    default: Date.now,
  }
})