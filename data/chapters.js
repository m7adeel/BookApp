const childTypes = {
  TEXT: 'text',
  COMPONENT: 'component'
}

const positions = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
}

const blockTypes = {
  CONTAINER: 'container',
  OUTLINED_CONTAINER: 'outlined_container',
  FILL_IN_BLANKS: 'fill_in_blanks',
  FILL_IN_BLANKS_SELECT_OPTIONS: 'fill_in_blanks_select',
  UNDERLINE_TEXT: 'underline_text',
  QUESTION_TEXT: 'question_text',
  FREE_ANSWER: 'free_answer',
  SHORT_ANSWER: 'short_answer',
  PARAGRAPH: 'paragraph',
  PARAGRAPH_WITH_IMAGE: 'paragraph_with_image',
  MCQS: 'multiple_choice',
  MATCH_COLUMNS: 'match_columns',
  MATCH_COLUMNS_MULTIPLE: 'match_columns_multiple',
  IMAGE: 'image',
  POEM: 'poem',
  POEM_WITH_IMAGE: 'poem_with_image',
  ITALIC_TEXT: 'italic_text',
  CONVERSATION: 'conversation',
  CONVERSATION_WITH_IMAGE: 'conversation_with_image',
  FORMATTED_TEXT: 'formatted_text',
  IMAGE_WITH_SELECT_OPTIONS: 'image_with_select',
  LANGUAGE_FOCUS: 'language_focus',
  NUMBERED_LIST: 'numbered_list',
  LIST: 'list',
  QUESTION_LIST: 'question_list',
  IMAGE_GRID_WITH_TEXT: 'image_grid_with_text',
}

const chaptersData = {
  "title": "Lesson 1: Going to a new school",
  "learningObjectives": [
    "Read and understand texts",
    "Talk about people, places, and familiar objects",
    "Write short paragraphs"
  ],
  "content": [
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "Tarun has moved to a new city with his parents. He is going to a new school, and his new teacher has given him the following form to fill out. His teacher wants to know more about Tarun."
    },
    {
      type: blockTypes.CONTAINER,
      children: [
        {
          type: blockTypes.NUMBERED_LIST,
          childType: childTypes.COMPONENT,
          children: [
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "My name is Tarun Chowdhury."
            },
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "I am 11 years old."
            },
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "I have brown eyes, brown hair, and I am 4 feet, 3 inches tall."
            },
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "I am good at playing football and drawing."
            },
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "My hobbies are collecting stamps and reading."
            },
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "I like to read comic books and eat peanuts."
            },
            {
              type: blockTypes.FORMATTED_TEXT,
              value: "I really don't like any kind of soft drinks."
            }
          ]
        }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Now write similar information about yourself:"
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          type: blockTypes.NUMBERED_LIST,
          childType: childTypes.COMPONENT,
          children: [
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "My name is ___.",
              labels: [
                "Enter your name"
              ],
            },
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "I am ___ years old.",
              labels: [
                "Enter your age"
              ],
              numeric: true
            },
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "I have ___ eyes, ___ hair, and I am ___ tall.",
              labels: [
                "Eye color",
                "Hair color",
                "Height"
              ]
            },
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "I am good at ___ and ___.",
              labels: [
                "First skill",
                "Second skill"
              ]
            },
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "My hobbies are ___ and ___.",
              labels: [
                "Hobby 1",
                "Hobby 2"
              ]
            },
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "I like to ___.",
              labels: [
                "Like 1"
              ]
            },
            {
              type: blockTypes.FILL_IN_BLANKS,
              value: "I really don't like ___.",
              labels: [
                "Dislike"
              ]
            }
          ]
        }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B. Read the following passage about Tarun's first day in the new school."
    },
    {
      type: blockTypes.IMAGE,
      source: "/lesson1/l1-2.png"
    },
    {
      type: blockTypes.PARAGRAPH,
      value: `My first day at the new school was interesting. I was going to school
        with my father in a rickshaw. We reached school after fifteen minutes.
        My father said goodbye and left me at the school gate. I went in and
        found that everyone had gone to class. I walked into my classroom and
        found a seat. After some time, a teacher came and warmly greeted us. I
        found the students very friendly in my new class.`
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B1. Choose the right answer:"
    },
    {
      type: blockTypes.PARAGRAPH,
      value: "The passage is about"
    },
    {
      type: blockTypes.MCQS,
      values: [
        "a) Who took Tarun to school the first day.",
        "b) How Tarun felt on the first day in school and why he felt so.",
        "c) What happened in the school on the first day."
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B2. Match a word from Column A with a word (or words) from Column B that has (or have) similar meanings."
    },
    {
      type: blockTypes.MATCH_COLUMNS,
      headers: [
        "Column A",
        "Column B"
      ],
      leftValues: [
        "interesting",
        "frightened",
        "happy",
        "excited",
        "warmly"
      ],
      rightValues: [
        "lovingly",
        "amusing",
        "afraid",
        "glad",
        "thrilled"
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B3. Talk about your first day at school and how you felt - Happy, frightened, thrilled, or shy? Write your thoughts below."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B4. Now write a paragraph on how you felt on your first day at school and why you felt so"
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your thoughts..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "C. Read the following poem and end this lesson with fun and laughter."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Let's Play - Kate Greenaway"
    },
    {
      type: blockTypes.POEM_WITH_IMAGE,
      value: `
        School is over, {"\n"}
        Oh, what fun! {"\n"}
        Lessons finished, {"\n"}
        Play begun. {"\n"}
        Who'll run fastest, {"\n"}
        You or I? {"\n"}
        Who'll laugh loudest? {"\n"}
        Let us try.
      `,
      imageSource: "/lesson1/l1-3.png",
      imagePosition: positions.RIGHT
    },
    {

    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer..."
    }
  ],
}

