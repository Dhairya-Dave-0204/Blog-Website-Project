import conf from '../conf/conf';
import moduleName from '../conf/conf';
import {Client, Databases, ID, Storage, Query} from 'appwrite';

//First 2 steps of creation of calss and client using constructor is same as the authentication file
export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // did below all the methods to avoid vendor lockin, now it is compatible with any backend
    async createPost({title, slug, content, featuredImage, status, userID}) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug,{
                title,
                content,
                featuredImage,
                status,
                userID
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug,{
                title,
                content,
                featuredImage,
                status,
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug)
            
        } catch (error) {
            throw error;
            return false
        }
    }

    /* Here the "queries" is a variable passed as a parameter in the method insted of doing this parameter
    method you can write the query directly in the listDocuments method direrctly inside "[]" inplace of queries */
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID,conf.appwriteCollectionID,queries)
        } catch (error) {
            throw error;
            return false;
        }
    }

    async uploadFIle(file) {
        try {
            await this.bucket.createFile(conf.appwriteBucketID, ID.unique(), file)
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketID, fileID)
        } catch (error) {
            throw error;
            return false;
        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(conf.appwriteBucketID, fileID)
    }
}

const service = new Service();
export default service;