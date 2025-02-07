import personaSara from "../persona-steak.jpg"
import personaMichael from "../persona2-steak.jpg"

const personas= [
    {
      id: 1,
      image: personaSara,
      name: "Sarah Chen",
      occupation: "Marketing Director",
      location: "Seattle, WA",
      age: "35",
      personality: ["Ambitious", "Tech-savvy", "Quality-focused", "Time-conscious"],
      about: "Sarah is a busy marketing director who values efficiency and quality in her dining experiences. She frequently orders from premium restaurants for both personal meals and team lunches.",
      goals: [
        "Save time on meal planning",
        "Maintain high-quality dining standards",
        "Easy team lunch coordination",
        "Track expenses efficiently"
      ],
      painPoints: [
        "High delivery platform fees",
        "Inconsistent order quality",
        "Limited customization options",
        "Unclear delivery timing"
      ],
      behaviors: [
        "Orders 3-4 times per week",
        "Prefers premium restaurants",
        "Often coordinates team meals",
        "Values time over cost"
      ],
      quote: "I need a reliable way to order quality meals without spending too much time managing the process or worrying about the delivery."
    },
    {
      id: 2,
      image: personaMichael,
      name: "Michael Rodriguez",
      occupation: "Senior Project Manager",
      location: "Bellevue, WA",
      age: "42",
      personality: ["Family-oriented", "Detail-minded", "Health-conscious", "Value-seeker"],
      about: "Michael is a father of two who frequently orders family meals from premium restaurants. He values detailed menu information and the ability to customize orders for his family's diverse preferences and dietary needs.",
      goals: [
        "Find family-friendly premium options",
        "Customize orders for dietary needs",
        "Get reliable delivery times",
        "Save on multiple-item orders"
      ],
      painPoints: [
        "Limited modification options",
        "Unclear ingredient information",
        "High fees on large orders",
        "Inconsistent delivery estimates"
      ],
      behaviors: [
        "Orders 2-3 times per week",
        "Places large, multi-item orders",
        "Reads reviews and menu details thoroughly",
        "Plans meals in advance"
      ],
      quote: "I need to be able to customize orders for my whole family and know exactly when the food will arrive, without paying excessive delivery fees."
    }
  ];

  export default personas

