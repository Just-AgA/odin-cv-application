function CVPreview({ generalInfo, educationList, experienceList }) {
  return (
    <div
      style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}
    >
      <h2>CV Preview</h2>

      <section>
        <h3>Personal Information</h3>
        <p>
          <strong>Name:</strong> {generalInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {generalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {generalInfo.phone}
        </p>
      </section>

      <section>
        <h3>Education</h3>
        <ul>
          {educationList.map((edu, idx) => (
            <li key={idx}>
              <strong>{edu.degree}</strong> at {edu.school} ({edu.year})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Work Experience</h3>
        <ul>
          {experienceList.map((exp, idx) => (
            <li key={idx}>
              <strong>{exp.position}</strong> at {exp.company}
              <br />
              {exp.startDate} – {exp.endDate}
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export { CVPreview };