const chapter2Data = {
  title: "Lesson 1: Congratulations! Well done!",
  learningObjectives: [
    "ask and answer questions",
    "read and understand written instructions",
    "participate in short dialogues and conversations on familiar topics"
  ],
  content: [
    {
      type: blockTypes.QUESTION_TEXT,
      value: `A.  We often use some routine expressions in our everyday conversations. Read the following conversations and see some of the different ways in which we can respond to a good or bad news.`
    },
    {
      type: blockTypes.ITALIC_TEXT,
      value: "i) Bithi's elder brother Babul goes to a college in Dhaka. Bithi and her parents live in a small town in Tangail district. Babul is talking to his father over telephone."
    },
    {
      type: blockTypes.CONVERSATION_WITH_IMAGE,
      imageSource: require("../assets/images/lesson2/l2-1.png"),
      imagePosition: positions.RIGHT,
      dialogues: [
        { "speaker": "Babul", "text": "Hello, Dad!" },
        { "speaker": "Dad", "text": "Babul? How are you?" },
        { "speaker": "Babul", "text": "Fine, Dad. I just got my exam result. I've got an A in my English test!" },
        { "speaker": "Dad", "text": "Well done, son! I'm so proud of you!" },
        { "speaker": "Babul", "text": "Thanks, Dad. By the way, I have to go now. I'll call you again." },
        { "speaker": "Dad", "text": "Bye, son. Take care." },
        { "speaker": "Babul", "text": "You too, Dad. Bye!" }
      ]
    },
    {
      type: blockTypes.ITALIC_TEXT,
      value: "ii) Rahul is a good singer. He loves to sing folk songs and is quite popular with the young generation. His new album has just come out."
    },
    {
      type: blockTypes.CONVERSATION,
      dialogues: [
        { "speaker": "Nina", "text": "Hello, Rahul! You look very happy today!" },
        { "speaker": "Rahul", "text": "I am happy. I just heard that my new album of Lalon's songs has been a hit!" },
        { "speaker": "Nina", "text": "Oh, great! Congratulations!" },
        { "speaker": "Rahul", "text": "Thanks, Nina. I can't tell you how happy I am!" }
      ]
    },
    {
      type: blockTypes.ITALIC_TEXT,
      value: "iii) Manzoor is a student of class six in a Government High School in Rajbari. Recently there was an inter-school essay competition on the occasion of our Independence Day. Manzoor had participated and got a prize."
    },
    {
      type: blockTypes.CONVERSATION,
      dialogues: [
        { "speaker": "Raj", "text": "Hello, Manzoor! What's the matter? You look excited!" },
        { "speaker": "Manzoor", "text": "You remember the competition I took part in?" },
        { "speaker": "Raj", "text": "Yes, I do. What happened?" },
        { "speaker": "Manzoor", "text": "I am happy that I've won the competition! In fact, I've won the first prize!" },
        { "speaker": "Raj", "text": "Oh, that's marvelous! Congratulations!" },
        { "speaker": "Manzoor", "text": "Thanks, Raj." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Language Focus"
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          type: blockTypes.PARAGRAPH,
          value: "When we are glad or happy to hear about any good news, we usually express our happiness with these expressions: Congratulations! Well done! That's marvelous! That's wonderful! Great!, etc. In return the other person usually says, Thanks' or 'Thank you'."
        }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A1.  Discuss with your friends the meanings of: generation, album, hit as they have been used in the conversations above."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "The words album and hit can be used in more than one meaning. Discuss in groups and see if you can guess the other meanings."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A2.  Practise the conversations above in pairs."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B Let's now see what we say when we hear about something not good or not happy. Read the following dialogues."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "i)"
    },
    {
      type: blockTypes.CONVERSATION,
      dialogues: [
        { "speaker": "Bobby", "text": "Hi, Sujan! Why didn't you come to school last week?" },
        { "speaker": "Sujan", "text": "I had the flu. I was in bed most of the time." },
        { "speaker": "Bobby", "text": "Oh, I'm sorry to hear that. How do you feel now?" }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "ii)"
    },
    {
      type: blockTypes.CONVERSATION,
      dialogues: [
        { "speaker": "Shakil", "text": "Hello, Manik! Why are you so quiet today?" },
        { "speaker": "Manik", "text": "Did you see that pen my father gave me? I've lost it. It was very dear to me!" },
        { "speaker": "Shakil", "text": "Oh, I'm so sorry! How did you lose it?" },
        { "speaker": "Manik", "text": "I don't know! I think I dropped it somewhere." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "iii)"
    },
    {
      type: blockTypes.CONVERSATION,
      dialogues: [
        { "speaker": "Shanu", "text": "Hi, Munira! Have you seen the result?" },
        { "speaker": "Munira", "text": "Yes. I've failed in my math test." },
        { "speaker": "Shanu", "text": "Oh, that's bad luck!" },
        { "speaker": "Munira", "text": "I don't know how to tell my parents." },
        { "speaker": "Shanu", "text": "I think they will understand. I know you'll do better next time." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Language Focus"
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          type: blockTypes.PARAGRAPH,
          value: "When we hear about any bad news or not so good news, we say, I'm sorry to hear that' or 'That's hard luck' or 'That's bad luck', etc. In response the other person usually doesn't say anything."
        }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B1.  Practise saying the above conversations in pairs."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B2.  Answer the following questions."
    },
    {
      type: blockTypes.PARAGRAPH,
      value: "What would you say to somebody who:"
    },
    {
      type: blockTypes.NUMBERED_LIST,
      childType: childTypes.COMPONENT,
      children: [
        {
          type: blockTypes.PARAGRAPH,
          value: 'has won a lottery?'
        },
        {
          type: blockTypes.PARAGRAPH,
          value: 'has lost a football match?'
        },
        {
          type: blockTypes.PARAGRAPH,
          value: 'has just congratulated you on your good result?'
        },
        {
          type: blockTypes.PARAGRAPH,
          value: 'has been ill?'
        },
        {
          type: blockTypes.PARAGRAPH,
          value: 'has been selected for a music programme on TV?'
        },
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "B3.  Work with a partner. Make short conversations on the situations given in B2."
    }
  ]
}

const chapter3Data = {
  title: "Lesson 3: A railway station",
  learningObjectives: [
    "talk about people, places and familiar objects in short and simple sentences",
    "read and understand texts"
  ],
  content: [
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A Read the following passage."
    },
    {
      type: blockTypes.PARAGRAPH,
      value: "My friend Sajjad and I were sitting at the railway station. I came to see him off. Sajjad was going to Dhaka to his elder sister's house. It was very crowded in the station. There was a long line of people at the ticket counter. A woman was standing in the queue. She was holding her child's hand tightly. A group of young people was talking loudly and drinking tea in front of a tea stall. An old couple was trying to find a quiet place to sit down and rest. The waiting room was crowded, too. I saw one man who was trying to carry three heavy suitcases. A young lady was sitting on a bench with her luggage at one corner. She was reading a magazine."
    },
    {
      type: blockTypes.PARAGRAPH,
      value: "My friend and I stood near a newspaper stall talking and watching the crowd around. Soon my friend's train started to leave. As the train whistled, he picked up his suitcase and we said goodbye to each other."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A1.  Talk about what the speaker saw and did at the railway station. Use your own words."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write what you think..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A2.  Match a word from Column A with a word in Column B that has an opposite meaning. One is done for you."
    },
    {
      type: blockTypes.MATCH_COLUMNS,
      headers: [
        "Column A",
        "Column B"
      ],
      leftValues: [
        "interesting",
        "frightened",
        "happy",
        "excited",
        "warmly"
      ],
      rightValues: [
        "lovingly",
        "amusing",
        "afraid",
        "glad",
        "thrilled"
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A3.  Look at the picture below. Talk about what things you see and what are happening."
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson3/l3-1.png')
    },
    {
      type: blockTypes.FREE_ANSWER,
      value: "What is happening in the picture..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A4.  Suppose you went to one of the places listed below. Describe what you saw, what were happening and what you did there."
    },
    {
      type: blockTypes.NUMBERED_LIST,
      childType: childTypes.COMPONENT,
      children: [
        {
          type: blockTypes.PARAGRAPH,
          value: "A shopping place"
        },
        {
          type: blockTypes.PARAGRAPH,
          value: "A bus station"
        },
        {
          type: blockTypes.PARAGRAPH,
          value: "A fair"
        }
      ]
    }
  ]
}

const chapter4Data = {
  title: "Lesson 4: Where are you from?",
  learningObjectives: [
    "Recognize word stress and sentence stress.",
    "Talk about people, places, and familiar objects in short and simple sentences.",
    "Ask and answer questions about personal information.",
  ],
  content: [
    {
      type: blockTypes.QUESTION_TEXT,
      value: "It is natural that when two persons meet, they would continue their conversation. They may want to know where the other comes from, or what the other person does and so on. Here are some conversations in such everyday situations."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Listen to and then practise the conversations below with your class friends."
    },
    {
      type: blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson4/p1.png'),
      dialogues: [
        { "speaker": "Mamun", "text": "Akash, I'd like you to meet..." },
        { "speaker": "Akash", "text": "Hello! My name is Akash. I'm sorry, I couldn't catch your name." },
        { "speaker": "The stranger", "text": "James. James Collins. Nice to meet you." },
        { "speaker": "Akash", "text": "Nice to meet you, too. Where are you from, James?" },
        { "speaker": "James", "text": "I'm from England." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Imagine that you are at a bus/railway station. A friend introduces you to somebody. You couldn't hear his name properly for the sound around. Now make a conversation among you, your friend, and the new person."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your conversation here..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "ii) Sometimes the same questions can be asked in a different way. Here is a conversation between an Immigration officer and a passenger at the Shahjalal International  Airport, Dhaka. Listen to the conversation first and then practise it with a partner."
    },
    {
      type: blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson4/p2.png'),
      dialogues: [
        { "speaker": "Officer", "text": "Your name, Sir?" },
        { "speaker": "Passenger", "text": "Robert Smith." },
        { "speaker": "Officer", "text": "Where do you come from, Mr. Smith?" },
        { "speaker": "Passenger", "text": "Australia." },
        { "speaker": "Officer", "text": "And where are you coming from now?" },
        { "speaker": "Passenger", "text": "I'm coming from London." },
        { "speaker": "Officer", "text": "Welcome to Bangladesh, Sir. Have a nice stay." },
        { "speaker": "Passenger", "text": "Thank you." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A2.  In the above conversation the officer asks the passenger first time \"Where do you come from?\" and again he asks the passenger \"And where are you coming from now?\" Why?"
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer here..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "It's the first day in the new class after the annual exam. The boy sitting next to Joy is a new student. Listen to and practise the conversation below."
    },
    {
      type: blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson4/p3.png'),
      dialogues: [
        { "speaker": "Joy", "text": "Hello! I'm Joy. I'm the class captain." },
        { "speaker": "New student", "text": "Hi! My name is Sajed." },
        { "speaker": "Joy", "text": "Where do you come from, Sajed?" },
        { "speaker": "Sajed", "text": "I'm from Sylhet. My father got transferred here. That's why I'm here in Khulna." },
        { "speaker": "Joy", "text": "Well, I'm sure you will like Khulna and your new school." },
        { "speaker": "Sajed", "text": "I know I will. Will you be my friend?" },
        { "speaker": "Joy", "text": "I'm already your friend!" }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A3. Joy asks Sajed \"Where do you come from, Sajed?\" What could Joy ask him instead?" 
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer here..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "iv) Mamun and Akash are talking about Mamun's cousin Ruma. Listen to and practise the conversation in pairs." 
    },
    {
      type: blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson4/p4.png'),
      dialogues: [
        { "speaker": "Akash", "text": "What does your cousin do, Mamun?" },
        { "speaker": "Mamun", "text": "She is an architect. She mostly designs offices and shopping complexes." },
        { "speaker": "Akash", "text": "What is she doing at the moment?" },
        { "speaker": "Mamun", "text": "Well, at the moment she is designing something different. She is designing a school building at the outskirts of Dhaka." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "v) Mary and her mother are sitting in their living room. Mary's mother Rabeya Begum is watching TV and Mary is reading a story book. Their neighbour's little boy is crying at the top of his voice."
    },
    {
      type: blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson4/p5.png'),
      dialogues: [
        { "speaker": "Rabeya", "text": "I just don't understand! That boy is screaming so much! What's his mother doing?" },
        { "speaker": "Mary", "text": "I don't think she is at home. May be she is issuing out books to someone at the moment." },
        { "speaker": "Rabeya", "text": "Why, what does she do?" },
        { "speaker": "Mary", "text": "She works part-time at the Town Hall Library." }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "A4. Listen to the conversation between Akash and Mamun, and between Rabeya and Mary again. What difference do you find in the questions “what is she doing at the moment?” and “what does she do?”"
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer here..."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Language Focus"
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          type: blockTypes.PARAGRAPH,
          value: 'Notice that sometimes the answer to "Where do you come from?" or "Where are you from?" is the name of the country one belongs to. But when both the speakers are from the same country, the question would obviously mean what part of the country one belongs to.'
        },
        {
          type: blockTypes.PARAGRAPH,
          value: 'Notice the difference between "What do you do?" and "What are you doing?" "What do you do?" means the same as "What\'s your profession?\" On the other hand, "What are you doing" refers to what you are doing at the moment, or to something you are doing around that time.'
        }
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: 'B Look at the pictures below. Ask and answer questions about what each person\'s profession is, and what he or she is doing at the moment.'
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: 'Follow this model:'
    },
    {
      type: blockTypes.PARAGRAPH,
      value: 'What\'s his/her name? What does he/she do? \n What is he/she doing now? \n At the moment he/she is ___ \n He/she is not ___ (not doing what he/she usually does, e.g. He is not seeing a patient)'
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson4/p9.png')
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'What\'s his/her name? What does he/she do?',
      labels: [
        'Write their name...',
        'Write their profession...'
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'At the moment he/she is ___',
      labels: [
        "Write what they are doing..."
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'He/she is not ___',
      labels: [
        "Write what they aren't doing..."
      ]
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson4/p6.png')
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'What\'s his/her name? What does he/she do?',
      labels: [
        'Write their name...',
        'Write their profession...'
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'At the moment he/she is ___',
      labels: [
        "Write what they are doing..."
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'He/she is not ___',
      labels: [
        "Write what they aren't doing..."
      ]
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson4/p8.png')
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'What\'s his/her name? What does he/she do?',
      labels: [
        'Write their name...',
        'Write their profession...'
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'At the moment he/she is ___',
      labels: [
        "Write what they are doing..."
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'He/she is not ___',
      labels: [
        "Write what they aren't doing..."
      ]
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson4/p7.png')
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'What\'s his/her name? What does he/she do?',
      labels: [
        'Write their name...',
        'Write their profession...'
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'At the moment he/she is ___',
      labels: [
        "Write what they are doing..."
      ]
    },
    {
      type: blockTypes.FILL_IN_BLANKS,
      value: 'He/she is not ___',
      labels: [
        "Write what they aren't doing..."
      ]
    }
  ]
}

const chapter5Data = {
  title: "",
  learningObjectives: [
    "talk about people, places and familiar objects in short and simple sentences",
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
    "read and understand texts",
    "write short paragraphs"
  ],
  content: [
    {
      "type": "question_text",
      "value": "A. Look and say. Use suitable words from the box to describe the occupation of each person below."
    },
    {
      "type": blockTypes.IMAGE_WITH_SELECT_OPTIONS,
      "values": [
        "newspaper hawker",
        "nurse",
        "cleaner",
        "rickshaw-puller",
        "waitress",
        "postman"
      ],
      "images": [
        require('../assets/images/lesson5/p1.png'),
        require('../assets/images/lesson5/p2.png'),
        require('../assets/images/lesson5/p3.png'),
        require('../assets/images/lesson5/p4.png'),
        require('../assets/images/lesson5/p5.png'),
        require('../assets/images/lesson5/p6.png')
      ]
    },
    {
      "type": "question_text",
      "value": "A1 Choose appropriate words from the box to complete the dialogue below. Then act out the dialogue in pairs."
    },
    {
      "type": blockTypes.FILL_IN_BLANKS_SELECT_OPTIONS,
      options: [
        "letters",
        "restaurant",
        "streets",
        "place",
        "morning"
      ],
      "values": [
        {
          "value": "A cleaner cleans our houses, office and ___ etc.",
        },
        {
          "value": "A hawker gives us newspapers every ___ .",
        },
        {
          "value": "A postman delivers ___ and other items to us.",
        },
        {
          "value": "A rickshaw puller takes us from one ___ to another.",
        },
        {
          "value": "A waiter serves food at the ___ .",
        }
      ]
    },
    {
      "type": "question_text",
      "value": "B Read the text about Bulbul and answer the questions below."
    },
    {
      "type": blockTypes.PARAGRAPH_WITH_IMAGE,
      imageSource: require('../assets/images/lesson5/p7.png'),
      imagePosition: positions.RIGHT,
      "value": "Bulbul collects rubbish from the Sankar area in Dhaka. Every morning, he wakes up at 5 o\u2019clock and walks along the streets of Sankar to collect rubbish. People of Sankar put their rubbish in plastic bins and leave them in front of their houses. Bulbul walks from door to door to collect them. Sometimes the bins are very dirty and they smell bad. But Bulbul does not mind. He takes out everything from the bins and puts them in his van. He believes that all jobs are important. He works hard every day to keep this area clean."
    },
    {
      "type": "paragraph",
      "value": "Last month Bulbul was sick for two days. So, he could not come to collect the rubbish. The people of Sankar were in great trouble. They got piles of rubbish waiting in front of their houses. The whole area became dirty and unhygienic. When Bulbul got well, he came back to Sankar. He collected everything from all the bins. Bulbul does not want to fall sick again. He realizes, if he stops working even for a few days only, the whole area will turn into a big dustbin."
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B1. Now, ask and answer the questions in pairs."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "a) What time does Bulbul wake up?",
        "b) Where do the people of Sankar put their rubbish?",
        "c) Why does Bulbul think that all jobs are important?",
        "d) What happened when Bulbul became sick?",
        "e) What will happen if Bulbul falls sick again?",
        "f) What will you say to Bulbul, if you meet him?"
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B2. Think of a person who helps you live well. Write a composition on this person."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "a) What does he/she do?",
        "b) How does his work help you live well?",
        "c) What time does he/she start his/her work?",
        "d) How does he/she do the work?",
        "e) Does he/she like the job? Why/why not?",
        "f) What will happen if he/she stops working?",
        "g) What do you think about his/her job?"
      ]
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Language Focus"
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          "type": blockTypes.PARAGRAPH,
          "value": "Notice the verbs in the italics in the following sentences."
        },
        {
          "type": blockTypes.LIST,
          "values": [
            "a) Bulbul **collects** rubbish from the Sankar area in Dhaka",
            "b) Every day he **wakes up** at 5 o'clock and **walks** along the streets of Sankar."
          ]
        },
        {
          "type": "paragraph",
          "value": "We talk about usual routines in simple present tense. In simple present tense, the verb takes an 's' or 'es' if the subject is any one person/he/she etc."
        },
      ]
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          "type": blockTypes.PARAGRAPH,
          "value": "Notice the verbs in the following sentences in italics."
        },
        {
          "type": blockTypes.LIST,
          "values": [
            "a) The people in Sankar area **became** very upset.",
            "b) They **got** piles of rubbish waiting outside their house."
          ]
        },
        {
          "type": "paragraph",
          "value": "All the sentences here talk about the past. So, they are in simple past tense. In simple past tense, the verb is always in its past form (e.g. got, became, etc.)."
        },
      ]
    },
    {
      "type": "question_text",
      "value": "B3 Underline all the verbs in text on Bulbul (B). Write down the past form of the verb in the present tense. Also write down the present form of the verb in the past tense."
    },
    {
      "type": blockTypes.PARAGRAPH,
      "value": "One is done for you. **wakes up** ___ **woke up**."
    }
  ]
}

const chapter6Data = {
  title: "Lesson 6: It smells good!",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "question_text",
      "value": "A. Read the passage and the dialogue below."
    },
    {
      "type": "paragraph",
      "value": "It's Saturday. Mila's school is open. But Friday and Saturday are father's weekly holidays. Father sometimes loves to cook special dishes for everybody on Saturdays. It's 2 o'clock - time for Mila to come back from school. Mother is setting the table. Mila's two younger sisters are playing in the living room. The doorbell rings. Mila comes in."
    },
    {
      "type": blockTypes.CONVERSATION,
      dialogues: [
        {
          "speaker": "Mila",
          "text": "Hi, Mom! I'm back! Where's Baba?"
        },
        {
          "speaker": "Mom",
          "text": "In the kitchen. Today is Saturday, remember?"
        },
        {
          "speaker": "Mila",
          "text": "Right! Baba's cooking day! Hi, Baba! What are you cooking today? It smells good!"
        },
        {
          "speaker": "Baba",
          "text": "It's 'moragpalau', dear, your favourite dish."
        },
        {
          "speaker": "Mila",
          "text": "Can I try some?"
        },
        {
          "speaker": "Baba",
          "text": "No, you can't. You know the rule, don't you? Go and wash your hands first."
        },
        {
          "speaker": "Mila",
          "text": "Please, Baba. I'm coming soon."
        },
        {
          "speaker": "Baba",
          "text": "Ok. Here is your dish."
        },
        {
          "speaker": "Mila",
          "text": "Ummm! It tastes so delicious!"
        }
      ]
    },
    {
      "type": "question_text",
      "value": "A1 Work with a partner. Ask and answer the following questions."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "a. What's your favourite food?",
        "b. Where do you usually have it?",
        "c. Who prepares it?",
        "d. How does it taste?"
      ]
    },
    {
      "type": "question_text",
      "value": "A2 Practise the conversation in section A with a friend. Remember to use proper stress and intonation (up and down movement of your voice)."
    },
    {
      "type": "question_text",
      "value": "A3 Fill in the blanks in the following sentences with the words in the box."
    },
    {
      type: blockTypes.FILL_IN_BLANKS_SELECT_OPTIONS,
      options: [
        "smell",
        "see",
        "look",
        "know",
        "like",
        "want"
      ],
      values: [
        {
          value:"I __________ him very well.",
        },
        {
          value:"The new dress __________ great!",
        },
        {
          value:"Rina __________ to collect stamps.",
        },
        {
          value:"I can __________ a butterfly near the flowers.",
        },
        {
          value:"The flower __________ sweet.",
        },
        {
          value:"Murad __________ to buy a dictionary."
        }
      ]
    },
    {
      "type": "question_text",
      "value": "A4 Read the passage below and choose which verb form is appropriate. Underline the word you choose."
    },
    {
      "type": "paragraph",
      "value": "Shikha Banu works/is working as a waitress in a restaurant in Chittagong. She takes orders and serves food to customers. But today, the chief cook has suddenly fallen ill. So, she helps/is helping the other cooks in the kitchen. She makes/is making 'pudding'. She thinks/is thinking of her son, Priyam. How he loves/is loving pudding! She wants/is wanting to make a pudding for Priyam when she goes back home today. Suddenly she hears/is hearing someone says 'The pudding is done, apa. Shall I take it off the oven?' With a start Shikha Banu says/is saying 'Oh, yes. Please do.'"
    }
  ]
}

const chapter7Data = {
  title: "Lesson 7: Holding Hands",
  learningObjectives: [
    "recognize word and stress on words in sentences",
    "recognize intonation in sentences",
    "understand and enjoy stories and poems"
  ],
  content: [
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "A. Listen and read."
    },
    {
      "type": blockTypes.POEM,
      title: "Holding Hands",
      author: "Leonore M Link",
      lines: [
        "Elephants walking",
        "Along the trails",
        "Are holding hands",
        "By holding tails",
        "Trunks and tails",
        "Are handy things",
        "When elephants walk",
        "In Circus rings.",
        "And when they walk",
        "It never fails",
        "",
        "They're holding hands",
        "By holding tails."
      ]
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson7/p1.png')
    },
    {
      "type": "short_answer",
      "value": "A1. Recite the poem in groups, in pairs and then individually."
    },
    {
      "type": "question_text",
      "value": "A2 Look at the following words."
    },
    {
      "type": "paragraph",
      "value": "Each word has more than one meaning. The meaning in which a word has been used in the poem is given. Can you think of any other meaning or meanings?"
    },
    {
      "type": blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson7/p2.png'),
      dialogues: [
        {
          "speaker": "Trunk",
          "text": "The long nose of an elephant"
        },
        {
          "speaker": "Ring",
          "text": "A round confined area in which animals or people perform or compete. There are seats around the outside of the ring for the audience"
        },
        {
          "speaker": "For example",
          "text": "a circus ring or a boxing ring."
        }
      ]
    },
    {
      "type": "question_text",
      "value": "A3 Now, match the words above with the picture below."
    },
    {
      "type": "question_text",
      "value": "A4 Make sentences with each of the words."
    }
  ]
}

const chapter8Data = {
  title: "Lesson 8: Grocery shopping",
  learningObjectives: [
    "use word stress and stress on words in sentences",
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
    "read and understand texts"
  ],
  content: [
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "A Some guests will visit Imran's house tonight. So Imran's mother will cook dinner for them. She asks Imran to go to the local market. He often forgets to buy the necessary items. So his mother is making a shopping list for him. He is helping his mother make the list."
    },
    {
      "type": blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../assets/images/lesson8/p1.png'),
      dialogues: [
        {
          "speaker": "Imran",
          "text": "Maa, what do I need to buy?"
        },
        {
          "speaker": "Maa",
          "text": "Well, see if we have enough potatoes?"
        },
        {
          "speaker": "Imran",
          "text": "We have some potatoes but I don't think it's enough."
        },
        {
          "speaker": "Maa",
          "text": "Then get half kg. of potatoes. How about tomatoes?"
        },
        {
          "speaker": "Imran",
          "text": "I don't see any tomatoes."
        },
        {
          "speaker": "Maa",
          "text": "Are there any other vegetables?"
        },
        {
          "speaker": "Imran",
          "text": "Yes, there are some beans, carrots, cucumber and eggplants.....That's all."
        },
        {
          "speaker": "Maa",
          "text": "Well, I'll need one kg. of tomatoes. Half kg. of beans and two cauliflowers.... Are there any eggs, dear?"
        },
        {
          "speaker": "Imran",
          "text": "There are only three eggs. May I'll buy a dozen more?"
        },
        {
          "speaker": "Maa",
          "text": "Humm..... oh, yes.... get some sugar, and milk and one litre of oil, too."
        },
        {
          "speaker": "Imran",
          "text": "OK. One litre of milk and.... one kg of sugar."
        },
        {
          "speaker": "Maa",
          "text": "One more thing, dear. You are forgetting your list! Here it is."
        },
        {
          speaker: "Imran",
          text: "Oh! Thanks, Maa."
        }
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "A1 You have read the conversation above. Now, put a tick mark (\u2713) against the items that Imran will buy and put a cross mark (\u00d7) against the items he won\u2019t. Write the quantity of the items in the last column. (The first one is done for you.)"
    },
    {
      "type": "table",
      "headers": [
        "No.",
        "Items",
        "\u2713/\u00d7",
        "Quantity"
      ],
      "rows": [
        [
          1,
          "Potatoes",
          "\u2713",
          "\u00bd kg"
        ],
        [
          2,
          "Tomatoes",
          "",
          ""
        ],
        [
          3,
          "Onions",
          "",
          ""
        ],
        [
          4,
          "Cauliflower",
          "",
          ""
        ],
        [
          5,
          "Beans",
          "",
          ""
        ],
        [
          6,
          "Eggplants",
          "",
          ""
        ],
        [
          7,
          "Eggs",
          "",
          ""
        ],
        [
          8,
          "Oil",
          "",
          ""
        ],
        [
          9,
          "Salt",
          "",
          ""
        ],
        [
          10,
          "Sugar",
          "",
          ""
        ],
        [
          11,
          "Milk",
          "",
          ""
        ],
        [
          12,
          "Carrots",
          "",
          ""
        ],
        [
          13,
          "Cucumber",
          "",
          ""
        ]
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B. Listen to and read the dialogues below."
    },
    {
      "type": blockTypes.CONVERSATION_WITH_IMAGE,
      imagePosition: positions.RIGHT,
      imageSource: require('../asets/images/lesson8/p2.png'),
      dialogues: [
        {
          speaker: "Salesperson",
          text: "Hello, how can I help you?"
        },
        {
          speaker: "Imran",
          text: "Do you have any beans?"
        },
        {
          speaker: "Salesperson",
          text: "Yes, we do. How much would you like?"
        },
        {
          speaker: "Imran",
          text: "I would like half kg. And I\u2019ll also need one kg of tomatoes, two kg of potatoes, two cauliflowers, a dozen of eggs and some salt."
        },
        {
          speaker: "Salesperson",
          text: "Do you need oil, sir?"
        },
        {
          speaker: "Imran",
          text: "Yes, I need a litre of oil."
        },
        {
          speaker: "Salesperson",
          text: "Do you need anything else?"
        },
        {
          speaker: "Imran",
          text: "Umm\u2026 let me check. (looks at the list). Oh, yes, could I have some sugar and milk?"
        },
        {
          speaker: "Salesperson",
          text: "Sure. How much milk do you want?"
        },
        {
          speaker: "Imran",
          text: "Just one litre, \u2026and one kg of sugar, please."
        },
        {
          speaker: "Salesperson",
          text: "Ok, let me find all the items for you."
        },
        {
          speaker: "Imran",
          text: "Thanks. Please put them in a paper or jute bag."
        },
        {
          speaker: "Salesperson",
          text: "Sure! We don\u2019t use plastic bags here. Here you go! I\u2019ve put all the items here."
        },
        {
          speaker: "Imran",
          text: "Thank you. How much is the total?"
        },
        {
          speaker: "Salesperson",
          text: "The total comes to Taka five hundred and thirty-five."
        },
        {
          speaker: "Imran",
          text: "Here is five hundred and fifty."
        },
        {
          speaker: "Salesperson",
          text: "Thank you. Here is the change, fifteen taka. Have a good day!"
        },
        {
          speaker: "Imran",
          text: "Thanks, bye."
        }
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B1 Discuss the following questions in pairs."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "a. How many items did Imarn buy?",
        "b. What varieties of vegetables were available in the market?",
        "c. Why do you think Imarn asked the salesman to use a paper bag? Discuss with your class friends and then write down one or two reasons.",
        "d. 'Thank you, here is the change,....'. What does the word 'change' mean here?"
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B2 Read the sentences/phrases in the eight speech bubbles. Put them in the right order (1 to 8) to write down the conversation in your notebook."
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson8/p3.png')
    },
    {
      "type": "numbered_list",
      "values": [
        "I want to buy an ice-cream.",
        "Yes, how can I help you?",
        "How much is it?",
        "20 taka.",
        "Here you are.",
        "Thank you!",
        "Excuse me!",
        "Sure! There you go."
      ]
    },
    {
      "type": "question_text",
      "value": "C. Discuss in pairs how you talk about quantities when you go shopping. Match the phrases in column A and the items in column B below to make an imaginary shopping list. Write down the list in your notebook. (One phrase may match more than one item.)"
    },
    {
      "type": "match_columns",
      "headers": [
        "Column A",
        "Column B"
      ],
      "leftValues": [
        "a can of ___.",
        "a loaf of ___.",
        "a packet of ___.",
        "a tube of ___.",
        "half a kilo of ___.",
        "a dozen ___.",
        "a box of ___.",
        "a roll of ___.",
        "a ___",
        "a jar of ___.",
        "a sheet of ___.",
      ],
      "rightValues": [
        "poster paper",
        "bread",
        "paint",
        "facial tissue",
        "cake",
        "honey",
        "eggs",
        "chocolates",
        "toothpaste",
        "note book",
        "pencils",
        "coke"
      ]
    },
    {
      "type": "question_text",
      "value": "C1. Look at your shopping list again. Can you say which items are available in what kind of shops? There are different shops such as the grocer's, baker's, stationer's, etc. selling different things. Put the items under the proper headings in the table below."
    },
    {
      "type": "match_columns_multiple",
      "headers": [
        "Grocer's",
        "Baker's",
        "Stationer's"
      ],
      "leftValues": [
        "a dozen of eggs",
        "...................."
      ],
      "rightValues": [
        "A loaf of bread",
        "..........................",
        "A tube of paint"
      ]
    },
    {
      "type": "paragraph",
      "value": "D Work in groups. Create a mini market in the classroom. Put some signs like the Baker's, the Grocer's, the Stationer's etc. Some of you play the roles of shop assistants and some others will be customers. Now, the customers move round the room from one shop to the other asking the prices of the items shown in the pictures below. Use the following model."
    },
    {
      "type": blockTypes.CONVERSATION,
      dialogues: [
        {
          speaker: "A",
          text: "Have you got any noodles? / Do you have any noodles?"
        },
        {
          speaker: "B",
          text: "Yes, I have. / Yes, I do."
        },
        {
          speaker: "A",
          text: "How much are they?"
        },
        {
          speaker: "B",
          text: "Taka twenty five a packet."
        },
        {
          speaker: "A",
          text: "Can I have two packets, please?"
        },
        {
          speaker: "B",
          text: "Here you are. That's taka fifty altogether."
        },
        {
          speaker: "A",
          text: "Thank you."
        }
      ]
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson8/p4.png')
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "Prices of items:"
    },
    {
      "type": "list",
      "values": [
        "pencil box: Tk. 180",
        "Biscuits: 35/pack",
        "Eggs: Tk. 110/dozen",
        "Toothpaste: Tk. 40/tube",
        "Pencil set: Tk. 90",
        "A calculator: Tk. 250",
        "A loaf of Bread: Tk. 35",
        "Onions: Tk. 40/Kg",
        "Cake: Tk. 400/kg"
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "Language Focus: some and any"
    },
    {
      type: blockTypes.OUTLINED_CONTAINER,
      children: [
        {
          "type": "paragraph",
          "value": "We use 'some' with positive statements. \nExample: \nI've got some photographs. I need some milk."
        },
        {
          "type": "paragraph",
          "value": "\nWe use 'any' with negative statements. \nExample: \nI haven't got any photographs. I don't see any student there."
        },
        {
          "type": "paragraph",
          "value": "\nWe use 'any' with questions. \nExample: \nHave you got any photograph? Is there any water in the jug?"
        }
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "Fill in the blanks with 'some' or 'any'."
    },
    {
      "type": blockTypes.FILL_IN_BLANKS_SELECT_OPTIONS,
      showOptions: false,
      options: [
        "some",
        "any"
      ],
      "values": [
        { "value": "1) Are there _______ flowers in the garden?" },
        { "value": "2) Yes, these are _______ roses and _______ lilies." },
        { "value": "3) What about jasmine? Are there _______ jasmines?" },
        { "value": "4) No, there aren't _______ jasmines." },
        { "value": "5) Do you have _______ idea why I'm asking you all these?" }
      ]
    }
  ]
}

const chapter9Data = {
  title: "Lesson 9: Health is wealth",
  learningObjectives: [
    "ask and answer questions",
    "participate in dialogues and conversations on familiar topics",
    "read and understand written instructions",
    "read and understand texts"
  ],
  content: [
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "A Choose a health problem from the box and write next to the appropriate picture. There are names of more problems in the box than are necessary."
    },
    {
      type: blockTypes.IMAGE_WITH_SELECT_OPTIONS,
      values: [
        "a fever",
        "a backache",
        "a cough",
        "a headache",
        "a toothache",
        "a skin injury",
        "a stomachache",
        "a cold",
        "a burn"
      ],
      images: [
        require('../assets/images/lesson9/p1.png'),
        require('../assets/images/lesson9/p2.png'),
        require('../assets/images/lesson9/p3.png'),
        require('../assets/images/lesson9/p4.png'),
        require('../assets/images/lesson9/p5.png'),
        require('../assets/images/lesson9/p6.png'),
        require('../assets/images/lesson9/p7.png'),
        require('../assets/images/lesson9/p8.png')
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "A1: Work in pairs. Ask and answer the following questions."
    },
    {
      type: blockTypes.QUESTION_LIST,
      values: [
        "\u2022 Have you had any of these or other health problems recently? Which ones? or what?",
        "\u2022 How many times had you been sick in the year?",
        "\u2022 What do you do when you have a headache or a cold or a toothache?"
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B. Look at some health problems. Choose several pieces of good advice for each problem. There are more pieces of advice than problems."
    },
    {
      "type": "numbered_list",
      "values": [
        "1. a cough...................",
        "2. a backache..............",
        "3. a fever.....................",
        "4. a toothache..............",
        "5. a headache...............",
        "6. a burn...................",
        "7. the flu...................."
      ]
    },
    {
      "type": "list",
      "values": [
        "a. take some vitamin C",
        "b. put some ointment on it",
        "c. drink lots of liquid",
        "d. take enough rest",
        "e. put a heating pad on it",
        "f. put it under cold water",
        "g. take some paracetamol",
        "h. gargle with warm and salt water",
        "i. see a dentist",
        "j. see a doctor"
      ]
    },
    {
      "type": "question_text",
      "value": "C. Work in groups. Talk about the problems in section B and give advice. Try to give more than one piece of advice for each problem. Follow the model shown."
    },
    {
      "type": "conversation",
      "value": [
        "A: What should you do for a cough?",
        "B: You should gargle with warm water.",
        "C: It's a good idea to take some vitamin C.",
        "D: Yes. And if it continues for long, you should see a doctor.",
        "E: Well, I think it's good to avoid cold drink or ice-cream.",
        "F: Sometimes it helps to..."
      ]
    },
    {
      "type": "question_text",
      "value": "D. Work with a partner. Make a short conversation about each problem and its remedy in the box below."
    },
    {
      "type": "list",
      "values": [
        "Problem",
        "an insect bite",
        "a stomachache",
        "a burn",
        "a skin injury"
      ]
    },
    {
      "type": "list",
      "values": [
        "Remedy",
        "antiseptic",
        "an antacid",
        "Burnol ointment",
        "antiseptic"
      ]
    },
    {
      "type": "conversation",
      "value": [
        {
          "speaker": "A",
          "text": "Have you ever had an insect bite?"
        },
        {
          "speaker": "B",
          "text": "Oh, yes! I had one just last night, actually."
        },
        {
          "speaker": "A",
          "text": "What did you do?"
        },
        {
          "speaker": "B",
          "text": "I put some antiseptic on it."
        }
      ]
    },
    {
      "type": "question_text",
      "value": "E. Read the text."
    },
    {
      "type": "paragraph",
      "value": "A proverb says 'Health is Wealth'. To keep healthy is to keep free from disease and anxiety. Good health is proper functioning of all body organs. It is also feeling well both in body and in mind. People in good health are active, cheerful and happy. If you are healthy, you can be happy and can help others in society as well."
    },
    {
      "type": "paragraph",
      "value": "To keep in good health we should be careful about hygiene. The rules and practices of keeping good health are called hygiene. We must practise the rules of hygiene. Proper food and nutrition, physical exercise, rest and sleep, cleanliness, and proper medicare are essential for good health."
    },
    {
      "type": "container",
      "value": "English For Today"
    },
    {
      "type": "paragraph",
      "value": "Some important rules of good personal health are as follows."
    },
    {
      "type": "numbered_list",
      "items": [
        {
          "content": "Balanced diet: Our food should contain correct proportion of carbohydrates, fat, protein, vitamins, minerals and water in it."
        },
        {
          "content": "Personal hygiene: We should follow the personal health practices, such as, Wash your hands before eating, Bathe regularly and wear clean clothes, Brush your teeth twice regularly, Do not let your nails grow long. Cut them regularly, Wash your feet and hands before going to bed."
        },
        {
          "content": "Cleaning household: We should keep our household and environment clean."
        },
        {
          "content": "Taking clean food and water: Our food should be fresh, clean and properly cooked, and water should be pure."
        },
        {
          "content": "Taking regular exercise: We should take part in games and sports and take physical exercise regularly."
        },
        {
          "content": "Taking regular sleep and rest: We should sleep properly and take proper rest."
        }
      ]
    },
    {
      "type": "question_text",
      "value": "E1 Answer the following questions."
    },
    {
      "type": "list",
      "items": [
        "1. What do we mean by hygiene?",
        "2. What are essential for good health?",
        "3. What do we mean by balanced diet?",
        "4. What are the rules of personal hygiene?"
      ]
    },
    {
      "type": "conversation",
      "value": "Sohan Hi, Simon! You look so fit! Do you exercise regularly? Simon Yes, I do. I'm quite .......... about fitness. Sohan So, how .......... do you exercise? Simon Well, I do jogging everyday in the ...... . Then I play table tennis in the afternoon. Sohan I like table tennis, too. Simon Oh, will you come to play .......... then? Sohan Sure. But ...... ...... do you play? Simon Pretty well, I guess. Sohan All right. But I'm not very good. Simon No problem, Sohan. I won't play .........."
    },
    {
      "type": "fill_in_blanks",
      "value": "Listen to the conversation and fill in the blanks with suitable words."
    },
    {
      "type": "paragraph",
      "value": "I'm Simon. I love to exercise. I usually exercise every day. I get up early in the morning and do jogging for half an hour. Almost regularly, I play table tennis in the afternoon. Sometimes, I play football. Once a week, I do yoga."
    },
    {
      "type": "free_answer",
      "value": "Now, write about what you usually do or would like to do to keep yourself fit."
    },
    {
      "type": "short_answer",
      "value": "Write a short paragraph on the rules of good health. Take your cues from E."
    }
  ]
}

const chapter10Data = {
  title: "Lesson 10: Remedies: Modern and Traditional",
  learningObjectives: [
    "read and understand written instructions",
    "read and understand texts",
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
    "and write short paragraphs"
  ],
  content: [
    {
      "type": "question_text",
      "value": "A. Look at the following pictures. Discuss with your partner what they are. Match them with their names given in the box."
    },
    {
      "type": blockTypes.IMAGE_WITH_SELECT_OPTIONS,
      "values": [
        "paracetamol",
        "neem",
        "savlon",
        "holy basil/tulsi",
        "antacid",
        "turmeric",
        "honey",
        "aloe vera"
      ],
      images: [
        require('../assets/images/lesson10/p1.png'),
        require('../assets/images/lesson10/p2.png'),
        require('../assets/images/lesson10/p3.png'),
        require('../assets/images/lesson10/p4.png'),
        require('../assets/images/lesson10/p5.png'),
        require('../assets/images/lesson10/p6.png'),
        require('../assets/images/lesson10/p7.png'),
        require('../assets/images/lesson10/p8.png')
      ]
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B. Read the following text."
    },
    {
      "type": "paragraph",
      "value": "People around the world are slowly changing their attitude towards medicine. More and more they are turning to natural cures. Natural cures are made of natural things, most often herbs and plants. History says that natural or herbal remedies are nothing new. People used them all along in different ages. Herbal medicines were used in ancient civilizations like India, China, Greece, Egypt, and Rome. Some ancient treatment systems are still in practice today. They have come down through generations."
    },
    {
      "type": "paragraph",
      "value": "For a minor burn injury the doctor may prescribe you a tube of ointment. But for the same, your grandma may put some aloe vera or use cold water. If children have cold in our country, grandmas give them honey and tulsi leaves to eat. And it works too. If you have a minor cut or wound, grown-ups may put some turmeric, marigold or aloe vera on it. Rural people usually use garlic, neem or turmeric to cure skin problems. With experience they have seen that these remedies work. Moreover, they are easy to get, are cheap and most often are without any side effects."
    },
    {
      "type": "question_text",
      "value": "B1. Find out the items for natural cures and chemicals. Write the names of natural cures in column A. In the column B, write the items that are chemicals."
    },
    {
      "type": "match_columns",
      "headers": [
        "Column A (Natural cures)",
        "Column B (Chemicals)"
      ],
      "leftValues": [
        "honey"
      ],
      "rightValues": [
        "savlon"
      ]
    },
    {
      "type": "question_text",
      "value": "B2. Answer the questions."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "1. What are natural cures made of?",
        "2. Are herbal cures modern inventions? Explain your reasons.",
        "3. Which civilizations are known for herbal treatments?",
        "4. What natural remedies are used for cold? Can you add any more natural treatment for cold?",
        "5. What herbal cures are used for skin problems?"
      ]
    },
    {
      "type": "question_text",
      "value": "C. Work in pairs. Complete the following expressions with words from the box."
    },
    {
      "type": blockTypes.FILL_IN_BLANKS_SELECT_OPTIONS,
      options: [
        "bottle",
        "box",
        "can",
        "package",
        "tube"
      ],
      "values": [
        { value: "1 a ................. of ointment"},
        { value: "2 a ................. of aspirin"},
        { value: "3 a ................. of bandage"},
        { value: "4 a ................. of foot spray"},
        { value: "5 a ................. of tissue"}
      ]
    },
    {
      "type": "question_text",
      "value": "Now write down some sentences using these phrases."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your sentences here..."
    },
    {
      "type": "question_text",
      "value": "D. Read the dialogue and practise in pairs."
    },
    {
      "type": blockTypes.CONVERSATION,
      dialogues: [
        {
          speaker:"Pharmacist",
          text: "Good morning. Can I help you?"
        },
        {
          speaker: "Mr Arman",
          text:"Do you have anything for dry skin?"
        },
        {
          speaker:"Pharmacist",
          text:"Well, you may try this new body lotion. It's good. Or, you can try this brand of Olive oil. Olive oil is also good for dry skin."
        },
        {
          speaker:"Mr Arman",
          text:"Well, I think I'll take the lotion. How much is it?"
        },
      ],
    },
    {
      "type": "question_text",
      "value": "D1. Work in pairs. Read the following situations and then make short conversations for each situation using can, could, may, should, etc., where necessary."
    },
    {
      "type": "numbered_list",
      "values": [
        "1. You want your teeth to be strong. Ask for a good toothpaste. Your partner will suggest or offer one.",
        "2. Decide first what you want to buy and ask for it. Your partner does not have what you want but he/she has something similar.",
        "3. You have slightly cut your finger. You ask for something to put on it. Your partner suggests 'Bandaid'.",
        "4. Your mother has a headache. You ask for a medicine. Your partner gives you 'Vicks'."
      ]
    },
    {
      "type": "question_text",
      "value": "E. People with a cold, a fever, or the flu often go to the doctor for help. But many people in our country also use home remedies for common illnesses. Read about some simple home remedies and answer the following questions."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Cough"
    },
    {
      "type": "paragraph",
      "value": "For children's cough, grandmas give two tea-spoons of basil leaf/tulsi juice with one spoon of honey. It works excellent. Some people take grape juice and honey too. It is also good for dry cough. Hot milk with honey is also useful in cough problems. You can take ginger tea which is also a useful home remedy for cough."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Cold"
    },
    {
      "type": "paragraph",
      "value": "Lemon juice is good for any cold because it contains vitamin C. Vitamin C increases body resistance. Lemon juice, hot water and honey together work well in healing common cold."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Toothache"
    },
    {
      "type": "paragraph",
      "value": "In normal toothache, keep a clove in your mouth. Place it in between the aching teeth and suck on it. You can even apply clove oil on the affected tooth. Garlic also cures toothache. Place a clove of garlic on the aching tooth and munch mildly. Its juice will work as a relief. A pinch of pepper powder mixed with common salt works well on the aching tooth. It's especially effective against the increased sensitiveness of the teeth."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "Headaches"
    },
    {
      "type": "paragraph",
      "value": "Eating apples give good result in headaches. While eating, add a little salt to it. When headache is caused by cold winds, cinnamon works the best. Make a paste of cinnamon by mixing in water and apply it on your forehead."
    },
    {
      type: blockTypes.QUESTION_TEXT,
      value: "E1 Learn these words: "
    },
    {
      "type": blockTypes.PARAGRAPH,
      "value": "ginger, resistance, clove, garlic, pepper, cinnamon, sensitive, munch, pinch (as used in the text)."
    },
    {
      "type": "free_answer",
      "value": "E2 Do you know any other home remedies that people use in our country? Ask your parents/relatives and make a list of such remedies other than the items given in your text."
    }
  ]
}

const chapter11Data = {
  title: "Lesson 11: Are you Listening?-1",
  learningObjectives: [
    "recognize English sounds",
    "recognize word and stress on words in sentences",
    "recognize intonation in sentences",
    "read aloud texts with proper pronunciation, stress and intonation."
  ],
  content: [
    {
      "type": "question_text",
      "value": "A. Listen to and read the following words."
    },
    {
      "type": "list",
      "values": [
        "shed",
        "shade",
        "pepper",
        "paper",
        "test",
        "taste",
        "wet",
        "wait",
        "pen",
        "pain",
        "man",
        "mane"
      ]
    },
    {
      "type": "question_text",
      "value": "A1 Do you notice any difference between the vowel sounds in the words on the left column and the vowel sounds in the words on the right? Listen to and repeat the sounds in Section A again."
    },
    {
      "type": "question_text",
      "value": "A2 Read the following sentences first. Notice the underlined words carefully. Then listen to and repeat the sentences pronouncing the underlined words properly using the vowel sounds you just practised in section A."
    },
    {
      "type": "list",
      "values": [
        "a. I met Benu and her room-mate in the book store.",
        "b. They were buying some papers and pens.",
        "c. I remember her friend's face, but I can't remember her name.",
        "d. Later, I met them again the same day at the bus station.",
        "e. They were waiting for some friends to come."
      ]
    },
    {
      "type": "question_text",
      "value": "A3 Practise saying the following words."
    },
    {
      "type": "list",
      "values": [
        "west   waste  ",
        "debt   date  ",
        "let    late  ",
        "get    gate  ",
        "tell   tail  "
      ]
    },
    {
      "type": "question_text",
      "value": "A4 Read the following sentences. Add 'e' to the underlined word in each sentence to make a new word. Now, fill in the blank in the sentence with the new word. One is done for you."
    },
    {
      "type": "list",
      "values": [
        "a. Can you please buy me a new cane?",
        "b. I .......... to ask you, but can you buy me a hat, too?",
        "c. I lost both at the canteen where I .......... lunch yesterday.",
        "d. Sam, my friend, was having lunch at the .......... canteen.",
        "e. He was mad at me because I .......... him go back and look for my things later."
      ]
    }
  ]
}

const chapter12Data = {
  title: "Lesson 12: An unseen beauty of Bangladesh",
  learningObjectives: [
    "ask and answer questions",
    "read and understand texts",
    "write short paragraphs"
  ],
  content: [
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "1. Have you ever visited any interesting tourist spot in Bangladesh? If you have, what was that place? What special attractions did you see there? If you haven't, what places do you wish to visit? What special attractions will you see there?",
        "2. Which of the following activities would you like to do while visiting a tourist spot? sight-seeing, taking photos, having picnic, shopping, collecting souvenirs, others ___\u2026\u2026"
      ]
    },
    {
      "type": "question_text",
      "value": "Now read the text on Birishiri, a quiet and less known tourist spot located in the north-eastern border of Bangladesh."
    },
    {
      "type": "paragraph",
      "value": "Bangladesh is a small country but it is gifted with unlimited natural attractions. Only some of these eye-catching destinations are known to us. But there are many other areas lying in the green, remote countryside that are less-known to us. Shusong Durgapur of Birishiri is one of such places."
    },
    {
      "type": "paragraph",
      "value": "Shusong Durgapur has an amazing landscape. It is located on the bank of crystal clear Someshwari river and is close to the Garo hills. You can see the hills of Indian state of Meghalaya from here. The nature has unfolded its glory in this small, rural landscape. Here you can see the ceramic mountain leaning against the sky, the blue water of the pictorial\u2026"
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson12/p1.png')
    },
    {
      "type": "paragraph",
      "value": "Shusong Durgapur is located under Netrokona district about 170 km north from Dhaka. Along with its scenic beauty, this place is home to diverse indigenous groups: Hajong, Garo, Achik and Mandi. The cultural academy in Durgapur is responsible for preserving and promoting the culture and traditions of these indigenous groups."
    },
    {
      "type": "paragraph",
      "value": "The main attraction of Birishiri is the ceramic hill of Durgapur and the charming landscape along the Someshwari River. The river changes its color as the seasons change. Among other attractions are the palace of the Susang king, the Dasha Busha Temple, Orange Gardens, Shal forests, and the Ramkrisna and Loknath Baba Temples."
    },
    {
      "type": "paragraph",
      "value": "The best way to get to Birishiri is by road from Dhaka. You can find direct bus to Birishiri from Mohakhali bus stand, Dhaka. It usually takes 5 to 6 hours to get there. When you are there you can go around the town by rickshaws. The rickshaw pullers know all the places very well."
    },
    {
      "type": "question_text",
      "value": "B1 Complete the dialogue below and act it out in pairs."
    },
    {
      "type": "conversation",
      dialogues: [
        {
          "speaker": "A",
          "text": "Are there any rivers in Birishiri?"
        },
        {
          "speaker": "B",
          "text": "Yes, there are. There are two rivers, the Someshwari and Kangsa."
        },
        {
          "speaker": "A",
          "text": "Are there any hills in Birishiri?"
        },
        {
          "speaker": "B",
          "text": "Yes, \u2026\u2026\u2026 is. It\u2019s called \u2026."
        }
      ]
    },
    {
      "type": "conversation",
      "value": "A : Can I see any other hills from there?\nB : Yes, you ....... You can see the hills of ...... state from there.\nA : Are there any temples there?\nB : Yes, there ...... You can see the Dasha Busha Temple and the ....... temples there."
    },
    {
      "type": "fill_in_blanks",
      "value": "Yes, you ....... You can see the hills of ...... state from there."
    },
    {
      "type": "fill_in_blanks",
      "value": "Yes, there ...... You can see the Dasha Busha Temple and the ....... temples there."
    },
    {
      "type": "question_text",
      "value": "B2 Discuss the following questions in pairs."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "value": [
        "1. In which district is Shusong Durgapur located?",
        "2. How far is Shusong Durgapur from Dhaka?",
        "3. What is the function of the cultural academy of Durgapur?",
        "4. How can you get to Shusong Durgapur from Dhaka?",
        "5. Why is Shusong Durgapur called 'an unseen beauty of Bangladesh?'"
      ]
    },
    {
      "type": "question_text",
      "value": "C Match the phrases with the meanings."
    },
    {
      "type": "match_columns",
      "headers": [
        "Phrases",
        "Meanings"
      ],
      "leftValues": [
        "1. eye-catching destinations",
        "2. green, remote countryside",
        "3. crystal clear",
        "4. pictorial mountain-valley",
        "5. modest movement",
        "6. alluring natural loveliness",
        "7. modes of transportation"
      ],
      "rightValues": [
        "c. places that draw one's attentions",
        "e. a rural and distant place full of plants and trees",
        "a. see-through",
        "f. a plain land between two hills that looks like a picture",
        "d. gentle flow",
        "g. the loveliness of nature that appeals to a viewer",
        "b. means of travelling from one place to another"
      ]
    },
    {
      "type": "question_text",
      "value": "D Write a passage on a place of tourist attraction that you know."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer here..."
    }
  ]
}

const chapter13Data = {
  title: "Lesson 13: Our pride",
  learningObjectives: [
    "read and understand texts",
    "ask and answer questions",
    "write short paragraphs",
    "participate in short dialogues and conversations on familiar topics"
  ],
  content: [
    {
      "type": "question_text",
      "value": "A Read the following passage."
    },
    {
      "type": "paragraph",
      "value": "December 16 is a remarkable day for Bangladeshi people. On this day in 1971, Bangladesh got independence after a nine-month-long blood-soaked battle against the Pakistani army. It is a day of national pride as well as a day of commemorating the sacrifices of the millions of Bangladeshi people. Pakistani army killed three million people and raped thousands of women."
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson13/p1.png')
    },
    {
      "type": "paragraph",
      "value": "Victory Day is celebrated with great enthusiasm across the country. The day begins with a 31-gun salute at dawn, followed by the hoisting of the national flag at government buildings and private institutions. Different political, cultural and educational programs are organized to pay homage to the martyrs of the war. The entire nation celebrates the day with colorful flags, banners and parades."
    },
    {
      "type": "paragraph",
      "value": "The National Parade ground hosts a grand military parade where the president, the prime minister and dignitaries from government and non-government sectors join. The National Martyrs' Memorial in Savar, our"
    },
    {
      "type": "paragraph",
      "value": "monument dedicated to the soldiers and civilians who lost their lives during the war, becomes a focal point for citizens to pay their respects. People from all walks of life gather to offer flowers, recite patriotic songs, and recall the sacrifices made by the nation\u2019s heroes."
    },
    {
      "type": "question_text",
      "value": "A1. Write the meanings of the following words:"
    },
    {
      "type": "fill_in_blanks",
      "value": "Homage, Martyrs, Dedicate, Patriotic, Sacrifice, Commemorate"
    },
    {
      "type": "question_text",
      "value": "A2. Answer the following questions."
    },
    {
      "type": blockTypes.QUESTION_LIST,
      "values": [
        "a. What is the significance of our victory day?",
        "b. Why do we pay homage to our martyrs?",
        "c. What is the name of the monument situated at Savar?",
        "d. How many people have sacrificed their lives for our country\u2019s liberation?"
      ]
    },
    {
      "type": "question_text",
      "value": "A3. Make a list of the patriotic songs that encouraged our people during the Liberation War of Bangladesh."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer here..."
    },
    {
      "type": blockTypes.QUESTION_TEXT,
      "value": "B Listen to the dialogue from a CD or as your teacher reads it out and fill in the gaps."
    },
    {
      type: blockTypes.IMAGE,
      value: require('../assets/images/lesson13/p2.png')
    },
    {
      "type": "conversation",
      "value": "Teacher: Well students, how do we celebrate our national days?  Shanta: We go to the \u2026\u2026. on \u2026\u2026\u2026. . We go to the Jatiyo Smritisoudho at \u2026\u2026\u2026. on ___. and ___\u2026\u2026  Teacher: Great! But do you know the English of Jatiyo Smriti Soudho? Shanta: Yes, ma\u2019am. It's \u2026\u2026\u2026.. Mausoleum. Teacher: Very good. Have you ever been to our National ___\u2026? Shanta: Oh yes, I went there last year on the ___\u2026 \u2026\u2026\u2026., on 16 December."
    },
    // TODO: ADD A CONVERSATION_WITH_BLANKS component as well
    {
      "type": "conversation",
      "value": "Teacher  What did you do there?"
    },
    {
      "type": "conversation",
      "value": "Shanta  Well, I went there with my .......... and my brother. Many people were there! Everybody went there to pay .......... to the liberation war martyrs. We were in a long queue. We had flowers with us. We .......... wreaths of flowers before the mausoleum. My parents took me to the mass graveyards. They told us about the sacrifice of our people for our ......................... I was very .......... to see the mass graves. I prayed for the souls of the martyrs."
    },
    {
      "type": "conversation",
      "value": "Teacher  Yes, we should never forget their ............... . What else did you see there, Shanta?"
    },
    {
      "type": "conversation",
      "value": "Shanta  I saw all kinds of people there- old and young, men, women, and children, politicians, workers, teachers, diplomats, ................. . All came to pay .......... to the freedom fighters. I saw some ........................."
    },
    {
      "type": "conversation",
      "value": "Teacher  Really? Were you excited?"
    },
    {
      "type": "conversation",
      "value": "Shanta  Oh, yes! I shook hands with them and gave them some flowers."
    },
    {
      "type": "conversation",
      "value": "Teacher  You must have felt very .................. We all should love and respect them. They are our source of inspirations."
    },
    {
      "type": "question_text",
      "value": "C. Read the words in Column A. They are used in the text above. Match them with their meanings in Column B."
    },
    {
      "type": "match_columns",
      "headers": [
        "Column A",
        "Column B"
      ],
      "leftValues": [
        "celebrate",
        "wreath",
        "graveyard",
        "independence",
        "martyr",
        "sacrifice",
        "inspiration"
      ],
      "rightValues": [
        "cemetery",
        "freedom",
        "to give up",
        "observe",
        "garland",
        "encouragement",
        "a person who died for a religious or political belief or cause"
      ]
    },
    {
      "type": "question_text",
      "value": "D. Work in pairs and take an interview of your partner. Use these cues."
    },
    // TODO: Make a component which can handle multiple fill in blanks
    {
      "type": "fill_in_blanks",
      "value": [
        "i) Do you have any experience of a great day?_______________.",
        "ii) What was it for?_______________.",
        "iii) Where did you go?_______________.",
        "iv) Who accompanied you?_______________.",
        "v) What did you do?_______________.",
        "vi) Why was it great/special to you?_______________."
      ]
    },
    {
      "type": "question_text",
      "value": "E. Use the cues in Section D and write a small paragraph on how your partner celebrated a national day."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your answer here..."
    },
    {
      "type": "question_text",
      "value": "F. Write your own experience about the day. Mention what day you celebrated; what exactly you, your teachers, and your friends did; and what your feelings were on that day."
    },
    {
      type: blockTypes.FREE_ANSWER,
      label: "Write your experience here..."
    }
  ]
}

const chapter14Data = {
  title: "Lesson 14 The Lion's Mane",
  learningObjectives: [
    "read and understand texts and talk about people",
    "places and familiar objects in short and simple sentences",
  ],
  content: [
    {
      "type": "question_text",
      "value": "A. Read the story."
    },
    {
      "type": "paragraph",
      "value": "Once, a lion was sitting beside a river. Suddenly he looked at his own reflection and thought 'My mane is too old. I need a new hairstyle!'"
    },
    {
      type: blockTypes.IMAGE,
      value: require("../assets/images/lesson14/p1.png")
    },
    {
      "type": "paragraph",
      "value": "The lion then roared 'I'm the king of the jungle and this unruly mane does not fit a king.' He dipped his paw into the river and tried desperately to smooth his mane."
    },
    {
      "type": "question_text",
      "value": "Flap it all up. That will suit you! The zebra said. Yes, it will even look better with a bit of colour to match your moustache, the giraffe added. What about a few ribbons? The vulture asked. Then cried the hyena, I know, a paper crown is what you need! A snake was passing by silently. Seeing the king there he simply raised his head."
    },
    {
      "type": "paragraph",
      "value": "What do you think I should do, snake? The king asked. If a king is a wise king, nobody cares about his hairstyle, the snake said with a hissing sound."
    },
    {
      "type": "paragraph",
      "value": "The king stared at the snake for some time. Then he smiled and kissed the snake."
    },
    {
      "type": "paragraph",
      "value": "Oh, why am I so vain? Am I not the king of the jungle? roared the lion. He shook his head from side to side to shake his mane back into place. From now on, I promise to be a wise king and not bother about my looks! the lion roared."
    },
    {
      "type": "question_text",
      "value": "(Written by Janet Allison Brown)"
    },
    {
      "type": "question_text",
      "value": "A1 Match the words in column A with the meanings given in column B."
    },
    {
      "type": "match_columns",
      "headers": [
        "Column A",
        "Column B"
      ],
      "leftValues": [
        "mane",
        "roar",
        "unruly",
        "flap",
        "moustache",
        "raise",
        "hissing sound"
      ],
      "rightValues": [
        "the long hair on the neck of a horse or a lion",
        "to make a very loud, deep sound",
        "difficult to control or manage",
        "move quickly",
        "a line of hair that some people have on their upper lip",
        "lift or move upwards",
        "a sound like a long 's'"
      ]
    },
    {
      "type": "question_text",
      "value": "A2 Answer the following questions."
    },
    {
      "type": "list",
      "values": [
        "1. Why did the lion want to change his hairstyle?",
        "2. What was the giraffe's suggestion?",
        "3. Do you agree with the snake's comment? Why/Why not?"
      ]
    },
    {
      "type": "question_text",
      "value": "A3 Every animal has something that makes it different from others. Now, match the words in column A with the words in Column B to know the different marks of some animals."
    },
    {
      "type": "match_columns",
      "headers": [
        "Column A",
        "Column B"
      ],
      "leftValues": [
        "Lion",
        "Elephant",
        "Zebra",
        "Sheep",
        "Buffalow",
        "Horse",
        "Dog",
        "Fish"
      ],
      "rightValues": [
        "wool",
        "trunk",
        "stripes",
        "horns",
        "pony tail",
        "curved tail",
        "scale",
        "mane"
      ]
    },
    {
      "type": "question_text",
      "value": "B Here is a puzzle for you."
    },
    {
      "type": "short_answer",
      "value": "Can you say which baby is born with a moustache?"
    }
  ]
}

const chapter15Data = {
  title: "Lesson 15: An old people's Home",
  learningObjectives: [
    "read and understand text",
    "ask and answer questions",
    "write short paragraphs",
  ],
  content: [
    {
        "type": "question_text",
        "value": "A. Read the text below."
      },
      {
        "type": "paragraph",
        "value": "Mariam is a student of class six in a government school in Rajshahi. Her mother works in an office and her father is a businessman. Mariam is very fond of her aunt, her father's sister, Suraiya Begum who lives in another part of the same town. On Fridays she often goes to her aunt's place and spends time with her."
      },
      {
        type: blockTypes.IMAGE,
        value: require('../assets/images/lesson15/p1.png')
      },
      {
        "type": "paragraph",
        "value": "Suraiya Begum is a retired school teacher. She is a widow and lives alone. Her husband died three years ago. Her two daughters are married and live with their families abroad. They talk to her over telephone and come to visit her whenever they get time."
      },
      {
        "type": "paragraph",
        "value": "Suraiya Begum has a lot of free time. She spends her time in reading books, watching TV, visiting friends and relatives. Sometimes she writes letters to her old colleagues. But now a days she often gets bored of doing all these things. She wants to do something more meaningful, something that would do good to others. She is planning to establish an old people's home in her locality. She knows some elderly people live all alone. They have no one to take care of them. They often feel helpless and miserable. They need care and support."
      },
      {
        "type": "paragraph",
        "value": "As part of her plan, Suraiya Begum starts to visit families. She talks to a number of people. She tries to find out the problems of elderly people in their families. She understands that old people are lonely and often they become sick. They have nobody to look after them."
      },
      {
        "type": "paragraph",
        "value": "On Fridays, she often takes Mariam with her on these visits. Mariam has already become very friendly with some of the old men and women."
      },
      {
        "type": "container",
        "value": "After completing the lesson students will be able to - read and understand texts - ask and answer questions - write short paragraphs"
      },
      {
        "type": "question_text",
        "value": "A1. Read the text carefully again and match the words on the left with the words on the right that have similar meanings."
      },
      {
        "type": "match_columns",
        "headers": [
          "Left Column",
          "Right Column"
        ],
        "leftValues": [
          "bored",
          "miserable",
          "colleague",
          "widow",
          "support"
        ],
        "rightValues": [
          "feeling tired because one does not find interest in something",
          "very unhappy",
          "a person with whom one works in a profession",
          "woman whose husband has died and who hasn't married again",
          "help"
        ]
      },
      {
        "type": "question_text",
        "value": "A2. Read the following sentences and say if they are true or false. If false, then give the right answers."
      },
      {
        "type": "list",
        "values": [
          "a. Suraiya Begum spends most her time taking care of her family.",
          "b. She wants to set up a school for adults who cannot read or write.",
          "c. There is already an old people's home in the town.",
          "d. Mariam enjoys spending time with her aunt.",
          "e. The old people Mariam visits do not like children's presence."
        ]
      },
      {
        "type": "paragraph",
        "value": "B. Read the following letter."
      },
      {
        "type": "paragraph",
        "value": "Suraiya Begum needs many people's help to make her dream come true. She sits down to write a letter to a friend who was her colleague and now lives in the next town."
      },
      {
        "type": "paragraph",
        "value": "**English For Today**\n51\n\nDear Sharmila,\nHow are you? I\u2019m writing to share with you a plan that I have. I know some old, physically weak and lonely people in our town. Some of them are quite well-off and some are not. But they all share one common thing that is they live alone and have no one to take care of them in sickness. Sometimes they don\u2019t have anybody to talk to.\n\nI have a plan. I want to set up a home for the old people where they would live like a family and we can be a part of that family, too. I need your help because I know that together we can do a lot.\n\nWrite to me soon. I\u2019ll wait eagerly for your reply.\nYour friend,\nSuraiya"
      },
      {
        "type": "question_text",
        "value": "B1 Answer the following questions."
      },
      {
        "type": "short_answer",
        "value": "a. Who is the writer of the letter?"
      },
      {
        "type": "short_answer",
        "value": "b. Who is she writing to? What is the relationship between the two?"
      },
      {
        "type": "short_answer",
        "value": "c. Does the writer have any particular reason for writing this letter?"
      },
      {
        "type": "short_answer",
        "value": "d. Do you think what Suraiya Begum wants to do is her profession, or is it a community work? Why do you think so?"
      },
      {
        "type": "question_text",
        "value": "B2 Work in groups."
      },
      {
        "type": "paragraph",
        "value": "Think of some good work that you can do for someone around you. What are they? Now write two or three sentences about what you can do for them."
      },
      {
        "type": "paragraph",
        "value": "Cues: teach, help in doing something, clean, etc."
      }
    ]
}

const chapter16Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "container",
      "value": "Lesson 16 Boats sail on the rivers"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to:\n- recognize English sounds\n- recognize intonation in sentences\n- understand and enjoy stories and poems"
    },
    {
      "type": "question_text",
      "value": "A Listen to, read and then recite the poem."
    },
    {
      "type": "poem",
      "value": "Boats sail on the rivers\nAnd ships sail on the seas;\nBut clouds that sail across the sky\nAre prettier far than these.\n\nThere are bridges on the rivers,\nAs pretty as you please;\nBut the bow that bridges heaven,\nAnd overtops the trees,\nAnd builds a road from earth to sky,\nIs prettier far than these."
    },
    {
      "type": "question_text",
      "value": "A1 What bow is the poet talking about when she says, 'But the bow that bridges heaven'?"
    }
  ]
}

const chapter17Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "container",
      "value": "Lesson 17 Are you listening?-2"
    },
    {
      "type": "numbered_list",
      "values": [
        "recognize English sounds",
        "recognize word stress and stress on words in sentences",
        "recognize intonation in sentences",
        "use English sounds appropriately",
        "use proper intonation in sentences",
        "read aloud texts with proper pronunciation, stress and intonation."
      ]
    },
    {
      "type": "question_text",
      "value": "A. Read the following poem out loud. Be careful about how you pronounce each word, as the spellings and sounds can be quite tricky!"
    },
    {
      "type": "poem",
      "value": "The Chaos"
    },
    {
      "type": "paragraph",
      "value": "I take it you already know\nOf tough and bough and cough and dough?\n\nOthers may stumble, but not you,\nOn hiccough, thorough, slough and through.\n\nBeware of heard, a dreadful word,\nThat looks like beard but sounds like bird.\n\nAnd dead: It\u2019s said like bed, not bead --\nFor goodness\u2019 sake, don\u2019t call it deed!\n\nWatch out for meat and great and threat\u2026\nThey rhyme with suite and straight and debt.\n\nA moth is not the moth in mother,\nNor both in bother, nor broth in brother.\n\nAnd here is not a match for there,\nNor dear and fear for bear and pear,\n\nAnd then there\u2019s dose and rose and lose --\nJust look them up -- and goose and choose.\n\nA dreadful language? Why, sakes alive!\nI\u2019d learned to speak it when I was five.\n\nAnd yet, to write it, the more I tried,\nI hadn\u2019t learned it at fifty-five."
    },
    {
      "type": "italic_text",
      "value": "Gerard Nolst Trenit\u00e9"
    },
    {
      "type": "container",
      "value": "54"
    },
    {
      "type": "paragraph",
      "value": "English For Today"
    },
    {
      "type": "question_text",
      "value": "A1 Underline the words in the poem which have the same letter combinations in their spelling, but different pronunciation. Practice saying them with a friend."
    },
    {
      "type": "question_text",
      "value": "A2 The words \u201calive\u201d, \u201cfive\u201d, and \u201cwrite\u201d from the poem have the same vowel sound. Now, read and listen to some other words that have the same sound as these."
    },
    {
      "type": "list",
      "values": [
        "try",
        "cry",
        "ice-cream",
        "nice",
        "ride",
        "drive",
        "sky",
        "fly",
        "child",
        "light"
      ]
    },
    {
      "type": "question_text",
      "value": "A3 Read the sentences below and choose the right words from the list of words in the box to fill in the blanks."
    },
    {
      "type": "fill_in_blanks_select",
      "blanks": [
        {
          "text": "Mike is a ______ young accountant.",
          "options": [
            "nine",
            "time",
            "fine",
            "five",
            "ride",
            "side",
            "bicycle",
            "night",
            "tide",
            "rise"
          ]
        },
        {
          "text": "He works from ______ to ______ in a government office.",
          "options": [
            "nine",
            "time",
            "fine",
            "five",
            "ride",
            "side",
            "bicycle",
            "night",
            "tide",
            "rise"
          ]
        },
        {
          "text": "In his free ______ he loves to ______ his ______ along the sea ______.",
          "options": [
            "nine",
            "time",
            "fine",
            "five",
            "ride",
            "side",
            "bicycle",
            "night",
            "tide",
            "rise"
          ]
        },
        {
          "text": "He often comes to the sea beach at ______.",
          "options": [
            "nine",
            "time",
            "fine",
            "five",
            "ride",
            "side",
            "bicycle",
            "night",
            "tide",
            "rise"
          ]
        },
        {
          "text": "He loves to watch the moon ______ in the sky and the ______ come in.",
          "options": [
            "nine",
            "time",
            "fine",
            "five",
            "ride",
            "side",
            "bicycle",
            "night",
            "tide",
            "rise"
          ]
        }
      ]
    },
    {
      "type": "question_text",
      "value": "A4 Read the sentences in the passage above loudly. Pay careful attention to the vowel sounds."
    }
  ]
}

const chapter18Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "question_text",
      "value": "Lesson 18: Make your snacks"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to read and understand written instructions and read and understand texts."
    },
    {
      "type": "conversation",
      "value": "A Mrs. Nilufar Ahmed is teaching her son Adib how to make easy snacks at home. She is reading a set of instructions from a recipe book."
    },
    {
      "type": "question_text",
      "value": "First look at the pictures of the things you will need to make an egg sandwich and match them with their names in the list of ingredients below."
    },
    {
      "type": "list",
      "values": [
        "1. Two pieces of bread",
        "2. Cucumber- 2/3 slices",
        "3. Tomato- 1/2 slices",
        "4. Butter or mayonnaise",
        "5. Egg (boiled/fried)",
        "6. Lettuce",
        "7. One slice of cheese"
      ]
    },
    {
      "type": "question_text",
      "value": "How to make"
    },
    {
      "type": "numbered_list",
      "values": [
        "1. First, take two slices of bread.",
        "2. Spread the butter thinly on one side of each slice.",
        "3. Then, put a slice of cheese on the buttered side of the bread.",
        "4. After that, put egg on top of the cheese.",
        "5. Next, arrange slices of cucumber and one tomato on the egg.",
        "6. Later, place the other slice of bread on top."
      ]
    },
    {
      "type": "paragraph",
      "value": "Your sandwich is ready now. If you want, you can cut the sandwich into two halves and serve."
    },
    {
      "type": "paragraph",
      "value": "English For Today 57"
    },
    {
      "type": "paragraph",
      "value": "Handy Hints 1. Remember to wash and dry all vegetables before preparing them. 2. Be extra careful when handling sharp knife. 3. You may wish to choose a variety of fillings for example, 4 slices of cucumber, 1 slice of meat such as chicken loaf or meat loaf, mustard and so on."
    },
    {
      "type": "question_text",
      "value": "A1 Fill in the blanks and complete the instructions for making a sandwich."
    },
    {
      "type": "fill_in_blanks",
      "value": [
        "First, take two slices of __________________.",
        "Second, spread ____________________ on one side of them.",
        "Then, put one slice of _________________.",
        "After that, put ___________________.",
        "Later, arrange one slice of __________ and __________.",
        "Finally, place the remaining slice of ____________________ on top of another and serve."
      ]
    },
    {
      "type": "question_text",
      "value": "B Here is a recipe for making an omelette. Complete the recipe by replacing the pictures with words from the box."
    },
    {
      "type": "question_text",
      "value": "A recipe: how to make the perfect Omelette"
    },
    {
      "type": "fill_in_blanks",
      "value": "Use a minimum of __________ per omelette. Break the eggs in a small __________. Put one __________ of water and just a little salt in the bowl. Add slices of __________ and __________. Beat the mix with a __________ well. You need a little bit of __________. Put oil in a __________. Then __________ the oil. When the oil is hot, __________ the egg, onion and chilli mix into it. Spread the mix round the pan. Leave the mix in the pan for 2/3 minutes. As it thickens turn it in folds with a flat spoon. Your __________ is ready. Take the pan off the ________."
    },
    {
      "type": "question_text",
      "value": "B1. Notice some of the words that you have used in the omelette recipe above e.g. heat, beat, pour etc. We use these words to describe what we do while preparing foods. Look at some more examples of them. Can you match each action word in the box with a picture?"
    },
    {
      "type": "list",
      "values": [
        "omelette",
        "pour",
        "cooking oil",
        "fork",
        "frying pan",
        "heat",
        "spoon",
        "four eggs",
        "onion",
        "stove",
        "bowl",
        "chilli"
      ]
    },
    {
      "type": "container",
      "value": "English For Today"
    },
    {
      "type": "numbered_list",
      "values": [
        "break",
        "beat",
        "boil",
        "chop",
        "fry",
        "pour",
        "stir",
        "slice"
      ]
    },
    {
      "type": "question_text",
      "value": "C. Now, use some of the verbs above to write a simple recipe for making instant noodles."
    },
    {
      "type": "fill_in_blanks",
      "values": [
        "First, ___________ water into a pot.",
        "Put your pot on a stove and ___________ the water for two minutes.",
        "___________ some onions and a green chilli thinly.",
        "Then, add noodles into the water.",
        "___________ gently with a spoon.",
        "Add the spices that come with the noodles.",
        "Add the onions and green chilli.",
        "Serve the noodles in a dish.",
        "___________ an egg and add it on top if you want."
      ]
    }
  ]
}

const chapter19Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "container",
      "value": "Lesson 19"
    },
    {
      "type": "formatted_text",
      "value": "Stop, look and listen"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to  \u2022 read aloud texts with proper pronunciation, stress and intonation  \u2022 read and understand texts"
    },
    {
      "type": "question_text",
      "value": "A. Read the following verse."
    },
    {
      "type": "poem",
      "value": "Stop, Look, and Listen\nIs a very good rule to use\nNot just before you cross a street,\nBut when you look for clues."
    },
    {
      "type": "question_text",
      "value": "A1. Did you enjoy the poem? Discuss with a partner about what the poet is trying to say here."
    },
    {
      "type": "question_text",
      "value": "B. Quickly read the following text with blank spaces only once. Then listen to the audio file or what your teacher reads out to fill in the blank spaces."
    },
    {
      "type": "fill_in_blanks",
      "value": "Last week, for my __________, I got a little white-board and a package of colored ________. I took it to school and ________ to my teacher. I said that if I ________ on the little white-board at my desk, I could ________ more carefully. My teacher said there are ________ ways to improve one's __________. But she said it would be all ________ to try it out. I had a terrible ________ trying to write as ________ with chalk as the other children were writing with ________. I held the chalk so ________, it kept breaking in ________. When the lesson was over, I was totally ________. My wrist felt numb. I wrote this ________ on my whiteboard and left it on my desk. The chalk was too ________ and holding it was too ________. I'll try to find some easier ________ to improve my writing."
    }
  ]
}

