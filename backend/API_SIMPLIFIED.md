# Simplified NovaVector API Documentation

## Overview

This is a simplified, clean implementation of enrollment and wishlist features for the NovaVector online course platform. The code has been streamlined to remove unnecessary complexity while maintaining full functionality.

## Features Implemented

### 1. Authentication & Authorization

- **JWT-based authentication**
- **Role-based access control** (Student, Instructor, Admin)
- **Clean middleware** for authentication and authorization

### 2. Enrollment System

- Enroll in courses
- View user enrollments
- Cancel enrollments
- Check enrollment status
- Admin management

### 3. Wishlist System

- Add/remove courses from wishlist
- View user wishlists
- Clear entire wishlist
- Check if course is in wishlist
- Public wishlist browsing
- Privacy settings

### 4. Database Models

- **Enrollment Model**: Simple enrollment tracking
- **Wishlist Model**: Clean wishlist structure
- **Proper relationships** between users, courses, enrollments, and wishlists

## API Endpoints

### Authentication Routes

```
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
GET /api/auth/profile - Get user profile
```

### Enrollment Routes

```
GET /api/enrollments/test - Test endpoint
POST /api/enrollments/enroll - Enroll in course (Student)
GET /api/enrollments/my-enrollments - Get user's enrollments (Student)
DELETE /api/enrollments/cancel/:enrollmentId - Cancel enrollment (Student)
GET /api/enrollments/check/:courseId - Check enrollment status (Student)
GET /api/enrollments/user/:userId - Get any user's enrollments (Admin)
```

### Wishlist Routes

```
GET /api/wishlist/test - Test endpoint
POST /api/wishlist/add - Add course to wishlist (Student)
DELETE /api/wishlist/remove/:courseId - Remove course from wishlist (Student)
GET /api/wishlist/my-wishlist - Get user's wishlist (Student)
DELETE /api/wishlist/clear - Clear wishlist (Student)
PUT /api/wishlist/settings - Update wishlist settings (Student)
GET /api/wishlist/check/:courseId - Check if course in wishlist (Student)
GET /api/wishlist/public - Get public wishlists (Public)
GET /api/wishlist/user/:userId - Get any user's wishlist (Admin)
```

## Request/Response Examples

### Enroll in Course

```javascript
POST /api/enrollments/enroll
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "courseId": "64f7b8c8e4b0c8d123456789"
}

Response:
{
  "success": true,
  "message": "Successfully enrolled in course",
  "enrollment": {
    "_id": "...",
    "student": "...",
    "course": "...",
    "status": "active",
    "amountPaid": 99.99
  }
}
```

### Add to Wishlist

```javascript
POST /api/wishlist/add
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "courseId": "64f7b8c8e4b0c8d123456789"
}

Response:
{
  "success": true,
  "message": "Course added to wishlist"
}
```

## Role-Based Access Control

### Student Role

- Can enroll in courses
- Can manage their own enrollments and wishlist
- Can view public content

### Instructor Role

- Has student permissions
- Can manage their own courses
- Can view enrollments for their courses

### Admin Role

- Full access to all resources
- Can view and manage all users, enrollments, and wishlists
- Can access admin-only endpoints

## Validation & Security

### Input Validation

- MongoDB ObjectId validation
- Required field validation
- Data type validation
- Length and format validation

### Security Features

- JWT token authentication
- Role-based authorization
- Input sanitization
- Error handling

## Environment Setup

### Required Environment Variables

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/novanector
JWT_SECRET=your-secret-key
```

### Dependencies

- express
- mongoose
- jsonwebtoken
- bcryptjs
- express-validator
- cors
- dotenv
- morgan
- multer

## Database Schema

### Enrollment Model

```javascript
{
  student: ObjectId (ref: User),
  course: ObjectId (ref: Course),
  status: String (active, completed, cancelled),
  progress: Number (0-100),
  amountPaid: Number,
  enrollmentDate: Date,
  lastAccessedAt: Date,
  completedAt: Date
}
```

### Wishlist Model

```javascript
{
  user: ObjectId (ref: User),
  courses: [{
    course: ObjectId (ref: Course),
    addedAt: Date
  }],
  isPublic: Boolean
}
```

## Testing

### Test Endpoints

Each route group includes a `/test` endpoint to verify the routes are working:

- `GET /api/enrollments/test`
- `GET /api/wishlist/test`

### Example Test Request

```javascript
GET /api/enrollments/test

Response:
{
  "success": true,
  "message": "Enrollment routes working!",
  "endpoints": [...]
}
```

## Error Handling

### Standard Error Response

```javascript
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE" // Optional
}
```

### Common Error Codes

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

## Code Structure

### Simplified Architecture

- **Controllers**: Clean, focused functions
- **Routes**: Simple route definitions with middleware
- **Middleware**: Modular authentication and validation
- **Models**: Straightforward Mongoose schemas
- **Validation**: Input validation with express-validator

### Key Improvements

1. **Removed unnecessary complexity**
2. **Simplified error handling**
3. **Clean, readable code**
4. **Focused functionality**
5. **Easy to understand and maintain**

This implementation provides a solid foundation for an online course platform with enrollment and wishlist features, using clean, maintainable code that's easy to understand and extend.
