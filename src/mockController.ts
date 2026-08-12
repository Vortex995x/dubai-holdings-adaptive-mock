export interface ConversationEntry {
  identifier: string;
  entryPayload: {
    abstractMessage: {
      staticContent: {
        formatType: string;
        text: string;
      };
    };
    entryType: string;
    sender: {
      role: string;
      appType?: string;
    };
  };
  transcriptedTimestamp: number;
}

export interface StaticContentMessageTextPayload {
  text: string;
  curation?: any;
  template?: { name: string }[];
  options?: { name: string }[];
}

export const ConversationEventTypes = {
  ON_EMBEDDED_MESSAGE_SENT: 'onEmbeddedMessageSent',
  ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STARTED: 'onEmbeddedMessagingTypingIndicatorStarted',
  ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STOPPED: 'onEmbeddedMessagingTypingIndicatorStopped',
  ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED: 'onEmbeddedMessagingContentReceived',
  ON_EMBEDDED_MESSAGING_CONVERSATION_READY: 'onEmbeddedMessagingConversationReady',
  ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED: 'onEmbeddedMessagingConversationOpened',
  ON_EMBEDDED_MESSAGING_CONVERSATION_STARTED: 'onEmbeddedMessagingConversationStarted',
  ON_EMBEDDED_MESSAGING_CONVERSATION_CLOSED: 'onEmbeddedMessagingConversationClosed',
  ON_EMBEDDED_MESSAGING_WINDOW_MINIMIZED: 'onEmbeddedMessagingWindowMinimized',
  ON_EMBEDDED_MESSAGING_WINDOW_MAXIMIZED: 'onEmbeddedMessagingWindowMaximized',
  ON_EMBEDDED_MESSAGING_LIST_CONVERSATION_ENTRIES: 'onEmbeddedMessagingListConversationEntries',
  ON_EMBEDDED_MESSAGING_DELIVERED: 'onEmbeddedMessagingDelivered',
  ON_EMBEDDED_MESSAGE_READ: 'onEmbeddedMessageRead',
  ON_EMBEDDED_MESSAGING_CONVERSATION_PARTICIPANT_CHANGED: 'onEmbeddedMessagingConversationParticipantChanged',
  ON_EMBEDDED_MESSAGING_CONVERSATION_ROUTED: 'onEmbeddedMessagingConversationRouted',
} as const;

