import * as CryptoJs from 'crypto-js';

function encryptToAES256(value: string) {
  return CryptoJs.AES.encrypt(value, process.env.ENCRYPTION_KEY).toString();
}

function decryptFromAES256(value: string) {
  const bytes = CryptoJs.AES.decrypt(value, process.env.ENCRYPTION_KEY);
  const text = bytes.toString(CryptoJs.enc.Utf8);
  return text;
}

export { encryptToAES256, decryptFromAES256 };
