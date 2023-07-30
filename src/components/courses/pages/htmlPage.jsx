import React from "react";
import Sidebar from "../blocks/sidebar";
import SimpleBlock from "../blocks/simpleBlock";
import SimpleList from "../blocks/simpleList";


export default function htmPage() {
  return (
    <div className="course-contaner">
      <Sidebar activeIndex={1} />
      <div className="right-content">
        <SimpleBlock
          helper ="Ask Brainly"
          heading="HTML"
          content={`HTML stands for Hyper Text Markup Language, which is the most widely 
         used language on Web to develop web pages. HTML was created by
         Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML
         specification which was published in 1995. HTML 4.01 was a major 
         version of HTML and it was published in late 1999. Though HTML 4.01
         version is widely used but currently we are having HTML-5 version which
         is an extension to HTML 4.01, and this version was published in 2012.`}
        />

        <SimpleList
          helper=""
          heading="Applications of HTML"
          list={[
            "Web pages development - HTML is used to create pages which are web",
            "Internet Navigation - HTML provides tags which are used to navigate",
            "Responsive UI - HTML pages now-a-days works well on all platform, ",
            "mobile, tabs, desktop or laptops owing to responsive design strategy.",
            "Offline support HTML pages once loaded can be made available offline ",
            "on the machine without any need of internet.",
            "Game development- HTML5 has native support for rich experience and",
            " is now useful in gaming development arena as well.",
          ]}
          
        />
     
      </div>
      
    </div>
  );
}