const MOCK_RESPONSES: Record<string, StaticContentMessageTextPayload> = {
  "default": {
    "text": "Welcome to Dubai Parks and Resorts! Ready for an adrenaline-filled day? I can recommend the best thrill rides, compare experiences and create a mock ticket booking. What would you like to explore?",
    "options": [
      {
        "name": "Show me the biggest thrills"
      },
      {
        "name": "Compare thrill experiences"
      },
      {
        "name": "Tell me about MOTIONGATE"
      },
      {
        "name": "Book a park visit"
      }
    ]
  },
  "show me the biggest thrills": {
    "text": "These are my top recommendations for thrill seekers — from cinematic flying and spinning coasters to a football-themed race for glory.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "MG-JW-001",
                "name": "John Wick: Open Contract",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/john_wick_0.webp",
                "productLabel": "High Thrill",
                "description": "A thrilling 4D flying coaster encounter with John Wick.",
                "longDescription": "Hurtle through an action-packed encounter with John Wick on this immersive 4D flying coaster. Choose whether to hunt him or help him as the story unfolds around you.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/attraction/john-wick-open-contract",
                "category1": "Lionsgate",
                "category3": "MOTIONGATE Dubai",
                "rideType": "4D Flying Coaster",
                "thrillLevel": "High"
              },
              {
                "sku": "MG-NYSM-001",
                "name": "Now You See Me: High Roller",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/now_you_see.webp",
                "productLabel": "High Thrill",
                "description": "A dizzying spin coaster inspired by the Four Horsemen.",
                "longDescription": "Join the Horsemen on a high-speed heist aboard an exciting spin coaster where twists, turns and changing direction reveal the ride’s secrets.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/motiongatetm-dubai",
                "category1": "Lionsgate",
                "category3": "MOTIONGATE Dubai",
                "rideType": "Spin Coaster",
                "thrillLevel": "High"
              },
              {
                "sku": "MG-DG-001",
                "name": "Dragon Gliders",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/dragon_gliders.webp",
                "productLabel": "Signature Ride",
                "description": "Fly with Hiccup and Toothless above the Forbidden Islands.",
                "longDescription": "A suspended roller coaster that carries you through the world of How to Train Your Dragon, from the Great Hall into caves high above Berk.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/motiongatetm-dubai",
                "category1": "DreamWorks",
                "category3": "MOTIONGATE Dubai",
                "rideType": "Suspended Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Compare thrill experiences"
      },
      {
        "name": "John Wick: Open Contract"
      },
      {
        "name": "Book MOTIONGATE tickets"
      }
    ]
  },
  "tell me about motiongate": {
    "text": "MOTIONGATE Dubai brings Hollywood and animated worlds to life. For thrill seekers, its standout experiences include John Wick: Open Contract, Now You See Me: High Roller and Dragon Gliders.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "MG-JW-001",
                "name": "John Wick: Open Contract",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/john_wick_0.webp",
                "productLabel": "High Thrill",
                "description": "A thrilling 4D flying coaster encounter with John Wick.",
                "longDescription": "Hurtle through an action-packed encounter with John Wick on this immersive 4D flying coaster. Choose whether to hunt him or help him as the story unfolds around you.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/attraction/john-wick-open-contract",
                "category1": "Lionsgate",
                "category3": "MOTIONGATE Dubai",
                "rideType": "4D Flying Coaster",
                "thrillLevel": "High"
              },
              {
                "sku": "MG-NYSM-001",
                "name": "Now You See Me: High Roller",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/now_you_see.webp",
                "productLabel": "High Thrill",
                "description": "A dizzying spin coaster inspired by the Four Horsemen.",
                "longDescription": "Join the Horsemen on a high-speed heist aboard an exciting spin coaster where twists, turns and changing direction reveal the ride’s secrets.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/motiongatetm-dubai",
                "category1": "Lionsgate",
                "category3": "MOTIONGATE Dubai",
                "rideType": "Spin Coaster",
                "thrillLevel": "High"
              },
              {
                "sku": "MG-DG-001",
                "name": "Dragon Gliders",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/dragon_gliders.webp",
                "productLabel": "Signature Ride",
                "description": "Fly with Hiccup and Toothless above the Forbidden Islands.",
                "longDescription": "A suspended roller coaster that carries you through the world of How to Train Your Dragon, from the Great Hall into caves high above Berk.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/motiongatetm-dubai",
                "category1": "DreamWorks",
                "category3": "MOTIONGATE Dubai",
                "rideType": "Suspended Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Compare thrill experiences"
      },
      {
        "name": "Book MOTIONGATE tickets"
      }
    ]
  },
  "real madrid world": {
    "text": "Real Madrid World is the world’s first football theme park. Goal Coaster is the headline recommendation for visitors who want speed with a football theme.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "RMW-GC-001",
                "name": "Goal Coaster",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2025-07/314x313%20-%20RMW-Thumbnail-HP.webp",
                "productLabel": "Football Thrill",
                "description": "Race through the Goal Archway in pursuit of the winner.",
                "longDescription": "Compete to score the winner as you race rival teams, fly through the Goal Archway and celebrate victory in the world’s first football theme park.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/realmadridworld/attraction",
                "category1": "Real Madrid World",
                "category3": "Dubai Parks and Resorts",
                "rideType": "Roller Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Book Real Madrid World tickets"
      },
      {
        "name": "Compare thrill experiences"
      }
    ]
  },
  "john wick: open contract": {
    "text": "Hurtle through an action-packed encounter with John Wick on this immersive 4D flying coaster. Choose whether to hunt him or help him as the story unfolds around you.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "MG-JW-001",
                "name": "John Wick: Open Contract",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/john_wick_0.webp",
                "productLabel": "High Thrill",
                "description": "A thrilling 4D flying coaster encounter with John Wick.",
                "longDescription": "Hurtle through an action-packed encounter with John Wick on this immersive 4D flying coaster. Choose whether to hunt him or help him as the story unfolds around you.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/attraction/john-wick-open-contract",
                "category1": "Lionsgate",
                "category3": "MOTIONGATE Dubai",
                "rideType": "4D Flying Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Book MOTIONGATE tickets"
      }
    ]
  },
  "now you see me: high roller": {
    "text": "Join the Horsemen on a high-speed heist aboard an exciting spin coaster where twists, turns and changing direction reveal the ride’s secrets.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "MG-NYSM-001",
                "name": "Now You See Me: High Roller",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/now_you_see.webp",
                "productLabel": "High Thrill",
                "description": "A dizzying spin coaster inspired by the Four Horsemen.",
                "longDescription": "Join the Horsemen on a high-speed heist aboard an exciting spin coaster where twists, turns and changing direction reveal the ride’s secrets.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/motiongatetm-dubai",
                "category1": "Lionsgate",
                "category3": "MOTIONGATE Dubai",
                "rideType": "Spin Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Book MOTIONGATE tickets"
      }
    ]
  },
  "dragon gliders": {
    "text": "A suspended roller coaster that carries you through the world of How to Train Your Dragon, from the Great Hall into caves high above Berk.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "MG-DG-001",
                "name": "Dragon Gliders",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/dragon_gliders.webp",
                "productLabel": "Signature Ride",
                "description": "Fly with Hiccup and Toothless above the Forbidden Islands.",
                "longDescription": "A suspended roller coaster that carries you through the world of How to Train Your Dragon, from the Great Hall into caves high above Berk.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/motiongatetm-dubai",
                "category1": "DreamWorks",
                "category3": "MOTIONGATE Dubai",
                "rideType": "Suspended Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Book MOTIONGATE tickets"
      }
    ]
  },
  "goal coaster": {
    "text": "Compete to score the winner as you race rival teams, fly through the Goal Archway and celebrate victory in the world’s first football theme park.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "DPR_Thrill_Recommendations",
            "data": [
              {
                "sku": "RMW-GC-001",
                "name": "Goal Coaster",
                "Image": "https://www.dubaiparksandresorts.com/sites/default/files/2025-07/314x313%20-%20RMW-Thumbnail-HP.webp",
                "productLabel": "Football Thrill",
                "description": "Race through the Goal Archway in pursuit of the winner.",
                "longDescription": "Compete to score the winner as you race rival teams, fly through the Goal Archway and celebrate victory in the world’s first football theme park.",
                "productUrl": "https://www.dubaiparksandresorts.com/en/realmadridworld/attraction",
                "category1": "Real Madrid World",
                "category3": "Dubai Parks and Resorts",
                "rideType": "Roller Coaster",
                "thrillLevel": "High"
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "Recs"
      }
    ],
    "options": [
      {
        "name": "Book Real Madrid World tickets"
      }
    ]
  },
  "compare thrill experiences": {
    "text": "Here is a quick comparison of four standout experiences for thrill seekers.",
    "curation": {
      "products": [
        {
          "id": "MG-JW-001",
          "image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/john_wick_0.webp",
          "name": "John Wick: Open Contract",
          "price": "MOTIONGATE",
          "rating": 4.9,
          "features": [
            {
              "name": "Experience",
              "value": "4D flying coaster"
            },
            {
              "name": "Theme",
              "value": "John Wick"
            },
            {
              "name": "Thrill",
              "value": "High"
            },
            {
              "name": "Best for",
              "value": "Action fans"
            }
          ]
        },
        {
          "id": "MG-NYSM-001",
          "image": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/now_you_see.webp",
          "name": "Now You See Me: High Roller",
          "price": "MOTIONGATE",
          "rating": 4.8,
          "features": [
            {
              "name": "Experience",
              "value": "Spin coaster"
            },
            {
              "name": "Theme",
              "value": "Now You See Me"
            },
            {
              "name": "Thrill",
              "value": "High"
            },
            {
              "name": "Best for",
              "value": "Twists and spins"
            }
          ]
        },
        {
          "id": "RMW-GC-001",
          "image": "https://www.dubaiparksandresorts.com/sites/default/files/2025-07/314x313%20-%20RMW-Thumbnail-HP.webp",
          "name": "Goal Coaster",
          "price": "Real Madrid World",
          "rating": 4.7,
          "features": [
            {
              "name": "Experience",
              "value": "Roller coaster"
            },
            {
              "name": "Theme",
              "value": "Real Madrid"
            },
            {
              "name": "Thrill",
              "value": "High"
            },
            {
              "name": "Best for",
              "value": "Football fans"
            }
          ]
        }
      ]
    },
    "template": [
      {
        "name": "Comparison"
      }
    ]
  },
  "book a park visit": {
    "text": "Which park would you like to include in this mock booking?",
    "options": [
      {
        "name": "MOTIONGATE Dubai"
      },
      {
        "name": "Real Madrid World"
      }
    ]
  },
  "schedule visit motiongate": {
    "text": "Excellent choice. Which day would you like to visit MOTIONGATE Dubai?",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "Schedule_Appointment",
            "data": [
              {
                "page_info": {
                  "project_name": "MOTIONGATE Dubai",
                  "page_title": "Choose Your Visit Date",
                  "hero_image_url": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/john_wick_0.webp",
                  "hero_label": "MOTIONGATE Dubai"
                },
                "sales_center": {
                  "name": "Dubai Parks and Resorts",
                  "address": {
                    "line_1": "Sheikh Zayed Road (E11), Exit 25",
                    "line_2": "Jebel Ali, Dubai",
                    "region": "UAE"
                  },
                  "map_data": {
                    "directions_url": "https://www.google.com/maps/search/?api=1&query=Dubai+Parks+and+Resorts"
                  },
                  "operating_hours": [
                    {
                      "days": "Selected visit",
                      "hours": "Mock reservation",
                      "current_status": "Open"
                    }
                  ],
                  "contact_methods": {
                    "phone": "800 AMAZING (2629 464)"
                  },
                  "visitor_notes": "Demo only — no payment has been taken and no real ticket has been issued."
                }
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "ScheduleAppointment"
      }
    ],
    "options": [
      {
        "name": "This Saturday"
      },
      {
        "name": "This Sunday"
      },
      {
        "name": "Another day"
      }
    ]
  },
  "schedule visit real madrid": {
    "text": "Great choice. Which day would you like to visit Real Madrid World?",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "Schedule_Appointment",
            "data": [
              {
                "page_info": {
                  "project_name": "Real Madrid World",
                  "page_title": "Choose Your Visit Date",
                  "hero_image_url": "https://www.dubaiparksandresorts.com/sites/default/files/2025-07/314x313%20-%20RMW-Thumbnail-HP.webp",
                  "hero_label": "Real Madrid World"
                },
                "sales_center": {
                  "name": "Dubai Parks and Resorts",
                  "address": {
                    "line_1": "Sheikh Zayed Road (E11), Exit 25",
                    "line_2": "Jebel Ali, Dubai",
                    "region": "UAE"
                  },
                  "map_data": {
                    "directions_url": "https://www.google.com/maps/search/?api=1&query=Dubai+Parks+and+Resorts"
                  },
                  "operating_hours": [
                    {
                      "days": "Selected visit",
                      "hours": "Mock reservation",
                      "current_status": "Open"
                    }
                  ],
                  "contact_methods": {
                    "phone": "800 AMAZING (2629 464)"
                  },
                  "visitor_notes": "Demo only — no payment has been taken and no real ticket has been issued."
                }
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "ScheduleAppointment"
      }
    ],
    "options": [
      {
        "name": "This Saturday"
      },
      {
        "name": "This Sunday"
      },
      {
        "name": "Another day"
      }
    ]
  },
  "this saturday": {
    "text": "How many thrill seekers are joining?",
    "options": [
      {
        "name": "1 guest"
      },
      {
        "name": "2 guests"
      },
      {
        "name": "3 guests"
      },
      {
        "name": "4 guests"
      }
    ]
  },
  "this sunday": {
    "text": "How many thrill seekers are joining?",
    "options": [
      {
        "name": "1 guest"
      },
      {
        "name": "2 guests"
      },
      {
        "name": "3 guests"
      },
      {
        "name": "4 guests"
      }
    ]
  },
  "another day": {
    "text": "For this mock, let’s continue with the next available visit day.",
    "options": [
      {
        "name": "This Saturday"
      },
      {
        "name": "This Sunday"
      }
    ]
  },
  "1 guest": {
    "text": "Choose your mock ticket option.",
    "options": [
      {
        "name": "One Park Pass"
      },
      {
        "name": "Two Park Pass"
      }
    ]
  },
  "2 guests": {
    "text": "Choose your mock ticket option for two guests.",
    "options": [
      {
        "name": "One Park Pass"
      },
      {
        "name": "Two Park Pass"
      }
    ]
  },
  "3 guests": {
    "text": "Choose your mock ticket option for three guests.",
    "options": [
      {
        "name": "One Park Pass"
      },
      {
        "name": "Two Park Pass"
      }
    ]
  },
  "4 guests": {
    "text": "Choose your mock ticket option for four guests.",
    "options": [
      {
        "name": "One Park Pass"
      },
      {
        "name": "Two Park Pass"
      }
    ]
  },
  "one park pass": {
    "text": "Great. Please type your email address to generate the mock booking confirmation."
  },
  "two park pass": {
    "text": "Great. Please type your email address to generate the mock booking confirmation."
  },
  "confirm viewing": {
    "text": "Your mock park visit is confirmed! Here are the demonstration details.",
    "curation": [
      {
        "personalizations": [
          {
            "personalizationPointName": "Schedule_Appointment",
            "data": [
              {
                "page_info": {
                  "project_name": "Dubai Parks and Resorts",
                  "page_title": "Mock Booking Confirmed",
                  "hero_image_url": "https://www.dubaiparksandresorts.com/sites/default/files/2024-03/john_wick_0.webp",
                  "hero_label": "Dubai Parks and Resorts"
                },
                "sales_center": {
                  "name": "Dubai Parks and Resorts",
                  "address": {
                    "line_1": "Sheikh Zayed Road (E11), Exit 25",
                    "line_2": "Jebel Ali, Dubai",
                    "region": "UAE"
                  },
                  "map_data": {
                    "directions_url": "https://www.google.com/maps/search/?api=1&query=Dubai+Parks+and+Resorts"
                  },
                  "operating_hours": [
                    {
                      "days": "Selected visit",
                      "hours": "Mock reservation",
                      "current_status": "Open"
                    }
                  ],
                  "contact_methods": {
                    "phone": "800 AMAZING (2629 464)"
                  },
                  "visitor_notes": "Demo only — no payment has been taken and no real ticket has been issued."
                }
              }
            ]
          }
        ]
      }
    ],
    "template": [
      {
        "name": "ScheduleAppointment"
      }
    ]
  },
  "tell me about ticket prices": {
    "text": "Ticket prices and promotions may change. This demonstration intentionally avoids quoting a live price. The official Buy Tickets page should be used for real availability and pricing.",
    "options": [
      {
        "name": "Book a park visit"
      },
      {
        "name": "Show me the biggest thrills"
      }
    ]
  }
};

