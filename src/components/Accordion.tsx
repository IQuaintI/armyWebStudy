import { Accordion } from "react-bootstrap";
import "../css/Accordion.scss";


interface Section {
  question: string;
  answer: (string | JSX.Element)[]; // Allow both strings and JSX elements
}

interface Topic {
  heading: string;
  sections: Section[];
}

interface CustomAccordionProps {
  topics: Topic[];
}

function CustomAccordion({ topics }: CustomAccordionProps) {
  return (
    <div>
      {topics.map((topic, topicIndex) => (
        <div key={topicIndex}>
          <h2>{topic.heading}</h2> {/* Display the heading */}
          <Accordion defaultActiveKey="0">
            {topic.sections.map((section, sectionIndex) => (
              <Accordion.Item eventKey={`${topicIndex}-${sectionIndex}`} key={sectionIndex}>
                <Accordion.Header>{section.question}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {section.answer.map((answer, answerIndex) => (
                      <li key={answerIndex}>{answer}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default CustomAccordion;
