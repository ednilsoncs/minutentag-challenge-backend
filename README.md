Here's a README file for your backend application:

---

# Backend Application

This backend application provides two main endpoints to interact with product data and stock prices. It is built using TypeScript, Node.js, and Express.

## Endpoints

### 1. Get Stock Price
- **URL**: `/api/stock-price/{{SKU}}`
- **Method**: `GET`
- **Description**: Retrieves the stock price for a specific product identified by its SKU.

### 2. Get Products
- **URL**: `/api/products`
- **Method**: `GET`
- **Description**: Retrieves a list of all products.

## Serving Images

Product images are served through a static files route:

- **URL**: `/file/products`

## Running the Application

To start the application, use the following command:

```bash
npm run dev:server
```

The application will run on port `3333`.

## Technologies Used

- TypeScript
- Node.js
- Express

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm run dev:server
   ```

3. **Access the application**:
   Open your browser and navigate to `http://localhost:3333`.
