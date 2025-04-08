import login from "../loginWireframe.png"
import home from "../homeWireframe.png"
import schedule from "../scheduleWireframe.png"

const digitalWireframes = [
    {
      title: "Login Page",
      description: "Users can login using their emails to their accounts or create a new one.",
      image: login,
      keyFeatures: [
        "Email and password input",
        "Sign up option",
        "Forgot password link"
      ]
    },
    {
      title: "session management screen",
      description: "Users can view their current session and manage their account settings.",
      image: home,
      keyFeatures: [
        "Session overview",
        "Account settings",
        "Package counter",
      ]
    },
    {
      title: "Book a session",
      description: "Calendar view for booking a session with a trainer.",
      image: schedule,
      keyFeatures: [
        "Calendar view",
        "Available time slots",
        "Trainer selection"
      ]
    }
  ];

  export default digitalWireframes