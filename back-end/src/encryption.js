import crypto from 'crypto';


//class to encrypt text
class Encryption {
    constructor(secret_key, iv) {
        this.secret_key = secret_key;
        this.iv = iv;
    }

    //encrypts the data
    encrypt(text) {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.secret_key, this.iv);
        let encrypted = cipher.update(text, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }


    //decrypts the data
    decrypt(encryptedText) {
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.secret_key, this.iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

export default Encryption;
