import { createContext, useCallback, useContext, useReducer } from "react";

const literaryPiecesData = [
  {
    id: 123,
    title: "Save the Western Ghats",
    imageUrl: "/assets/literalArt/1img.jpeg",
    description:
      "Protect this biodiversity hotspot from deforestation and unsustainable development.",
    creator: "Anika Sharma",
    target: "Ministry of Environment, Forest and Climate Change",
    signature_goal: 50000,
    current_signatures: 25432,
    created_date: "2024-10-27T10:00:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 456,
        name: "Rohan Verma",
        location: "Mumbai",
        signed_date: "2024-10-27T12:30:00Z",
      },
      {
        user_id: 789,
        name: "Priya Patel",
        location: "Bangalore",
        signed_date: "2024-10-27T14:15:00Z",
      },
    ],
  },
  {
    id: 124,
    title: "Ensure Clean Water for All",

    imageUrl: "/assets/literalArt/2img.jpeg",
    description:
      "Demand access to safe and affordable drinking water for every citizen.",
    creator: "Aarav Singh",
    target: "Ministry of Jal Shakti",
    signature_goal: 100000,
    current_signatures: 68754,
    created_date: "2024-11-05T15:30:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 987,
        name: "Riya Gupta",
        location: "Delhi",
        signed_date: "2024-11-06T09:15:00Z",
      },
      {
        user_id: 654,
        name: "Aditya Choudhary",
        location: "Kolkata",
        signed_date: "2024-11-06T11:45:00Z",
      },
    ],
  },
  {
    id: 125,
    title: "Protect the Sundarbans Mangroves",

    imageUrl: "/assets/literalArt/3img.jpeg",
    description:
      "Urge the government to take action against the destruction of this vital ecosystem.",
    creator: "Diya Banerjee",
    target: "West Bengal Government",
    signature_goal: 25000,
    current_signatures: 18321,
    created_date: "2024-11-12T08:00:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 321,
        name: "Ishaan Das",
        location: "Kolkata",
        signed_date: "2024-11-12T10:30:00Z",
      },
      {
        user_id: 657,
        name: "Saanvi Reddy",
        location: "Hyderabad",
        signed_date: "2024-11-12T16:20:00Z",
      },
    ],
  },
  {
    id: 126,
    title: "End Child Labor",

    imageUrl: "/assets/literalArt/4img.jpeg",
    description:
      "Demand stricter laws and enforcement to eradicate child labor practices.",
    creator: "Kavya Krishnan",
    target: "Ministry of Labour and Employment",
    signature_goal: 75000,
    current_signatures: 42895,
    created_date: "2024-11-18T14:00:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 852,
        name: "Arjun Kumar",
        location: "Chennai",
        signed_date: "2024-11-19T08:45:00Z",
      },
      {
        user_id: 963,
        name: "Ananya Mehta",
        location: "Ahmedabad",
        signed_date: "2024-11-19T12:10:00Z",
      },
    ],
  },
  {
    id: 127,
    title: "Improve Air Quality in Delhi",

    imageUrl: "/assets/literalArt/5img.jpeg",
    description:
      "Call for immediate action to reduce air pollution levels in the capital.",
    creator: "Reyansh Yadav",
    target: "Delhi Government",
    signature_goal: 100000,
    current_signatures: 87654,
    created_date: "2024-11-25T11:00:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 147,
        name: "Siya Sharma",
        location: "Delhi",
        signed_date: "2024-11-25T13:30:00Z",
      },
      {
        user_id: 258,
        name: "Vivaan Joshi",
        location: "Gurugram",
        signed_date: "2024-11-25T17:15:00Z",
      },
    ],
  },
  {
    id: 128,
    title: "Promote Sustainable Agriculture",

    imageUrl: "/assets/literalArt/6img.jpeg",
    description:
      "Support policies that encourage eco-friendly farming practices.",
    creator: "Sai Patel",
    target: "Ministry of Agriculture & Farmers Welfare",
    signature_goal: 50000,
    current_signatures: 31287,
    created_date: "2024-12-02T09:30:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 369,
        name: "Aisha Malik",
        location: "Pune",
        signed_date: "2024-12-02T11:15:00Z",
      },
      {
        user_id: 159,
        name: "Kabir Singh",
        location: "Chandigarh",
        signed_date: "2024-12-02T15:45:00Z",
      },
    ],
  },
  {
    id: 129,
    title: "Protect Endangered Species",

    imageUrl: "/assets/literalArt/7img.jpeg",
    description:
      "Advocate for stronger conservation efforts to save India's wildlife.",
    creator: "Inayat Khan",
    target: "National Board for Wildlife",
    signature_goal: 75000,
    current_signatures: 56432,
    created_date: "2024-12-09T17:00:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 741,
        name: "Zara Ali",
        location: "Hyderabad",
        signed_date: "2024-12-10T09:00:00Z",
      },
      {
        user_id: 852,
        name: "Veer Chopra",
        location: "Jaipur",
        signed_date: "2024-12-10T14:30:00Z",
      },
    ],
  },
  {
    id: 130,
    title: "Empower Women in Rural Areas",

    imageUrl: "/assets/literalArt/8img.jpeg",
    description:
      "Support initiatives that provide education, healthcare, and economic opportunities for women in rural communities.",
    creator: "Saanvi Iyer",
    target: "Ministry of Rural Development",
    signature_goal: 100000,
    current_signatures: 72854,
    created_date: "2024-12-16T12:30:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 963,
        name: "Aarush Reddy",
        location: "Bangalore",
        signed_date: "2024-12-16T15:15:00Z",
      },
      {
        user_id: 876,
        name: "Myra Verma",
        location: "Lucknow",
        signed_date: "2024-12-16T18:45:00Z",
      },
    ],
  },
  {
    id: 131,
    title: "Improve Public Transportation",

    imageUrl: "/assets/literalArt/9img.jpeg",
    description:
      "Demand better infrastructure and accessibility for public transport systems across India.",
    creator: "Shaurya Sharma",
    target: "Ministry of Road Transport and Highways",
    signature_goal: 50000,
    current_signatures: 18765,
    created_date: "2024-12-23T16:00:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 246,
        name: "Kiara Singh",
        location: "Delhi",
        signed_date: "2024-12-23T18:30:00Z",
      },
      {
        user_id: 135,
        name: "Reyansh Patel",
        location: "Ahmedabad",
        signed_date: "2024-12-23T21:15:00Z",
      },
    ],
  },
  {
    id: 132,
    title: "Support Renewable Energy",

    imageUrl: "/assets/literalArt/10img.jpeg",
    description:
      "Urge the government to invest in and promote the use of renewable energy sources.",
    creator: "Advika Khanna",
    target: "Ministry of New and Renewable Energy",
    signature_goal: 75000,
    current_signatures: 39527,
    created_date: "2024-12-30T10:30:00Z",
    status: "Open",
    signatures: [
      {
        user_id: 582,
        name: "Yashvi Kapoor",
        location: "Mumbai",
        signed_date: "2024-12-30T13:00:00Z",
      },
      {
        user_id: 794,
        name: "Ishaan Gandhi",
        location: "Chennai",
        signed_date: "2024-12-30T17:45:00Z",
      },
    ],
  },
];
const LiteralContext = createContext();

