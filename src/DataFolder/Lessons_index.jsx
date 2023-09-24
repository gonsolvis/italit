// Lesson Imports
import lesson1 from "./LessonContent/LessonInformation/A1/lesson1";
import lesson2 from "./LessonContent/LessonInformation/A1/lesson2";
import GREETINGS_GAME from "./GameInformation/GREETINGS_GAME.JSX";
import ARTICLES_GAME from "./GameInformation/ARTICLES_GAME";

// Import more lessons as needed...

// Create a Lessons object
const lessons_index = {
  lessons: [
    {
      id: 1,
      lesson: lesson1,
      game:GREETINGS_GAME,
      lessonUrl: "/italian-grammar/a1/greetings", // Add the lessonUrl property
      gameUrl: "/italian-grammar/a1/games/greetings",
    },
    {
      id: 2,
      lesson: lesson2,
      game:ARTICLES_GAME,
      lessonUrl: "/italian-grammar/a1/articles", // Add the lessonUrl property
      gameUrl: "/italian-grammar/a1/games/articles",
    },
    // Add more lessons as needed...
  ],
};

export default lessons_index;
