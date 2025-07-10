# NovaVector Backend - Clean & Simple

## 📁 Project Structure

```
backend/
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies
├── API_SIMPLIFIED.md      # Complete API documentation
├── README.md              # This file
├── uploads/               # File uploads directory
└── src/
    ├── index.js           # Main server file
    ├── config/
    │   ├── db.js          # Database connection
    │   └── multer.js      # File upload config
    ├── controllers/       # Business logic
    │   ├── authController.js
    │   ├── enrollmentController.js
    │   └── wishlistController.js
    ├── middleware/        # Auth & validation
    │   ├── auth.js        # Authentication middleware
    │   └── validation.js  # Input validation
    ├── models/           # Database schemas
    │   ├── authModel.js
    │   ├── enrollModel.js
    │   └── wishlistModel.js
    └── routes/           # API endpoints
        ├── authRoutes.js
        ├── enrollmentRoutes.js
        └── wishlistRoutes.js
```

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   # Copy .env.example to .env and configure
   MONGODB_URI=mongodb://localhost:27017/novanector
   JWT_SECRET=your-secret-key
   PORT=3000
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 📚 API Documentation

See `API_SIMPLIFIED.md` for complete API documentation with examples.

## 🧪 Test Endpoints

- `GET /api/enrollments/test` - Test enrollment routes
- `GET /api/wishlist/test` - Test wishlist routes

## 🎯 Core Features

### ✅ Authentication

- User registration/login
- JWT token authentication
- Role-based access control

### ✅ Enrollment System

- Enroll in courses
- View enrollments
- Cancel enrollments
- Check enrollment status

### ✅ Wishlist System

- Add/remove courses
- View wishlists
- Public/private settings
- Clear wishlist

## 🔒 Security

- JWT authentication
- Input validation
- Role-based permissions
- Error handling

## 🛠 Technologies

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Validation:** express-validator

---

**Clean, simple, and ready to use!** 🎉