const ALIASES: Record<string, string> = {
  "thrill": "show me the biggest thrills",
  "thrills": "show me the biggest thrills",
  "adrenaline": "show me the biggest thrills",
  "roller coaster": "show me the biggest thrills",
  "rides": "show me the biggest thrills",
  "motiongate": "tell me about motiongate",
  "motion gate": "tell me about motiongate",
  "real madrid": "real madrid world",
  "football": "real madrid world",
  "john wick": "john wick: open contract",
  "high roller": "now you see me: high roller",
  "now you see me": "now you see me: high roller",
  "dragon": "dragon gliders",
  "goal coaster": "goal coaster"
};

const INTENT_KEYWORDS = ['compare', 'comparison', 'versus', 'vs'];
const SCHEDULE_KEYWORDS = ['ticket', 'tickets', 'visit', 'book', 'booking', 'reserve'];
const PAYMENT_KEYWORDS = ['price', 'prices', 'cost', 'how much'];

const SCHEDULE_PROJECT_MAP: Record<string, string> = {
  "motiongate": "schedule visit motiongate",
  "motion gate": "schedule visit motiongate",
  "john wick": "schedule visit motiongate",
  "real madrid": "schedule visit real madrid",
  "football": "schedule visit real madrid"
};

// Detect if user typed something that looks like an email or phone (triggers confirmation)
function looksLikeContactInfo(msg: string): boolean {
  return /[@]/.test(msg) || /\+?\d[\d\s\-]{7,}/.test(msg);
}

