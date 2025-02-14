import { createContext, useCallback, useContext, useReducer } from "react";

const literaryPiecesData = [
  {
    id: 1,
    type: "poem",
    title: "The Road Not Taken",
    author: "Robert Frost",
    content:
      "Two roads diverged in a yellow wood,\n" +
      "And sorry I could not travel both\n" +
      "And be one traveler, long I stood\n" +
      "And looked down one as far as I could\n" +
      "To where it bent in the undergrowth;",
    imageUrl: "/assets/literalArt/img1.jpg",
    likes: 5,
    comments: [
      {
        id: 1,
        author: "Mansi Bhagat",
        text: "This poem really resonates with me.",
      },
      {
        id: 2,
        author: "Rohan",
        text: "A classic for a reason!",
      },
      {
        id: 3,
        author: "Nandini",
        text: "I love the imagery in this poem.",
      },
    ],
  },
  {
    id: 2,
    type: "short_story",
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    content:
      "True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses — not destroyed — not dulled them.",
    imageUrl: "/assets/literalArt/img2.jpg",
    likes: 10,
    comments: [
      {
        id: 1,
        author: "Rajesh",
        text: "Poe's mastery of suspense is evident here.",
      },
      {
        id: 2,
        author: "Anjali",
        text: "A chilling and unforgettable story.",
      },
      {
        id: 3,
        author: "Ankur",
        text: "The psychological terror is palpable.",
      },
      {
        id: 4,
        author: "Neha",
        text: "A masterpiece of gothic literature.",
      },
      {
        id: 5,
        author: "Poonam",
        text: "This story still gives me chills.",
      },
      {
        id: 6,
        author: "Meera",
        text: "Poe's use of language is truly masterful.",
      },
    ],
  },
  {
    id: 3,
    type: "blog",
    title: "The Art of Storytelling",
    author: "John Doe",
    content:
      "Storytelling is a powerful art form that has captivated audiences for centuries. It allows us to transport ourselves to different worlds, experience different emotions, and learn valuable lessons.",
    imageUrl: "/assets/literalArt/img3.jpg",
    likes: 8,
    comments: [
      {
        id: 1,
        author: "Anika",
        text: "Beautifully written!",
      },
      {
        id: 2,
        author: "Rohan",
        text: "This resonates with me deeply.",
      },
      {
        id: 3,
        author: "Priya",
        text: "Very insightful.",
      },
      {
        id: 4,
        author: "Vivek",
        text: "A valuable reminder of the power of stories.",
      },
    ],
  },
  {
    id: 4,
    type: "poem",
    title: "If",
    author: "Rudyard Kipling",
    content:
      "If you can keep your head when all about you\n" +
      "Are losing theirs and blaming it on you,\n" +
      "If you can trust yourself when all men doubt you,\n" +
      "But make allowance for their doubting too;",
    imageUrl: "/assets/literalArt/img4.jpg",
    likes: 7,
    comments: [
      {
        id: 1,
        author: "Rajesh",
        text: "A timeless piece of advice.",
      },
      {
        id: 2,
        author: "Anjali",
        text: "Very inspiring!",
      },
      {
        id: 3,
        author: "Suresh",
        text: "This poem always gives me strength.",
      },
      {
        id: 4,
        author: "Meera",
        text: "A powerful message.",
      },
      {
        id: 5,
        author: "Vivek",
        text: "A true classic.",
      },
    ],
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
    imageUrl: "/assets/literalArt/img5.jpg",
    likes: 4,
    comments: [
      {
        id: 1,
        author: "Aniket",
        text: "Relatable! This perfectly captures the morning rush.",
      },
      {
        id: 2,
        author: "Diya",
        text: "Love the casual and relatable tone.",
      },
    ],
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
    imageUrl: "/assets/literalArt/img6.jpg",
    likes: 6,
    comments: [
      {
        id: 1,
        author: "Ishaan",
        text: "Beautiful imagery! I can almost feel the intensity.",
      },
      {
        id: 2,
        author: "Avani",
        text: "The emotions are so raw and relatable.",
      },
      {
        id: 3,
        author: "Rohan",
        text: "This poem is truly captivating.",
      },
    ],
  },
  {
    id: 7,
    type: "poem",
    title: "Hopeless Romantic",
    author: "Jiya Choubey",
    content: `
        Hopelessly romantic, unknowingly dramatic.
        That's what I remember about myself.
        The guy caressed the fingers
        Of the girl next to me,
        She blushed, couldn't even meet his eyes.
        I remembered how I wished for that.
  
        The undeniable want to be wanted
        Gave a mix of emotions,
        But with time it often made me more sad, less happy.
        I still craved for being desired,
        I loved when they confessed,
        Tell me how deeply they are in love,
        But what's next?
        It terrified me to my core.
        Gradually the anticipation turned into fear.
  
        Now remembering the guy holding her hands makes me wonder,
        Are they still together?
        Or did it wear out with time.
        I saw people breaking hearts, Some getting hurt,  but was it worth it?
        Others are still hopelessly romantic
        But I? Those days seem to be long gone.`,
    imageUrl: "/assets/literalArt/img7.jpeg",
    likes: 3,
    comments: [
      {
        id: 1,
        author: "Aryan",
        text: "This poem really resonated with me.",
      },
    ],
  },
  {
    id: 8,
    type: "poem",
    title: "Empty Bed",
    author: "Jiya Choubey",
    content: `
        The sheets on my left were cold,
        I looked for you, still half sleep,
        Realising you were long gone.
        I wake up now, no, it's not a dream.
        The window's open,
        wild breezes spreading their wings,
        And the pages lying all over the room,
        I look non chalant,
        But no that's not me.
        Sat down in the corner of bed,
        Wondering if it's the end of things,
        Tears streaming down, this has to be.
        He was a perfectly stable,
        rhythmically chaotic yet calmest thing.
        And I wished to live with him.
        Now I am just the ex, half lunatic,
        Mostly possessive, rest toxic.
        No it's not a dream,
        the door was half open too.
        But it's my chained feets.`,
    imageUrl: "/assets/literalArt/img8.jpeg",
    likes: 2,
    comments: [],
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
