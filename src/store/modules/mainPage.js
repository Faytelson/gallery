export const mainPage = {
  state: {
    infoBlocks: [
      {
        imageSources: [
          { src: "img_background_main.jpg", alt: "Banner" },
          { src: "img_background_sm_main_1.avif", alt: "Nature" },
          { src: "img_background_sm_main_3.webp", alt: "Nature" },
        ],
        title: "Functions Of Arts",
        text: `
        <p>Art has had a great number of different functions throughout its history, making its purpose difficult to abstract or quantify to any single concept. This does not imply that the purpose of Art is "vague", but that it has had many unique, different reasons for being created.</p>

        <p>
          Art can have a personal function, it is an expression of basic human instinct for harmony, balance, rhythm. Art at this level is not an action or an object, but an internal appreciation of balance and harmony (beauty), and therefore an aspect of being human beyond utility. Art also provides
          a way to experience one's self in relation to the universe. This experience may often come unmotivated, as one appreciates art, music or poetry.
        </p>
  
        <p>
          On the other hand art may have a social function. At its simplest, art is a form of communication. It seeks to entertain and bring about a particular emotion or mood, for the purpose of relaxing or entertaining the viewer. Art may also be an expression of social protest, seeking to question
          aspects of society.
        </p>
        `,
      },
      {
        imageSources: [
          { src: "img_background_main_2.jpg", alt: "Banner" },
          { src: "img_background_sm_main_6.webp", alt: "Nature" },
          { src: "img_background_sm_main_2.webp", alt: "Nature" },
        ],
        title: "Types Of Art",
        text: `
        <p>Art may be characterized in terms of mimesis (i.e. its representation of reality), expression, communication of emotion, or other qualities. During the Romantic period, art came to be seen as "a special faculty of the human mind to be classified with religion and science".</p>

        <p>
        Though the definition of what constitutes art is disputed and has changed over time, general descriptions mention an idea of imaginative or technical skill stemming from human agency and creation.
        </p>
        `,
      },
      {
        imageSources: [
          { src: "img_background_main_3.jpg", alt: "Banner" },
          { src: "img_background_sm_main_4.webp", alt: "Nature" },
          { src: "img_background_sm_main_5.jpg", alt: "Nature" },
        ],
        title: "Aesthetics",
        text: `
        <p>Art has had a great number of different functions throughout its history, making its purpose difficult to abstract or quantify to any single concept. This does not imply that the purpose of Art is "vague", but that it has had many unique, different reasons for being created.</p>

        <p>
          Art can have a personal function, it is an expression of basic human instinct for harmony, balance, rhythm. Art at this level is not an action or an object, but an internal appreciation of balance and harmony (beauty), and therefore an aspect of being human beyond utility. Art also provides
          a way to experience one's self in relation to the universe. This experience may often come unmotivated, as one appreciates art, music or poetry.
        </p>
  
        <p>
          On the other hand art may have a social function. At its simplest, art is a form of communication. It seeks to entertain and bring about a particular emotion or mood, for the purpose of relaxing or entertaining the viewer. Art may also be an expression of social protest, seeking to question
          aspects of society.
        </p>
        `,
      },
      {
        imageSources: [
          { src: "img_background_main_4.jpg", alt: "Banner" },
          { src: "img_background_sm_main_8.webp", alt: "Nature" },
          { src: "img_background_sm_main_7.webp", alt: "Nature" },
        ],
        title: "Comprehension",
        text: `
        <p>Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences. In modern usage after the 17th century, where aesthetic considerations are paramount, the fine arts are separated and distinguished from acquired skills in general, such as the decorative or applied arts.</p>
  
        <p>
          On the other hand art may have a social function. At its simplest, art is a form of communication. It seeks to entertain and bring about a particular emotion or mood, for the purpose of relaxing or entertaining the viewer. Art may also be an expression of social protest, seeking to question
          aspects of society.
        </p>
        `,
      },
    ],
  },
  getters: {
    GET_INFO_BLOCKS(state) {
      return state.infoBlocks;
    },
  },
};
