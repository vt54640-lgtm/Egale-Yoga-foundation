// Simple Authentication Service
// This uses localStorage for demo. Can be upgraded to Supabase later.

const AUTH_KEY = 'eagle_yoga_auth';
const USERS_KEY = 'eagle_yoga_users';

// Get current user
export const getCurrentUser = () => {
    const authData = localStorage.getItem(AUTH_KEY);
    return authData ? JSON.parse(authData) : null;
};

// Check if user is logged in
export const isAuthenticated = () => {
    return getCurrentUser() !== null;
};

// Register new user
export const register = async (userData) => {
    try {
        // Get existing users
        const usersData = localStorage.getItem(USERS_KEY);
        const users = usersData ? JSON.parse(usersData) : [];

        // Check if email already exists
        const existingUser = users.find(u => u.email === userData.email);
        if (existingUser) {
            throw new Error('Email already registered');
        }

        // Create new user
        const newUser = {
            id: 'user_' + Date.now(),
            name: userData.name,
            email: userData.email,
            phone: userData.phone || '',
            password: userData.password, // In production, this should be hashed
            createdAt: new Date().toISOString(),
            enrolledCourses: [],
            healthProfile: null,
        };

        // Save user
        users.push(newUser);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // Auto login
        const authUser = { ...newUser };
        delete authUser.password;
        localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));

        return { success: true, user: authUser };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Login user
export const login = async (email, password) => {
    try {
        const usersData = localStorage.getItem(USERS_KEY);
        const users = usersData ? JSON.parse(usersData) : [];

        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const authUser = { ...user };
        delete authUser.password;
        localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));

        return { success: true, user: authUser };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Logout user
export const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    return { success: true };
};

// Update user profile
export const updateProfile = async (updates) => {
    try {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            throw new Error('Not authenticated');
        }

        const usersData = localStorage.getItem(USERS_KEY);
        const users = usersData ? JSON.parse(usersData) : [];

        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }

        // Update user
        users[userIndex] = { ...users[userIndex], ...updates };
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // Update auth
        const updatedUser = { ...users[userIndex] };
        delete updatedUser.password;
        localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUser));

        return { success: true, user: updatedUser };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Enroll in course
export const enrollInCourse = async (courseId, paymentDetails) => {
    try {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            throw new Error('Please login to enroll');
        }

        const usersData = localStorage.getItem(USERS_KEY);
        const users = usersData ? JSON.parse(usersData) : [];

        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }

        // Add enrollment
        const enrollment = {
            courseId,
            enrolledAt: new Date().toISOString(),
            paymentId: paymentDetails.paymentId,
            status: 'active',
            progress: 0,
        };

        if (!users[userIndex].enrolledCourses) {
            users[userIndex].enrolledCourses = [];
        }

        users[userIndex].enrolledCourses.push(enrollment);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // Update auth
        const updatedUser = { ...users[userIndex] };
        delete updatedUser.password;
        localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUser));

        return { success: true, enrollment };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Get user enrollments
export const getUserEnrollments = () => {
    const user = getCurrentUser();
    return user?.enrolledCourses || [];
};

// Save health profile
export const saveHealthProfile = async (healthData) => {
    try {
        const result = await updateProfile({ healthProfile: healthData });
        return result;
    } catch (error) {
        return { success: false, error: error.message };
    }
};

export default {
    getCurrentUser,
    isAuthenticated,
    register,
    login,
    logout,
    updateProfile,
    enrollInCourse,
    getUserEnrollments,
    saveHealthProfile,
};
