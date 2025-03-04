export default function Experience() {
    const timelineData = [
      {
        title: 'Full-Stack Developer',
        company: 'Freelancer',
        period: 'Dec 2023 - Present',
        description: 'I build dynamic, scalable web apps using React.js and Node.js. I optimize performance, deploy on AWS, and manage databases with MySQL and MongoDB to deliver robust, user-centric solutions.',
      },
      {
        title: 'Software Developer (Internship)',
        company: 'Digidom',
        period: 'November 2024 - February 2025',
        description: 'I developed an app that generated service calls for field engineers, streamlining dispatch and ensuring timely responses.',
      },
    ];
  
    const TimelineItem = ({ item, index }) => {
      const side = index % 2 === 0 ? 'left' : 'right';
      return (
        <div className={`timeline-item ${side}`}>
          <div className="timeline-content">
            <h4>{item.title}</h4>
            <h3>{item.company}</h3>
            <span className="timeline-date">{item.period}</span>
            <p>{item.description}</p>
          </div>
        </div>
      );
    };
  
    return (
        <>
        <div className="experience-header">
            <h1>My Experience</h1>
        </div>
      <div className="timeline">
        
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
      </>
    );
  }
  