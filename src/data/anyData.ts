// import react from "../assets/images//blog/blog-1/react.png";
// import npm1 from "../assets/images/blog/blog-1/npm1.webp";
// import nodeVersion from "../assets/images/blog/blog-1/nodeversion.png";
// import createReactApp from "../assets/images/blog/blog-1/createreactapp.png";
// import firstApp from "../assets/images/blog/blog-1/firstapp.png";
// import startProject from "../assets/images/blog/blog-1/stratproject.png";

// export const blogs = [
//   {
//     title: "React ile İlk Projenizi Oluşturma",
//     slug: "react-ilk-proje",
//     date: "2025-07-15",
//     author: "Abdulla Rahimli",
//     tags: ["React", "JavaScript", "npm", "Web Development"],
//     content: [
//       {
//         type: "paragraph",
//         text: "React is one of the most popular JavaScript libraries for building user interfaces, especially single-page applications. Created and maintained by Facebook, React helps developers create fast, interactive, and reusable UI components with ease.",
//       },
//       {
//         type: "paragraph",
//         text: "If you are new to web development or just starting with React, this guide will help you understand what React is, why it’s so popular, and how to start building your first React app using npm.",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: npm1,
//         alt: "blog1",
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "What is React?",
//       },
//       {
//         type: "paragraph",
//         text: "React is a JavaScript library (not a full framework) focused on building UI components. Unlike traditional web development where you manipulate the DOM directly, React allows you to create components that manage their own state and efficiently update the UI when the data changes.",
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "Key Features of React",
//       },
//       {
//         type: "div",
//         className: "ml-4",
//         content: [
//           {
//             type: "list",
//             style: "disc",
//             items: [
//               {
//                 text: "Component-Based: Your UI is made of components, which can be reused and nested.",
//                 strong: "Component-Based",
//                 strongClassName: "!font-semibold text-white",
//               },
//               {
//                 text: "Declarative: You describe what the UI should look like, and React takes care of updating it efficiently.",
//                 strong: "Declarative",
//                 strongClassName: "!font-semibold text-white",
//               },
//               {
//                 text: "Virtual DOM: React uses a virtual DOM to minimize costly updates, making apps faster.",
//                 strong: "Virtual DOM",
//                 strongClassName: "!font-semibold text-white",
//               },
//               {
//                 text: "One-way Data Binding: Data flows in one direction, making your app predictable and easier to debug.",
//                 strong: "One-way Data Binding",
//                 strongClassName: "!font-semibold text-white",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "Setting Up Your First React Project Using npm",
//       },
//       {
//         type: "paragraph",
//         text: "To start working with React, you need to have Node.js and npm installed on your computer. You can check if they are installed by running:",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: nodeVersion,
//         alt: "",
//       },
//       {
//         type: "paragraph",
//         text: "If you don’t have them installed, download and install Node.js from ",
//         links: [
//           {
//             href: "https://nodejs.org/en",
//             text: "nodejs.org.",
//             className: "!underline text-white",
//             target: "_blank",
//           },
//         ],
//       },
//       {
//         type: "comment",
//         text: "Blog video post can also be added.",
//       },
//       {
//         type: "comment",
//         text: '<div className="video-wrapper">\n<iframe\nwidth="100%"\nheight="459"\nsrc="https://www.youtube.com/embed/vGOL7ZvuGMc"\ntitle="YouTube Video"\nframeBorder="0"\nallowFullScreen\n></iframe>\n</div>',
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "Step 1: Create a React App Using Create React App",
//       },
//       {
//         type: "paragraph",
//         text: "React has an official tool called Create React App that sets up everything you need to start a project.",
//       },
//       {
//         type: "paragraph",
//         text: "Open your terminal and run:",
//       },
//       {
//         type: "comment",
//         text: "<blockquote>\nInteger accumsan arcu ligula, eget dictum augue egestas sed.\n<small>by: <span>Mark Parker</span></small>\n</blockquote>",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: createReactApp,
//         alt: "",
//       },
//       {
//         type: "paragraph",
//         text: "This command will create a folder called ",
//         strong: "my-first-react-app",
//         strongClassName: "bg-[#424242]",
//       },
//       {
//         type: "paragraph",
//         text: " and set up a React project inside it.",
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "Step 2: Navigate Into Your Project Folder",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: firstApp,
//         alt: "",
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "Step 3: Start the Development Server",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: startProject,
//         alt: "",
//       },
//       {
//         type: "paragraph",
//         text: "This will start the React development server, and your new React app will open in your browser at ",
//         links: [
//           {
//             href: "http://localhost:3000",
//             text: "http://localhost:3000.",
//             className: "!text-[#FEC544] !underline",
//           },
//         ],
//       },
//       {
//         type: "paragraph",
//         text: "You should see the default React welcome screen!",
//       },
//       {
//         type: "div",
//         className: "st-slider st-style1 mb-5",
//         content: [
//           {
//             type: "slider",
//             settings: "settings",
//             className: "slick-wrapper",
//             slides: [
//               {
//                 type: "image",
//                 src: slideImage0,
//                 alt: "slide-0",
//                 className: "st-zoom-in",
//               },
//               {
//                 type: "image",
//                 src: slideImage1,
//                 alt: "slide-1",
//                 className: "st-zoom-in",
//               },
//               {
//                 type: "image",
//                 src: slideImage2,
//                 alt: "slide-2",
//                 className: "st-zoom-in",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Understanding the Project Structure",
//       },
//       {
//         type: "paragraph",
//         text: "Inside your React project, you will find these important files:",
//       },
//       {
//         type: "div",
//         className: "ml-4",
//         content: [
//           {
//             type: "list",
//             style: "disc",
//             items: [
//               {
//                 text: "public/index.html – The single HTML page that contains your React app.",
//                 strong: "public/index.html –",
//                 strongClassName: "!font-semibold text-white",
//               },
//               {
//                 text: "src/index.js – The JavaScript entry point that renders your React app into the page.",
//                 strong: "src/index.js –",
//                 strongClassName: "!font-semibold text-white",
//               },
//               {
//                 text: "src/App.js – The main React component.",
//                 strong: "src/App.js –",
//                 strongClassName: "!font-semibold text-white",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Writing Your First React Component",
//       },
//       {
//         type: "paragraph",
//         text: "React components are JavaScript functions or classes that return UI elements. The simplest way is to create a function component.",
//       },
//       {
//         type: "paragraph",
//         text: "Open ",
//         strong: "src/App.js",
//         strongClassName: "bg-[#424242]",
//       },
//       {
//         type: "paragraph",
//         text: " and replace the content with:",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: app,
//         alt: "",
//       },
//       {
//         type: "paragraph",
//         text: "Save the file, and the browser will automatically update to show:",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: show,
//         alt: "",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Adding Interactivity with State",
//       },
//       {
//         type: "paragraph",
//         text: "One of React's strengths is its ability to update the UI when data changes. Let's add a button that changes a message when clicked.",
//       },
//       {
//         type: "paragraph",
//         text: "Modify ",
//         strong: "src/App.js",
//         strongClassName: "bg-[#424242]",
//       },
//       {
//         type: "paragraph",
//         text: " like this:",
//       },
//       {
//         type: "image",
//         className: "st-zoom-in",
//         src: app1,
//         alt: "",
//       },
//       {
//         type: "paragraph",
//         text: "Here’s what happens:",
//       },
//       {
//         type: "div",
//         className: "ml-4",
//         content: [
//           {
//             type: "list",
//             style: "disc",
//             items: [
//               {
//                 text: "useState creates a state variable message and a function setMessage to update it.",
//                 highlight: ["useState", "message", "setMessage"],
//                 strong: "useState",
//                 strongClassName: "bg-[#424242]",
//               },
//               {
//                 text: "When the button is clicked, handleClick changes the message.",
//                 highlight: ["handleClick"],
//                 strong: "handleClick",
//                 strongClassName: "bg-[#424242]",
//               },
//               {
//                 text: "React updates the UI automatically to show the new message.",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "What Next ?",
//       },
//       {
//         type: "div",
//         className: "ml-4",
//         content: [
//           {
//             type: "list",
//             style: "disc",
//             items: [
//               { text: "Learn about props to pass data between components." },
//               {
//                 text: "Explore component lifecycle and hooks like useEffect",
//                 strong: "useEffect",
//                 strongClassName: "bg-[#424242]",
//               },
//               {
//                 text: "Start building small projects, like a to-do list or a weather app.",
//               },
//               {
//                 text: "Read the official React documentation at ",
//                 links: [
//                   {
//                     href: "https://react.dev/",
//                     text: "reactjs.org.",
//                     className: "!underline !text-[#FEC544]",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         type: "heading",
//         level: 3,
//         text: "Summary",
//       },
//       {
//         type: "div",
//         className: "ml-4",
//         content: [
//           {
//             type: "list",
//             style: "disc",
//             items: [
//               {
//                 text: "React is a JavaScript library for building user interfaces using components.",
//               },
//               {
//                 text: "Use npm with create react-app to quickly start a new React project.",
//               },
//               {
//                 text: "React apps are fast, efficient, and easy to maintain thanks to the virtual DOM and declarative code.",
//               },
//               {
//                 text: "With React, you can build interactive UIs by managing state and responding to user actions.",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         type: "paragraph",
//         text: "If you want, I can also help you build simple React projects step-by-step. Just ask!",
//       },
//     ],
//   },
//   {
//     id: 1,
//     mainImage: react,
//     img1: npm1,
//     img2: nodeVersion,
//     img3: createReactApp,
//     img4: firstApp,
//     img5: startProject,
//     author: "Abdulla Rahimli",
//     date: "11-01-2021",
//     shortTitle: "What is React ? A Beginner's Guide",
//     mainTitle: "What is React ? A Beginner's Guide",
//     p1: "React is one of the most popular JavaScript libraries for building user interfaces, especially single-page applications. Created and maintained by Facebook, React helps developers create fast, interactive, and reusable UI components with ease.",
//     p2: "If you are new to web development or just starting with React, this guide will help you understand what React is, why it’s so popular, and how to start building your first React app using npm.",
//     p3: "React is a JavaScript library (not a full framework) focused on building UI components. Unlike traditional web development where you manipulate the DOM directly, React allows you to create components that manage their own state and efficiently update the UI when the data changes.",
//     p4: "To start working with React, you need to have Node.js and npm installed on your computer. You can check if they are installed by running:",
//     p5: "If you don’t have them installed, download and install Node.js from ",
//     p6: "React has an official tool called Create React App that sets up everything you need to start a project.",
//     p7: "Open your terminal and run:",
//     p8: "This command will create a folder called ",
//     p8Continue: " and set up a React project inside it.",
//     p9: "This will start the React development server, and your new React app will open in your browser at",
//     title1: "What is React?",
//     title2: "Key Features of React",
//     title3: "Setting Up Your First React Project Using npm",
//     title4: "Step 1: Create a React App Using Create React App",
//     title5: "Step 2: Navigate Into Your Project Folder",
//     title6: "Step 3: Start the Development Server",
//     content:
//       "React is a popular JavaScript library developed by Facebook for building user interfaces (UI) in web applications. With React, you can easily create dynamic and fast web pages.",
//     tags: ["App", "Php", "Web", "Business", "Agency", "Development"],
//     category: "Web Development",
//     strong1: "Component-Based:",
//     strong2: "Declarative: ",
//     strong3: "Virtual DOM: ",
//     strong4: "One-way Data Binding: ",
//     strong_p1:
//       " Your UI is made of components, which can be reused and nested.",
//     strong_p2:
//       " You describe what the UI should look like, and React takes care of updating it efficiently.",
//     strong_p3:
//       " React uses a virtual DOM to minimize costly updates, making apps faster.",
//     strong_p4:
//       " Data flows in one direction, making your app predictable and easier to debug.",
//     highlight_p8: "my-first-react-app",
//   },
// ];
