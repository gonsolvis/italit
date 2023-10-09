// Lesson Imports

import DEFINITE_ARTICLES_LESSON from "./LessonContent/LessonInformation/A1/DEFINITE_ARTICLES_LESSON";
import INDEFINITE_ARTICLES_LESSON from "./LessonContent/LessonInformation/A1/INDEFINITE_ARTICLES_LESSON";
import GENDERS_LESSON from "./LessonContent/LessonInformation/A1/GENDERS_LESSON";
import GREETINGS_LESSON from "./LessonContent/LessonInformation/A1/GREETINGS_LESSON"
// Game Imports
import GREETINGS_GAME from "./GameInformation/GREETINGS_GAME.jsx";
import DEFINITE_ARTICLES_GAME from "./GameInformation/DEFINITE_ARTICLES_GAME";
import GENDERS_GAME from "./GameInformation/GENDERS_GAME";

// Create a Lessons object
const lessons_index = {
  lessons: [
    {
      lesson: GREETINGS_LESSON,
      title: GREETINGS_LESSON[0].Lesson_title,
      lessonUrl: GREETINGS_LESSON[0].lessonUrl,
      gameUrl: GREETINGS_LESSON[0].gameUrl,
      game: GREETINGS_GAME,
    },
    {
      lesson: DEFINITE_ARTICLES_LESSON,
      title: DEFINITE_ARTICLES_LESSON[0].Lesson_title,
      lessonUrl: DEFINITE_ARTICLES_LESSON[0].lessonUrl,
      gameUrl: DEFINITE_ARTICLES_LESSON[0].gameUrl,
      game: DEFINITE_ARTICLES_GAME,
    },
    {
      lesson: INDEFINITE_ARTICLES_LESSON,
      title: INDEFINITE_ARTICLES_LESSON[0].Lesson_title,
      lessonUrl: INDEFINITE_ARTICLES_LESSON[0].lessonUrl,
      gameUrl: INDEFINITE_ARTICLES_LESSON[0].gameUrl,
      game: INDEFINITE_ARTICLES_LESSON,
    },
    {
      lesson: GENDERS_LESSON,
      title: GENDERS_LESSON[0].Lesson_title,
      lessonUrl: GENDERS_LESSON[0].lessonUrl,
      gameUrl: GENDERS_LESSON[0].gameUrl,
      game: GENDERS_GAME,
    },
    // Add more lessons as needed...
  ],
};


export default lessons_index;
