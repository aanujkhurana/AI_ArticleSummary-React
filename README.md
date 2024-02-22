# AI SUMMARISER

Open AI model via the RAPID API, enabling users to summarize Article by URLs with a single click.
#### [click here to visit](https://abouturl.netlify.app)

<div align="Center">
    <img src="/screenshots/img3.png" width="800px"</img>
    <img src="/screenshots/img2.png" width="400px"</img>
    <img src="/screenshots/img1.png" width="400px"</img>
</div>


## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS

## Features

- **Contemporary User Interface**: Boasting a contemporary and user-centric interface design, ensuring an intuitive browsing experience for all users.
  
- **Auto-Summarization**: Users can conveniently input the URL of extensive articles, with the web application utilizing AI to generate concise summaries of the content.
  
- **History Preservation via Local Storage**: The application incorporates a history feature, empowering users to locally save summaries, facilitating easy retrieval and management of their reading archives.
  
- **Clipboard Copying Functionality**: Facilitating effortless sharing and storage of summarized content by enabling users to copy it to their clipboard with ease.
  
- **Enhanced RTK Query API Requests**: Harnessing the advanced functionalities of Redux Toolkit (RTK) Query, the application executes API requests conditionally, streamlining data retrieval and management based on predefined criteria.

- **Solid Code Structure and Reusability**: The application is engineered with a focus on a sturdy code architecture and reusable components, ensuring scalability and ease of maintenance for future enhancements and expansions.


## Local Development
Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/project_ai_summarizer.git
cd project_ai_summarizer
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_RAPID_API_ARTICLE_KEY=
```

Replace the placeholder values with your Rapid-API KEY credentials. [Rapid-API website](https://rapidapi.com).

**Running the Project**

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)


