// FeePayment.js
import React, { useState } from 'react';
import './FeePayment.css';
import { jsPDF } from 'jspdf';

const FeePayment = () => {
  const [selectedFees, setSelectedFees] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [upiProvider, setUpiProvider] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bank: ''
  });
  const [receipts, setReceipts] = useState([]);
  const [transactionId, setTransactionId] = useState('');

  const [feeList, setFeeList] = useState([
    {
      id: 'tuition',
      name: 'Tuition Fee',
      amount: 75000,
      deadline: '2024-03-31',
      status: 'pending',
      description: 'Semester tuition fee'
    },
    {
      id: 'library',
      name: 'Library Fee',
      amount: 5000,
      deadline: '2024-03-31',
      status: 'pending',
      description: 'Annual library subscription'
    },
    {
      id: 'lab',
      name: 'Laboratory Fee',
      amount: 10000,
      deadline: '2024-03-31',
      status: 'pending',
      description: 'Laboratory and equipment usage'
    },
    {
      id: 'exam',
      name: 'Examination Fee',
      amount: 5000,
      deadline: '2024-03-15',
      status: 'pending',
      description: 'Semester examination fee'
    }
  ]);

  const banks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Punjab National Bank',
    'Bank of Baroda',
    'Canara Bank',
    'Union Bank of India'
  ];

  const handleFeeSelection = (feeId) => {
    setSelectedFees(prev => 
      prev.includes(feeId) 
        ? prev.filter(id => id !== feeId)
        : [...prev, feeId]
    );
    setShowPaymentOptions(false);
    setPaymentMethod('');
    setPaymentStatus(null);
  };

  const getTotalAmount = () => {
    return selectedFees.reduce((total, feeId) => {
      const fee = feeList.find(f => f.id === feeId);
      return total + (fee ? fee.amount : 0);
    }, 0);
  };

  const generateTransactionId = () => {
    return 'TXN' + Date.now() + Math.random().toString(36).substr(2, 5);
  };

  const generateReceipt = (status) => {
    const doc = new jsPDF();
    const txnId = generateTransactionId();
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    // Add receipt content
    doc.setFontSize(22);
    doc.text('Payment Receipt', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Transaction ID: ${txnId}`, 20, 40);
    doc.text(`Date: ${date}`, 20, 50);
    doc.text(`Time: ${time}`, 20, 60);
    doc.text(`Payment Method: ${paymentMethod.toUpperCase()}`, 20, 70);
    doc.text(`Status: ${status}`, 20, 80);

    // Add fee details table
    let yPos = 100;
    doc.text('Fee Details:', 20, yPos);
    yPos += 10;
    
    selectedFees.forEach(feeId => {
      const fee = feeList.find(f => f.id === feeId);
      doc.text(`${fee.name}: ₹${fee.amount}`, 30, yPos);
      yPos += 10;
    });

    doc.text(`Total Amount: ₹${getTotalAmount()}`, 20, yPos + 10);

    // Save the receipt
    const receiptData = {
      id: txnId,
      date: date,
      amount: getTotalAmount(),
      status: status,
      fees: selectedFees,
      pdf: doc.output('datauristring')
    };

    setReceipts(prev => [...prev, receiptData]);
    setTransactionId(txnId);

    return receiptData;
  };

  const simulatePaymentProcess = async () => {
    if (!paymentMethod) {
      setPaymentStatus({ type: 'error', message: 'Please select a payment method' });
      return;
    }

    setProcessing(true);
    setPaymentStatus({ type: 'processing', message: 'Initiating payment...' });

    // Validate payment details
    if (paymentMethod === 'card') {
      if (!paymentDetails.cardNumber || !paymentDetails.cardHolder || 
          !paymentDetails.expiryDate || !paymentDetails.cvv) {
        setPaymentStatus({ type: 'error', message: 'Please fill all card details' });
        setProcessing(false);
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!paymentDetails.upiId || !upiProvider) {
        setPaymentStatus({ type: 'error', message: 'Please enter UPI ID and select provider' });
        setProcessing(false);
        return;
      }
    } else if (paymentMethod === 'netbanking') {
      if (!paymentDetails.bank) {
        setPaymentStatus({ type: 'error', message: 'Please select a bank' });
        setProcessing(false);
        return;
      }
    }

    // Simulate payment stages
    await new Promise(resolve => setTimeout(resolve, 1500));
    setPaymentStatus({ type: 'processing', message: 'Connecting to payment gateway...' });

    await new Promise(resolve => setTimeout(resolve, 1500));
    setPaymentStatus({ type: 'processing', message: 'Verifying payment details...' });

    await new Promise(resolve => setTimeout(resolve, 2000));
    setPaymentStatus({ type: 'processing', message: 'Processing payment...' });

    // Simulate success/failure (90% success rate)
    const success = Math.random() < 0.9;

    if (success) {
      const receipt = generateReceipt('SUCCESS');
      setPaymentStatus({ 
        type: 'success', 
        message: 'Payment successful! Receipt generated.',
        receipt: receipt
      });
      
      // Update fee status
      setFeeList(prevFees => 
        prevFees.map(fee => 
          selectedFees.includes(fee.id) 
            ? { ...fee, status: 'paid' } 
            : fee
        )
      );
      setSelectedFees([]);
      setShowPaymentOptions(false);
    } else {
      setPaymentStatus({ 
        type: 'error', 
        message: 'Payment failed. Please try again or contact support.' 
      });
    }

    setProcessing(false);
  };

  const downloadReceipt = (receiptData) => {
    const link = document.createElement('a');
    link.href = receiptData.pdf;
    link.download = `receipt_${receiptData.id}.pdf`;
    link.click();
  };

  return (
    <div className="fee-payment-container">
      <h2>Fee Payment</h2>

      <div className="fee-table-section">
        <table className="fee-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Fee Type</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {feeList.map(fee => (
              <tr key={fee.id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedFees.includes(fee.id)} 
                    onChange={() => handleFeeSelection(fee.id)}
                    disabled={fee.status === 'paid'}
                  />
                </td>
                <td>{fee.name}</td>
                <td>₹{fee.amount.toLocaleString()}</td>
                <td>{fee.deadline}</td>
                <td>
                  <span className={`status-badge ${fee.status}`}>
                    {fee.status}
                  </span>
                </td>
                <td>
                  {receipts.filter(r => r.fees.includes(fee.id)).map(receipt => (
                    <button 
                      key={receipt.id} 
                      onClick={() => downloadReceipt(receipt)}
                      className="download-receipt"
                    >
                      Download
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedFees.length > 0 && (
        <div className="payment-summary">
          <h3>Total Amount: ₹{getTotalAmount().toLocaleString()}</h3>
          <button onClick={() => setShowPaymentOptions(true)} className="pay-button">
            Pay {getTotalAmount().toLocaleString()}
          </button>
        </div>
      )}

      {showPaymentOptions && (
        <div className="payment-options">
          <h3>Select Payment Method</h3>
          <div>
            <label>
              <input 
                type="radio" 
                value="card" 
                checked={paymentMethod === 'card'} 
                onChange={() => setPaymentMethod('card')} 
              />
              Credit/Debit Card
            </label>
            {paymentMethod === 'card' && (
              <div className="payment-details">
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  value={paymentDetails.cardNumber} 
                  onChange={e => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} 
                />
                <input 
                  type="text" 
                  placeholder="Card Holder Name" 
                  value={paymentDetails.cardHolder} 
                  onChange={e => setPaymentDetails({ ...paymentDetails, cardHolder: e.target.value })} 
                />
                <input 
                  type="text" 
                  placeholder="Expiry Date (MM/YY)" 
                  value={paymentDetails.expiryDate} 
                  onChange={e => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })} 
                />
                <input 
                  type="text" 
                  placeholder="CVV" 
                  value={paymentDetails.cvv} 
                  onChange={e => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} 
                />
              </div>
            )}
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                value="upi" 
                checked={paymentMethod === 'upi'} 
                onChange={() => setPaymentMethod('upi')} 
              />
              UPI
            </label>
            {paymentMethod === 'upi' && (
              <div className="payment-details">
                <input 
                  type="text" 
                  placeholder="UPI ID" 
                  value={paymentDetails.upiId} 
                  onChange={e => setPaymentDetails({ ...paymentDetails, upiId: e.target.value })} 
                />
                <select 
                  value={upiProvider} 
                  onChange={e => setUpiProvider(e.target.value)}
                >
                  <option value="">Select UPI Provider</option>
                  <option value="googlepay">Google Pay</option>
                  <option value="phonepe">PhonePe</option>
                  <option value="paytm">Paytm</option>
                </select>
              </div>
            )}
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                value="netbanking" 
                checked={paymentMethod === 'netbanking'} 
                onChange={() => setPaymentMethod('netbanking')} 
              />
              Net Banking
            </label>
            {paymentMethod === 'netbanking' && (
              <div className="payment-details">
                <select 
                  value={paymentDetails.bank} 
                  onChange={e => setPaymentDetails({ ...paymentDetails, bank: e.target.value })}
                >
                  <option value="">Select Bank</option>
                  {banks.map(bank => (
                    <option key={bank} value={bank}>{bank}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <button onClick={simulatePaymentProcess} className="confirm-payment-button" disabled={processing}>
            {processing ? 'Processing...' : 'Confirm Payment'}
          </button>
          {paymentStatus && (
            <div className={`payment-status ${paymentStatus.type}`}>
              {paymentStatus.message}
            </div>
          )}
        </div>
      )}

      {/* ... rest of the component */}
    </div>
  );
};

export default FeePayment;