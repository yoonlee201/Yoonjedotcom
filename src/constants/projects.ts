import split from '~/public/images/split-money.jpg';
export const projects = [
    {
        title: 'RewardBot',
        projectImage: null,
        skillList: ['javascript', 'node.js', 'mongodb', 'express.js'],
        description: `The Reward Bot for Canvas is a web application designed
         to help students stay motivated by rewarding them for completing assignments
          on time. With the rise of social media providing instant dopamine, many students
           procrastinate, prioritizing short-term gratification over productivity. This system 
           addresses the issue by integrating the Canvas API to track assignments, offering 
           features like a to-do list, deadline graphs, and a browser extension (built on 
           Task for Canvas) that displays upcoming due dates. To incentivize engagement, 
           students receive random rewards for completing tasks, such as custom profile icons, 
           discount coupons, and even bonus points for early submissions. By shifting dopamine 
           rewards from social media to academic achievement, this system encourages better 
           study habits and reduces distractions, helping students become more productive.`,
        githubLink: 'https://github.com/CantBeLAME/RewardBot',
        demoLink: 'https://www.youtube.com/watch?v=UpOokWNOGZI',
    },
    {
        title: 'Split Money',
        projectImage: split,
        skillList: ['typescript', 'next.js'],
        description: `Split Money is a web application designed 
                    to simplify expense management among friends, 
                    family, or colleagues. It features a user-friendly 
                    interface that allows users to track and split shared expenses easily, 
                    ensuring transparency and fairness. Users can record and categorize expenses,
                    automatically split costs based on predefined ratios or equal shares, 
                    and manage members within expense groups.`,
        githubLink: 'https://github.com/yoonlee201/split-money',
        demoLink: 'https://yoonlee201.github.io/split-money/',
    },
    {
        title: 'Interactive Data Visualization Tool',
        projectImage: null,
        skillList: ['javascript', 'node.js', 'mongodb', 'express.js'],
        description: `The project is a dynamic data visualization and management tool 
                        designed to streamline dataset handling through an intuitive interface. 
                        It features an interactive editor that automatically updates visual representations, 
                        including bar charts and scatter plots, in real time. Users can select, edit, 
                        and manipulate data points through brushing and linking interactions across multiple views. 
                        The tool enforces structured data constraints, ensuring valid inputs while dynamically adjusting 
                        visualization scaling for large datasets. A robust file management system allows users to create, 
                        load, save, and overwrite datasets in a MongoDB database. Additionally, advanced editing 
                        functionalities such as cut, copy, paste, and append enable efficient dataset modifications. 
                        With support for pagination and dataset constraints, this tool optimizes data exploration, 
                        making complex dataset analysis more accessible and efficient.`,
        githubLink: null,
        demoLink: null,
    },
    {
        title: 'Guardian Tales',
        projectImage: null,
        skillList: ['python'],
        description: `GuardianTales is a storytelling platform designed to help guardians stay connected with 
        their children through personalized audio storybooks. Inspired by the challenge of maintaining strong 
        family bonds in a fast-paced world, GuardianTales allows users to create customized story narrations
         using their own voice. By uploading a video of themselves speaking, our platform processes their 
         voice and synchronizes it with the story text, offering children an engaging and immersive storytelling experience. 
         Built using Python with Streamlit and a machine learning model for voice learning and text-to-speech (TTS) generation, 
         GuardianTales aims to make storytelling more personal and comforting. While the website is not yet fully deployed due 
         to time constraints in uploading the ML model and user data to the cloud, we have successfully demonstrated a working 
         prototype on a local machine. Throughout development, we tackled challenges such as precise voice synchronization and 
         optimizing the user interface for seamless interaction.`,
        githubLink: 'https://github.com/joohyun97/VT-Garlics',
        demoLink: 'https://www.youtube.com/watch?v=jO9wxxCsyr0',
    },
];
