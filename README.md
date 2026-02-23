# GitHub Profile & Repository Explorer

## 📌 Project Overview

This project is a simple frontend web application that allows users to search for any GitHub username and view their profile information along with their repositories.

It is built using **HTML, CSS, and JavaScript** without any frameworks, focusing on clean UI, responsiveness, and proper state handling.

---

## 🚀 Features

### 🔎 Profile Search

* Search GitHub users by username
* Display:

  * Avatar
  * Name
  * Bio
  * Followers & Following
  * Public repository count

### 📦 Repository Explorer

* Shows user repositories in cards
* Each card displays:

  * Repository name
  * Stars
  * Forks
  * Language
* Interactive hover effects

### ⏳ Loading State

* Spinner displayed while fetching data

### ⚠ Error Handling

* Invalid username message
* Network error handling
* Empty repository state

### 📱 Responsive Design

* Works on mobile, tablet, and desktop
* Flexible layout using CSS

### ✨ UI Enhancements

* Animated background
* Glassmorphism cards
* Hover interactions
* Centered loading indicator

---

## 🛠 Tech Stack

* HTML5
* CSS3 (animations, flexbox, grid)
* JavaScript (Fetch API, async/await)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How to Run

1. Download or clone the project
2. Open the folder in VS Code
3. Double click `index.html` or use Live Server
4. Enter a GitHub username and search

---

## 🌐 API Used

* Public GitHub REST API

Example:

```
https://api.github.com/users/${username}
https://api.github.com/users/${username}/repos
```

---

## 💡 Learning Goals

* Working with APIs
* DOM manipulation
* Handling loading and error states
* Responsive UI design
* Writing clean frontend code

---

## ⭐ Possible Improvements

* Repository sorting (stars/date)
* Search filter
* Pagination or infinite scroll
* Save last search in LocalStorage
* Contribution graph
* Dark/light theme toggle

---

## 👨‍💻 Author

Kriti Kesarwani

---
## Deployed Link

https://kritikesarwani03-lgtm.github.io/GitHub-explorer/

---
## 📜 License

This project is for learning purposes.

---
