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
        "Above-the-fold placement",
        "Accent color visibility",
        "Consistent positioning",
        "Strong color contrast"
      ]
    },
    {
      title: "Hero Section Redesign",
      description: "Crafting a compelling hero section that immediately communicates value and emotional connection.",
      beforeImage: ctaBefore,
      afterImage: heroAfter,
      keyFeatures: [
        "Clear value proposition",
        "Emotional storytelling",
        "Direct donation path"
      ]
    },
    {
      title: "Visual Hierarchy Enhancement",
      description: "Implementing a structured visual approach to guide user attention and decision-making. Introduction of UI cards to create distinct content sections, improving information grouping and scanability while maintaining consistent spacing and visual rhythm across the interface.",
      beforeImage: hierarchyBefore,
      afterImage: hierarchyAfter,
      keyFeatures: [
        "UI cards for organization",
        "Emphasized key info",
        "Distinct donation options",
        "Progress indicators",
        "Consistent spacing"
      ]
    },
    {
      title: "Navigation and Layout Optimization",
      description: "Streamlining user journey with intuitive navigation and logical information architecture. While an F-pattern layout would be optimal for user scanning behavior and content consumption, current design system constraints prevent full implementation. However, we recommend considering this pattern for future iterations to enhance readability and user engagement.",
      beforeImage: layoutbefore,
      afterImage: layoutAfter,
      keyFeatures: [
        "Direct donation path",
        "Logical content flow",
        "Simplified form layout",
        "Future F-pattern use"
      ]
    }
];

export default designRecommendations;
