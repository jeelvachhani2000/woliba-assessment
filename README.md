# React Coding Challenge — User Registration Flow

## 📌 App Overview

This project is a **multi-step User Registration Flow Web Application** built using **React.js** based on the provided Figma design and API documentation from Woliba.

The application includes:

- Company verification
- User details submission
- OTP verification
- Profile completion
- Interest selection
- Wellbeing pillars selection
- Final registration
- Welcome screen

The project focuses on:

- Clean and responsive UI
- Proper form validation
- API integration
- Redux state management
- Smooth user experience

---

# 🚀 Live Demo

### Live URL

```bash id="v5b8xm"
https://woliba-assessment.vercel.app/
```

---

# 🎨 Design & Resources

### Figma Design

Add Figma link here

### Figma Password

```bash id="o6f1vq"
Woliba@123
```

### API Documentation

Add API documentation link here

### Company Credentials

```bash id="o1qzyw"
Company Name: Woliba
Password: Woliba@123!
```

---

# 🛠 Tech Stack

- React.js
- Redux Toolkit
- TanStack Query (React Query)
- React Router DOM
- Axios
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod Validation
- Sonner Toast
- Lucide React Icons

---

# 📚 Libraries & Tools Used

| Library / Tool   | Purpose                        |
| ---------------- | ------------------------------ |
| React.js         | Frontend Framework             |
| Redux Toolkit    | Global State Management        |
| TanStack Query   | API State Management & Caching |
| React Router DOM | Routing                        |
| Axios            | API Requests                   |
| React Hook Form  | Form Handling                  |
| Zod              | Schema Validation              |
| Tailwind CSS     | Utility-first Styling          |
| shadcn/ui        | Reusable UI Components         |
| Sonner           | Toast Notifications            |
| Lucide React     | Icons                          |

---

# 📂 Folder Structure

```bash id="mqyq8s"
src/
│
├── assets/                     # Images, icons, logos
├── components/                 # Shared reusable components
├── layouts/                    # Layout wrappers
├── pages/                      # Route pages
├── redux/                      # Redux store & slices
├── routes/                     # Route configuration
├── services/                   # API services
├── hooks/                      # Custom hooks
├── utils/                      # Utility functions
├── constants/                  # App constants
│
├── screens/
│   └── authentication/
│       ├── Company/
│       ├── UserDetails/
│       ├── Otp/
│       ├── Credentials/
│       ├── Interests/
│       ├── Wellbeing/
│       └── Welcome/
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash id="3xj2p5"
git clone https://github.com/jeelvachhani2000/woliba-assessment.git
```

---

## 2️⃣ Navigate to Project Folder

```bash id="k51lcv"
cd project-name
```

---

## 3️⃣ Install Dependencies

Using npm:

```bash id="ww2s2o"
npm install
```

Using yarn:

```bash id="2g71c4"
yarn install
```

---

## 4️⃣ Start Development Server

Using npm:

```bash id="2x4svy"
npm run dev
```

Using yarn:

```bash id="u7m5c7"
yarn dev
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```bash id="65hgbw"
VITE_API_BASE_URL=your_api_base_url
```

---

# 📱 Registration Flow

## ✅ Step 1 — Verify Company Name & Password

### Features

- Company name validation
- Password validation
- API integration
- Error handling
- Loading states

### API Used

```bash id="2jxkzy"
verify-by-company-name-and-password
```

---

## ✅ Step 2 — Save User Details

### Features

- Email validation
- First & last name validation
- Company name prefilled
- API integration
- Error handling

### API Used

```bash id="8mj8lc"
save-user-details-and-send-otp
```

---

## ✅ Step 3 — OTP Verification

### Features

- 6-digit OTP input
- Auto-focus next input
- Backspace navigation support
- Resend OTP timer
- API integration
- Validation handling

### API Used

```bash id="a8mjlwm"
verify-otp-for-user-registration
```

---

## ✅ Step 4 — Login Credentials & Complete Profile

### Features

- Password & confirm password validation
- Date of birth selection
- Phone number validation
- Optional work anniversary
- Terms & privacy checkbox
- Form validation

---

## ✅ Step 5 — Interest Selection

### Features

- Multi-select interests
- Dynamic or static data handling
- Responsive UI

### API Used

```bash id="q1e0wm"
viewWellnessInterest
```

---

## ✅ Step 6 — Wellbeing Pillars

### Features

- Multi-select wellbeing pillars
- Exactly 3 selection validation
- Interactive selection UI

---

## ✅ Step 7 — Registration Completion

### Features

- Final registration API call
- Loader handling
- Success & error handling

### API Used

```bash id="m18xuo"
user-registration
```

---

## ✅ Step 8 — Welcome Screen

### Features

- Registration success message
- User information display
- Responsive UI

---

# ✅ Validation Rules

Implemented validations include:

- Required field validation
- Email format validation
- Password strength validation
- Confirm password validation
- OTP validation
- Phone number validation
- Checkbox validation
- Multi-select validation

---

# 📸 Screenshots

## Step 1 — Company Verification

(Add Screenshot Here)

---

## Step 2 — User Details

(Add Screenshot Here)

---

## Step 3 — OTP Verification

(Add Screenshot Here)

---

## Step 4 — Complete Profile

(Add Screenshot Here)

---

## Step 5 — Interest Selection

(Add Screenshot Here)

---

## Step 6 — Wellbeing Pillars

(Add Screenshot Here)

---

## Step 7 — Registration Completion

(Add Screenshot Here)

---

## Step 8 — Welcome Screen

(Add Screenshot Here)

---

# 🚀 Deployment Instructions (Vercel)

The application is deployed using **Vercel**.

---

## 📦 Build Project

Using npm:

```bash id="r8a5sy"
npm run build
```

Using yarn:

```bash id="m5k2qw"
yarn build
```

---

# 🌐 Deploy on Vercel

## 1️⃣ Install Vercel CLI

Using npm:

```bash id="x2m6pw"
npm install -g vercel
```

---

## 2️⃣ Login to Vercel

```bash id="m8o2la"
vercel login
```

---

## 3️⃣ Deploy Project

```bash id="j7d0zc"
vercel
```

Follow the terminal instructions to complete deployment.

---

## 4️⃣ Production Deployment

```bash id="w4r9ny"
vercel --prod
```

---

# ⚙️ Vercel Environment Variables

Add the following environment variable in the Vercel dashboard:

```bash id="d8v4qe"
VITE_API_BASE_URL=your_api_base_url
```

Path:

- Project Settings
- Environment Variables

---

# ✅ Deployment Status

The application is publicly accessible through the deployed Vercel URL.

# 🧠 Assumptions

- Some API responses were assumed based on the provided documentation.
- Interest data can be fetched from API or hardcoded locally.
- UI responsiveness was implemented according to the Figma design.
- Error messages were customized for better user experience.

---

# 🤖 AI Usage

AI tools were used for:

- Validation logic suggestions
- UI improvements
- Component optimization
- README documentation assistance
- Code refactoring support

---

# ⏳ Timeline Followed

✅ Completed within: **48 Hours**

---

# 👨‍💻 Author

### Name

Jeel Vachhani

### Email

[jeelvachhani7827@gmai.com](mailto:jeelvachhani7827@gmai.com)

### GitHub

https://github.com/jeelvachhani2000
