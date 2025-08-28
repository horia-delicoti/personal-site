---
title: Cryptography
---

**Cryptography** is the science and art of securing information by transforming it into an unreadable format, only reversible by authorized parties. It is foundational to modern security, enabling confidentiality, integrity, authentication, and non-repudiation in digital systems.

- [Cipher](https://developer.mozilla.org/en-US/docs/Glossary/Cipher)

## Types of Cryptography

### Symmetric Cryptography

- **Same key** for encryption and decryption.
- **Algorithms:** AES, DES, 3DES, ChaCha20, Blowfish.
- **Modes:** ECB, CBC, GCM, CTR, OFB.
- **Use Cases:** Disk encryption, VPNs, TLS bulk data.

### Asymmetric Cryptography (Public-Key)

- **Key pair:** Public key (shared), private key (kept secret).
- **Algorithms:** RSA, ECC (Curve25519, secp256k1), ElGamal, DSA.
- **Use Cases:** TLS handshakes, digital signatures, SSH, PGP.

### Hash Functions

- **One-way transformation**: No decryption possible.
- **Algorithms:** SHA-2, SHA-3, BLAKE2, MD5 (obsolete), SHA-1 (obsolete).
- **Use Cases:** Password storage, data integrity, digital signatures.

### Message Authentication Codes (MAC)

- **Integrity and authenticity** using a secret key.
- **Algorithms:** HMAC (with SHA-2, SHA-3), CMAC.

### Digital Signatures

- **Non-repudiation and authenticity**: Sign with private key, verify with public key.
- **Algorithms:** RSA, ECDSA, Ed25519.

### Protocols & Applications

- **TLS/SSL:** Secure web traffic (HTTPS), uses both symmetric and asymmetric cryptography.
- **SSH:** Secure remote shell, key-based authentication.
- **PGP/GPG:** Email and file encryption/signing.
- **JWT:** JSON Web Tokens, signed (and optionally encrypted) for authentication.
- **Disk Encryption:** LUKS, BitLocker, FileVault.
- **Password Hashing:** bcrypt, scrypt, Argon2.

### Cryptographic Primitives

- **Block Ciphers:** AES, DES, Blowfish (fixed-size blocks, various modes).
- **Stream Ciphers:** RC4 (obsolete), ChaCha20 (modern, secure).
- **Key Exchange:** Diffie-Hellman, ECDH.
- **Random Number Generation:** /dev/urandom, Fortuna, hardware RNGs.

### Security Considerations

- **Key Management:** Secure generation, storage, rotation, and destruction of keys.
- **Entropy:** Use strong sources of randomness for key generation.
- **Side-Channel Attacks:** Timing, power analysis, electromagnetic leaks.
- **Padding Oracles:** Vulnerabilities in block cipher modes (e.g., CBC).
- **Algorithm Obsolescence:** Avoid MD5, SHA-1, RC4, DES.
- **Forward Secrecy:** Use ephemeral keys (e.g., ECDHE in TLS).

### Example: AES-GCM Encryption (Python, cryptography library)

```python
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

key = AESGCM.generate_key(bit_length=256)
aesgcm = AESGCM(key)
nonce = os.urandom(12)
data = b"secret message"
aad = b"authenticated but not encrypted"
ct = aesgcm.encrypt(nonce, data, aad)
pt = aesgcm.decrypt(nonce, ct, aad)
```

### Links

- [The Joy of Cryptography](https://joyofcryptography.com/)
- [Cryptography and Network Security (William Stallings)](https://www.pearson.com/en-us/subject-catalog/p/cryptography-and-network-security-principles-and-practice/P200000003634/9780134444284)
- [Crypto101](https://crypto101.io/)
- [Practical Cryptography for Developers](https://cryptobook.nakov.com/)
- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [NIST Cryptographic Standards](https://csrc.nist.gov/Projects/Cryptographic-Standards-and-Guidelines)
- [Python packages](https://github.com/vinta/awesome-python?tab=readme-ov-file#cryptography)

### Tools

- **OpenSSL:** Command-line crypto toolkit (`openssl enc`, `openssl dgst`, `openssl genpkey`)
- **GPG:** File/email encryption and signing (`gpg --encrypt`, `gpg --sign`)
- **Hashcat:** Password hash cracking
- **KeePassXC:** Encrypted password manager
