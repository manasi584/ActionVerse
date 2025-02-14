import { createContext, useCallback, useContext, useReducer } from "react";

const literaryPiecesData = [
  {
    id: 1,
    type: "poem",
    title: "The Road Not Taken",
    author: "Robert Frost",
    content:
      "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;",
    imageUrl: "/assets/literalArt/img1.jpg",
  },
  {
    id: 2,
    type: "short_story",
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    content:
      "True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses — not destroyed — not dulled them.",
    imageUrl: "/assets/literalArt/img2.jpg",
  },
  {
    id: 3,
    type: "blog",
    title: "The Art of Storytelling",
    author: "John Doe",
    content:
      "Storytelling is a powerful art form that has captivated audiences for centuries. It allows us to transport ourselves to different worlds, experience different emotions, and learn valuable lessons.",
    imageUrl: "/assets/literalArt/img3.jpg",
  },
  {
    id: 4,
    type: "poem",
    title: "If",
    author: "Rudyard Kipling",
    content:
      "If you can keep your head when all about you\nAre losing theirs and blaming it on you,\nIf you can trust yourself when all men doubt you,\nBut make allowance for their doubting too;",
    imageUrl: "/assets/literalArt/img4.jpg",
  },
  {
    id: 5,
    type: "poem",
    title: "Morning Commute",
    author: "Jiya Choubey",
    content:
      "Packed milk in my right hand,\n" +
      "And a couple of things in other,\n" +
      "My hair untidy, and a loose pajamas,\n" +
      "Let's not talk about face, for my own sanity.\n" +
      "That's how i remember myself.\n" +
      "And you were there,\n" +
      "Fixing your bike but eyes on me.\n" +
      "I dont remember what you wore,\n" +
      "Or what you were holding\n" +
      "Or when did i stop walking.\n",
    imageUrl: "/assets/literalArt/img5.jpg", // Replace with the actual image URL
  },
  {
    id: 6,
    type: "poem",
    title: "Eyes",
    author: "Jiya Choubey",
    content:
      "I dont remember anything but your eyes,\n" +
      "Where i was indulge so badly,\n" +
      "That I forgot my surroundings,\n" +
      "Even though how terrible i looked.\n" +
      "Your eyes were holding me with such delicacy,\n" +
      "That perhaps i could never write.\n" +
      "Time stopped so did the honking,\n" +
      "I remember listening my own heart beat\n" +
      "And the heavy breathing,\n" +
      "I stood there for the longest of seconds,\n" +
      "Thinking about i dont remember what,\n" +
      "And until realisation hit and i ran.",
    imageUrl: "/assets/literalArt/img6.jpg", // Replace with the actual image URL
  },
];
const LiteralContext = createContext();
const initialState = {
  literalList: literaryPiecesData,
  isLoading: false,
  currLiteral: {},
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    //    loading complete list
    case "literalList/loaded":
      return {
        ...state,
        isLoading: false,
        literalList: action.payload,
      };
    //    for loading a single poem
    case "literal/loaded":
      return {
        ...state,
        isLoading: false,
        currLiteral: action.payload,
      };
    case "literalList/created":
      return {
        ...state,
        isLoading: false,
        literalList: [...state.literalList, action.payload],
        currLiteral: action.payload,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown error type");
  }
}

function LiteralProvider({ children }) {
  const [{ literalList, isLoading, currLiteral, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //   get a literal
  const getLiteral = useCallback(
    function getLiteral(id) {
      // if (currLiteral && Number(id) === currLiteral.id) return;

      dispatch({ type: "loading" });
      const selectedLiteral = literalList.find((piece) => piece.id === id);

      if (selectedLiteral) {
        dispatch({ type: "literal/loaded", payload: selectedLiteral });
      } else
        dispatch({
          type: "rejected",
          payload: "There is some error in loading the data... ",
        });
    },
    [currLiteral.id]
  );

  function createLiteral(newLiteral) {
    if (!newLiteral.title || !newLiteral.content || !newLiteral.imageUrl) {
      dispatch({
        type: "rejected",
        payload: "There is some error in creating the data... ",
      });
      return;
    }
    const newId = literalList.length + 1;
    newLiteral = { ...newLiteral, id: newId };

    dispatch({ type: "literalList/created", payload: newLiteral });
  }

  return (
    <LiteralContext.Provider
      value={{
        literalList,
        isLoading,
        currLiteral,
        getLiteral,
        error,
        createLiteral,
        // DeleteLiteral,
      }}
    >
      {children}
    </LiteralContext.Provider>
  );
}
function useLiteral() {
  const context = useContext(LiteralContext);
  if (!context)
    throw new Error("Literal Context used outside the literalProvider ");
  return context;
}
export { LiteralProvider, useLiteral };
