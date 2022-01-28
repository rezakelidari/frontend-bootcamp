import React from "react";

import { Accordion } from "react-bootstrap";

export default function FAQ() {
  const faqs = [
    {
      question: "Where exactly are you located?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero.",
    },
    {
      question: "How much does it cost to attend?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero.",
    },
    {
      question: "What do I need to Know?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero.",
    },
    {
      question: "How Do I sign up?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero.",
    },
    {
      question: "Do you help me find a job?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero.",
    },
  ];
  return (
    <section id="faq" className="p-5">
      <h2 className="text-center mb-4">Frequently Asked Question</h2>
      <Accordion defaultActiveKey={null}>
        {faqs.map((faq) => (
          <Accordion.Item eventKey={faqs.indexOf(faq)} key={faqs.indexOf(faq)}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
