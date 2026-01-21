// Helper to load the Razorpay SDK
const loadRazorpayConfig = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const processPayment = async (course, userDetails) => {
    const API_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_demo';

    // DEMO MODE: If using the placeholder key, simulate success
    if (API_KEY === 'rzp_test_demo' || !API_KEY) {
        console.warn('Razorpay Key is "rzp_test_demo". Running in SIMULATION mode.');
        return new Promise((resolve) => {
            const confirmed = window.confirm(
                `[DEMO MODE]\n\nRazorpay API Key is not set or is 'rzp_test_demo'.\n\nWould you like to simulate a successful payment for ${course.title} (₹${course.priceINR})?`
            );

            if (confirmed) {
                setTimeout(() => {
                    resolve({
                        success: true,
                        paymentId: 'pay_demo_' + Math.random().toString(36).substr(2, 9),
                        orderId: 'order_demo_' + Math.random().toString(36).substr(2, 9),
                        signature: 'demo_signature'
                    });
                }, 1000);
            } else {
                resolve({ success: false });
            }
        });
    }

    // REAL MODE: Try to load SDK and open actual Razorpay
    const res = await loadRazorpayConfig('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
        alert('Razorpay SDK failed to load. Please check your internet connection.');
        return { success: false };
    }

    const options = {
        key: API_KEY,
        amount: course.priceINR * 100,
        currency: 'INR',
        name: 'Eagle Yoga Foundation',
        description: `Enrollment: ${course.title}`,
        image: 'https://cdn-icons-png.flaticon.com/512/2621/2621040.png',
        handler: function (response) {
            console.log('Payment ID: ', response.razorpay_payment_id);
            // In a real app, verifying signature on backend is mandatory
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
            color: '#FF4500' // Primary Brand Color
        }
    };

    return new Promise((resolve) => {
        try {
            const paymentObject = new window.Razorpay({
                ...options,
                handler: function (response) {
                    resolve({ success: true, ...response });
                }
            });

            paymentObject.on('payment.failed', function (response) {
                console.error("Payment Failed:", response.error);
                alert(`Payment Failed: ${response.error.description}`);
                resolve({ success: false, error: response.error });
            });

            paymentObject.open();
        } catch (err) {
            console.error("Razorpay Initialization Error:", err);
            alert("Could not initialize payment gateway. Please check your API Key.");
            resolve({ success: false });
        }
    });
};

export const processDemoPayment = async (course, userDetails) => {
    return processPayment(course, userDetails);
};