const initialState = {
  literalList: literaryPiecesData,
  isLoading: false,
  currLiteral: null,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
      
    case "literalList/loaded":
      return { ...state, isLoading: false, literalList: action.payload };
      
    case "literal/loaded":
      return { ...state, isLoading: false, currLiteral: action.payload };
      
    case "literalList/created":
      return { ...state, isLoading: false, literalList: [...state.literalList, action.payload], currLiteral: action.payload };
      
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
      
    default:
      throw new Error("Unknown action type");
  }
}

function LiteralProvider({ children }) {
  const [{ literalList, isLoading, currLiteral, error }, dispatch] = useReducer(reducer, initialState);

  //  Fixed `getLiteral` function  
  const getLiteral = useCallback(
    (id) => {
      dispatch({ type: "loading" });

      const selectedLiteral = literalList.find((piece) => piece.id === id);
      if (selectedLiteral) {
        dispatch({ type: "literal/loaded", payload: selectedLiteral });
      } else {
        dispatch({ type: "rejected", payload: "Error: Could not find the selected Literal Art..." });
      }
    },
    [literalList] //  Correct dependency
  );

  function createLiteral(newLiteral) {
    if (!newLiteral.title || !newLiteral.description || !newLiteral.imageUrl) {
      dispatch({ type: "rejected", payload: "Error: Missing fields in the new entry." });
      return;
    }
    const newId = literalList.length + 1;
    newLiteral = { ...newLiteral, id: newId };

    dispatch({ type: "literalList/created", payload: newLiteral });
  }

  return (
    <LiteralContext.Provider value={{ literalList, isLoading, currLiteral, getLiteral, error, createLiteral }}>
      {children}
    </LiteralContext.Provider>
  );
}

function useLiteral() {
  const context = useContext(LiteralContext);
  if (!context) throw new Error("LiteralContext must be used within a LiteralProvider.");
  return context;
}

export { LiteralProvider, useLiteral };