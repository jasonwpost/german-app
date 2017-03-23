import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../../config/database'

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

}
