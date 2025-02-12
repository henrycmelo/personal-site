import ctaBefore from "../buttonsbefore.png"
import ctaAfter from "../buttonsafter.png"
import heroAfter from "../hero.png"
import hierarchyBefore from "../visualbefore.png"
import hierarchyAfter from "../visualafter.png"
import layoutAfter from "../layout.png"
import layoutbefore from "../layoutbefore.png"

const designRecommendations = [
    {
      title: "Call-to-Action (CTA) Button Optimization",
      description: "Strategic placement and design of donation button to maximize user engagement and conversion. Implementation of an accent color scheme to enhance visual prominence and create a clear distinction for primary actions.",
      beforeImage: ctaBefore,
      afterImage: ctaAfter,
      keyFeatures: [
        "Position above the fold",
        "Accent color implementation for better visibility",
        "Consistent location across pages",
        "Clear visual differentiation through color contrast"
      ]
    },
    {
      title: "Hero Section Redesign",
      description: "Crafting a compelling hero section that immediately communicates value and emotional connection.",
      beforeImage: ctaBefore,
      afterImage: heroAfter,
      keyFeatures: [
        "Clear, concise value proposition",
        "Emotional storytelling elements",
        "Direct visual path to donation action"
      ]
    },
    {
      title: "Visual Hierarchy Enhancement",
      description: "Implementing a structured visual approach to guide user attention and decision-making. Introduction of UI cards to create distinct content sections, improving information grouping and scanability while maintaining consistent spacing and visual rhythm across the interface.",
      beforeImage: hierarchyBefore,
      afterImage: hierarchyAfter,
      keyFeatures: [
        "UI card implementation for content organization",
        "Emphasize key information through card hierarchy",
        "Differentiate donation options with distinct card styles",
        "Integrated progress indicators",
        "Consistent spacing and padding within cards"
      ]
    },
    {
      title: "Navigation and Layout Optimization",
      description: "Streamlining user journey with intuitive navigation and logical information architecture. While an F-pattern layout would be optimal for user scanning behavior and content consumption, current design system constraints prevent full implementation. However, we recommend considering this pattern for future iterations to enhance readability and user engagement.",
      beforeImage: layoutbefore,
      afterImage: layoutAfter,
      keyFeatures: [
        "Direct path to donation form",
        "Logical content grouping",
        "Simplified, clear form layout",
        "Future consideration for F-pattern implementation"
      ]
    }
];

export default designRecommendations;