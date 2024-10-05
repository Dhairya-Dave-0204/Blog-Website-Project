import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

/* 1 if directly "AuthService" is exported then we need to create an object where ever we want to use it, so
 to avoid it we create an object "authService" object and export it directly */
export class AuthService {
  client = new Client();
  account;

  /* 2 created a new client using predefined method but didnt create account likeways because its 
    inefficient it can be created but its not a good practice to do so in production grade app so we created
    a constructor so whenever the class is called automatically client and account are made*/
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // did below all the methods to avoid vendor lockin, now it is compatible with any backend
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