function findResponse(userMessage: string): StaticContentMessageTextPayload {
  const normalised = userMessage.toLowerCase().trim();
  if (MOCK_RESPONSES[normalised]) return MOCK_RESPONSES[normalised];

  // If user provides contact info (email/phone), confirm the viewing
  if (looksLikeContactInfo(normalised)) {
    return MOCK_RESPONSES['confirm viewing'];
  }

  // Schedule intent — check if a project is also mentioned
  const isScheduleIntent = SCHEDULE_KEYWORDS.some(k => normalised.includes(k));
  if (isScheduleIntent) {
    const projectKeys = Object.keys(SCHEDULE_PROJECT_MAP).sort((a, b) => b.length - a.length);
    for (const proj of projectKeys) {
      if (normalised.includes(proj)) {
        return MOCK_RESPONSES[SCHEDULE_PROJECT_MAP[proj]];
      }
    }
    return MOCK_RESPONSES['schedule a viewing'];
  }

  // Compare intent
  if (INTENT_KEYWORDS.some(k => normalised.includes(k))) {
    return MOCK_RESPONSES['compare these properties'];
  }

  // Payment intent
  if (PAYMENT_KEYWORDS.some(k => normalised.includes(k))) {
    return MOCK_RESPONSES['tell me about payment plans'];
  }

  // Then check project/location aliases (longest match wins)
  const aliasKeys = Object.keys(ALIASES).sort((a, b) => b.length - a.length);
  for (const alias of aliasKeys) {
    if (normalised.includes(alias)) {
      return MOCK_RESPONSES[ALIASES[alias]];
    }
  }

  // Score each key by how many of its words appear in the user message
  let bestKey = '';
  let bestScore = 0;
  for (const key of Object.keys(MOCK_RESPONSES)) {
    if (key === 'default') continue;
    const keyWords = key.split(/\s+/);
    const matchedWords = keyWords.filter(w => normalised.includes(w));
    const score = matchedWords.length / keyWords.length;
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  }

  if (bestScore >= 0.5 && bestKey) return MOCK_RESPONSES[bestKey];
  return MOCK_RESPONSES['default'];
}

