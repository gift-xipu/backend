import React from "react";
import Sidebar from "../../blocks/sidebar";
import SimpleBlock from "../../blocks/simpleBlock";
import SimpleList from "../../blocks/simpleList";

export default function htmPage() {
  return (
    <div className="course-contaner">
      <Sidebar activeIndex={4} />
      <div className="right-content">
        <SimpleBlock
         helper ="Ask Brainly"
          heading="NODE JS"
          content={`Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, enabling server-side scripting and building scalable network applications. Node.js provides an event-driven, non-blocking I/O (input/output) model, which makes it efficient and well-suited for handling concurrent connections and real-time applications.`}
        />

        <SimpleList
          helper=""
          heading="Applications of Node.js"
          list={[
            "Server-Side JavaScript - Node.js allows you to execute JavaScript code on the server side, as opposed to running it only in the browser. This enables developers to use the same language (JavaScript) for both client-side and server-side programming, facilitating code reuse and reducing the learning curve.",
            "Asynchronous and Non-Blocking I/O - Node.js uses an event-driven architecture and employs non-blocking I/O operations. This means that instead of waiting for a task to complete before moving to the next one, Node.js can handle multiple requests concurrently. As a result, it can efficiently handle high traffic and perform well in scenarios that involve real-time communication, streaming, or heavy I/O operations.",
            "Package Manager (npm) - Node.js comes with a built-in package manager called npm (Node Package Manager), which allows developers to install, manage, and share reusable JavaScript packages and libraries. The vast ecosystem of npm offers a wide range of modules and tools, empowering developers to leverage existing solutions and speed up development.",
            "Scalability - Node.js is known for its scalability. Its non-blocking, event-driven architecture enables it to handle a large number of concurrent connections with minimal resource consumption. Additionally, Node.js applications can be easily scaled horizontally by running multiple instances across different machines and distributing the load.",
            "Web Application Development - Node.js is commonly used for building web applications and APIs. It provides HTTP modules that make it straightforward to create web servers and handle HTTP requests and responses. With frameworks like Express.js, developers can build robust and efficient web applications using Node.js.",
            "Real-Time Applications - Due to its event-driven nature and efficient handling of concurrent connections, Node.js is well-suited for real-time applications, such as chat applications, collaborative tools, multiplayer games, and streaming platforms. Libraries like Socket.io provide easy integration of real-time communication capabilities into Node.js applications.",
            
          ]}
        />
      </div>
    </div>
  );
}