import React from "react";
import Sidebar from "../blocks/sidebar";
import SimpleBlock from "../blocks/simpleBlock";
import SimpleList from "../blocks/simpleList";

export default function htmPage() {
  return (
    <div className="course-contaner">
      <Sidebar activeIndex={3} />
      <div className="right-content">
        <SimpleBlock
         helper ="Ask Brainly"
          heading="JAVASCRIPT"
          content={`Vanilla JavaScript refers to the pure, standard, and native form of JavaScript, without the use of any additional libraries or frameworks.
           It means using JavaScript in its original form, as specified by the ECMAScript standard, without any third-party dependencies.

          When someone mentions "vanilla JavaScript," they typically refer to writing code using the core JavaScript language features,
           APIs, and DOM (Document Object Model) manipulation without relying on frameworks like React, Angular, or jQuery.`}
        />

        <SimpleList
          helper=""
          heading="Applications of Vanilla Javascript"
          list={[
            "Lightweight - Vanilla JavaScript does not require the inclusion of additional libraries or frameworks, making it lightweight and efficient in terms of file size and loading time.",
            "Lightweight - Vanilla JavaScript does not require the inclusion of additional libraries or frameworks, making it lightweight and efficient in terms of file size and loading time.",
            "Learning Fundamentals - Writing code in vanilla JavaScript helps developers understand the underlying concepts and principles of the language, as they work directly with core JavaScript features. ",
            "Flexibility - With vanilla JavaScript, developers have the freedom to structure their code and choose the best approach based on the specific requirements of their project. There are no restrictions imposed by a particular framework.",
            "Performance - By avoiding the overhead of third-party libraries and frameworks, vanilla JavaScript can provide better performance, as it allows for optimized code execution and reduces unnecessary layers of abstraction.",
        
          ]}
        />
      </div>
    </div>
  );
}