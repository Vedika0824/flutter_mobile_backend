1.Backend (Node.js/Express)
  Backend Requirements
  Node.js
  npm
  Local or network-accessible machine

2.Initialize a Node.js Project:
  mkdir my-node-project
  cd my-node-project
  npm init -y
  
3. Install Express:
  npm install express

4. Nodemon automatically restarts your server
  npm install --save-dev nodemon

5.Start the server:
  node src\app.js

6.Default backend runs at http://<IP>:3000/api
  Endpoints:
  Method	Endpoint	Description
  GET	/api/products	Fetch all products
  POST	/api/products	Add a product
  GET	/api/bills	Fetch all bills
  POST	/api/bills	Generate a new bill
  API Configuration

#Dynamic API IP: Use the settings icon in the AppBar of the Flutter app.

Enter IP and port (e.g., 192.168.5.24:3000), Use Your IP While Testing.

#The app fetches products and posts bills to this IP.
  Usage
  Start backend on your machine.
  Run the Flutter app on a mobile emulator or real device.
  Tap the settings icon → enter backend IP → Save.
  Add products and manage the cart.
  Generate bills and view bill history.
