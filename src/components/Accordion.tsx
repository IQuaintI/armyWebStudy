interface AccordionProps {
  sections: Array<{
    question: string;
    answer: Array<string | React.ReactNode>; // Allow both strings and JSX elements
  }>;
}


function Accordion({ sections }: AccordionProps) {
  return (
    <div className="accordion" id="accordionExample">
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {section.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* Render each part of the answer on a new line */}
              {section.answer.map((part, partIndex) => (
                <p key={partIndex}>{part}</p> // Use paragraphs for each line of the answer
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;


