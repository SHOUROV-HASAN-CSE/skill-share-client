import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Faq = () => {
  return (
    <div>
      <Alert variant={'secondary'}>
        <h2>Who should take an Online Course?</h2>
        <p>Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses,you can<br/>
        1. Advance your skill-set or begin a career change.<br/>
        2. Take the next step in your formal education.<br/>
        3. Ease the transition before entering a full-time academic program.<br/>
        4. Enjoy learning a new topic.<br/>
        Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.</p>
      </Alert>

      <Alert variant={'danger'}>
        <h2>How do I select a course?</h2>
        <p>Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
        </p>
      </Alert>

      <Alert variant={'success'}>
        <h2>I am a high school student, can I join?</h2>
        <p>Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (****************.com) to discuss further.</p>
      </Alert>

      <Alert variant={'warning'}>
        <h2>Can I take more than one course at a time?</h2>
        <p>If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.</p>
      </Alert>
    </div>
  );
};

export default Faq;