const chapter20Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
        "type": "question_text",
        "value": "A. Look at the pictures below. Do you know who they are or anything about them?"
      },
      {
        "type": "paragraph",
        "value": "A \u201cbard\u201d is one who writes poems and songs. A \u201cmystic\u201d is one who seeks truth and strives to become united with God through prayer and meditation. The pictures above are of three renowned mystic bards of Bangladesh: Lalon Shah, Hason Raja, and Shah Abdul Karim. They all wrote beautiful poems and songs to express their deep thoughts and feelings about God, life, and love for humankind."
      },
      {
        "type": "question_text",
        "value": "B. Let us know more about the mystic poet Hason Raja. Read the following text."
      },
      {
        "type": "paragraph",
        "value": "Hason Raja was born in 1854, into a wealthy landlord family in Sylhet. He did not receive much formal education as a child. In his youth, he lived a life of luxury. He had everything\u2014money, comfort, and pleasure."
      },
      {
        "type": "paragraph",
        "value": "However, at one point in his life, he began to feel that these material possessions were meaningless. He gave away all his properties and started to think deeply about the creator, life, death, and humankind."
      },
      {
        "type": "question_text",
        "value": "Hason Raja"
      },
      {
        "type": "paragraph",
        "value": "wrote about a thousand songs which reflected his thoughts. In 1906, he published a book called Hason Udash. The book had 206 songs in it. In his songs, he called himself \u2018Crazy Hason Raja\u2019, or \u2018Pagla Hason Raja\u2019. Another volume called Hason Raja Samagra (Complete Works of Hason Raja) was also published, which contained 500 poems and songs. Hason Raja\u2019s songs had always been popular in Sylhet, but very soon they spread all over Bangladesh and beyond. As you grow older, try to learn more about this great mystic poet through reading and listening to his songs."
      },
      {
        "type": "question_text",
        "value": "B1 Answer the following questions."
      },
      {
        "type": "list",
        "values": [
          "a. When was Hason Raja born?",
          "b. Where was he from?",
          "c. What was his youth like?",
          "d. Why did Hason Raja leave his life of comfort and pleasure?",
          "e. What was the other name by which Hason Raja was known?"
        ]
      },
      {
        "type": "question_text",
        "value": "B2 Practise reading the passage loudly giving proper attention to pronunciation, pause, and intonation."
      },
      {
        "type": "question_text",
        "value": "B3 Learn the meanings of the words:"
      },
      {
        "type": "list",
        "values": [
          "comfort",
          "luxury",
          "pleasure",
          "volume",
          "crazy",
          "contain",
          "beyond",
          "eminent"
        ]
      }
    ]
}

