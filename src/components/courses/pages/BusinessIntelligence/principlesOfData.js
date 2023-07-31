import React from "react";
import Sidebar from "../../blocks/sidebar";
import SimpleBlock from "../../blocks/simpleBlock";
import SimpleList from "../../blocks/simpleList";

export default function princeplesOfData() {
  return (
    <div className="course-contaner">
      <Sidebar activeIndex={2} />
      <div className="right-content">
        <SimpleBlock
         helper ="Ask Brainly"
          heading="CSS"
          content={`CSS (Cascading Style Sheets) is a style sheet language used for describing the
           look and formatting of a document written in HTML or XML. 
           It is not considered a programming language in the traditional sense because it does not have 
           logic or control flow capabilities. Instead, CSS is primarily used to specify how the elements
          of a web page should be displayed on the screen, in print, or in other media.
          
          
          With CSS, you can control the visual aspects of web elements such as colors, fonts, layouts,
          positioning, and animations. It provides a set of rules and properties that allow you to
          target specific HTML elements and define their presentation.

          Overall, CSS empowers web developers and designers to separate the presentation and style of a web page from its structure (HTML), enabling them to create attractive, responsive, and interactive websites.

          `}
        />

        <SimpleList
          helper=""
          heading="Applications of CSS"
          list={[
            "Styling Web Pages - The primary purpose of CSS is to style web pages and control their visual appearance.You can use CSS to set colors, fonts, backgrounds, margins, padding, borders, and other visual properties of HTML elements ,allowing you to create visually appealing and consistent designs across your website.",
            "Responsive Web Design - CSS plays a crucial role in creating responsive web designs that adapt to different screen sizes and devices.With CSS media queries, you can define different styles for various screen resolutions, enabling your website to look and function well on desktops,tablets, and mobile devices.",
            "Layout and Positioning - CSS provides various techniques for controlling the layout and positioning of elements on a web page. You can use CSS properties like display, float, position, and grid to achieve different layout structures, such as multi-column layouts, flexible grids, or fixed positioning.",
            "Animation and Transitions - CSS allows you to add animations, transitions, and transformations to elements on a web page. With CSS animations, you can create movement and effects, such as fading, sliding, rotating, and scaling. Transitions enable smooth property changes, such as color fades or element resizing, when triggered by user interactions.",
            "Print Styling - CSS can be used to define styles specifically for printing web pages. By utilizing CSS's @media print rule, you can create printer-friendly versions of your web pages, controlling aspects like page breaks, hiding unnecessary elements, and adjusting the layout for optimal printing.",
            "User Interface Customization - CSS is often used to customize the appearance of user interface elements, including form inputs, buttons, checkboxes, and dropdown menus. By applying CSS styles to these elements, you can create a consistent visual experience throughout your website or web application.",
            "Cross-Browser Compatibility - CSS helps in achieving consistent visual rendering across different web browsers. It provides the ability to write browser-specific CSS rules and apply vendor prefixes to ensure compatibility with various browser engines.",
            
          ]}
        />
      </div>
    </div>
  );
}