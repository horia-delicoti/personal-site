---
title: Steganography
---

[Steganography](https://en.wikipedia.org/wiki/Steganography) is the practice of hiding secret information within an ordinary, non-secret file or message to avoid detection. Unlike cryptography, which obscures the content of a message, steganography conceals the very existence of the message. Common carriers include images, audio files, videos, and even text.

---

## 🌟 Key Concepts

- **Carrier (Cover File):** The file used to hide the secret data (e.g., image, audio, video).
- **Payload:** The secret information to be hidden.
- **Embedding:** The process of hiding the payload within the carrier.
- **Extraction:** Retrieving the hidden payload from the carrier.
- **Steganalysis:** The practice of detecting steganography.

---

## 🛠️ Common Tools

- **[Steghide](https://github.com/StefanoDeVuono/steghide):** Popular tool for embedding/extracting data in images and audio files.
- **[zsteg](https://github.com/zed-0xff/zsteg):** PNG/BMP analysis tool.
- **[stegsolve](https://github.com/zardus/ctf-tools/blob/master/stegsolve/README.md):** Java-based image analysis tool.
- **[OpenStego](https://www.openstego.com/):** GUI tool for hiding data in images.
- **[OutGuess](https://github.com/resurrecting-open-source-projects/outguess):** Universal steganographic tool.

---

## 🛠️ Useful Commands for Steghide

```sh
# install steghide
apt-get install steghide
```

```sh
# displays info about a file whether it has embedded data or not.
steghide info <file>
```

```sh
# embed file secret_text.txt into the file image.jpeg
steghide embed -cf image.jpeg -ef secret_text.txt
```

```sh
# extract embeded data from file image.jpeg
steghide extract -sf image.jpeg
```

```sh
# embed with a passphrase
steghide embed -cf image.jpg -ef secret.txt -p "yourpassword"
```

```sh
# extract with a passphrase
steghide extract -sf image.jpg -p "yourpassword"
```

```sh
# specify output file when extracting
steghide extract -sf image.jpg -xf output.txt
```

```sh
# embed multiple files (first archive them)
tar czf secrets.tar.gz secret1.txt secret2.txt
steghide embed -cf image.jpg -ef secrets.tar.gz
```

```sh
# change the passphrase of embedded data
steghide --passphrase oldpass --newpass newpass --change-passphrase -sf image.jpg
```

---

## 📚 Useful Links & Resources

- [Steganography - A list of useful tools and resources](https://0xrick.github.io/lists/stego/#steghide)
- [Understanding Steganography and how it works](https://gupta-bless.medium.com/understanding-steganography-and-how-it-work-63593ddba21e)
- [Understanding Steganography for Capture The Flag Challenges](https://infosecwriteups.com/steganography-ctfs-73f7b310b1f7)

---

## 📝 Notes

- Steganography is often used in CTF (Capture The Flag) challenges and digital forensics.
- Combining steganography with encryption increases security.
- Detection (steganalysis) is an active area of research in information security.

---
