// context/ContextWrapper.js
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';

export const ContextWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};
