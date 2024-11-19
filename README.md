# FARMART FRONTEND

## DATE : 19TH NOV 2024

## FarmArt API
FarmArt is an API e-commerce application designed to connect farmers and buyers of farm animals. The frontend allows users to register, login, browse products, add items to the cart, and manage their orders. Farmers can also sell animals through the platform.

### Features
- **User Registration and Login**: Users can register and log in as either a farmer or a buyer.
- **Farmer Dashboard**: Farmers can access their dashboard to manage their animals for sale.
- **Cart Management**: Buyers can add animals to their cart, adjust quantities, and proceed to checkout.
- **Testimonials Section**: Users can read testimonials from both farmers and buyers.
- **About Us and Contact**: Provides information about the platform and allows users to contact the team.
- **Responsive Design**: The frontend is designed to work well on both desktop and mobile devices.

#### User Stories
**Farmer**
- A farmer represents the entity that owns an animal farm and is looking to sell some of their animals
1.Auth (Login / Register).
2.Add a new animal for sale.
3.Update, and edit animals for sale.
4.Confirm / Reject orders.

**User**
- A user represents an entity that wants to buy some farm animals.
1.Auth (Login / Register)
2.View all listed animals
3.Search for animals by type and breed.
4.Filter animals by breed, and age
5.Add animals to the cart.
6.Checkout items from the cart.
7.Pay for items in the cart.

### Tech Stack
- **React**: The frontend is built using React to create a dynamic and responsive user interface.
- **React Router**: Used for routing between different pages such as registration, login, cart, and others.
- **Tailwind CSS**: For styling the components and providing a responsive layout.
- **React Hooks**: Used for managing state within components (e.g., useState, useEffect, useNavigate).
- **Local Storage**: For storing user data such as registration information and session data.


### API Integration
- The following endpoints are used:

- **POST /register**: Used for user registration, where the form data is sent to create either a farmer or buyer account.
- **POST /login**: Handles user login by sending the email and password.
- **GET /animals**: Retrieves a list of animals available for purchase.
- **POST /cart**: Used to manage cart items (add, update, remove).
- **GET /cart**: Fetches the current user's cart items.

### Components Overview
**RegisterPage.jsx**
- A form for users to register as either a farmer or a buyer.
- Collects user details such as first name, last name, email, password, and farm location (for farmers).

**SellAnimal.jsx**
- Farmers can list their animals for sale.
- Includes a section for testimonials from both farmers and buyers.

**CartPage.jsx**
- Displays the items in the user's cart, allowing them to update quantities or remove items.
- Includes an order summary with subtotal, transportation fee, tax, and total.

**App.jsx**
- The main application file where routing and state management occur.
- Handles navigation and renders the appropriate components based on the route.


### INSTALLATION
- To use this follow these steps:

### Alternative One
1.Open your terminal/cli on your computer. 

2.Clone the repository by running the following command:

    git clone https://github.com/ohnoitsmoraa/Farmart-frontend.git

3.Change directory to the repo folder

    cd Farmart-frontend
4.Open it in your Code Editor of choice. If you use VS Code, run the command:

    code .

### Alternative Two
1.On the top right corner of this page there is a button labelled Fork.

2.Click on that button to create a copy of the repository to your own account.

3.Follow the process described in Alternative One above.

4.Remember to replace your username when cloning.

    git clone https://github.com/ohnoitsmoraa/Farmart-frontend.git

### Getting the files
Fork the repo, Create a new branch in your terminal & Install the prerequisite. Make appropriate changes in files. Run the server to see the changes Add the changes and commit them Push to the branch Create a pull request

Open the folder location on the terminal and use the following command to run the app:

### VERCEL LINK(LIVE LINK)
[live link to my webiste]
    https://farmart-frontend-dusky.vercel.app/

### HOW TO RUN ALL CODES
clone the repository run using live server


### DEPENDENCIES
practice React,Tailwind

### TECHNOLOGIES USED
React,Tailwind

### License
This project is licensed under the MIT License.