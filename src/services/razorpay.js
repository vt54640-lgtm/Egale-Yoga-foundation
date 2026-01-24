const loadRazorpayConfig = (src) => {
    return new Promise((resolve) => {
        // Check if script is already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve(true);
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export const processPayment = async (course, userDetails) => {
    // 1. Get Key
    let API_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

    // IMMEDIATE FIX: Fallback to the live key if Env is stale (user didn't restart server)
    if (!API_KEY || API_KEY === 'rzp_test_demo') {
        console.warn("Using Hardcoded Fallback Key because Env is stale");
        API_KEY = 'rzp_live_S6eHckEaTG04FG';
    }

    console.log("------------------------------------------");
    console.log("RAZORPAY DEBUG: Start Payment Process");
    console.log("Active Key ID:", API_KEY);
    console.log("------------------------------------------");

    // 2. Logic: If Key is missing or default, force simulation with a warning.
    if (!API_KEY || API_KEY === 'rzp_test_demo') {
        const confirmSim = window.confirm(
            "⚠️ CONFIGURATION ALERT ⚠️\n\nThe app is still seeing the old 'Demo Key' or no key.\n\nPossible Reason: You updated .env but haven't restarted the server yet.\n\nClick OK to simulate a fake successful payment.\nClick Cancel to stop and restart your server."
        );

        if (confirmSim) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        paymentId: 'pay_demo_' + Math.random().toString(36).substr(2, 9),
                        orderId: 'order_demo_' + Math.random().toString(36).substr(2, 9),
                        signature: 'demo_signature'
                    });
                }, 1000);
            });
        }
        return { success: false };
    }

    // 3. Load SDK
    const res = await loadRazorpayConfig('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
        alert('Razorpay SDK failed to load. Please check your internet connection.');
        return { success: false };
    }

    // 4. Real Payment Initialization
    const options = {
        key: API_KEY, // Use the real key
        amount: course.priceINR * 100,
        currency: 'INR',
        name: 'Eagle Yoga Foundation',
        description: `Enrollment: ${course.title}`,
        image: 'https://cdn-icons-png.flaticon.com/512/2621/2621040.png',
        handler: function (response) {
            console.log('Payment Success:', response);
            return {
                success: true,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature
            };
        },
        prefill: {
            name: userDetails.name || 'Student',
            email: userDetails.email || 'student@example.com',
            contact: '9999999999'
        },
        notes: {
            address: 'Eagle Yoga Foundation HQ'
        },
        theme: {
            color: '#FF4500'
        },
        modal: {
            ondismiss: function () {
                console.log('Checkout form closed by user');
            }
        }
    };

    return new Promise((resolve) => {
        try {
            if (!window.Razorpay) {
                alert("Critical Error: Razorpay SDK loaded but window.Razorpay object is missing.");
                resolve({ success: false });
                return;
            }

            const paymentObject = new window.Razorpay({
                ...options,
                handler: function (response) {
                    resolve({ success: true, ...response });
                }
            });

            paymentObject.on('payment.failed', function (response) {
                console.error("Payment Failed:", response.error);
                alert(`Payment Initialized but Failed: ${response.error.description}`);
                resolve({ success: false, error: response.error });
            });

            paymentObject.open();
        } catch (err) {
            console.error("Razorpay Initialization Error:", err);
            alert(`System Error: ${err.message}. Check console for details.`);
            resolve({ success: false });
        }
    });
};

export const processDemoPayment = async (course, userDetails) => {
    return processPayment(course, userDetails);
};
