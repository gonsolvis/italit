// Lesson Imports
import Greetings_lesson from "./LessonContent/LessonInformation/A1/Greetings_lesson";
import Definite_articles_lesson from "./LessonContent/LessonInformation/A1/Definite_articles_lesson";
import GREETINGS_GAME from "./GameInformation/GREETINGS_GAME.JSX";
import DEFINITE_ARTICLES_GAME from "./GameInformation/DEFINITE_ARTICLES_GAME";

// Import more lessons as needed...

// Create a Lessons object
const lessons_index = {
  lessons: [
    { title: "Greetings and Introductions",
      lesson: Greetings_lesson,
      game:GREETINGS_GAME,
      lessonUrl: "/italian-grammar/a1/greetings", // Add the lessonUrl property
      gameUrl: "/italian-grammar/a1/games/greetings",
    },
    {
      title: "Definite Articles",
      lesson: Definite_articles_lesson,
      game:DEFINITE_ARTICLES_GAME,
      lessonUrl: "/italian-grammar/a1/definite_articles", // Add the lessonUrl property
      gameUrl: "/italian-grammar/a1/games/definite_articles",
    },
    // Add more lessons as needed...
  ],
};

export default lessons_index;