const chapter21Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "container",
      "value": "Lesson 21 Wonders of the world-1"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to follow instructions, commands, requests accordingly and read and understand texts."
    },
    {
      "type": "question_text",
      "value": "A Look at the pictures. What are they called?"
    },
    {
      "type": "fill_in_blanks",
      "value": "Now, listen to the audio and fill in the gaps of the following text: The pyramids are huge _______________________________ for the ancient kings and queens of Egypt. These kings and queens are known as the ____________________. It needed a few thousand ________________ ________________________ to build the pyramids. The most famous ___________________________ are the Giza pyramids. Giza is a place near Cairo, the __________________________ of Egypt. The Pyramids of ____________________ at Giza is the largest Egyptian pyramid. It is the only one of the ______________________ still in existence."
    },
    {
      "type": "paragraph",
      "value": "C Read the following text."
    },
    {
      "type": "paragraph",
      "value": "The Taj Mahal is also known as \"the Taj\". It is a white marble tomb located in Agra in India. Do you know the story behind the Taj Mahal? The Mughal emperor, Shah Jahan loved his wife Mumtaz Mahal more than his life. Mumtaz died at an early age. Shah Jahan was very shocked at her death. So he built the Taj Mahal as a token of love for his wife. It is the place where Mumtaz is sleeping for ever. The Taj has an area of about 1003 acres or 405 hectares. The Taj Mahal is the finest example of Mughal architecture. It combines the art of Persia, Turkey, and India. It took 21 years and thousands of artisans and craftsmen to complete the Taj Mahal. The Taj is universally admired as one of the wonders of the world."
    },
    {
      "type": "question_text",
      "value": "C1 Now, make some questions based on the passage you read, using the cues given below:"
    },
    {
      "type": "fill_in_blanks",
      "values": [
        "a. What is...................................................................................?",
        "b. Where is.................................................................................?",
        "c. How much.............................................................................?",
        "d. When......................................................................................?",
        "e. Why.......................................................................................?",
        "f. How many..............................................................................?"
      ]
    },
    {
      "type": "question_text",
      "value": "C2 Complete the following table with the information given in the passage."
    },
    {
      "type": "fill_in_blanks",
      "values": [
        "Shah Jahan               built",
        "Taj Mahal                is",
        "its area                    is",
        "Mumtaj                    died",
        "To complete the Taj    it took"
      ]
    },
    {
      "type": "question_text",
      "value": "D Read the text about one of the wonders of the world, the Eiffel Tower."
    },
    {
      "type": "fill_in_blanks_select",
      "value": "Put the verbs in brackets into the correct tense."
    },
    {
      "type": "paragraph",
      "value": "The Eiffel Tower is a lattice tower in Paris. It .............. (be) built in 1889. Now it is .......... (consider) a cultural icon of France. It stands as one of the most recognisable structures in the world too. The tower .............. (be) famous as the tallest construction in Paris and the most-visited paid monument in the world. Millions of people .......... (ascend) it every year. It is 320 metres (1,050 ft) tall, about the same height as an 81-story building. The tower .............. (have) three levels for visitors. A visitor ........ (have) to walk over 300 steps to go from ground level to the first level. The distance .............. (remain) the same between the first and the second level. The third and highest level can be .......... (access) only by lift. The tower is .............. (name) after the engineer Gustave Eiffel, whose company .............. (design) and .............. (build) the tower."
    },
    {
      "type": "question_text",
      "value": "E Now, read the dialogue. What is it about?"
    },
    {
      "type": "conversation",
      "value": [
        {
          "speaker": "Mong Pru",
          "dialogue": "Nira, I'm really surprised to know about these wonders. What do you think?"
        },
        {
          "speaker": "Nira",
          "dialogue": "They are amazing! But the wonders of the present time are also amazing. They are not as huge as the super structures of the past but they are also incredible!"
        },
        {
          "speaker": "Mong Pru",
          "dialogue": "What do you mean?"
        },
        {
          "speaker": "Nira",
          "dialogue": "Just wait for now! Let me only say that some of the wonders of the modern world are truly incredible! I mean, they are really unbelievable! We'll read about them in the next lesson."
        }
      ]
    },
  ]
}

