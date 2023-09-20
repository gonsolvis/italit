// Lesson Imports
import lesson1 from "./LessonContent/LessonInformation/A1/lesson1";
import lesson2 from "./LessonContent/LessonInformation/A1/lesson2";
// Import more lessons as needed...

// Create a Lessons object
const lessons_index = {
  lessons: [
    {
      id: 1,
      lesson: lesson1,
      lessonUrl: "/italian-grammar/a1/greetings", // Add the lessonUrl property
    },
    {
      id: 2,
      lesson: lesson2,
      lessonUrl: "/italian-grammar/a1/articles", // Add the lessonUrl property
    },
    // Add more lessons as needed...
  ],
};

export default lessons_index;
