import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';

const Experience = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const timelineRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const scrollLeft = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="experience">
                <h1 className="experience-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["E", "X", "P", "E", "R", "I", "E", "N", "C", "E"]}
                        idx={15}
                        delay={100}
                    />
                </h1>
                <div className="timeline-wrapper">
                    {/* Left arrow */}
                    <button className="arrow left-arrow" onClick={scrollLeft}>
                        &#8592;
                    </button>
                    <div className="timeline" ref={timelineRef}>
                        <div className="timeline-item">
                            <h3>Information Technology Youth Apprentice</h3>
                            <h4>Lakeshore Technical College</h4>
                            <p className="date">July 2021 - June 2022</p>
                            <ul className="description">
                                <li>Provided technical support to both remote and on-site users, troubleshooting hardware and software issues across a wide range of devices, including computers, mobile devices, and AV equipment, ensuring quick and effective resolution.</li>
                                <li>Assisted with software installations and system configurations, ensuring seamless functionality across various platforms and maintaining up-to-date software for optimal user experience.</li>
                                <li>Performed hardware upgrades and system imaging, including RAM upgrades and laptop imaging, ensuring devices were properly configured and added to the college's database for efficient deployment.</li>
                                <li>Collaborated with the IT team to maintain system performance and security, monitoring devices, resolving technical issues, and ensuring consistent, reliable operations across the organization's infrastructure.</li>
                                <li className="skills">SKILLS: Technical Support, Hardware & Software Troubleshooting, System Imaging & Deployment, Device Management</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <h3>Grand Challenges Scholar</h3>
                            <h4>UW-Madison Grand Challenges Scholars Program (GCSP)</h4>
                            <p className="date">September 2023 - PRESENT</p>
                            <ul className="description">
                                <li>Currently participating in the UW-Madison Grand Challenges Scholars Program, a multi-year initiative for engineering students</li>
                                <li>Engaging in curricular and co-curricular activities aligned with AI grand challenge theme</li>
                                <li>Developing competencies in: research and creative problem-solving within engineering, multidisciplinary and entrepreneurial mindset, global perspectives through diverse experiences, and contributing to society through service and social consciousness</li>
                                <li>Preparing to address complex engineering challenges in sustainability and security</li>
                                <li>Aiming to make a meaningful impact on the world by tackling 21st-century societal challenges through engineering solutions</li>
                                <li className="skills">SKILLS: Research & Analysis, Creative Problem-Solving, Multidisciplinary Collaboration, Entrepreneurial Innovation, Global Perspective</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <h3>Research</h3>
                            <h4>Molecular Imaging / Magnetic Resonance Technology Lab (MIMRTL)</h4>
                            <p className="date">October 2023 - April 2024</p>
                            <ul className="description">
                                <li>Conducted research on integrating AI technology into healthcare by developing an equitable medical chatbot focused on kidney cancer</li>
                                <li>Employed Python and leveraged OpenAI's GPT-3.5 Turbo, GPT-4, and other LLMs to develop the chatbot functionality</li>
                                <li>Utilized and explored the effectiveness of Retrieval-Augmented Generation (RAG) techniques to enhance the chatbot's ability to read and interpret kidney cancer research papers</li>
                                <li>Developed an interactive GUI using Gradio, JavaScript, and CSS</li>
                                <li className="skills">SKILLS: Python, Docker, Gradio, JavaScript, CSS</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <h3>IT Intern</h3>
                            <h4>Johnson Controls</h4>
                            <p className="date">May 2024 – PRESENT</p>
                            <ul className="description">
                                <li>Developed an automation solution for ServiceNow ticketing system using Power Automate</li>
                                <li>Researched and presented use cases for Microsoft Copilot to enhance productivity</li>
                                <li>Utilized Microsoft Power Apps to architect and develop a customized survey application</li>
                                <li>Created a Power BI dashboard to analyze Copilot usage data</li>
                                <li className="skills">SKILLS: Power Automate, Power Apps, Power BI, Copilot, Python</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <h3>Site Reliability Engineer Intern</h3>
                            <h4>Kohls</h4>
                            <p className="date">June 2025</p>
                            <ul className="description">
                                <li>TBD</li>
                            </ul>
                        </div>
                    </div>
                    {/* Right arrow */}
                    <button className="arrow right-arrow" onClick={scrollRight}>
                        &#8594;
                    </button>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Experience;
