document.addEventListener('DOMContentLoaded', function () {
    const connectBtn = document.getElementById('connectBtn');
  
    if (connectBtn) {
      connectBtn.addEventListener('click', () => {
        connectToRainbow();
      });
    }
  });
  
  function connectToRainbow() {
    // Check if Rainbow SDK is available
    if (typeof window.RainbowSDK !== 'undefined') {
      // Use Rainbow SDK to connect to the wallet
      window.RainbowSDK.connectWallet()
        .then(() => {
          console.log('Connected to Rainbow Wallet');
          // You can perform additional actions after connecting
        })
        .catch((error) => {
          console.error('Rainbow connection error:', error);
        });
    } else {
      console.error('Rainbow SDK is not available');
      // Provide a message or redirect to Rainbow SDK installation page
    }
  }
  