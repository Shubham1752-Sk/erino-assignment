**Contact Management System**

  **Overview**
  
  The Contact Management System is a feature-rich web application designed to manage contacts effectively. It allows users to add, view, edit, and delete contact details, making it ideal for small businesses or individuals needing an organized way to handle customer or client information.

**The system includes**:

  -> A responsive and intuitive React.js frontend.
  -> A robust Node.js and Express.js backend.
  -> MongoDB for data persistence, ensuring high scalability and flexibility.

**Features**

  -> Add New Contacts: Users can add new contacts with essential details like name, email, phone number, company, and job title.
  -> View Contacts: A table view lists all contacts with pagination and sorting for easier navigation.
  -> Edit Contacts: Edit contact details seamlessly through a dialog interface with validation.
  -> Delete Contacts: Remove outdated or duplicate contacts.
  -> Validation: Client-side and server-side validation ensures data integrity.

**Tech Stack**

  **Frontend**
    -> React.js: For building a responsive and dynamic user interface.
    -> Material-UI (MUI): For modern and customizable UI components.
    -> TypeScript: For better type safety and maintainable code.
  **Backend**
    -> Node.js: For scalable and event-driven server-side logic.
    -> Express.js: For building RESTful APIs efficiently.
    -> Database
    -> MongoDB: A NoSQL database chosen for its scalability, flexibility, and ease of use.

**Why Use MongoDB?**

  -> Scalability: MongoDB is designed to handle large volumes of data, making it perfect for growing applications.
  -> Schema Flexibility: Unlike relational databases, MongoDB's document-oriented structure allows dynamic schema designs. This is useful for contact management, where the structure of stored data may evolve.
  -> Performance: Its indexing capabilities and in-memory storage engine ensure faster read and write operations.
  -> Ease of Integration: MongoDB works seamlessly with Node.js and offers robust libraries like Mongoose for schema validation and query building.
  -> High Availability: MongoDB provides built-in replication and sharding for fault tolerance and scalability.

**API Endpoints**
  Base URL: /api
  GET /get-all-contacts: Fetches all contacts.
  POST /add-contacts: Adds a new contact.
  PUT /update-contacts/:id: Updates an existing contact.
  DELETE /delete-contacts/:id: Deletes a contact by ID.

**Validation**
  -> Client-Side: Zod validation ensures that user input is accurate before sending it to the server.
  -> Server-Side: Express middleware validates incoming data and prevents invalid entries.

**Installation**

  **Prerequisites**
    -> Node.js (v16 or later)
    -> MongoDB (local instance or Atlas cloud database)
    
# Getting Started with Create React App

steps to install this project
-> type git clone https://github.com/Shubham1752-Sk/erino-assignment.git in VS code terminal
-> cd erino-assignment
-> type npm i --legacy-peer-deps in terminal
-> cd server
-> type npm i --legacy-peer-deps in terminal
-> cd..
-> npm run dev

#   e r i n o - a s s i g n m e n t 
 
 