let messageIdCounter = 0;

function createEntry(text: string, isUser: boolean): ConversationEntry {
  messageIdCounter++;
  const payload: StaticContentMessageTextPayload = isUser
    ? { text }
    : findResponse(text);

  return {
    identifier: `msg-${messageIdCounter}`,
    entryPayload: {
      abstractMessage: {
        staticContent: {
          formatType: "Text",
          text: JSON.stringify(payload),
        },
      },
      entryType: "Message",
      sender: {
        role: isUser ? "EndUser" : "Agent",
        appType: isUser ? "custom" : "agent",
      },
    },
    transcriptedTimestamp: Date.now(),
  };
}

export function initMockController() {
  const Events = ConversationEventTypes;
  let conversationStarted = false;

  window.AdaptiveWebsite = {
    initialize: () => {},
    sendTextMessage: async (value: string) => {
      const userEntry = createEntry(value, true);
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
        detail: { conversationEntry: userEntry },
      }));

      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STARTED));

      setTimeout(() => {
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STOPPED));

        const agentEntry = createEntry(value, false);
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
          detail: { conversationEntry: agentEntry },
        }));

        const response = findResponse(value);
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
          detail: { content: response.curation || response.template ? response : null },
        }));
      }, 1200 + Math.random() * 800);
    },
    minimize: () => {
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_WINDOW_MINIMIZED));
    },
    maximize: () => {
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_WINDOW_MAXIMIZED));
      if (!conversationStarted) {
        conversationStarted = true;
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED));
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
            detail: { conversationEntry: createEntry('default', false) },
          }));
          const defaultResp = MOCK_RESPONSES['default'];
          window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
            detail: { content: defaultResp },
          }));
        }, 600);
      }
    },
    initializeConversation: async () => {
      conversationStarted = true;
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED));
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
          detail: { conversationEntry: createEntry('default', false) },
        }));
        const defaultResp = MOCK_RESPONSES['default'];
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
          detail: { content: defaultResp },
        }));
      }, 600);
    },
    cleanupConversation: async () => {},
    startNewConversation: async () => {},
    endConversation: async () => {
      conversationStarted = false;
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_CLOSED));
    },
    sessionExists: () => false,
    Events,
    util: {
      isConversationEntryStaticContentMessage: (entry: ConversationEntry) => {
        return entry?.entryPayload?.entryType === "Message";
      },
      isMessageFromEndUser: (entry: ConversationEntry) => {
        return entry?.entryPayload?.sender?.role === "EndUser";
      },
      isTextMessage: (entry: ConversationEntry) => {
        return entry?.entryPayload?.entryType === "Message";
      },
      parseEntryPayload: (data: any): ConversationEntry => {
        return data as ConversationEntry;
      },
      parseJsonInAgentResponse: (content: string) => {
        try {
          return JSON.parse(content);
        } catch {
          return undefined;
        }
      },
      getTextMessageContent: (entry: ConversationEntry) => {
        return entry?.entryPayload?.abstractMessage?.staticContent?.text || '';
      },
    },
  };

  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_READY));
  }, 100);
}

declare global {
  interface Window {
    AdaptiveWebsite: any;
  }
  interface WindowEventMap {
    [key: string]: CustomEvent;
  }
}
