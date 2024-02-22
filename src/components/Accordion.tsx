interface AccordionProps {
  sections: Array<{ question: string; answer: string }>;
}

function Accordion({ sections }: AccordionProps) {
  return (
    <div className="accordion" id="accordionExample">
      {sections.map(
        (section: { question: string; answer: string }, index: number) => (
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
              <div className="accordion-body">{section.answer}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Accordion;
