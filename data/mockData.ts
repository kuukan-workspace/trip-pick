export type FoodItem = {
  id: string;
  name: string;
  category: string;
  summary: string;
  menu: string;
  rating: number;
  location: string;
};

export type FlightItem = {
  id: string;
  route: string;
  airline: string;
  priceFrom: string;
  note: string;
};

export type StayItem = {
  id: string;
  name: string;
  type: "Hotel" | "Ryokan" | "Local Stay";
  summary: string;
  nightlyFrom: string;
};

export type CityData = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  intro: string;
  flights: FlightItem[];
  stays: StayItem[];
  foods: FoodItem[];
};

// Keep all mock content in one file so beginners can edit city data quickly.
export const japanCities: CityData[] = [
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    tagline: "Neon nights, quiet shrines, and endless food spots",
    intro:
      "Tokyo blends future-facing neighborhoods with classic streets, making it easy to fill a short trip with variety.",
    flights: [
      {
        id: "tokyo-flight-1",
        route: "ICN -> HND (Round trip)",
        airline: "Korean Air",
        priceFrom: "$240",
        note: "Mock fare, not real-time pricing"
      },
      {
        id: "tokyo-flight-2",
        route: "LAX -> NRT (Round trip)",
        airline: "ANA",
        priceFrom: "$690",
        note: "Mock fare, seasonal changes not reflected"
      }
    ],
    stays: [
      {
        id: "tokyo-stay-1",
        name: "Asakusa View Hotel",
        type: "Hotel",
        summary: "Convenient base near Senso-ji with easy train access.",
        nightlyFrom: "$120"
      },
      {
        id: "tokyo-stay-2",
        name: "Kagurazaka Hanare",
        type: "Ryokan",
        summary: "Compact traditional-style rooms in a calm alley district.",
        nightlyFrom: "$180"
      },
      {
        id: "tokyo-stay-3",
        name: "Shimokitazawa Loft Stay",
        type: "Local Stay",
        summary: "Neighborhood apartment close to indie cafes and vintage shops.",
        nightlyFrom: "$95"
      }
    ],
    foods: [
      {
        id: "tokyo-food-1",
        name: "Menya Horizon",
        category: "Ramen",
        summary: "Rich tonkotsu broth with long-simmered pork flavor.",
        menu: "Signature tonkotsu ramen + ajitama",
        rating: 4.7,
        location: "Shibuya"
      },
      {
        id: "tokyo-food-2",
        name: "Sora Sushi Counter",
        category: "Sushi",
        summary: "Seasonal omakase focused on local market fish.",
        menu: "8-piece omakase lunch set",
        rating: 4.8,
        location: "Ginza"
      },
      {
        id: "tokyo-food-3",
        name: "Lantern Alley",
        category: "Izakaya",
        summary: "Late-night skewers and small plates with lively atmosphere.",
        menu: "Yakitori platter + lemon sour",
        rating: 4.5,
        location: "Shinjuku"
      }
    ]
  },
  {
    slug: "osaka",
    name: "Osaka",
    country: "Japan",
    tagline: "Street food capital with a friendly local vibe",
    intro:
      "Osaka is compact, energetic, and perfect for travelers who plan around what to eat next.",
    flights: [
      {
        id: "osaka-flight-1",
        route: "ICN -> KIX (Round trip)",
        airline: "Jeju Air",
        priceFrom: "$180",
        note: "Mock fare, not real-time pricing"
      },
      {
        id: "osaka-flight-2",
        route: "SFO -> KIX (Round trip)",
        airline: "United Airlines",
        priceFrom: "$760",
        note: "Mock fare, baggage costs excluded"
      }
    ],
    stays: [
      {
        id: "osaka-stay-1",
        name: "Namba Central Hotel",
        type: "Hotel",
        summary: "Walkable location for Dotonbori and metro connections.",
        nightlyFrom: "$105"
      },
      {
        id: "osaka-stay-2",
        name: "Tennoji Garden Ryokan",
        type: "Ryokan",
        summary: "Tatami rooms and communal bath near Tennoji station.",
        nightlyFrom: "$155"
      },
      {
        id: "osaka-stay-3",
        name: "Nakazakicho Townhouse",
        type: "Local Stay",
        summary: "Retro district guesthouse with cozy cafe streets nearby.",
        nightlyFrom: "$88"
      }
    ],
    foods: [
      {
        id: "osaka-food-1",
        name: "Takoyaki Maru",
        category: "Street Food",
        summary: "Crisp outside, creamy inside takoyaki made to order.",
        menu: "Classic takoyaki (8 pcs)",
        rating: 4.6,
        location: "Dotonbori"
      },
      {
        id: "osaka-food-2",
        name: "Kushikatsu Den",
        category: "Kushikatsu",
        summary: "Deep-fried skewers with rotating seasonal ingredients.",
        menu: "Chef's 10 skewer set",
        rating: 4.7,
        location: "Shinsekai"
      },
      {
        id: "osaka-food-3",
        name: "Okonomi House",
        category: "Okonomiyaki",
        summary: "Savory pancakes grilled in front of you at the table.",
        menu: "Special pork & seafood okonomiyaki",
        rating: 4.5,
        location: "Umeda"
      }
    ]
  },
  {
    slug: "fukuoka",
    name: "Fukuoka",
    country: "Japan",
    tagline: "Relaxed coastal city known for yatai food stalls",
    intro:
      "Fukuoka offers an easy pace and strong local food identity, especially around Hakata and Tenjin.",
    flights: [
      {
        id: "fukuoka-flight-1",
        route: "ICN -> FUK (Round trip)",
        airline: "T'way Air",
        priceFrom: "$150",
        note: "Mock fare, not real-time pricing"
      },
      {
        id: "fukuoka-flight-2",
        route: "NRT -> FUK (Round trip)",
        airline: "JAL",
        priceFrom: "$110",
        note: "Mock domestic pricing"
      }
    ],
    stays: [
      {
        id: "fukuoka-stay-1",
        name: "Hakata Riverside Hotel",
        type: "Hotel",
        summary: "Simple modern rooms close to Canal City and Hakata station.",
        nightlyFrom: "$98"
      },
      {
        id: "fukuoka-stay-2",
        name: "Yakuin Calm Ryokan",
        type: "Ryokan",
        summary: "Quiet ryokan feel in a residential part of the city.",
        nightlyFrom: "$140"
      },
      {
        id: "fukuoka-stay-3",
        name: "Momochi Bay Studio",
        type: "Local Stay",
        summary: "Beachside apartment with sunset walks and easy bus access.",
        nightlyFrom: "$82"
      }
    ],
    foods: [
      {
        id: "fukuoka-food-1",
        name: "Hakata Ichiban",
        category: "Ramen",
        summary: "Classic Hakata-style thin noodles with silky pork broth.",
        menu: "Hakata tonkotsu ramen + gyoza",
        rating: 4.8,
        location: "Hakata"
      },
      {
        id: "fukuoka-food-2",
        name: "Yatai Breeze",
        category: "Yatai",
        summary: "Open-air stall dining with mixed local small plates.",
        menu: "Mentaiko tamagoyaki + grilled skewers",
        rating: 4.6,
        location: "Tenjin"
      },
      {
        id: "fukuoka-food-3",
        name: "Sea Bowl Harbor",
        category: "Seafood",
        summary: "Fresh sashimi bowls with daily catch from local markets.",
        menu: "Chef's kaisendon bowl",
        rating: 4.7,
        location: "Nagahama"
      }
    ]
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return japanCities.find((city) => city.slug === slug);
}
