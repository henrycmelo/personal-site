import { faSearch, faShoppingCart, faClock, faCheckCircle, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const journeyData = {
  phases: [
    {
      stage: "Discovery",
      icon: faSearch,
      actions: "Search for nearby steakhouse locations",
      thinking: "Which restaurant location is closest to me?",
      feeling: "Hopeful",
      painPoints: "Hard to compare different location menus",
      opportunities: "Show clear location-specific menus and availability"
    },
    {
      stage: "Menu Browsing",
      icon: faClipboardList,
      actions: "Browse menu items and customize order",
      thinking: "What are the customization options?",
      feeling: "Uncertain",
      painPoints: "Limited modification options",
      opportunities: "Provide detailed customization choices"
    },
    {
      stage: "Checkout",
      icon: faShoppingCart,
      actions: "Review order and complete payment",
      thinking: "Are all my modifications correct?",
      feeling: "Anxious",
      painPoints: "High delivery fees, unclear total cost",
      opportunities: "Transparent pricing and order confirmation"
    },
    {
      stage: "Waiting",
      icon: faClock,
      actions: "Track order status",
      thinking: "When will my food arrive?",
      feeling: "Impatient",
      painPoints: "Lack of real-time updates",
      opportunities: "Provide accurate status updates"
    },
    {
      stage: "Receiving",
      icon: faCheckCircle,
      actions: "Get order and verify accuracy",
      thinking: "Is everything correct?",
      feeling: "Relieved",
      painPoints: "Missing modifications",
      opportunities: "Clear order verification system"
    }
  ]
};

export default journeyData