const chapter22Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    
  ]
}

const chapter23Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "header",
      "value": "Lesson 23"
    },
    {
      "type": "header",
      "value": "We live in a global village"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to read and understand the texts, follow instructions, commands, request and act accordingly, understand and enjoy stories and poems."
    },
    {
      "type": "question_text",
      "value": "A. Look at the pictures and discuss with your partner what you see in them."
    },
    {
      "type": "question_text",
      "value": "B. Sohan has received a letter from his uncle, who is a captain in the Bangladesh Army. At present, he is in Congo on a US Peacekeeping Mission. Read his letter and do the activities that follow."
    },
    {
      "type": "paragraph",
      "value": "Dear Sohan, I hope you are doing well, and focusing on your studies. I received your letter last week, but did not have the time to write back. Things are really busy here in Congo. I am glad to know that you read up about this country. You\u2019re right\u2014Congo is a country in central Africa. It is rich in natural resources and its people are incredible. However, there are several regions in this country which face problems like political and ethnic conflict, often resulting in violent incidents. We try to maintain peace and security in those areas. We distribute food, water, and medicine to people, and sometimes even build houses for them. We also teach children in small schools."
    },
    {
      "type": "paragraph",
      "value": "Enough about the work I do here. Today, I\u2019d like to tell you about an interesting young man I met here. His name is Ashar Santoso. He was born in Indonesia. When he was eight, he moved to Singapore with his parents and"
    },
    {
      "type": "question_text",
      "value": "A. Read the following passage."
    },
    {
      "type": "paragraph",
      "value": "went to a Singaporean school. After a few years, he went to Denmark and completed his schooling there. For higher studies, he enrolled in a university in the US, and completed both his bachelor\u2019s and master\u2019s degrees there. Since then, he has travelled to many other countries around the world."
    },
    {
      "type": "paragraph",
      "value": "Ashar is now in Congo as a member of a voluntary organisation. His main job is to take care of children\u2019s education in a community school. His group has ten other members, all from different countries. Ashar is a nice fellow and has become a good friend of ours. We call him \u2018Mr Global Citizen\u2019."
    },
    {
      "type": "paragraph",
      "value": "I was talking to him the other day and mentioned how impressed I am that he has been to so many countries. I asked him how he felt about that, and he said: \u201cIt\u2019s really nice to work with different people. I get to know so much about them \u2014 their language, family life, culture, their thoughts and aspirations. I sometimes think I belong to all.\u201d \u201cWell, Ashar, you\u2019re a true global citizen,\u201d I said. \u201cAren\u2019t you too, Reza?\u201d smiled Ashar Santoso. \u201cWe\u2019re all part of the same human race, aren\u2019t we?\u201d"
    },
    {
      "type": "paragraph",
      "value": "I\u2019ve thought a lot about what Ashar said. I guess we can all be global citizens if we look at the world and its people the way he does. How do you feel about it?"
    },
    {
      "type": "paragraph",
      "value": "Well, that\u2019s all for today. I hope your final exams go well. Write to me soon. With love, Uncle Reza"
    },
    {
      "type": "question_text",
      "value": "B1 Now, match the words in column A with their meaning in column B."
    },
    {
      "type": "match_columns",
      "headers": [
        "Column A",
        "Column B"
      ],
      "leftValues": [
        "challenging",
        "maintain",
        "graduation",
        "clash",
        "global"
      ],
      "rightValues": [
        "keep up",
        "international",
        "difficult",
        "university degree",
        "fight"
      ]
    },
    {
      "type": "question_text",
      "value": "B2 Answer the following questions."
    },
    {
      "type": "fill_in_blanks",
      "value": "a. Where is Congo?"
    },
    {
      "type": "fill_in_blanks",
      "value": "b. Who called Ashar Santoso \u2018Mr Global Citizen\u2019? Why?"
    },
    {
      "type": "fill_in_blanks",
      "value": "c. Would you like to be a global citizen?"
    },
    {
      "type": "question_text",
      "value": "B3 If you got the chance to meet Ashar Santoso, what questions would you ask him? Make a list of five questions."
    },
    {
      "type": "free_answer",
      "value": ""
    },
    {
      "type": "question_text",
      "value": "C Listen to the audio and fill in the following gaps."
    },
    {
      "type": "fill_in_blanks",
      "value": "The term 'global village' was ________ used by Marshal McLuhan."
    },
    {
      "type": "fill_in_blanks",
      "value": "In 1962 and ________ he wrote two books on media and communication."
    },
    {
      "type": "fill_in_blanks",
      "value": "In his books he said that telephone, TV and electronic media have brought all mankind close to one another."
    },
    {
      "type": "fill_in_blanks",
      "value": "For example, if we see the news of floods in a distant country on TV, we feel that we are also ________ there."
    },
    {
      "type": "fill_in_blanks",
      "value": "We can share the same suffering with the people who are in the real ________ at the moment."
    },
    {
      "type": "fill_in_blanks",
      "value": "McLuhan believed that electronic ______________ would make the world a global village."
    },
    {
      "type": "fill_in_blanks",
      "value": "When he first said about the idea of global village, the Internet was not invented."
    },
    {
      "type": "fill_in_blanks",
      "value": "But now, personal computers and the Internet have made McLuhan's idea more ________ than ever."
    },
    {
      "type": "fill_in_blanks",
      "value": "Now the entire globe is ________ in a worldwide web called 'The Internet'."
    }
  ]
}

