let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice task

let role = "Enrolled Member";
let authorizedAccess;
let message;

switch (role) {
    case "Employee":
        authorizedAccess = "Dietary Services";
        message = "You are eligible to avail dietary services.";
        break;
    case "Enrolled Member":
        authorizedAccess = "Dietary Services and one-on-one interaction with a dietician";
        message = "You are eligible to avail dietary services and one-on-one dietician sessions.";
        break;
    case "Subscriber":
        authorizedAccess = "Partial Dietary Services";
        message = "You are eligible to partially avail dietary services.";
        break;
    case "Non-Subscriber":
        authorizedAccess = "Need to enroll/subscribe";
        message = "You will be made eligible to avail the services upon enrolling or subscribing.";
        break;
    default:
        authorizedAccess = "Unknown";
        message = "Please register a role.";
}

console.log("Authorized Access:", authorizedAccess);
console.log("Eligibility Message:", message);
