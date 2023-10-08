import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import QRCode from "qrcode.react"; // Import QRCode
import "./Checkout.css"; // Import your CSS file for Checkout.js
import { Check } from "phosphor-react";

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  // Generate the QR code content (e.g., payment URL or data)
  const qrCodeContent = `https://example.com/payment?amount=${totalAmount}`;

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h1 className="checkout-heading">Thank You!</h1>
        <p className="checkout-message">
          Your order has been successfully placed. We appreciate your business!
        </p>
        <p className="checkout-total">
          Total Amount: ₹{totalAmount}
        </p>
        <div className="checkout-qr-code">
          {/* Render the QR code */}
          <QRCode value={qrCodeContent} size={128} />
        </div>
        <p className="checkout-visit-again">
          We look forward to serving you again soon. Have a great day!
        </p>
      </div>
    </div>
  );
};
export default Checkout;
  
  