const chapter24Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
        "type": "question_text",
        "value": "A. Look at the pictures and the words in the following box. Discuss and say which words are related with the pictures."
      },
      {
        "type": "list",
        "values": [
          "wage earner",
          "skilled worker",
          "economy",
          "job",
          "tourists",
          "pleasure",
          "abroad",
          "foreign"
        ]
      },
      {
        "type": "question_text",
        "value": "B. Answer the following questions in pairs, then read the text below."
      },
      {
        "type": "list",
        "values": [
          "Do you know anyone who has gone abroad to earn a living?",
          "Which countries do Bangladeshi workers go to?",
          "How much money do you think they earn?"
        ]
      },
      {
        "type": "paragraph",
        "value": "A large number of Bangladeshis go abroad for work. There is always a high demand for workers in countries like the UAE, Oman, Saudi Arabia, Qatar, Bahrain, etc. These countries prefer Bangladeshi workers because they are hard-working. However, it is unfortunate that many of our workers are forced to do 'odd' jobs in those countries, and as a result, they are not paid well. One reason for this is that Bangladeshi workers are often not good at English, Arabic, or other languages which are required abroad. Therefore, it is important for workers to develop their language skills before going to other countries for work. This will help them secure better jobs and receive the pay and benefits they deserve. In this way, they will be able to support their families better, as well as contribute more effectively to the development of our economy."
      },
      {
        "type": "question_text",
        "value": "B1 Complete column B of the table below with information from the text you have read."
      },
      {
        "type": "match_columns",
        "headers": [
          "Column A",
          "Column B"
        ],
        "leftValues": [
          "Countries which prefer Bangladeshi workers",
          "Skills required for good jobs abroad",
          "Advantages of developing language skills",
          "Advantages of getting better jobs"
        ],
        "rightValues": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "question_text",
        "value": "C Sohan had a conversation with a Bangladeshi doctor, Mr Arman who works in a hospital in Cairo, Egypt. Read and practise the dialogue in pairs."
      },
      {
        "type": "conversation",
        "value": [
          {
            "speaker": "Sohan",
            "dialogue": "Can you tell me a little about Cairo?"
          },
          {
            "speaker": "Dr Arman",
            "dialogue": "Sure. What would you like to know?"
          },
          {
            "speaker": "Sohan",
            "dialogue": "Well, what's a good time to visit there?"
          },
          {
            "speaker": "Dr Arman",
            "dialogue": "I think you can visit any time. The weather is more or less the same."
          },
          {
            "speaker": "Sohan",
            "dialogue": "Good! And what should I see there?"
          },
          {
            "speaker": "Dr Arman",
            "dialogue": "Well, you can visit the Cairo Museum and you should see the mummies. And you mustn't leave Cairo without visiting the Pyramids."
          },
          {
            "speaker": "Sohan",
            "dialogue": "Anything else?"
          },
          {
            "speaker": "Dr Arman",
            "dialogue": "Oh yes. If you have time, you may visit Port Suez. You could have an excellent night view of the Red Sea."
          },
          {
            "speaker": "Sohan",
            "dialogue": "It all sounds exciting! Thank you very much."
          }
        ]
      },
      {
        "type": "language_focus",
        "value": "Modal verbs can/can't, could/couldn't, may, should, must/mustn't:"
      },
      {
        "type": "paragraph",
        "value": "Can you tell me something about Cairo? Yes, I can. / No, I can't."
      },
      {
        "type": "paragraph",
        "value": "What else could I see there? You could enjoy the night view of Port Suez. But you couldn't go across the Red Sea without valid visa."
      },
      {
        "type": "paragraph",
        "value": "What can I have for dinner? You can have traditional Egyptian dishes or Continental European, as you wish."
      },
      {
        "type": "paragraph",
        "value": "What should I see in Cairo museum? You should see the mummies. But you mustn't leave Egypt without visiting the Pyramids."
      },
      {
        "type": "fill_in_blanks",
        "value": "Complete the sentences about what a tourist can do and see in Dhaka. Use the verbs from the box."
      },
      {
        "type": "list",
        "value": "can see, may spend, can go, could(even) taste, shouldn't miss, should visit, should go for, mustn't drink, may try"
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. to Sonargaon."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. the capital of ancient Bengal there."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. the Lalbagh Fort in the old part of Dhaka."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. a couple of hours at the Baldha Garden."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. the Ahsan Manzil too."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. a boat ride on the Buriganga river."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. the taste of Mughlai Khana once you're in Dhaka."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. a Tom Tom ride from Sadarghat to Gulistan."
      },
      {
        "type": "fill_in_blanks",
        "value": "You ................. Chattpaty or Fuchka on the foot path."
      },
      {
        "type": "fill_in_blanks",
        "value": "But you .......... tap water in a restaurant."
      },
      {
        "type": "question_text",
        "value": "E Read the sentences in Section D (1-10) again. Suppose, a foreign traveller wants to visit Dhaka. He wants some information from you, such as, when to visit, what to see, where to eat, what to do in Dhaka, etc. Complete the following dialogue taking the cue from D."
      },
      {
        "type": "conversation",
        "value": "Foreign traveller Can you tell me a little about Dhaka?"
      },
      {
        "type": "conversation",
        "value": "You Sure. What ...................................... to know?"
      },
      {
        "type": "conversation",
        "value": "Foreign traveller Well, what's ..........................................................?"
      },
      {
        "type": "conversation",
        "value": "You I think you can visit in winter. The weather is .........."
      },
      {
        "type": "conversation",
        "value": "Foreign traveller Good! And what ..................................................... there?"
      },
      {
        "type": "conversation",
        "value": "You Well, you can visit Sonargaon Folk Art Museum and you ............... the handicrafts. But you ............... Dhaka without visiting the Lalbagh Fort."
      },
      {
        "type": "conversation",
        "value": "Foreign traveller .................................?"
      },
      {
        "type": "conversation",
        "value": "You Oh yes, if you have time, you ................. Ahsan Manjil. You ............... an excellent experience of the Mughal and the British architecture by visiting it."
      }]
}

