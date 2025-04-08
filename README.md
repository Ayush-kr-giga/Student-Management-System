# 🎓 Student Management System

A simple web-based task management system for faculty and students, built with **React.js** and **Tailwind CSS**.  
Faculty can assign tasks, and students can track and manage them based on their status.

---

## 👤 Dummy Login Credentials

You can use the following dummy accounts to log in and test the Student Management System.

---

### 🧑‍🏫 Faculty Login

| Email                | Password |
|---------------------|----------|
| faculty@example.com | 123      |

---

### 🧑‍🎓 Student Logins

| Name             | Email                | Password |
|------------------|----------------------|----------|
| Rahul Verma      | student1@example.com | 123      |
| Sneha Patel      | student2@example.com | 123      |
| Aman Reddy       | student3@example.com | 123      |
| Priya Singh      | student4@example.com | 123      |
| Vikram Mehta     | student5@example.com | 123      |

---

> 🔐 These accounts are preloaded using `localStorage` when the app is first loaded.  
> You can edit or expand the dummy data in `src/utils/localStorage.js`.

## ✨ Features

- 👨‍🏫 **Faculty Dashboard**
  - View all students' task statuses
  - Create and assign new tasks

- 👩‍🎓 **Student Dashboard**
  - View tasks categorized by status (new, active, completed, failed)
  - Mark tasks as completed or failed

- 🔐 **Authentication**
  - Dummy login system using localStorage

- 🎯 Task Stats
  - Real-time updates on task counts (active, new, completed, failed)