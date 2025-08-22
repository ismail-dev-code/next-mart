# 🛍️ Next-Mart Product App  

A product management application built with **Next.js 15 (App Router)** and **NextAuth.js** for authentication.  
The app includes a public landing page, product listing & details and a protected dashboard to add products.  

---

## 🚀 Features  

- **Landing Page (/**)  
  - Includes **Navbar, Hero, Product Highlights, Footer**  
  - Navigation to Login and Products  
  - No authentication required  

- **Authentication (/login)**  
  - Login with **NextAuth.js** (Google or credentials)  
  - Redirects to `/products` after login  

- **Product List (/products)**  
  - Publicly accessible  
  - Displays list of products from mock backend/file  
  - Each product has: **Name, Description, Price, Details button**  

- **Product Details (/products/[id])**  
  - Shows full details of a product  
  - Publicly accessible  

- **Protected Page: Add Product (/dashboard/add-product)**  
  - Accessible only when logged in  
  - Product form to add and save new product  
  - Redirects unauthenticated users to `/login`  

---



## 🛠️ Tech Stack  

- **Next.js 15 (App Router)**  
- **NextAuth.js** (Authentication)  
- **TailwindCSS** (Styling)  
- **Route Handlers (/api)** for mock backend  

---

## 📂 Routes Summary  

- `/` → Landing Page (public)  
- `/login` → Login Page (NextAuth)  
- `/products` → Product List (public)  
- `/products/[id]` → Product Details (public)  
- `/dashboard/add-product` → Add Product (protected)  

---

## ⚙️ Installation & Setup  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ismail-dev-code/next-mart
   cd next-mart