const chapter25Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "container",
      "value": "Lesson 25"
    },
    {
      "type": "paragraph",
      "value": "The Concert for Bangladesh"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to read and understand texts, ask and answer questions, participate in short dialogues and conversations on familiar topics."
    },
    {
      "type": "paragraph",
      "value": "A It\u2019s Friday evening. Mr. Farhad is watching television in the sitting room. His daughter Fahmida comes in. A tall, bearded man with long hair is playing a guitar and singing a song, \u201cBangladesh, Bangladesh...\u201d on the television screen. Fahmida is thrilled to watch a foreigner singing a song on Bangladesh. She has the following conversation with her father about the song and the singer."
    },
    {
      "type": "conversation",
      "value": [
        {
          "speaker": "Fahmida",
          "text": "Father, who is this singer? He is not a Bangladeshi, is he?"
        },
        {
          "speaker": "Mr. Farhad",
          "text": "You are right! He is not. He is a famous singer from England. His name is George Harrison."
        },
        {
          "speaker": "Fahmida",
          "text": "George Harrison! Why did he sing the song on Bangladesh?"
        },
        {
          "speaker": "Mr. Farhad",
          "text": "That's a huge story. Harrison was not only a famous singer but also a great humanist. He helped us during our Liberation War of 1971."
        },
        {
          "speaker": "Fahmida",
          "text": "Did he come to Bangladesh to take part in the Liberation War?"
        },
        {
          "speaker": "Mr. Farhad",
          "text": "No, my child, he didn't come to Bangladesh, but he fought for our cause by organising the historic Concert for Bangladesh."
        },
        {
          "speaker": "Fahmida",
          "text": "Concert for Bangladesh! Please, father. Tell me more about it."
        }
      ]
    },
    {
      "type": "conversation",
      "value": "Mr. Farhad\nWell, the Concert for Bangladesh was held on the 1st August, 1971 at the Madison Square Garden, New York. George Harrison and some other famous musicians performed in that live concert in front of an audience of about forty thousand people. It was organised to make the world aware of the sufferings of Bangladesh during our liberation war."
    },
    {
      "type": "conversation",
      "value": "Fahmida\nWasn\u2019t that great!"
    },
    {
      "type": "conversation",
      "value": "Mr. Farhad\nYes, it was great! The concert won huge support for the millions of war victims of Bangladesh. At the same time it raised millions of dollars for UNICEF relief fund."
    },
    {
      "type": "conversation",
      "value": "Fahmida\nI'm really glad that you told me all this, Father. I think we should be grateful to George Harrison and his friends who organised the Concert for Bangladesh."
    },
    {
      "type": "conversation",
      "value": "Mr. Farhad\nYou are right, dear! We should remember those great friends who helped us in our days of struggle and suffering."
    },
    {
      "type": "question_text",
      "value": "A1 In pairs, discuss if the following statements are True or False. If false, correct the statement."
    },
    {
      "type": "list",
      "values": [
        "a. George Harrison was from the United States.",
        "b. In 1971, George Harrison visited Bangladesh to take part in the liberation war.",
        "c. A huge audience attended the concert for Bangladesh.",
        "d. George Harrison was the only well-known musician to take part in the Concert for Bangladesh.",
        "e. The people of the world became aware of the crisis in Bangladesh following the Concert for Bangladesh."
      ]
    },
    {
      "type": "question_text",
      "value": "B Read the lyrics of the song aloud. Here are some parts of the song 'Bangladesh'."
    },
    {
      "type": "paragraph",
      "value": "Bangladesh\nMy friend came to me, with sadness in his eyes\nHe told me that he wanted help\nBefore his country dies\nAlthough I couldn't feel the"
    },
    {
      "type": "poem",
      "value": "Bangladesh, Bangladesh  \nWhere so many people are dying fast  \nAnd it sure looks like a mess  \nI've never seen such distress  \n\nNow, won't you lend your hand"
    }
  ]
}

const chapter26Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "question_text",
      "value": "Lesson 26 Buying clothes"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to ask and answer questions, read and understand texts."
    },
    {
      "type": "question_text",
      "value": "A. Match the words with the pictures of clothes."
    },
    {
      "type": "match_columns",
      "headers": [
        "Words",
        "Pictures"
      ],
      "leftValues": [
        "trousers",
        "jacket",
        "saree",
        "panjabi",
        "shorts",
        "blouse/top",
        "polo shirt",
        "frock/dress",
        "jeans",
        "T-shirt",
        "salwar-kameez",
        "shoes"
      ],
      "rightValues": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ]
    },
    {
      "type": "question_text",
      "value": "B. In pairs, discuss the following questions about you."
    },
    {
      "type": "list",
      "values": [
        "1. Have you ever been to a clothes shop?",
        "2. If no, then who buys your clothes?",
        "3. If yes, then who did you go with to the clothes shop?",
        "4. Which new clothes would you like to buy right now?",
        "5. What is your favourite colour?"
      ]
    },
    {
      "type": "question_text",
      "value": "C. Read the conversation between Imran and the shop assistant."
    },
    {
      "type": "conversation",
      "value": "Imran: Excuse me, where are the polo shirts?  Assistant: They're over there in the boy's section. Let me show you.  Imran: Thanks. Do you have one without a chain?  Assistant: Yes, quite a few, sir. What size do you wear?  Imran: May be a medium?  Assistant: Here you are! This one is in medium size.  Imran: A medium! But it's too big!  Assistant: How about this? This is small.  Imran: Yeah, I think this size is OK. Do you have it in a different colour?  Assistant: What colour would you like?  Imran: Blue, I guess.  Assistant: Just a moment please, I'll check. How about this one? It's a nice sky blue.  Imran: Yes, this is a nice colour. Can I try this on?  Assistant: Sure! The trial room is at the back.  Imran: Thank you. It's just perfect! How much is it?  Assistant: It's Taka three hundred. This shirt is on sale this week.  Imran: Mom, can I buy this one?  Mom: Sure, dear! Shall we go and pay at the cash counter?  Salesman: Yes, Ma\u2019am. Would you follow me, please?"
    },
    {
      "type": "fill_in_blanks",
      "value": "C1 Complete the sentences using the words from the conversation in B.",
      "blanks": [
        {
          "number": 1,
          "value": "chain"
        },
        {
          "number": 2,
          "value": "medium"
        },
        {
          "number": 3,
          "value": "sky blue"
        },
        {
          "number": 4,
          "value": "try on"
        },
        {
          "number": 5,
          "value": "sale"
        }
      ]
    },
    {
      "type": "question_text",
      "value": "C2 Look at the useful expressions that Imran uses at the shop. Use the words below each incomplete sentence to make a complete sentence."
    },
    {
      "type": "fill_in_blanks",
      "blanks": [
        {
          "question": "Excuse me, where are the ___\u2026 \u2026?",
          "options": [
            "polo shirts",
            "trousers",
            "socks",
            "shoes"
          ]
        },
        {
          "question": "Do you have the kinds without ___\u2026?",
          "options": [
            "buttons",
            "lace",
            "hooks"
          ]
        },
        {
          "question": "Do you have these in a different ___\u2026?",
          "options": [
            "colour",
            "size",
            "design"
          ]
        },
        {
          "question": "How much is/are ___\u2026?",
          "options": [
            "this",
            "these",
            "the shirt",
            "these socks",
            "the trousers"
          ]
        }
      ]
    },
    {
      "type": "question_text",
      "value": "D Read the conversations between Mrs Urmila Karim and Imran. Which clothes do they choose? Tick the correct picture for each conversation."
    },
    {
      "type": "conversation",
      dialogues: [
        {
          "speaker": "Mrs Karim",
          "line": "Look at these jeans."
        },
        {
          "speaker": "Imran",
          "line": "No, mom. That is too narrow. I want some baggy ones."
        },
        {
          "speaker": "Mrs. Karim",
          "line": "Flat, you mean?"
        },
        {
          "speaker": "Imran",
          "line": "No, not flat. Just baggy, you know, loose fitting with pockets on the sides."
        }
      ]
    },
    {
      "type": "short_answer",
      "value": "Dialogue 2"
    },
    {
      "type": "conversation",
      "value": "**Mrs. Karim:** I need some shoes.  \n**Imran:** How about these?  \n**Mrs. Karim:** No, the heels are too high.  \n**Imran:** Do you want flat shoes then?  \n**Mrs. Karim:** No, not flat, something in between. A bit of heel but not too high."
    },
    {
      "type": "conversation",
      "value": "**Mrs. Karim:** What about this T-shirt, Imran??  \n**Imran:** No, mom. I don't like the cartoon on the front.  \n**Mrs. Urmila:** Well, what about that one, with writings on the chest?  \n**Imran:** No, I don't really like that either. I want something completely plain, like this one, no writings, just plain."
    },
    {
      "type": "conversation",
      "value": "Imran I need to buy a shirt, too."
    },
    {
      "type": "conversation",
      "value": "Mrs. Karim Look, this shirt has nice prints!"
    },
    {
      "type": "conversation",
      "value": "Imran No, mom. I want something more formal."
    },
    {
      "type": "conversation",
      "value": "Mrs. Karim Then what about this one with stripes?"
    },
    {
      "type": "conversation",
      "value": "Imran No, it's too boring. Look at this shirt with checks. This looks nice."
    },
    {
      "type": "conversation",
      "value": "Mrs. Karim Yes, that's much better. Well, take it then."
    },
    {
      "type": "fill_in_blanks",
      "value": "E Fill up the blanks in the following sentences with words from the box below."
    },
    {
      "type": "fill_in_blanks_select",
      "options": [
        "try",
        "wearing",
        "flat",
        "match",
        "suit",
        "size",
        "cheaper",
        "shorts",
        "fit"
      ],
      "blanks": [
        "1. I have gained so much weight. My clothes do not ...................... me any more.",
        "2. I never wear red. It does not ..................... me.",
        "3. You have got a nice blue top. You just need a pair of sky jeans to ................... it.",
        "4. A: I'd like to .................... this dress on, please.\n   B: Sure, the trial room is over there.",
        "5. I like this jacket but it's too small. Have you got it in a bigger ....................?",
        "6. What are you .................... to the function tonight?",
        "7. These heels are too high. I am looking for some ....................... shoes.",
        "8. I like that dress, but it's too expensive. I want something like that but .................... .",
        "9. I think I need a pair of ....................... for my trip to Cox'sbazar. They are always good for going to the beach."
      ]
    },
    {
      "type": "short_answer",
      "value": "D1 Practise the dialogues with a partner."
    }
  ]
}

