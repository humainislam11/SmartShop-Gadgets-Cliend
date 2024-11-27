E-Commerce Application (MERN Stack)

This project is a small-scale e-commerce application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes Firebase Authentication, JWT-based authorization, and user role management. The application features a responsive design and implements both front-end and back-end logic.

Features and Requirements

1. User Authentication (Firebase)

Password Validation:

Passwords must meet the following criteria:

At least 8 characters.

Includes uppercase and lowercase letters.

Includes at least one number.

Includes at least one special character (e.g., @, !, #, etc.).

Social Login/Registration:

Google login is implemented as an alternative registration/login option.

2. User Roles

Three user roles are supported:

Buyer: Can browse and purchase products.

Seller: Can add, edit, and manage their own products.

Admin: Can manage users (e.g., promote users to sellers, delete users, etc.).

3. Authentication and Authorization

JWT Authentication:

Used to protect API routes and ensure secure access.

Role-Based Access:

Buyers, sellers, and admins have specific dashboards accessible only to their roles.

4. Application Pages

Home Page

Includes at least six sections:

Hero section

Featured products

Testimonials

Categories

FAQs

Contact information

Products Page

Displays all products with the following features:

Filtering and Sorting Options:

Search by product name

Sort by price (ascending and descending)

Filter by category and brand

Each product has a detailed product page.

About Page

Describes the application or business.

Contact Page

Includes a contact form with the following fields:

Name

Email

Message

5. Buyer Features

Wishlist:

Buyers can add products to their wishlist.

Cart:

Buyers can add products to their cart.

Wishlist and cart options are disabled for sellers and admins.

6. Seller Features

Dashboard:

Add a new product.

View all listed products.

Edit or delete products.

API Routes:

Proper routes ensure secure operations for product management.

7. Admin Features

Dashboard:

View all users.

Change user roles (e.g., promote a buyer to a seller).

Delete any user.

Admin Registration:

New users cannot register as admins.

Admins are created manually by injecting data into the database.

8. Responsive Design

Fully responsive for both mobile and desktop/laptop devices.

Technical Details

Front-End

Technology: React.js

Styling: TailwindCSS or Bootstrap (optional)

Back-End

Technology: Node.js and Express.js

Database: MongoDB

Authentication

Firebase Authentication:

Used for user login and registration.

JWT Protection:

Secures private routes.

Additional Guidelines

Ensure consistent naming conventions and coding best practices.

Comment code thoroughly for better understanding.

Test for responsiveness and functionality on various devices.

Getting Started

Prerequisites

Node.js installed

MongoDB instance running

Firebase project set up for authentication

Installation

Clone the repository:

git clone https://github.com/your-repo-url.git

Navigate to the project directory:

cd ecommerce-app

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory.

Add the following variables:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
FIREBASE_APP_ID=your-firebase-app-id

Running the Application

Start the back-end server:

npm run server

Start the front-end development server:

npm start

Open the application in your browser at http://localhost:3000.