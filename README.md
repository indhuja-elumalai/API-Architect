
### **Project: API Architect**

**Live Demo:**  
**GitHub:** https://github.com/indhuja-elumalai/API-Architect.git

-----

### **Overview**

**API Architect** is an AI-powered, full-stack web application that streamlines the process of designing and documenting REST APIs. By simply describing an API's purpose in natural language, developers can instantly receive a structured and professional API design, complete with endpoints, HTTP methods, and descriptions.

This project was built to solve a common developer pain point: the initial design and boilerplate setup of a new API. It showcases the practical application of a full-stack skillset combined with powerful AI to create a valuable developer tool.

### **Features**

  * **Natural Language to API Design:** Translate a plain English description into a structured API design.
  * **AI-Powered Generation:** Leverages Google's Gemini API to intelligently generate endpoints and methods.
  * **Clean & Interactive UI:** A modern, responsive frontend built with React.js for an intuitive user experience.
  * **Robust Backend:** A secure Node.js/Express backend that handles API requests and communication with the AI.
  * **Scalable Architecture:** Built with a clear separation of concerns, ready for future features like user authentication and documentation history.

### **Tech Stack**

  * **Frontend:** `React.js`, `HTML`, `CSS`
  * **Backend:** `Node.js`, `Express.js`
  * **AI:** `Google Gemini 1.5 Pro`
  * **Tools:** `Git`, `GitHub`, `Render` (for deployment)

### **Installation & Setup**

Follow these steps to get a local copy of the project up and running.

#### **Prerequisites**

  * `Node.js` (v18 or higher) and `npm` installed.
  * A Google AI Studio account and an API key for the Gemini API.

#### **1. Clone the Repository**

```bash
git clone https://github.com/indhuja-elumalai/api-architect.git
cd api-architect
```

#### **2. Backend Setup**

Navigate to the `backend` directory, install dependencies, and configure your API key.

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add your Google API key:

```
GOOGLE_API_KEY="YOUR_API_KEY_HERE"
```

#### **3. Frontend Setup**

Navigate to the `frontend` directory and install the required packages.

```bash
cd ../frontend
npm install
```

### **Usage**

To run the application, you need to start both the backend and frontend servers in separate terminal windows.

1.  **Start the Backend Server**
    Open your first terminal, navigate to the `backend` folder, and run:

    ```bash
    node server.js
    ```

    The server will be running at `http://localhost:5000`.

2.  **Start the Frontend Application**
    Open a second terminal, navigate to the `frontend` folder, and run:

    ```bash
    npm start
    ```

    Your browser will automatically open to `http://localhost:3000`.

**How to Use the Tool**

1.  On the frontend page, type a description of the API you want to create in the text area.
2.  Click the **"Generate API"** button.
3.  The backend will send your description to the AI, and the generated API design will appear on the screen.

### **Roadmap**

  * Add user authentication and accounts.
  * Implement a database (MongoDB) to save and manage API designs for users.
  * Integrate a code generation feature to provide boilerplate code for the generated endpoints.
  * Improve prompt engineering to handle more complex and nuanced requests.

### **License**

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).

### **Acknowledgments**

  * [Google Gemini API](https://ai.google.dev/) for providing the powerful AI model.
  * [React](https://reactjs.org/) and [Node.js](https://nodejs.org/) communities for their excellent resources and tools.