const chapter27Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "paragraph",
      "value": "Lesson 27 Andre"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to read aloud texts with proper pronunciation, stress and intonation, read and understand written instructions, and understand and enjoy stories and poems."
    },
    {
      "type": "question_text",
      "value": "A  Read the following poem."
    },
    {
      "type": "poem",
      "value": "Andr\u00e9\n-Gwendolyn Brooks\nI had a dream last night. I dreamed\nI had to pick a mother out.\nI had to choose a father too.\nAt first, I wondered what to do,\nThere were so many there, it seemed,\nShort and tall and thin and stout.\nBut just before I sprang awake,\nI knew what parents I would take.\nAnd this surprised and made me glad;\nThey were the ones I always had!"
    },
    {
      "type": "fill_in_blanks",
      "value": "A1  Underline all the verbs in the poem above. Then, list them in two columns: present tense and past tense. Next, change the verbs in the past tense to their present form, and the present tense ones to their past form."
    },
    {
      "type": "numbered_list",
      "value": "Example:\nPresent tense  |  Past tense\nhave                 |  had\nchoose             |"
    },
    {
      "type": "fill_in_blanks",
      "value": "A2  Read the poem aloud with proper pronunciation, stress and intonation."
    }
  ]
}

const chapter28Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
        "type": "paragraph",
        "value": "**Lesson 28**  \n**Are you listening?**"
      },
      {
        "type": "paragraph",
        "value": "After completing the lesson students will be able to  \n\u2022 recognize English sounds  \n\u2022 recognize word and stress on words in sentences  \n\u2022 read aloud with proper pronunciation, stress and intonation"
      },
      {
        "type": "question_text",
        "value": "A Listen to and say the following words. Notice how the letter \u2018O\u2019 is pronounced in words in List 1 and List 2"
      },
      {
        "type": "match_columns",
        "headers": [
          "List 1",
          "List 2"
        ],
        "leftValues": [
          "hop",
          "rob",
          "not",
          "rod"
        ],
        "rightValues": [
          "hope",
          "robe",
          "note",
          "rode"
        ]
      },
      {
        "type": "question_text",
        "value": "A1 Listen to and practise saying some more words with the two vowel sounds together (diphthong) as in the word 'hope' or 'note'."
      },
      {
        "type": "numbered_list",
        "values": [
          "bowl",
          "coke",
          "bone",
          "throw",
          "old",
          "window"
        ]
      },
      {
        "type": "numbered_list",
        "values": [
          "boat",
          "coat",
          "phone",
          "snow",
          "gold",
          "closed"
        ]
      },
      {
        "type": "question_text",
        "value": "A2 Read the following passage. Choose a word from the list of words below to fill in each of the blanks in the sentences."
      },
      {
        "type": "fill_in_blanks",
        "blanks": [
          "home",
          "note",
          "bowl",
          "coke",
          "bowl",
          "close",
          "stove",
          "hope"
        ],
        "wordList": [
          "phone",
          "bowl",
          "hope",
          "home",
          "stove",
          "close",
          "coke",
          "note"
        ],
        "content": "I was waiting for my friend Shila. But since she was late, I thought I would just go to the bookstore and get some stationery from there. But before leaving _______, I left the following ______ next to the ______.\n\nSorry, I'm going out. Won't take long.\nI've left two cans of ______ and a ______ of fruits on the table.\nThere is a box of biscuits near the bed.\nDon't forget to ______ the lid of the box tightly.\nIf you want tea, the kettle is on the ______.\n____________ to be back in half an hour."
      },
      {
        "type": "question_text",
        "value": "A3 Read the note for Shila loudly with proper pronunciation, stress and intonation."
      }
    ]
}

const chapter29Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "question_text",
      "value": "Lesson 29 Taking a test"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to read and understand written instructions and texts."
    },
    {
      "type": "question_text",
      "value": "A Read the passage below."
    },
    {
      "type": "paragraph",
      "value": "Hena and her twin sister Bina both study in class six. They are having the half-yearly examination at school. Today they are going to take the English test. Their teacher Ms. Shima Chowdhury enters the classroom. Before the test starts, she gives some instructions to the class."
    },
    {
      "type": "question_text",
      "value": "A1 Read the following sentences and write down the instructions that Ms. Chowdhury may give in each situation. Use 'Do not' or 'cannot', if necessary. One is done for you."
    },
    {
      "type": "fill_in_blanks",
      "value": "b. Teacher sees books and papers on students' desks. She tells them, ___________ all books and papers from your desks."
    },
    {
      "type": "fill_in_blanks",
      "value": "c. She gives scripts to the students and says, ____________ your name, class, section, roll number, subject and date."
    },
    {
      "type": "fill_in_blanks",
      "value": "d. She gives the question papers and tells them, __________ the questions carefully."
    },
    {
      "type": "fill_in_blanks",
      "value": "e. ___________ from someone else's script."
    },
    {
      "type": "fill_in_blanks",
      "value": "f. ___________ with others."
    },
    {
      "type": "fill_in_blanks",
      "value": "g. You ___________ out before one hour is over."
    },
    {
      "type": "fill_in_blanks",
      "value": "h. ___________ writing."
    },
    {
      "type": "question_text",
      "value": "B Look at the following signs."
    },
    {
      "type": "list",
      "values": [
        "Keep Off The Grass",
        "CASHIER",
        "Slow Playground"
      ]
    },
    {
      "type": "fill_in_blanks",
      "value": "Fill in the blanks in the following sentences to complete the instructions for the above signs. Use the words in the box. Add 'Do not' if necessary."
    },
    {
      "type": "list",
      "values": [
        "use",
        "walk",
        "pay",
        "throw",
        "drive",
        "blow"
      ]
    },
    {
      "type": "fill_in_blanks",
      "value": "i. Hospital ahead! __________ horns."
    },
    {
      "type": "fill_in_blanks",
      "value": "ii. __________ on the grass."
    },
    {
      "type": "fill_in_blanks",
      "value": "iii. _________ litter in public places. _______ the waste bin."
    },
    {
      "type": "fill_in_blanks",
      "value": "iv. _________ for your goods at the cash counter."
    },
    {
      "type": "fill_in_blanks",
      "value": "v. _________ carefully. Children's playground ahead!"
    }
  ]
}

const chapter30Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "question_text",
      "value": "Lesson 30 What should we do?"
    },
    {
      "type": "numbered_list",
      "values": [
        "read and understand texts",
        "read and understand written instructions",
        "write questions and answers",
        "write short paragraphs"
      ]
    },
    {
      "type": "conversation",
      "value": [
        {
          "speaker": "Bahar",
          "line": "We have a week's vacation next week. What should we do?"
        },
        {
          "speaker": "Azim",
          "line": "Let's go somewhere we haven't been before."
        },
        {
          "speaker": "Joseph",
          "line": "Right! I saw an ad for an interesting place. Hmm... well, here it is!"
        },
        {
          "speaker": "Bahar",
          "line": "Let me see! Ah! A two day trip to Kuakata! That sounds interesting! Look at the picture of the sea-beach and the sun rise! It looks fantastic!"
        },
        {
          "speaker": "Azim",
          "line": "Well, I've always wanted to climb a mountain. Why don't we go to the Chimbuk Mountains in Bandarban?"
        },
        {
          "speaker": "Shujan",
          "line": "I've an idea! How about going to the Sundarbans? We can see some wild animals and can also take pictures of the forests and the sea."
        },
        {
          "speaker": "Bahar",
          "line": "Well... well... calm down everybody! We can't go to all the places and do all the things at a time, right?"
        },
        {
          "speaker": "Joseph",
          "line": "Yeah. Let's think about all the options and then decide."
        }
      ]
    },
    {
      "type": "question_text",
      "value": "A1 Make a list of the places the friends wanted to go to. Why did they want to go to these places?"
    },
    {
      "type": "free_answer",
      "value": "List of places:"
    },
    {
      "type": "paragraph",
      "value": "A2 Think of a place you would like to go to. Now write down a few sentences about where you want to go, why you want to go there, who you want to go with."
    },
    {
      "type": "paragraph",
      "value": "Language Focus: For suggestions, we often use these expressions: What should we do? Why don't we ___\u2026\u2026? How about ___\u2026\u2026 ? Let's ______\u2026, etc."
    },
    {
      "type": "question_text",
      "value": "A3 Write short dialogues for the following situations. Use the expressions in the Language Focus."
    },
    {
      "type": "list",
      "values": [
        "a. You and your friends want to do a class project. Discuss and decide what you want to do. **clues:** poster drawing wall magazine drama, etc.",
        "b. You and your friends want to buy a gift for your teacher on his/her birthday. Discuss and decide what gift to get."
      ]
    }
  ]
}

const chapter31Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "container",
      "value": "Lesson 31\nToo much or too little water"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to\n- read and understand texts\n- write short paragraphs"
    },
    {
      "type": "question_text",
      "value": "A Look at the pictures."
    },
    {
      "type": "conversation",
      "value": "A1 Discuss in groups what you see in the pictures."
    },
    {
      "type": "question_text",
      "value": "A2 Read the following passage."
    },
    {
      "type": "paragraph",
      "value": "Sometimes it rains so heavily that floods occur. Because of heavy rainfall, river water overflows its banks and floods vast areas of land, towns and villages."
    },
    {
      "type": "question_text",
      "value": "A3 Write down a few sentences about how people suffer if there is too much water."
    },
    {
      "type": "question_text",
      "value": "B. Read the following passage."
    },
    {
      "type": "paragraph",
      "value": "Sometimes we really are short of water. This can happen if there is no rainfall for a long period of time. Sometimes rivers dry up, or the water level underground may sink very low. If there is too little water, that causes a lot of suffering to the people."
    },
    {
      "type": "question_text",
      "value": "B1. Look at the pictures below and discuss what you see."
    },
    {
      "type": "question_text",
      "value": "B2. Look at the pictures above and talk about how people suffer if there is too little water."
    }
  ]
}

const chapter32Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    {
      "type": "question_text",
      "value": "Lesson 32 An invitation for Robin"
    },
    {
      "type": "paragraph",
      "value": "After completing the lesson students will be able to read and understand texts, ask and answer questions, write short paragraphs, write simple informal letters."
    },
    {
      "type": "question_text",
      "value": "A. Read the following passage and the letter."
    },
    {
      "type": "paragraph",
      "value": "Robin received a letter. He read the letter over and over. He was very excited. It came from his aunt Amina. Aunt Amina and her family live in the countryside forty miles away from Dhaka. Robin ran to his mother and said, \"Mom, listen to this letter.\" He then read it to her."
    },
    {
      "type": "formatted_text",
      "value": "*Dear Robin,*\n*We are happy to know that your summer holiday is starting from the next week. We would like you to come and stay with us for a few days.*\n*We know you\u2019ll like the country. We have four ducks, six chickens, and a cow that gives fresh milk every day.*\n*Your cousin Maher is just about your age. He\u2019s very excited and is making a lot of plans to do together.*\n*Let us know when you will arrive. We have already talked to your parents. Tell them not to worry. We\u2019ll be at the bus station to receive you.*\n*Your Aunt Amina and Uncle Karim*"
    },
    {
      "type": "language_focus",
      "value": "For requests and invitations we often use the following expressions: 'Would like you to' to mean, 'Would you please' or 'Please do'; 'Let us know' to mean, 'inform us', or simply 'tell us'."
    },
    {
      "type": "question_text",
      "value": "A1 Read the letter again and then answer the following questions."
    },
    {
      "type": "fill_in_blanks",
      "value": "a. Why was Robin excited?"
    },
    {
      "type": "fill_in_blanks",
      "value": "b. How would he go to the country?"
    },
    {
      "type": "question_text",
      "value": "A2 Write a few sentences of your own with the following expressions:"
    },
    {
      "type": "fill_in_blanks",
      "value": "a. I would like you to __________"
    },
    {
      "type": "fill_in_blanks",
      "value": "b. Would you please __________"
    },
    {
      "type": "question_text",
      "value": "A3 Write a similar invitation letter to a friend. Tell him/her about some of the things you plan to do together."
    },
    {
      "type": "question_text",
      "value": "B A few days after Robin came back home from his aunt's house, he wrote the following letter to his Aunt Amina. Read the letter."
    },
    {
      "type": "paragraph",
      "value": "My dear Aunt,\nI really enjoyed my stay with you in the country. For a city boy, it was a whole new world to see. I was so proud when I first milked your cow 'Dulari'. Uncle and you have taught me things that I didn't know before. And please tell Maher that I already miss him. I hope you'll invite me to stay with you again next summer.\n\nThanks again for inviting me.\nRobin"
    },
    {
      "type": "question_text",
      "value": "B1 What do you think is the main idea of the letter? Choose the best answer:"
    },
    {
      "type": "multiple_choice",
      "values": [
        "a. To ask his aunt to invite him again.",
        "b. To thank his aunt for inviting him.",
        "c. To tell his aunt that he learned many things in the country."
      ]
    },
    {
      "type": "question_text",
      "value": "B2 Discuss in groups what is meant by the following expressions:"
    },
    {
      "type": "fill_in_blanks",
      "value": "a city boy, a whole new world, miss someone"
    }
  ]
}

const chapter33Data = {
  title: "",
  learningObjectives: [
    "ask and answer questions",
    "participate in short dialogues and conversations on familiar topics",
  ],
  content: [
    
  ]
}

const chapters = [
  { name: "Going to a new school", lesson: "Lesson 1" },
  { name: "Congratulations! Well done!", lesson: "Lesson 2", data: chapter2Data },
  { name: "A railway station", lesson: "Lesson 3", data: chapter3Data },
  { name: "Where are you from?", lesson: "Lesson 4", data: chapter4Data },
  { name: "Thanks for your work", lesson: "Lesson 5", data: chapter5Data },
  { name: "It smells good!", lesson: "Lesson 6", data: chapter6Data },
  { name: "Holding Hands", lesson: "Lesson 7", data: chapter7Data },
  { name: "Grocery shopping", lesson: "Lesson 8", data: chapter8Data },
  { name: "Health is wealth", lesson: "Lesson 9", data: chapter9Data },
  { name: "Remedies: modern and traditional", lesson: "Lesson 10", data: chapter10Data },
  { name: "Are you listening?-1", lesson: "Lesson 11", data: chapter11Data },
  { name: "Birds of Bangladesh", lesson: "Lesson 12", data: chapter12Data },
  { name: "An unseen beauty of Bangladesh", lesson: "Lesson 13", data: chapter13Data },
  { name: "Our pride", lesson: "Lesson 14", data: chapter14Data },
  { name: "The lion's mane", lesson: "Lesson 15", data: chapter15Data },
  { name: "An old people's home", lesson: "Lesson 16", data: chapter16Data },
  { name: "Boats sail on the rivers", lesson: "Lesson 17", data: chapter17Data },
  { name: "Are you listening?-2", lesson: "Lesson 18", data: chapter18Data },
  { name: "Make your snacks", lesson: "Lesson 19", data: chapter19Data },
  { name: "Stop, look and listen", lesson: "Lesson 20", data: chapter20Data },
  { name: "Hason Raja: the mystic bard of Bangladesh", lesson: "Lesson 21", data: chapter21Data },
  { name: "Wonders of the world-1", lesson: "Lesson 22", data: chapter22Data },
  { name: "Wonders of the world-2", lesson: "Lesson 23", data: chapter23Data },
  { name: "Aesop's fable", lesson: "Lesson 24", data: chapter24Data },
  { name: "We live in a global village", lesson: "Lesson 25", data: chapter25Data },
  { name: "Our wage earners", lesson: "Lesson 26", data: chapter26Data },
  { name: "The concert for Bangladesh", lesson: "Lesson 27", data: chapter27Data },
  { name: "Buying clothes", lesson: "Lesson 28", data: chapter28Data },
  { name: "Andre", lesson: "Lesson 29", data: chapter29Data },
  { name: "Are you listening?-3", lesson: "Lesson 30", data: chapter30Data },
  { name: "Taking a test", lesson: "Lesson 31", data: chapter31Data },
  { name: "What should we do?", lesson: "Lesson 32", data: chapter32Data },
  { name: "Too much or too little water", lesson: "Lesson 33", data: chapter33Data },
  { name: "An invitation for Robin", lesson: "Lesson 34" },
  { name: "The Garden", lesson: "Lesson 35" },
  { name: "Sample Question", lesson: "Lesson 36" },
];

export {
  childTypes,
  chaptersData,
  blockTypes,
  positions,
  chapter2Data
}

export default chapters;