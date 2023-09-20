import lesson1 from "./LessonContent/LessonInformation/A1/lesson1";
import lesson2 from "./LessonContent/LessonInformation/A1/lesson2";

const LESSONS_BREAKDOWN = [
  {
    level: "A1",
    levelUrl: '/italian-grammar/A1',
    color: '#37B9F1',
    classes: [
      {
        id: 1,
        title: "Greetings and Introductions",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/greetings",
        gameUrl: "/italian-grammar/a1/games/greetings",
        // lesson: lesson1,
      },
      {
        id: 2,
        title: "Definite and Indefinite Articles",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/articles",
        gameUrl: "/italian-grammar/a1/games/articles",
        // lesson: lesson2,
      },
      {
        id: 3,
        title: "Numbers and Counting",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/numbers",
        gameUrl: "/italian-grammar/a1/games/numbers",
        // lesson: lesson3,
      },
      {
        id: 4,
        title: "Family and Relationships",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/family",
        gameUrl: "/italian-grammar/a1/games/family",
        // lesson: lesson4,
      },
      {
        id: 5,
        title: "Adjectives and Descriptions",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/adjectives",
        gameUrl: "/italian-grammar/a1/games/adjectives",
        // lesson: lesson5,
      },
      {
        id: 6,
        title: "Basic Sentence Structure",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/sentence-structure",
        gameUrl: "/italian-grammar/a1/games/sentence-structure",
        // lesson: lesson6,
      },
      {
        id: 7,
        title: "Everyday Activities",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/everyday-activities",
        gameUrl: "/italian-grammar/a1/games/everyday-activities",
        // lesson: lesson7,
      },
      {
        id: 8,
        title: "Verb Conjugation (Present Tense)",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/verb-conjugation",
        gameUrl: "/italian-grammar/a1/games/verb-conjugation",
        // lesson: lesson8,
      },
      {
        id: 9,
        title: "Asking Questions",
        level: "A1",
        lessonUrl: "/italian-grammar/a1/asking-questions",
        gameUrl: "/italian-grammar/a1/games/asking-questions",
        // lesson: lesson9,
      },
    ],
  },
  {
    level: "A2",
    levelUrl: '/italian-grammar/A2',
    color: '#8739f9',
    classes: [
      { id: 10, title: "Past Tenses", level: "A2", lessonUrl: "/italian-grammar/a2/past-tenses", gameUrl: "/italian-grammar/a2/games/past-tenses" },
      { id: 11, title: "Future Tense", level: "A2", lessonUrl: "/italian-grammar/a2/future-tense", gameUrl: "/italian-grammar/a2/games/future-tense" },
      { id: 12, title: "Conditional Tense", level: "A2", lessonUrl: "/italian-grammar/a2/conditional-tense", gameUrl: "/italian-grammar/a2/games/conditional-tense" },
      { id: 13, title: "Comparatives and Superlatives", level: "A2", lessonUrl: "/italian-grammar/a2/comparatives-superlatives", gameUrl: "/italian-grammar/a2/games/comparatives-superlatives" },
      { id: 14, title: "Hobbies and Leisure Activities", level: "A2", lessonUrl: "/italian-grammar/a2/hobbies", gameUrl: "/italian-grammar/a2/games/hobbies" },
      { id: 15, title: "Daily Routine", level: "A2", lessonUrl: "/italian-grammar/a2/daily-routine", gameUrl: "/italian-grammar/a2/games/daily-routine" },
      { id: 16, title: "Travel and Directions", level: "A2", lessonUrl: "/italian-grammar/a2/travel-directions", gameUrl: "/italian-grammar/a2/games/travel-directions" },
      { id: 17, title: "Food and Dining", level: "A2", lessonUrl: "/italian-grammar/a2/food-dining", gameUrl: "/italian-grammar/a2/games/food-dining" },
      // Add more lessons for A2
      // ...
    ],
  },
{
  level: "B1",
  levelUrl: '/italian-grammar/B1',
  color: '#14de5e',
  classes: [
    { id: 18, title: "Shopping and Bargaining", level: "B1", lessonUrl: "/italian-grammar/b1/shopping", gameUrl: "/italian-grammar/b1/games/shopping" },
    { id: 19, title: "Health and Medical Issues", level: "B1", lessonUrl: "/italian-grammar/b1/health", gameUrl: "/italian-grammar/b1/games/health" },
    { id: 20, title: "Giving and Following Directions", level: "B1", lessonUrl: "/italian-grammar/b1/directions", gameUrl: "/italian-grammar/b1/games/directions" },
    { id: 21, title: "Talking About Past Experiences", level: "B1", lessonUrl: "/italian-grammar/b1/past-experiences", gameUrl: "/italian-grammar/b1/games/past-experiences" },
    { id: 22, title: "Expressing Future Plans (Going to)", level: "B1", lessonUrl: "/italian-grammar/b1/future-plans", gameUrl: "/italian-grammar/b1/games/future-plans" },
    { id: 23, title: "Asking for and Giving Advice", level: "B1", lessonUrl: "/italian-grammar/b1/advice", gameUrl: "/italian-grammar/b1/games/advice" },
    { id: 24, title: "Discussing Travel and Accommodation", level: "B1", lessonUrl: "/italian-grammar/b1/travel-accommodation", gameUrl: "/italian-grammar/b1/games/travel-accommodation" },
    { id: 25, title: "Work and Careers", level: "B1", lessonUrl: "/italian-grammar/b1/work-careers", gameUrl: "/italian-grammar/b1/games/work-careers" },
    // Add more lessons for B1
    // ...
  ],
}];

export default LESSONS_BREAKDOWN;
