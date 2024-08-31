
# yourHR

YourHR is a job search platform crafted to help job seekers find the perfect roles tailored to their skills and preferences. This web application enables users to register and upload their resumes, with all submitted information securely stored in a database.

## Features

- **User Signup** - Job seekers can fill out a form with their personal details and upload their resumes.
- **Resume Upload** - Resumes are securely uploaded and stored in the backend.
- **Responsive Design** - The application is responsive and works on various screen sizes.
- **Robust Error Handling and Validation** - Ensured proper error handling and validation on both backend and frontend.
## Tech Stack

### Backend

- [Node.js](https://nodejs.org/en) (v16.x)
- [Express](https://expressjs.com/) (4.19.2)
- [Mongoose](https://mongoosejs.com/) (8.3.2)
- [MongoDB](https://www.mongodb.com/) (6.5.0)
- [Multer](https://www.npmjs.com/package/multer) (1.4.5-lts.1)
- [Express-validator](https://express-validator.github.io/docs/) (7.1.0)
- [DropBox](https://www.dropbox.com/home)

### Frontend

- [React](https://reactjs.org/) (18.2.0)
- [React Router](https://reactrouter.com/) (6.23.0)
- [Tailwind CSS](https://tailwindcss.com/) (3.4.3)
- [Lucide React](https://lucide.dev/) (0.427.0)



## Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/Vidhi-Mathur/yourHR.git
    ```
2. Navigate to project repository:
    ```bash
   cd yourhr
    ```
### Backend Setup

1. Navigate to the backend directory: 
    ```bash
   cd backend
    ```
2. Install backend dependencies:
    ```bash
   npm install
    ```
3.  Set up the backend environment variables by creating a .env file in the root directory:
    ```bash
    MONGODB_URI=<your-mongodb-uri>
    CLIENT_URL=http://localhost:3001
    DROPBOX_ACCESS_TOKEN=<your-dropbox-access-token>
    ```
4. Start the backend server
    ```bash
   node app.js
    ```
### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
   cd frontend
    ```
2. Install frontend dependencies: 
   ```bash
   npm install
    ```
3. Set up the frontend environment variables by creating a .env file in the root directory:
    ```bash
    REACT_APP_SERVER_URL=http://localhost:3000
    ```    
4. Start the frontend server
    ```bash
   npm start
    ```

    
## Project Struture

### Backend 

### Backend
- `/backend`:
    - `/app.js`: Main server file.
    - `/controllers`: Contains the logic for handling incoming requests.
    - `/models`: Defines the database models.
    - `/routes`: Contains the API route definitions.
    - `/validators`: Input Validation logic.
    - `/util`: Utility functions shared across the backend.
    - `.env`: For Environment variables

### Frontend
- `/frontend`: 
    - `/public`: Contains the HTML template and static assets.
    - `App.js`: Main React component.
    - `index.js`: Entry point of React App.
    - `/src`
        - `/components`: 
            - `UI` - UI specific components.
            - `Pages`: Main page components.
        - `/services`: Service layer for API calls.
        - `/assets`: Contains images and other static resources.
    - `.env`: For Environment variables
## Usage

Once the server and frontend are running:

- Visit http://localhost:3001 to view the yourHR application.
- Make sure server runs on http://localhost:3000 at the same time.